import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css'
const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors}=
    useForm(submitForm,
        validate);


  return (
    <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Create your
                account by filling out the information below. 
            </h1>
            <div className='form-inputs'>
                <label htmlFor="fname"
                className='form-label'>
                    First name
                </label>
                <input 
                    id='fname'
                    type="text" 
                    name="fname" 
                    className="form-input"
                    placeholder='Enter your name'
                    value={values.fname}
                    onChange={handleChange}
                />
                {errors.fname && <p>{errors.fname}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor="lname"
                className='form-label'>
                    Last name
                </label>
                <input 
                    id='lname'
                    type="text" 
                    name="lname" 
                    className="form-input"
                    placeholder='Enter your surname'
                    value={values.lname}
                    onChange={handleChange}
                />
                {errors.lname && <p>{errors.lname}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor="email"
                className='form-label'>
                    Email
                </label>
                <input 
                    id='email'
                    type="email" 
                    name="email" 
                    className="form-input"
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}

            </div>
            <div className='form-inputs'>
                <label htmlFor="password"
                className='form-label'>
                    Password
                </label>
                <input 
                    id='password'
                    type="password" 
                    name="password" 
                    className="form-input"
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}

            </div>
            
            <button className='form-input-btn'
            type='submit'>
                Sign up
            </button>
            <span className='form-input-logi'>
                Already have an account login <a href='#'>here</a>
            </span>
        </form>
    </div>
    );
};

export default FormSignup;
