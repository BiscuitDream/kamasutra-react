import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/CustomFields/CustomFields";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../common/CustomFields/CustomFields.module.css';
import React from "react";
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnPropsType = {
  captchaUrl: string | null,
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
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
      {captchaUrl &&
      <p>
        <img src={captchaUrl} alt="captcha" />
        <Field name="captcha"
               component={Input}
               type="text"
               placeholder="enter captcha"
               validate={[required]} />
      </p>}
      {error && <p className={styles.commonError}>{error}</p>}
      <p>
        <button type="submit">Login</button>
      </p>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm);

type MapStatePropsType = {
  isAuth: boolean,
  captchaUrl: string | null
};

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
};

type LoginFormValuesType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
};

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    console.log(formData);
    const {email, password, rememberMe, captcha} = formData;
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);
