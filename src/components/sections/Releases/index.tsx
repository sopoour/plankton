import { FC, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useSWR from 'swr';
import { fetcher } from '@app/hooks/fetch/useFetch';
import useKeyPress from '@app/hooks/useKeyPress';
import Button from '@app/components/Button';
import { Carousel, NavButton, ProjectSection } from './styles';
import ReleaseCard from './elements/ReleaseCard';
import { Release } from '@app/services/graphql/types';
import SectionHeader from '@app/components/SectionHeader';

const Releases: FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const { data } = useSWR<Release[]>('/api/releases', fetcher);
  const handleNext = () => data && setActiveCard((prevIndex) => (prevIndex + 1) % data.length);
  const handlePrev = () =>
    data && setActiveCard((prevIndex) => (prevIndex - 1 + data.length) % data.length);

  const arrowRightPressed = useKeyPress('ArrowRight');
  const arrowLeftPressed = useKeyPress('ArrowLeft');

  useEffect(() => {
    if (arrowLeftPressed) handlePrev();
    if (arrowRightPressed) handleNext();
  }, [arrowLeftPressed, arrowRightPressed]);

  return (
    <ProjectSection id="releases" $maxWidth={0}>
      <>
        <SectionHeader>&#47;&#47; releases</SectionHeader>
        <Carousel className={'animate-scale'} aria-label="carousel">
          <NavButton $side="left" onClick={handlePrev} tabIndex={0}>
            <IoIosArrowBack focusable="false" aria-hidden="true" />
            <span className="sr-only">Left Navigation</span>
          </NavButton>
          <NavButton $side="right" onClick={handleNext} tabIndex={0}>
            <IoIosArrowForward focusable="false" aria-hidden="true" />
            <span className="sr-only">Right Navigation</span>
          </NavButton>
          {data &&
            data?.map((project, index) => (
              <ReleaseCard
                release={project}
                key={project.title}
                activeIndex={activeCard}
                projectIndex={index}
              />
            ))}
        </Carousel>
      </>
    </ProjectSection>
  );
};

export default Releases;
