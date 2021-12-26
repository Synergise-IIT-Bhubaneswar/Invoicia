import { Fragment, useContext } from "react";
import { Link, Prompt, useHistory } from "react-router-dom";


import AuthContext from "../../contexts/authContext";
import useInput from "./../../hooks/user-input";
import "./auth_styles.css";

const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.trim().length > 8 && !value.includes(" ");

const LoginForm = (props) => {
  const history = useHistory();

  const AuthCtx = useContext(AuthContext);
  const {
    value: emailValue,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    isTouched: passwordIsTouched,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);
  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  let formIsTouched = passwordIsTouched || emailIsTouched || false;

  const submitHandler = (event) => {
    event.preventDefault();

    history.push("/all_invoices");

    if (!formIsValid) {
      return;
    }
    AuthCtx.onLogin();
    resetEmail();
    resetPassword();
  };
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      <Prompt
        when={formIsTouched}
        message="Your entered data will lose if you will leave this page"
      />
      <form onSubmit={submitHandler} className="form">
        <div className="form-div">
          <div className={emailClasses}>
            <label htmlFor="name">E-Mail Address</label>
            <input
              type="text"
              id="name"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>

          <div className={passwordClasses}>
            <label htmlFor="name">Password</label>
            <input
              type="password"
              id="name"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="error-text">
                Please enter a valid password(atleast 8 character).
              </p>
            )}
          </div>

          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </div>
        <h4 className="text-center">
          Don't have account <Link to="/signup">Signup</Link>
        </h4>
      </form>
    </Fragment>
  );
};

export default LoginForm;
