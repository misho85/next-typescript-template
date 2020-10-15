import { NextPage } from 'next';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div>
      <p>hello</p>
      <Title>Next Typescript</Title>
    </div>
  );
};

export default Home;
