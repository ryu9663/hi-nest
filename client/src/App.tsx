import { styled } from 'styled-components';
import { Get } from './components/Get';
import { Post } from './components/Post';

function App() {
  return (
    <Main>
      <Post />
      <Get />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
