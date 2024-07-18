import React, { Component } from "react";

class CounterStateUpd extends Component {
  // // OldSchool:
  // constructor() {
  //   super(); // виклик React.Component

  //   // Мала бути назва саме state і далі об'єкт:
  //   this.state = {
  //     // В цьому об'єкті мають бути лише значення. Жодних методів.
  //     value: 20, // після цього значення value можна використовувати в будь-якому місці розмітки (у render(){...}) через звертання this.state.value
  //   };
  // }

  // newSchool -> Babel перетворює ось це в OldSchool:
  // state = { value: 25, a: 5, b: 10 };

  // передача початкового значення для value:
  state = { value: this.props.step };

  handleIncrement = () => {
    const { value } = this.state;
    // upd state
    // якщо не треба використовувати попереднє значення state використовується передача об'єктної форми.
    this.setState({ value: 30 }, () => {});
    // Функція callback викликається лише після того як стан буде змінено (зазвичай не використовується)

    // Якщо треба поміняти стейт спираючись на попередній стан, то не можна робити так:
    this.setState({ value: value + 1 }, () => {});
    // тому що якщо повторити, повтори не спрацюють, бо це буде стан на момент реєстрації:
    this.setState({ value: value + 1 }, () => {}); // не спрацює
    this.setState({ value: value + 1 }, () => {}); // не спрацює
    // Хоча, якщо зробити +=1 воно спрацює, але це не правильно - навіть VS Code каже про це.
  };

  handleDecrement = () => {
    // Тому якщо треба оновити з урахуванням попереднього стану, то треба передавати не об'єкт, а функцію. React передасть в неї у якості параметрів посилання на актуальний стан (prevState):
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
    // Тепер якщо повторити, то спрацює:
    this.setState(prevState => ({ value: prevState.value - 1 })); // відніме ще  1
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <h3>CounterStateUpd</h3>
        <span>{value}</span>

        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default CounterStateUpd;
