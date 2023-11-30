import Accordion from '@components/Accordion';
import { useEffect, useRef } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';
import Content from './content/Content.tsx';

const sampleDescription = `This module explores different page layout techniques using flexbox, positioning elements, and grid layout. It also introduces BEM, Git, and debugging. This module explores different page layout techniques using flexbox, positioning elements, and grid layout. It also introduces BEM, Git.`;
const sampleTopics = ['HTML', 'CSS', 'Javascript'];

const defaultCurriculum: TCurriculum[] = [
  {
    title: 'Prep work & Pairing',
    subtitle: 'Module 1',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Intro to SDLC & Testing',
    subtitle: 'Module 2',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Testing Fundamentals',
    subtitle: 'Module 3',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Core Java Foundations',
    subtitle: 'Module 4',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'WebDriver',
    subtitle: 'Module 5',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'TestNG & JUnit Libraries',
    subtitle: 'Module 6',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Intermediate Java',
    subtitle: 'Module 7',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'BDD Automation Framework',
    subtitle: 'Module 8',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'SQL - Database',
    subtitle: 'Module 9',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Backend API  Testing',
    subtitle: 'Module 10',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'CICD Workflow',
    subtitle: 'Module 11',
    description: sampleDescription,
    topics: sampleTopics,
  },
  {
    title: 'Career Prep',
    subtitle: 'Module 12',
    description: sampleDescription,
    topics: sampleTopics,
  },
];

const BOOK_CALL_HEIGHT = 96;
const Curriculum = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bookCallRef = useRef<HTMLDivElement>(null);
  // const [showBookCall, setShowBookCall] = useState(false);

  const handleScroll = () => {
    const pageHeight = containerRef?.current?.clientHeight || 0;
    const bottomHeight =
      containerRef?.current?.getBoundingClientRect().bottom || 0;

    const threshold = window.scrollY + bottomHeight - pageHeight - 170;

    if (window.scrollY >= threshold) {
      // setShowBookCall(true);
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
      // setShowBookCall(false);
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
        id='qacurriculum'
        className='container grid max-w-screen-desktop gap-y-4'
      >
        <header className='grid gap-y-3'>
          <p className='text-xxs text-gray-700'>CURRICULUM</p>
          <h1 className='text-l font-bold tracking-widest text-black'>
            Mastery-based learning with real world projects
          </h1>
        </header>
        <p className='text-s tracking-wider text-gray-700'>
          At Cyram, we believe in learning at your own pace. No rush or
          pressure. Master topics step by step with hands-on projects. Got it?
          Move on. Need more time? No problem. We're here to help. Graduate with
          solid QA engineering skills for a successful career.
        </p>
        <ul className='grid gap-y-2 laptop:hidden'>
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

        <div className='flex flex-wrap justify-between gap-3 rounded-l border border-gray-300 p-4'>
          <div className='w-fit rounded-4xl bg-orange-900/10 px-2 py-1'>
            <p className='text-xs text-orange-900'>Coaching</p>
          </div>
          <div className='w-fit rounded-4xl bg-purple/10 px-2 py-1'>
            <p className='text-xs text-purple'>Workshops</p>
          </div>
          <div className='w-fit rounded-4xl bg-green-300/10 px-2 py-1'>
            <p className='text-xs text-green-300'>Interview prep</p>
          </div>
          <div className='w-fit rounded-4xl bg-orange-800/10 px-2 py-1'>
            <p className='text-xs text-orange-800'>Portfolio</p>
          </div>
          <div className='w-fit rounded-4xl bg-green-300/10 px-2 py-1'>
            <p className='text-xs text-green-300'>Networking</p>
          </div>
          <div className='w-fit rounded-4xl bg-blue-200/10 px-2 py-1'>
            <p className='text-xs text-blue-200'>Resume</p>
          </div>
          <p className='text-s tracking-wider text-primary'>
            Cyram is the only bootstrapped Bootcamp. We've grown organically
            with no funding and care passionately about every single one of our
            students.
          </p>
        </div>

        {/* <div className='hidden laptop:block'>
          <Sidebar curriculum={defaultCurriculum} />
        </div> */}
      </section>
      {/* {showBookCall && (
        <BookCall
          ref={bookCallRef}
          className='laptop:hidden'
          style={{
            willChange: 'trasform',
            transform: 'translate3d(0,96px,0)',
            transformStyle: 'preserve-3d',
          }}
        />
      )} */}
    </>
  );
};

export default Curriculum;
