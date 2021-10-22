import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>
        <Field name="login" component="input" type="text" placeholder="login"/>
      </p>
      <p>
        <Field name="password" component="input" type="text" placeholder="password"/>
      </p>
      <p>
        <Field name="rememberMe" component="input" type="checkbox" id="rememberMe"/>
        <label htmlFor="rememberMe">remember me</label>
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  };

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
