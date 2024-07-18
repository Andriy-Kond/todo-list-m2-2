import React, { Component } from "react";

class CounterAsyncLinkToElement extends Component {
  handleIncrement = evt => {
    // Раніше було так:
    // Посилання evt працює лише в синхронному коді:
    console.log("evt.target, evt.type :>> ", evt.target, evt.type);

    // Але в асинхронному коді evt очищується, бо React використовує глобальне делегування і цей evt перевикористовується для інших подій. Тому треба було вводити додаткову змінну для зберігання:
    const target = evt.target; // або деструктуризація: const {target} = evt

    setTimeout(() => {
      console.log("target :>> ", target);

      // Раніше це видавало помилку - прилітав Null, але зараз все працює і додаткову змінну вводити не треба:
      console.log("evt.target (async) :>> ", evt.target);
    }, 1000);
  };

  handleDecrement = evt => {
    console.log("evt.target :>> ", evt.target);
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <h3>CounterAsyncLinkToElement</h3>
        <span>0</span>
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
export default CounterAsyncLinkToElement;
