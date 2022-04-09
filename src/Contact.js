import "./Contact.css" ;
import { useState } from "react";
const Contact = (props) => {
  const [enteredfullname, SetEnteredfullname] = useState("");
  const [fullnameTouched, SetFullnameTouched] = useState(false);

  const [enteredphone, SetEnteredphone] = useState("");
  const [phoneTouched, SetPhoneTouched] = useState(false);

  const [enteredemail, SetEnteredemail] = useState("");
  const [emailTouched, SetEmailTouched] = useState(false);

  const [enteredmsg, SetEnteredmsg] = useState("");

  const enteredfullnameIsValid = enteredfullname.trim() !== "";
  const fullnameInputIsInValid = !enteredfullnameIsValid && fullnameTouched;

  const enteredphoneIsValid = enteredphone.trim() !== "";
  const phoneInputIsInValid = !enteredphoneIsValid && phoneTouched;

  const enteredemailIsValid = enteredemail.includes("@");
  const emailInputIsInValid = !enteredemailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredfullnameIsValid && enteredemailIsValid && enteredphoneIsValid) {
    formIsValid = true;
  }
  const fullnameInputChangeHandler = (event) => {
    SetEnteredfullname(event.target.value);
  };
  const fullnameBlurHandler = (event) => {
    SetFullnameTouched(true);
  };

  const phoneInputChangeHandler = (event) => {
    SetEnteredphone(event.target.value);
  };
  const phoneBlurHandler = (event) => {
    SetPhoneTouched(true);
  };
  const emailInputChangeHandler = (event) => {
    SetEnteredemail(event.target.value);
  };
  const emailBlurHandler = (event) => {
    SetEmailTouched(true);
  };
  const msgInputChangeHandler =(event) =>{
    SetEnteredmsg(event.target.value);
  }

  const formSubmit = (event) => {
    event.preventDefault();
  alert(`welcome`);
  SetFullnameTouched(true);

  if (!enteredfullnameIsValid) {
    return;
  }
  
  SetEnteredfullname("");
  SetFullnameTouched(false);

  SetEnteredphone("")
  SetPhoneTouched(false);

  SetEnteredemail("")
  SetEmailTouched(false);

  SetEnteredmsg("");

  }
  const nameinputclasses = fullnameInputIsInValid ? "form-control invalid" : "form-control";
  const phoneinputclasses = phoneInputIsInValid ? "form-control invalid" : "form-control";
  const emailinputclasses = emailInputIsInValid ? "form-control invalid" : "form-control";
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container container-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className={nameinputclasses}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  className="form-control form_border"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={enteredfullname}
                  onChange={fullnameInputChangeHandler}
                  onBlur={fullnameBlurHandler}
                  placeholder="Enter your name"
                />
                {
                  fullnameInputIsInValid && (<p className="text-error">Name must not be empty</p>
                  )}
              </div>
              <div className={phoneinputclasses}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  className="form-control form_border"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={enteredphone}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneBlurHandler}
                  placeholder="Enter your mobile number"
                />
                 {
                  phoneInputIsInValid && (<p className="text-error">please enter a valid phone number</p>
                  )}
              </div>
              <div className={emailinputclasses}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control form_border"
                  id="exampleFormControlInput1"
                  name="email"
                  value={enteredemail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailBlurHandler}
                  placeholder="name@example.com"
                />
                 {
                  emailInputIsInValid && (<p className="text-error">please enter a valid email</p>
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control form_border"
                  name="msg"
                  value={enteredmsg}
                  onChange={msgInputChangeHandler}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-auto">
                <button
                   disabled={!formIsValid}
                  type="submit"
                  className="btn btn-primary mb-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
