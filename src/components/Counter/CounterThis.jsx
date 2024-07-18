import React, { Component } from "react";

class CounterThis extends Component {
  // В звичайному методі класу неможливо достукатись до this при onClick, тому використовують публічну властивість, в яку передають стрілку:
  handleIncrementWithoutThis() {
    console.log("this :>> ", this); // this :>>  undefined
  }

  // в такій реалізації контекст при спрацюванні onClick автоматично буде прив'язаний:
  handleIncrement = evt => {
    console.log("Increment button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
    console.log("this :>> ", this);
  };

  handleDecrement = evt => {
    console.log("Decrement button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
    console.log("this :>> ", this);
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <h3>CounterThis</h3>
        <span>0</span>

        <button type="button" onClick={this.handleIncrementWithoutThis}>
          Increment by {step} handleIncrementWithoutThis
        </button>

        <button type="button" onClick={this.handleIncrement}>
          Increment by {step} через виклик по посиланню
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step} через виклик по посиланню
        </button>

        <button
          type="button"
          onClick={evt => {
            console.log("Decrement button was clicked!", evt); // працює
            console.log("this.props: ", this.props); // працює
            console.log("this :>> ", this);
          }}>
          Decrement by {step} через інлайн до this можна достукатись, але інлайн
          забирає багато рядків коду - знижується читабельність
        </button>
      </div>
    );
  }
}

export default CounterThis;
