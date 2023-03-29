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
      console.log(data);
    };

    const [open, setOpen] = useState(true);

    const handleClose = () => {setOpen(false)};

    return (
        <div className="App">
          <Popup open={open} onClose={handleClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h>Stay tuned for new updates!</h>
              <div className="form-control">
                <label>Please enter your email: </label>
                    <input type="text" name="email" {...register("email")} />
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