import { Component } from "react";
import {
  ColorButton,
  ColorContainer,
  ButtonsContainer,
} from "components/ColorPicker/ColorPicker.styled";

import getInvertHexColor from "js/getInvertHexColor";

class ColorPicker extends Component {
  state = { activeIndex: null };

  handleClick = index => {
    // this.setState({ activeIndex: index });

    // if (index !== this.state.activeIndex) {
    //   this.setState({ activeIndex: index });
    // } else {
    //   this.setState({ activeIndex: null });
    // }

    // index !== this.state.activeIndex
    //   ? this.setState({ activeIndex: index })
    //   : this.setState({ activeIndex: null });

    this.setState({
      activeIndex: index !== this.state.activeIndex ? index : null,
    });
  };

  render() {
    const { activeIndex } = this.state;
    const { colors } = this.props;
    const activeColor = activeIndex ? colors[activeIndex].hex : "жоден";

    return (
      <ColorContainer>
        <p style={{ lineHeight: 1.3, fontWeight: 900 }}>Color picker</p>

        <p>Обраний колір: {activeColor}</p>

        <ButtonsContainer>
          {colors.map(({ hex }, index) => {
            const invertColor = getInvertHexColor(hex);
            const isActive = activeIndex === index;

            return (
              <ColorButton
                type="button"
                onClick={() => this.handleClick(index)}
                isActive={isActive}
                key={hex}
                hexColor={hex}
                invertColor={invertColor}>
                color: {hex}
              </ColorButton>
            );
          })}
        </ButtonsContainer>
      </ColorContainer>
    );
  }
}

// const ColorPicker = ({ colors }) => {
//   return (
//     <ColorContainer>
//       <p>Color picker</p>
//       <ButtonsContainer>
//         {colors.map(({ hex }) => {
//           const invertColor = getInvertRandomHexColor(hex);
//           return (
//             <ColorButton
//               key={hex}
//               type="button"
//               hexColor={hex}
//               invertColor={invertColor}
//               style={{ backgroundColor: hex }}>
//               {hex}
//             </ColorButton>
//           );
//         })}
//       </ButtonsContainer>
//     </ColorContainer>
//   );
// };

export default ColorPicker;
