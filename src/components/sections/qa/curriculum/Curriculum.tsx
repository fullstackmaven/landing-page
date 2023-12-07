import Accordion from '@components/Accordion';
import { useEffect, useRef } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';
import Content from './content/Content.tsx';
import Sidebar from './sidebar/Sidebar.tsx';

const sampleDescription = `This module explores different page layout techniques using flexbox, positioning elements, and grid layout. It also introduces BEM, Git, and debugging.`;
const sampleTopics = ['CSS3', 'Javascript', 'HTML5'];

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

  const headerFields = {
    headerTitle: 'CURRICULUM',
    title: 'Mastery-based learning with real world projects',
    description:
      "At Fullstack, we believe in learning at your own pace. No rush or pressure. Master topics step by step with hands-on projects. Got it? Move on. Need more time? No problem. We're here to help. Graduate with solid QA engineering skills for a successful career.",
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
    <section
      ref={containerRef}
      id='qacurriculum'
      className='container grid max-w-screen-desktop gap-y-4 tablet:gap-y-6'
    >
      <div className='grid gap-y-3'>
        <p className='text-xxs text-gray-700 tablet:text-xs laptop:text-s'>
          {headerFields.headerTitle}
        </p>
        <h1 className='text-l font-bold tracking-base text-black tablet:text-xl laptop:text-2xl'>
          {headerFields.title}
        </h1>
        <p className='text-s tracking-s text-gray-700 laptop:text-base'>
          {headerFields.description}
        </p>
      </div>
      <div className='grid gap-y-2 laptop:hidden'>
        {defaultCurriculum.map((curriculum, index) => (
          <div key={index} className='cursor-pointer'>
            <Accordion
              id={`accordion-${index}`}
              title={curriculum.title}
              subtitle={curriculum.subtitle}
            >
              <Content {...curriculum} />
            </Accordion>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-y-4 laptop:flex-col-reverse'>
        <div className='flex flex-col rounded-l border border-gray-300 p-4 tablet:p-6'>
          <div className='mb-3 grid grid-flow-col grid-rows-2 justify-between gap-y-3 tablet:grid-rows-1'>
            <span className='w-fit rounded-4xl bg-orange-900/[0.0825] px-2 py-1 text-xs text-orange-900 tablet:px-4 tablet:py-2 tablet:text-s'>
              Coaching
            </span>
            <span className='w-fit rounded-4xl bg-purple/[0.0825] px-2 py-1 text-xs text-purple tablet:px-4 tablet:py-2 tablet:text-s'>
              Workshops
            </span>
            <span className='w-fit rounded-4xl bg-green-300/[0.0825] px-2 py-1 text-xs text-green-300 tablet:px-4 tablet:py-2 tablet:text-s'>
              Interview prep
            </span>
            <span className='w-fit rounded-4xl bg-orange-800/[0.0825] px-2 py-1 text-xs text-orange-800 tablet:px-4 tablet:py-2 tablet:text-s'>
              Portfolio
            </span>
            <span className='w-fit rounded-4xl bg-green-300/[0.0825] px-2 py-1 text-xs text-green-300 tablet:px-4 tablet:py-2 tablet:text-s'>
              Networking
            </span>
            <span className='w-fit rounded-4xl bg-blue-200/[0.0825] px-2 py-1 text-xs text-blue-200 tablet:px-4 tablet:py-2 tablet:text-s'>
              Resume
            </span>
          </div>
          <p className='text-s tracking-s text-primary tablet:text-base tablet:tracking-base'>
            Fullstack is the only bootstrapped Bootcamp. We've grown organically
            with no funding and care passionately about every single one of our
            students.
          </p>
        </div>

        <div className='hidden laptop:block'>
          <Sidebar curriculum={defaultCurriculum} />
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
