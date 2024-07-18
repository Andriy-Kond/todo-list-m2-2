import styled from "@emotion/styled";

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1px;
  border: 1px solid black;
  width: 400px;
  padding: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const ColorButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 2px;

  background-color: ${props => props.hexColor};
  color: ${props => props.invertColor};

  font-size: 8px;
  cursor: pointer;

  transition: transform 250ms linear;
  transform: ${({ isActive }) => (isActive ? "scale(1.2)" : "scale(1)")};
`;

export { ColorButton, ColorContainer, ButtonsContainer };
