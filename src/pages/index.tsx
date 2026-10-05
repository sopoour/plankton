import MaxWidthContainer from '@app/components/MaxWidthContainer';
import About from '@app/components/sections/About';
import Hero from '@app/components/sections/Hero';
import Typography from '@app/components/Typography/Typography';
import { NextPage } from 'next';
import styled from 'styled-components';

const Root = styled.span`
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DetailContainer = styled.div`
  padding: 0 20px;
`;

const Home: NextPage = () => {
  return (
    <Root>
      <Hero />
      <About />
    </Root>
  );
};

export default Home;
