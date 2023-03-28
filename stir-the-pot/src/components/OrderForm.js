// https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
// https://dev.to/elyngved/turn-anything-into-a-form-field-with-react-hook-form-controller-42c
import {
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  TextField
} from "@material-ui/core"; // https://mui.com/material-ui/getting-started/installation/
import React, {useState, useEffect} from 'react'
import { Controller, useForm } from "react-hook-form";
import './OrderForm.css';



export default function OrderForm2() {
// state form form data values
const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    chickenNoodle: false,
    tomato: false,
    butternutSquash: false
  });

  function handleCheckboxChange(event, value) {
    setIsChecked(event.target.checked); // Setting checkbox to checked for UI, also sets isChecked to true
    // left off here, seeing if there is a way to generalize so what is checked specifically is updated
    setFormData(prevState => ({
      ...prevState,
      value: true
      //type: true
    }));
  }

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
      body: JSON.stringify(formData) // passing in formData object as request body
    });
  }

  function calculateCost() {
    // Parse through checked soups and add up cost
  }

  function receipt() {
    // Create and display receipt 
  }

return (
  <Container className="container">
    <div className = "order-form">
        <form onSubmit = {handleSubmit}>
          <label> 
            Name
             <input placeholder='Enter your name' type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
          </label>
          <label> 
            Email
          <input placeholder='Enter your email' type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </label>
          <div className = "checkbox-soup">
            <br></br>
            <label className = "check-the-soups">Check off the soup(s) you are ordering</label>
            <label>
              <input type="checkbox" checked={isChecked} onChange={setFormData} />
              Chicken Noodle Soup
            </label>
            <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              Tomato Soup
            </label>
            <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              Butternut Squash
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
  </Container>
)
}

  

