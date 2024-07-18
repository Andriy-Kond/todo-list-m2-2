import React, { Component } from "react";
import { Controls } from "components/Counter/Controls/Controls";

class CounterStateDefProps extends Component {
  // Значення за замовчуванням, якщо не переданий props.step:
  static defaultProps = {
    step: 1,
  };

  // Так само, якщо треба для інших даних, наприклад prop types:
  static propTypes = {
    // ...
  };

  // передача початкового значення для value:
  state = {
    value: this.props.step,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + this.props.step }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - this.props.step }));
  };

  render() {
    const { step } = this.props; // якщо не переданий, то буде === 1
    const { value } = this.state;
    return (
      <div>
        <h3>CounterStateDefProps</h3>

        <span>{value}</span>

        {/* <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button> */}

        {/* Виношу розмітку двох кнопок у додатковий компонент: */}
        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default CounterStateDefProps;
