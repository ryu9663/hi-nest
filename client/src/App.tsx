import { styled } from "styled-components";
import { Get } from "./components/Get";

function App() {
  return (
    <Main>
      <Get />
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
