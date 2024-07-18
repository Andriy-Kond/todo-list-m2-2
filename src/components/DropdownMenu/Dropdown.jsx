import React, { Component } from "react";
import {
  DropdownMenuContainer,
  DropdownButton,
  DropdownMenu,
} from "components/DropdownMenu/Dropdown.styled";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  onShowMenu = () => {
    this.setState({ visible: true });
  };

  onHideMenu = () => {
    this.setState({ visible: false });
  };

  toggleMenu() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  // Варіант виклику працює лише якщо функція - стрілка через те, що стрілка успадковує this у місці створення:
  toggleMenuDirectlyArrow = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  // Звичайна функція не спрацьовує: Cannot read properties of undefined (reading 'setState'). Бо звичайна функція має власний контекст (this).
  toggleMenuDirectlyNotArrow() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }
  // Щоб спрацювала не стрілка, то треба прив'язувати до неї контекст в конструкторі:
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: false,
  //   };
  //   this.toggleMenuDirectlyNotArrow =
  //     this.toggleMenuDirectlyNotArrow.bind(this);
  // }

  onToggleMenu = () => () => this.toggleMenu();

  render() {
    const { visible } = this.state;

    return (
      <DropdownMenuContainer>
        {/* Варіант працює лише якщо функція - стрілка */}
        <DropdownButton
          type="button"
          onClick={this.toggleMenuDirectlyArrow}
          onMouseOver={e => console.log("mouse hover", e)}>
          {visible ? "Cховати" : "Показати"} toggle directly
        </DropdownButton>

        {/* Цей варіант не працює: Cannot read properties of undefined (reading 'setState')*/}
        <DropdownButton
          type="button"
          onClick={this.toggleMenuDirectlyNotArrow}
          onMouseEnter={e => console.log("mouse enter", e)}>
          {visible ? "Cховати" : "Показати"} toggle directly Not Arrow Fn
        </DropdownButton>

        <DropdownButton
          type="button"
          onClick={() => {
            this.toggleMenu();
          }}>
          {visible ? "Cховати" : "Показати"} toggle inline
        </DropdownButton>

        <DropdownButton type="button" onClick={this.onToggleMenu()}>
          {visible ? "Cховати" : "Показати"} toggle
        </DropdownButton>

        {/* Окремі кнопки: */}
        <DropdownButton type="button" onClick={this.onShowMenu}>
          Показати
        </DropdownButton>

        <DropdownButton type="button" onClick={this.onHideMenu}>
          Сховати
        </DropdownButton>

        {visible && <DropdownMenu>Спадаюче меню</DropdownMenu>}
      </DropdownMenuContainer>
    );
  }
}

export default Dropdown;
