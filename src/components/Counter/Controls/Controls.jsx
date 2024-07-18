export function Controls({ step, onIncrement, onDecrement }) {
  return (
    <>
      <button type="button" onClick={onIncrement}>
        Increment by onIncrement {step}
      </button>

      <button type="button" onClick={onDecrement}>
        Decrement by onDecrement {step}
      </button>
    </>
  );
}
