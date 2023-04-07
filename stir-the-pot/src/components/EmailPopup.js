import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function EmailPopup() {
  const {
    register,
    handleSubmit,
    formState: { errors }    
  } = useForm();

  const onSubmit = (data) => {
    const email = data.input;

    fetch('https://sheet.best/api/sheets/d8ba646c-9ecc-428f-aaf8-7487cee64529', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  const [open, setOpen] = useState(true);

  const handleClose = () => {setOpen(false)};

  return (
    <div className="App">
      <Popup open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h>Stay tuned for new updates!</h>
          <div className="form-control">
            <label htmlFor="input-field">Please enter your email: </label>
            <input type="text" name="input" id="inputField" {...register('input', {required: true})} />
            {errors.input && <span>This field is required.</span>}
          </div>
          <div className="form-control">
            <label></label>
            <button onClick={handleClose} type="submit">Submit</button>
          </div>
        </form>
      </Popup>
    </div>
  );
}

export default EmailPopup;
