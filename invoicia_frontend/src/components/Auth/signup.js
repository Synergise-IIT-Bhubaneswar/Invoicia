import { Fragment } from "react";
import { Link, Prompt } from "react-router-dom";
import useInput from "./../../hooks/user-input";
import "./auth_styles.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.trim().length > 8 && !value.includes(" ");

const SignupForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    isTouched: firstNameIsTouched,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    isTouched: lastNmaeIsTouched,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
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

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  let formIsTouched =
    firstNameIsTouched ||
    passwordIsTouched ||
    lastNmaeIsTouched ||
    emailIsTouched;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      <Prompt
        when={formIsTouched}
        message={(loaction) =>
          "Your entered data will lose if you will leave this page"
        }
      />
      <form onSubmit={submitHandler} className="form">
        <div className="form-div">
          <div className="control-group">
            <div className={firstNameClasses}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className="error-text">Please enter a first name.</p>
              )}
            </div>
            <div className={lastNameClasses}>
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="name"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className="error-text">Please enter a last name.</p>
              )}
            </div>
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
          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </div>
        <h4 className="text-center">
          Already has an account <Link to="/login">Login</Link>
        </h4>
      </form>
    </Fragment>
  );
};

export default SignupForm;
