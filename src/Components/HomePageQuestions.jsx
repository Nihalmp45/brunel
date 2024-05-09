import React, { useState } from "react";

const HomePageQuestions = () => {
  const [dropDownFirst, setDropdownFirst] = useState(true);
  const [dropDownSecond, setDropdownSecond] = useState(false);
  const [dropDownThird, setDropdownThird] = useState(false);

  const handleChangeFirst = () => {
    setDropdownFirst(!dropDownFirst);
  };
  const handleChangeSecond = () => {
    setDropdownSecond(!dropDownSecond);
  };
  const handleChangeThird = () => {
    setDropdownThird(!dropDownThird);
  };

  return (
    <>
      <div className="main-page-questions">
        <div className="main-page-questions-label-group">
          <label className="main-page-questions-label-1">
            What’s on your mind
          </label>
          <label className="main-page-questions-label-2">Ask Questions</label>

          <img className="big-arrow" src="images/big-arrow.png" alt="" />
        </div>
        <div className="main-page-right-container">
          <div className="main-page-container">
            <div className="main-page-dropdown-containers">
              <label className="dropdown-question">
                Do you offer freelancers?
              </label>
              {dropDownFirst ? (
                <img
                  className="dropdown-control"
                  src="images/plus.png"
                  alt=""
                  onClick={handleChangeFirst}
                />
              ) : (
                <img
                  className="dropdown-control"
                  src="images/minus.png"
                  alt=""
                  onClick={handleChangeFirst}
                />
              )}
            </div>
            {dropDownFirst ? (
              <label className="dropdown-label">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </label>
            ) : (
              ""
            )}
            <div className="border-bottom"></div>
          </div>
          <div className="main-page-container">
            <div className="main-page-dropdown-containers">
              <label className="dropdown-question">
                What’s the guarantee that I will be satisfied with the hired
                talent?
              </label>
              {dropDownSecond ? (
                <img
                  className="dropdown-control"
                  src="images/plus.png"
                  alt=""
                  onClick={handleChangeSecond}
                />
              ) : (
                <img
                  className="dropdown-control"
                  src="images/minus.png"
                  alt=""
                  onClick={handleChangeSecond}
                />
              )}
            </div>
            {dropDownSecond ? (
              <label className="dropdown-label">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </label>
            ) : (
              ""
            )}
            <div className="border-bottom"></div>
          </div>
          <div className="main-page-container">
            <div className="main-page-dropdown-containers">
              <label className="dropdown-question">
                Can I hire multiple talents at once?
              </label>
              {dropDownThird ? (
                <img
                  className="dropdown-control"
                  src="images/plus.png"
                  alt=""
                  onClick={handleChangeThird}
                />
              ) : (
                <img
                  className="dropdown-control"
                  src="images/minus.png"
                  alt=""
                  onClick={handleChangeThird}
                />
              )}
            </div>
            {dropDownThird ? (
              <label className="dropdown-label">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </label>
            ) : (
              ""
            )}
            <div className="border-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageQuestions;
