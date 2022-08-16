import "./Contact.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faGlobeAsia,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-reveal";
const Contact = (props) => {
  //   const [enteredfullname, SetEnteredfullname] = useState("");
  //   const [fullnameTouched, SetFullnameTouched] = useState(false);

  //   const [enteredphone, SetEnteredphone] = useState("");
  //   const [phoneTouched, SetPhoneTouched] = useState(false);

  //   const [enteredemail, SetEnteredemail] = useState("");
  //   const [emailTouched, SetEmailTouched] = useState(false);

  //   const [enteredmsg, SetEnteredmsg] = useState("");

  //   const enteredfullnameIsValid = enteredfullname.trim() !== "";
  //   const fullnameInputIsInValid = !enteredfullnameIsValid && fullnameTouched;

  //   const enteredphoneIsValid = enteredphone.trim() !== "";
  //   const phoneInputIsInValid = !enteredphoneIsValid && phoneTouched;

  //   const enteredemailIsValid = enteredemail.includes("@");
  //   const emailInputIsInValid = !enteredemailIsValid && emailTouched;

  //   let formIsValid = false;

  //   if (enteredfullnameIsValid && enteredemailIsValid && enteredphoneIsValid) {
  //     formIsValid = true;
  //   }
  //   const fullnameInputChangeHandler = (event) => {
  //     SetEnteredfullname(event.target.value);
  //   };
  //   const fullnameBlurHandler = (event) => {
  //     SetFullnameTouched(true);
  //   };

  //   const phoneInputChangeHandler = (event) => {
  //     SetEnteredphone(event.target.value);
  //   };
  //   const phoneBlurHandler = (event) => {
  //     SetPhoneTouched(true);
  //   };
  //   const emailInputChangeHandler = (event) => {
  //     SetEnteredemail(event.target.value);
  //   };
  //   const emailBlurHandler = (event) => {
  //     SetEmailTouched(true);
  //   };
  //   const msgInputChangeHandler = (event) => {
  //     SetEnteredmsg(event.target.value);
  //   };

  //   const formSubmit = (event) => {
  //     event.preventDefault();
  //     alert(`welcome`);
  //     SetFullnameTouched(true);

  //     if (!enteredfullnameIsValid) {
  //       return;
  //     }

  //     SetEnteredfullname("");
  //     SetFullnameTouched(false);

  //     SetEnteredphone("");
  //     SetPhoneTouched(false);

  //     SetEnteredemail("");
  //     SetEmailTouched(false);

  //     SetEnteredmsg("");
  //   };
  //   const nameinputclasses = fullnameInputIsInValid
  //     ? "form-control invalid"
  //     : "form-control";
  //   const phoneinputclasses = phoneInputIsInValid
  //     ? "form-control invalid"
  //     : "form-control";
  //   const emailinputclasses = emailInputIsInValid
  //     ? "form-control invalid"
  //     : "form-control";

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container-fluid">
        <Slide bottom>
          <div className="row justify-content-center main-contact">
            <div className="col-4 left-contact">
              <form>
                {/* onSubmit={formSubmit} */}
                {/* <div className={nameinputclasses}> */}
                <div className="main-input">
                  <input
                    type="text"
                    className="inputtext"
                    name="fullname"
                    required="required"
                    // value={enteredfullname}
                    // onChange={fullnameInputChangeHandler}
                    // onBlur={fullnameBlurHandler}
                  />
                  <label htmlFor="" className="input-label">
                    Fullname
                  </label>
                  {/* {fullnameInputIsInValid && (
                  <p className="text-error">Name must not be empty</p>
                )} */}
                </div>
                {/* </div> */}
                {/* <div className={phoneinputclasses}> */}
                <div className="main-input">
                  <input
                    type="number"
                    className="inputtext"
                    name="phone"
                    required="required"
                    // value={enteredphone}
                    // onChange={phoneInputChangeHandler}
                    // onBlur={phoneBlurHandler}
                  />
                  <label htmlFor="" className="input-label">
                    Phone number
                  </label>
                  {/* {phoneInputIsInValid && (
                  <p className="text-error">
                    please enter a valid phone number
                  </p>
                )} */}
                </div>
                {/* </div> */}
                {/* <div className={emailinputclasses}> */}
                <div className="main-input">
                  <input
                    type="email"
                    className="inputtext"
                    name="email"
                    required="required"
                    // value={enteredemail}
                    // onChange={emailInputChangeHandler}
                    // onBlur={emailBlurHandler}
                  />
                  <label htmlFor="" className="input-label">
                    Email address
                  </label>
                  {/* {emailInputIsInValid && (
                  <p className="text-error">please enter a valid email</p>
                )} */}
                </div>
                {/* </div> */}
                <div className="main-input">
                  <textarea
                    className="inputtext"
                    name="msg"
                    required="required"
                    // value={enteredmsg}
                    // onChange={msgInputChangeHandler}
                    rows="3"
                  ></textarea>
                  <label htmlFor="" className="input-label">
                    Text area
                  </label>
                </div>

                <button
                  // disabled={!formIsValid}
                  type="submit"
                  className="contact-btn"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="col-4 right-contact">
              <div className="dccd">
                <div className="right_detail">
                  <div className="icon_bg_c">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  Address:
                  <span>Mangawan rewa (M.P.)</span>
                </div>
                <div className="right_detail">
                  <div className="icon_bg_c">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  Phone:
                  <span>+91-7987057932</span>
                </div>
                <div className="right_detail">
                  <div className="icon_bg_c">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                  Email:<span>ashishrajak5005@gmail.com</span>
                </div>
                <div className="right_detail">
                  <div className="icon_bg_c">
                    <FontAwesomeIcon icon={faGlobeAsia} />
                  </div>
                  Website:
                  <span>ashishrajak.me</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default Contact;
