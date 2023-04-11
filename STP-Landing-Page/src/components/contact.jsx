import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: '',
  email: '',
  customization: '',
};
export const Contact = (props) => {
  const [{ name, email, customization }, setState] = useState(initialState);
  const [isChickenNoodle, setIsChickenNoodle] = useState(false)
  const [isTortilla, setIsTortilla] = useState(false)
  const [isButternutSquash, setIsButternutSquash] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  // function that will handle the form submission
  // uses the fetch API to send the data to backend API using the POST method
  // using sheet.best API
  // when the form is submitted, the handleSubmit function will be called and the data will be sent to the backend API
  async function handleSubmit(event) {
    event.preventDefault();
  
    // using the fetch function to make POST request to sheet.best endpoint
    const response = await fetch('https://sheet.best/api/sheets/2ad570f7-1120-4a4f-bb3c-eb2146ac3827', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, isChickenNoodle, isTortilla, isButternutSquash, customization }), // passing in formData object as request body
    });
    
    setState({ 
      name: '',
      email: '',
      customization: ' ',
    });
    setIsChickenNoodle(false);
    setIsTortilla(false);
    setIsButternutSquash(false);
  }


  return (
    <div>
      <div id="contact">
        <div className = "form-bg-outline">
        <div className="form-container">
          <div className="form-group col-md-6">
            <div className="row">
              <div className="section-title">
                <h2>ORDER FORM</h2>
                <p>
                  COMING SOON: Use this form below to place an order of our delicious soup just like your mom makes it.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value = {name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value = {email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className= "form-group form-check">
               <div className = "checkbox-soup">
                    <label className = "check-the-soups">Check off the soup(s) you are ordering</label>
                      <label>
                        <input type="checkbox" checked={isChickenNoodle} onChange={() => {setIsChickenNoodle(!isChickenNoodle)}} />
                        Chicken Noodle Soup
                      </label>
            <label>
              <input type="checkbox" checked={isTortilla} onChange={() => {setIsTortilla(!isTortilla)}} />
              Tomato Soup
            </label>
            <label>
              <input type="checkbox" checked={isButternutSquash} onChange={() => {setIsButternutSquash(!isButternutSquash)}} />
              Butternut Squash
            </label>
            </div>
              <p className="help-block text-danger"></p>
                  <div className="form-group">
                     <input
                       name="customization"
                       id="customization"
                       className="form-control"
                       rows="1"
                       placeholder="Customization"
                       required
                       onChange= {handleChange}
                       value = {customization}
                     ></input>
              <p className="help-block text-danger"></p>
           </div>
           </div>
                {/* CHANGE H1 TO BUTTON ONCE FORM ALLOWS ORDERS TO SUBMIT */}
                <button type="submit" className="btn btn-custom btn-lg">
                  Coming Soon
                </button>
              </form>
            </div>
          </div>
          {/* <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div> */}
        </div>
        
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.email : "/"}>
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
