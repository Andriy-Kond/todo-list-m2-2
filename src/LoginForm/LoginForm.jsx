// * use Formic
// const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Login
//         <input type="text" name="login" />
//       </label>

//       <label>
//         Password
//         <input type="password" name="password" autoComplete="new-password" />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LoginForm;

import { Formik, Form, Field } from "formik";
import { Input } from "./LoginForm.styled";

const initialValues = { login: "", password: "", color: "" };

const handleSubmit = (values, actions) => {
  console.log("handleSubmit >> actions:::", actions);
  console.log("handleSubmit >> values:::", values);

  actions.resetForm();
};

const LoginForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Login
          <Input type="text" name="login" placeholder="Enter your login here" />
        </label>

        <label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter your password here"
            autoComplete="new-password"
          />
        </label>

        <Input as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Input>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
