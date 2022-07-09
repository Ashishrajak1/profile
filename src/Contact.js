import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faGlobeAsia, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
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
  const msgInputChangeHandler = (event) => {
    SetEnteredmsg(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`welcome`);
    SetFullnameTouched(true);

    if (!enteredfullnameIsValid) {
      return;
    }

    SetEnteredfullname("");
    SetFullnameTouched(false);

    SetEnteredphone("");
    SetPhoneTouched(false);

    SetEnteredemail("");
    SetEmailTouched(false);

    SetEnteredmsg("");
  };
  const nameinputclasses = fullnameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  const phoneinputclasses = phoneInputIsInValid
    ? "form-control invalid"
    : "form-control";
  const emailinputclasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container-fluid main-contact">
        <div className="row justify-content-center">
          <div className="col-4 left-contact">
            <form onSubmit={formSubmit}>
              <div className={nameinputclasses}>
              <div className="main-input">
                <label
                  htmlFor=""
                  className="input-label"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  className="input"
                  name="fullname"
                  required="required"
                  value={enteredfullname}
                  onChange={fullnameInputChangeHandler}
                  onBlur={fullnameBlurHandler}
                  
                />
                {fullnameInputIsInValid && (
                  <p className="text-error">Name must not be empty</p>
                )}
              </div>
              </div>
              <div className={phoneinputclasses}>
              <div className="main-input">
                <label
                  htmlFor=""
                  className="input-label"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  className="input"
                  name="phone"
                  required="required"
                  value={enteredphone}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneBlurHandler}
      
                />
                {phoneInputIsInValid && (
                  <p className="text-error">
                    please enter a valid phone number
                  </p>
                )}
              </div>
              </div>
              <div className={phoneinputclasses}>
              <div className="main-input">
                <label
                  htmlFor=""
                  className="input-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  required="required"
                  value={enteredemail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailBlurHandler}
                
                />
                {emailInputIsInValid && (
                  <p className="text-error">please enter a valid email</p>
                )}
              </div>
              </div>
              <div className="main-input mb-3">
                <label
                  htmlFor=""
                  className="input-label"
                >
                  Text area
                </label>
                <textarea
                  className="input"
                  name="msg"
                  required="required"
                  value={enteredmsg}
                  onChange={msgInputChangeHandler}
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
          <div className="col-4 right-contact">
            <div><FontAwesomeIcon icon={faLocationDot} /> Address: </div>
            <div><FontAwesomeIcon icon={faPhone}/> Phone:+91-7987057932 </div>
            <div><FontAwesomeIcon icon={faPaperPlane} /> Email:ashishrajak5005@gmail.com </div>
            <div> <FontAwesomeIcon icon={faGlobeAsia}/> Website:you tube </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
