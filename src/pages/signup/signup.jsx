import { useState } from 'react';
import './signup.module.scss';
import { Link ,useNavigate} from 'react-router-dom';
import Validation from './SignupValidation';
import { registerApi } from '../../Api';


function Signup() {
    const [values, setValues] = useState({
        gmail: '',
        ten: '',
        password: ''
    })
    console.log(values.gmail[0]);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleRegister = async ()=>{
        try {
            const response = await registerApi(values.gmail[0], values.ten[0], values.password[0]);
            navigate("/login");
            console.log(response);
          } catch (error) {
            console.log(error);
          }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleRegister();
        setErrors(Validation(values));
    }
    return (
        <>
            <div className='d-flex justify-content-center aligin-items-center bg-primary vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <h2>Sign Up</h2>
                    <form action='' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='name'><strong>Name</strong></label>
                            <input type='text' placeholder='Enter name' name='ten'
                                onChange={handleInput} className='from-control rounded-0' />
                            {errors.name && <span className='text-danger'>{errors.name}</span>}

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'><strong>Email</strong></label>
                            <input type='email' placeholder='Enter email' name='gmail'
                                onChange={handleInput} className='from-control rounded-0' />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'><strong>Password</strong></label>
                            <input type='password' placeholder='Enter password' name='password'
                                onChange={handleInput} className='from-control rounded-0' />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}

                        </div>
                        <button type='submit' className='btn btn-success w-100'><strong>Sign up</strong></button>
                        <p>You are agree aour terms</p>
                        <Link to="/login" className='btn btn-default border w-100 bg-light text-decoretion-none'>Login</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;