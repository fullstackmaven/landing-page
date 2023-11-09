import Accordion from '@components/Accordion';
import { useEffect, useRef, useState } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';
import BookCall from './bookCall/BookCall.tsx';
import Content from './content/Content.tsx';
import Sidebar from './sidebar/Sidebar.tsx';

const sampleDescription = `This module explores different page layout techniques using flexbox, positioning elements, and grid layout. It also introduces BEM, Git, and debugging. This module explores different page layout techniques using flexbox, positioning elements, and grid layout. It also introduces BEM, Git.`;
const sampleTopics = ['HTML', 'CSS', 'Javascript'];

const defaultCurriculum: TCurriculum[] = [
  {
    title: 'Testing Fundamentals',
    subtitle: 'Module 1',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Core Java Programming',
    subtitle: 'Module 2',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Test Automation',
    subtitle: 'Module 3',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'API Automation',
    subtitle: 'Module 4',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Portfolio Projects',
    subtitle: 'Module 5',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Prepare for interviews',
    subtitle: 'Module 6',
    description: sampleDescription,
    topics: sampleTopics,
  },
];

const BOOK_CALL_HEIGHT = 96;
const Curriculum = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bookCallRef = useRef<HTMLDivElement>(null);
  const [showBookCall, setShowBookCall] = useState(false);

  const handleScroll = () => {
    const pageHeight = containerRef?.current?.clientHeight || 0;
    const bottomHeight =
      containerRef?.current?.getBoundingClientRect().bottom || 0;

    const threshold = window.scrollY + bottomHeight - pageHeight - 170;

    if (window.scrollY >= threshold) {
      setShowBookCall(true);
      const translateY =
        Math.floor(threshold + BOOK_CALL_HEIGHT - window.scrollY) < 0
          ? 0
          : Math.floor(threshold + BOOK_CALL_HEIGHT - window.scrollY);

      if (
        bookCallRef.current &&
        translateY <= BOOK_CALL_HEIGHT &&
        translateY >= 0
      ) {
        bookCallRef.current.style.transform = `translate3d(0,${translateY}px,0)`;
      }
    } else {
      setShowBookCall(false);
    }
  };
  useEffect(() => {
    handleScroll();

    // Add a scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section
        ref={containerRef}
        id='qa-curriculum'
        className='wrapper grid gap-y-4 lg:gap-y-6'
      >
        <p className='text-xs font-normal uppercase leading-5 text-dark-gray lg:text-s lg:leading-6'>
          CURRICULUM
        </p>
        <h1 className='text-l font-bold leading-8 text-dark md:text-xl md:leading-2xl lg:text-2xl lg:leading-3xl'>
          Mastery-based learning with real world projects
        </h1>
        <p className='text-s font-normal leading-6 text-dark-gray lg:text-base lg:leading-7'>
          In our QA bootcamp, we take a hands-on approach to mastery-based
          learning. We don't just focus on theory like traditional QA courses.
          Instead, you'll dive into the latest tools, industry workflows, and
          best practices. This way, you'll become proficient in the skills
          needed by today's QA professionals.
        </p>
        <ul className='grid gap-y-2 lg:hidden'>
          {defaultCurriculum.map((curriculum, index) => (
            <li key={index}>
              <Accordion
                id={`accordion-${index}`}
                title={curriculum.title}
                subtitle={curriculum.subtitle}
              >
                <Content {...curriculum} />
              </Accordion>
            </li>
          ))}
        </ul>

        <div className='hidden lg:block'>
          <Sidebar curriculum={defaultCurriculum} />
        </div>
      </section>
      {showBookCall && (
        <BookCall
          ref={bookCallRef}
          className='lg:hidden'
          style={{
            willChange: 'trasform',
            transform: 'translate3d(0,96px,0)',
            transformStyle: 'preserve-3d',
          }}
        />
      )}
    </>
  );
};

export default Curriculum;
