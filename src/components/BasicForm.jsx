import useCustom from "../hooks/use-custom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirst,
    hasError: firstIsInvalid,
    inputIsValid: enteredFirstIsValid,
    changeHandler: firstChangeHandler,
    blurHandler: firstBlurHandler,
    reset: resetFirst,
  } = useCustom(isNotEmpty);

  const {
    value: enteredLast,
    hasError: lastIsInvalid,
    inputIsValid: enteredLastIsValid,
    changeHandler: lastChangeHandler,
    blurHandler: lastBlurHandler,
    reset: resetLast,
  } = useCustom(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    inputIsValid: enteredEmailIsValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useCustom(isEmail);

  // Form is submit or not disable property
  let formIsValid = false;
  if (enteredEmailIsValid && enteredLastIsValid && enteredFirstIsValid) {
    formIsValid = true;
  }

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("SUBMITTED");
    console.log(enteredFirst);
    console.log(enteredLast);
    console.log(enteredEmail);

    resetFirst();
    resetLast();
    resetEmail();
  };

  // Change CSS
  const emailClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const lastClasses = lastIsInvalid ? "form-control invalid" : "form-control ";

  const firstClasses = firstIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirst}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
          {firstIsInvalid && (
            <p className="error-text">Please Enter First Name</p>
          )}
        </div>

        <div className={lastClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLast}
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
          />
          {lastIsInvalid && (
            <p className="error-text">Please Enter Last Name</p>
          )}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Please Enter Valid Email Address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
