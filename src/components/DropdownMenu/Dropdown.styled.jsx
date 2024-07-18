import styled from "@emotion/styled";

const DropdownMenuContainer = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  /* width: 400px; */
  padding: 20px;
  background-color: cornflowerblue;
`;
const DropdownButton = styled.button``;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background-color: teal;
  color: white;
`;

export { DropdownMenuContainer, DropdownButton, DropdownMenu };
