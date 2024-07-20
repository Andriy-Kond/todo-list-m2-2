// * Заміна контрольованої форми:
const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements.login.value);
    const { login, password } = e.target.elements;
    // console.log(login.value, password.value);

    const elements = [...e.target.elements];
    const filteredElements = elements.filter(
      element => element.nodeName === "INPUT",
    );

    const values = filteredElements.map(element => element.value);
    console.log("handleSubmit >> values:::", values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login
        <input type="text" name="login" />
      </label>

      <label>
        Password
        <input type="password" name="password" autoComplete="new-password" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
