import {Field, reduxForm} from "redux-form";
import {Input} from "../common/CustomFields/CustomFields";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/CustomFields/CustomFields.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>
        <Field name="email"
               component={Input}
               type="text"
               placeholder="Email"
               validate={[required]} />
      </p>
      <p>
        <Field name="password"
               component={Input}
               type="password"
               placeholder="Password"
               validate={[required]} />
      </p>
      <p>
        <Field name="rememberMe" component={Input} type="checkbox" id="rememberMe"/>
        <label htmlFor="rememberMe">remember me</label>
      </p>
      {props.error && <p className={styles.commonError}>{props.error}</p>}
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
