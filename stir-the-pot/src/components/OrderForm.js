// https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
// https://dev.to/elyngved/turn-anything-into-a-form-field-with-react-hook-form-controller-42c
import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField
  } from "@material-ui/core"; // https://mui.com/material-ui/getting-started/installation/
import React from 'react';
import { Controller, useForm } from "react-hook-form";

export default function OrderForm() {
    // useForm is the primary hook, useController is only made for controlled components
    const {
        // function we can call when the form is submitted
        handleSubmit,

        // Takes care of the registration process
        control,

        // errors is a nested property in the formState object which will contain the validation errors, if any
        formState: {errors}
    } = useForm({
        defaultValues: {
            firstName: "",
            chickennoodlesoup: false
        }
    });

    // passed to the handleSubmit method
        // "handleSubmit" will validate your inputs before invoking "onSubmit"
    // passes submission to values
    const onSubmit = (values) => {
        console.log(values);
    };

  return (
    <div>OrderForm
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className = "form-control">

        </div>
        <Controller 
        // a controlled component is one that gets and sets its current "state" via props
            control = {control} // control object returned from useForm instead of register
            name = "firstName" // tells the form which field to control
            render = {({ field }) => (
                 // Custom field component goes here
                 // Material UI TextField already supports "value" and "onChange" so no need to add in render
                 // If field uses value and onChange prop names, simply use ...field to spread field input into the component
                 <TextField {...field} label="Name" />
            )}
        />
        <label>Select your soup</label>
        <Controller
        control={control}
        name="chickennoodlesoup"
        // Checkbox accepts props value as checked instead of value, so you cannot as easily spread field into it
        render={({ field: { value, onChange } }) => (
          // Checkbox accepts its value as `checked`
          // so we need to connect the props here
          <FormControlLabel
            control={<Checkbox checked={value} onChange={onChange} />}
            label="Chicken noodle soup"
          />
        )}  
        />
        <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
  )
}
