import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Formpage.css";

export const FormMain = () => {
  // State variables to track input values and email validity
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(5);
  const [isNameValid, setIsNameValid] = useState(true); // Track username validity
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle input changes for name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle input changes for email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Validate email format
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setIsEmailValid(isValid);
  };

  useEffect(() => {
    let intervalId;
    if (submitted) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [submitted]);

  useEffect(() => {
    if (count === 0) {
      navigate("/"); // Redirect to the home page
    }
  }, [count, navigate]);

  // Function to handle form submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      {/* form not submitted */}
      {!submitted ? (
        <div className="form-header">
          <div className="header-grp">
            <div className="left-content">
              <img
                className="header-img"
                src="images/Brunel.png"
                alt="brunel"
              />
            </div>
            <div className="button-grp">
              <Link to="/">
                <img className="close-btn" src="images/close.png" alt="close" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // form submitted
        <div className="form-header">
          <div className="header-grp">
            <div className="left-content">
              <img
                className="header-img"
                src="images/Brunel.png"
                alt="brunel"
              />
            </div>
          </div>
        </div>
      )}
      <div>
        {/* form not submitted */}
        {!submitted ? (
          <div>
            <label className="form-label-1">Registration Form</label>
            <label className="form-label-2">Start your success </label>
            <label className="form-label-2">Journey here!</label>
            <div className="form-label-grp">
              <div className="form-label-div">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder={name ? "" : "Enter your name"}
                />
                {/* Display error message if username is invalid */}
              </div>
              <div className="form-label-div-second">
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={email ? "" : "Enter your email"}
                />
                {/* Display error message if email format is invalid */}
               
              </div>
              {!isEmailValid && email ? (
                  <div className="error-message">
                    <div>
                      <span>
                        <img src="images/red-dot.png" alt="" />
                      </span>
                    </div>
                    <span className="error-label">
                      Enter a valid email address
                    </span>
                  </div>
                ) : null}
              {isNameValid && isEmailValid ? (
                <button
                  className="form-submit-btn-success"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button className="form-submit-btn" type="disabled">
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : (
          // form submitted
          <div>
            <div className="form-submitted-grp">
              <img
                className="form-submitted-tick"
                src="images/Tick.png"
                alt="tick"
              />
              <label className="form-submitted-label-1">
                Success Submitted
              </label>
              <label className="form-submitted-label-2">Congratulations </label>
              <div className="form-sub-label-grp">
                <label className="form-submit-sub-label">
                  Your request has been successfully submitted to us. We
                </label>
                <label className="form-submit-sub-label">
                  will validate your information and reach out to your
                </label>
                <label className="form-submit-sub-label">
                  shortly with updates
                </label>
                <label className="form-submit-redirect">
                  Redirecting you to Homepage in{" "}
                  <span className="form-submit-redirect-seconds">
                    {count} Seconds
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
