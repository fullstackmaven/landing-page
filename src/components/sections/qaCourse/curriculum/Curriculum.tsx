import Accordion from '@components/Accordion';
import { useEffect, useRef } from 'react';
import type { TCurriculum } from 'src/types/Curriculum';
import Content from './content/Content.tsx';

const sampleDescription = `As well as meeting your QA classmates we've got a range of practical tasks and resources for you to be ready to nail the Bootcamp form day one. Ahead of kick-off you'll have completed Figma tasks and paired up with another member of your cohort to complete your case study in a design team.`;
const sampleTopics = [
  'Complete practical prep tasks like installing required softwares',
  'Connect with classmates around the world',
  'Form a design team to tackle the first case study of Bootcamp',
];

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
        <header className='mb-3 grid gap-y-3'>
          <p className='text-xxs text-gray-700 tablet:text-xs laptop:text-s'>
            CURRICULUM
          </p>
          <h1 className='text-l font-bold tracking-widest text-black tablet:text-xl laptop:text-2xl'>
            Mastery-based learning with real world projects
          </h1>
        </header>
        <p className='text-s tracking-wider text-gray-700 laptop:text-2xl'>
          At Cyram, we believe in learning at your own pace. No rush or
          pressure. Master topics step by step with hands-on projects. Got it?
          Move on. Need more time? No problem. We're here to help. Graduate with
          solid QA engineering skills for a successful career.
        </p>
        <p className='text-s tracking-wider text-gray-700'></p>
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

        <div className='flex flex-col justify-around rounded-l border border-gray-300 p-6'>
          <ul className='mb-3 flex flex-wrap justify-between gap-y-3'>
            <li className='w-fit rounded-4xl bg-orange-900/10 px-2 py-1'>
              <p className='text-xxs text-orange-900 tablet:text-s'>Coaching</p>
            </li>
            <li className='w-fit rounded-4xl bg-purple/10 px-2 py-1'>
              <p className='text-xxs text-purple tablet:text-s'>Workshops</p>
            </li>
            <li className='w-fit rounded-4xl bg-green-300/10 px-2 py-1'>
              <p className='text-xxs text-green-300 tablet:text-s'>
                Interview prep
              </p>
            </li>
            <li className='w-fit rounded-4xl bg-orange-800/10 px-2 py-1'>
              <p className='text-xxs text-orange-800 tablet:text-s'>
                Portfolio
              </p>
            </li>
            <li className='w-fit rounded-4xl bg-green-300/10 px-2 py-1'>
              <p className='text-xxs text-green-300 tablet:text-s'>
                Networking
              </p>
            </li>
            <li className='w-fit rounded-4xl bg-blue-200/10 px-2 py-1'>
              <p className='text-xxs text-blue-200 tablet:text-s'>Resume</p>
            </li>
          </ul>
          <p className='text-s tracking-wider text-primary tablet:text-base tablet:tracking-widest'>
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
