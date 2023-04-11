import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './emailpopup.css';

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      sessionStorage.setItem('popupShown', 'true');
      setOpen(true);
    }
  }, []);

  const handleClose = () => {setOpen(false)};

  return (
    <div className="App">
      <Popup open={open} onClose={handleClose} class="popup-container">
        <form onSubmit={handleSubmit(onSubmit)} class="popup-box">
          <h2>Stay tuned for new updates!</h2>
          <div className="form-control" class="input">
            <label htmlFor="input-field">Please enter your email to be added to our mailing list!</label>
            <br/><br/>
            <input type="text" name="input" id="inputField" placeholder="Email" required class="input-box" {...register('input', {required: true})} />
            {errors.input && <span>This field is required.</span>}
          </div>
          <br/><br/><br/>
          <button onClick={handleClose} type="submit" class="btn-custom-popup">Submit</button>
        </form>
      </Popup>
    </div>
  );
}

export default EmailPopup;