import "./App.css";
import "./reset.css";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid ${(props) => props.borderColor};
`;

const colorList = ["red", "blue", "yellow"];
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "red box";
    case "blue":
      return "blue box";
    case "yellow":
      return "yellow box";
    default:
      return "black box";
  }
};

function App() {
  return (
    <StContainer>
      {colorList.map((color) => (
        <StBox borderColor={color}>{getBoxName(color)}</StBox>
      ))}
      <p>안녕!</p>
    </StContainer>
  );
}

export default App;
