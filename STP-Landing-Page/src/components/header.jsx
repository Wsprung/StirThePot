import React from "react";

export const Header = (props) => {
  return (
    
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              <img src = "https://drive.google.com/uc?export=view&id=1_xlMO0m4daYlUn3bI585C-yErzG8vKtD" alt = "Logo" className = "header-logo-STP"/>
                <h1>
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
