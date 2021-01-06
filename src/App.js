import React, { useState } from 'react';
import './App.css';

const App = () => {

  let [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
  });

  const InputEvent = (obj) => {

    const { value, name } = obj.target;

    setFullName((preValue) => {
      return {
        //spread operator used
        ...preValue,
        [name]: value,
      }
    })
  }

  const OnSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted")
  }

  return (
    <>
      <form onSubmit={OnSubmit}>
        <div className='div'>
          <h1 className='h1'>Welcome {fullName.fname} {fullName.lname}</h1>
          <p className='p'>Email: {fullName.email}</p>
          <p className='p'>Cell No: {fullName.mobile}</p>
          <input className='input' type='text' placeholder='Enter First Name' name='fname'
            onChange={InputEvent} value={fullName.fname} />
          <input className='input' type='text' placeholder='Enter Last Name' name='lname'
            onChange={InputEvent} value={fullName.lname} />
          <input className='input' type='email' placeholder='Enter Email' name='email'
            onChange={InputEvent} value={fullName.email} autoComplete='off' />
          <input className='input' type='number' placeholder='Enter Mobile No.' name='mobile'
            onChange={InputEvent} value={fullName.mobile} autoComplete='off' />
          <button className='button' type='submit'>SUBMIT</button>
        </div>
      </form>
    </>
  )
}

export default App;
