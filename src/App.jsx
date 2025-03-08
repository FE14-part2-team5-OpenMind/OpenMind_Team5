import styled from "styled-components";
import "./reset.css";
const Test = styled.div`
  font-size: var(--caption1-medium);
  color: var(--yellow50);
`;
function App() {
  return (
    <>
      <Test>테스트</Test>
    </>
  );
}

export default App;
