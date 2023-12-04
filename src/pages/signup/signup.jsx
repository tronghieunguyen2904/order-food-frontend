import { useState } from 'react';
import './signup.scss';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import { registerApi } from '../../Api';


function Signup() {
    const [values, setValues] = useState({
        gmail: '',
        ten: '',
        diachi: '',
        sdt: '',
        password: ''
    })
    console.log(values.gmail[0]);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleRegister = async () => {
        try {
            const response = await registerApi(values.gmail[0], values.ten[0], values.password[0], values.sdt[0], values.diachi[0]);
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
            <div className='signup-background'>
                <div className='signup-container row'>
                    <form action='' onSubmit={handleSubmit}>
                        <div className='col-12 text-signup'>Đăng ký</div>
                        <div className='mb-3'>
                            <label htmlFor='email'>
                                <strong>Tên</strong>
                            </label>
                            <input
                                type='text'
                                placeholder='Nhập tên bạn'
                                name='ten'
                                onChange={handleInput}
                                className='form-control'
                            />
                            {errors.name && <span className='text-danger'>{errors.name}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'>
                                <strong>Email</strong>
                            </label>
                            <input
                                type='email'
                                placeholder='Nhập email'
                                name='gmail'
                                onChange={handleInput}
                                className='form-control'
                            />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>
                                <strong>Password</strong>
                            </label>
                            <div className='input-group'>
                                <input
                                    type={values.showPassword ? 'text' : 'password'}
                                    placeholder='Nhập password'
                                    name='password'
                                    onChange={handleInput}
                                    className='form-control'
                                />
                            </div>
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <div className='flex-box'>
                            <div className='mb-3'>
                                <label htmlFor='diachi'>
                                    <strong>Địa chỉ</strong>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Nhập địa chỉ'
                                    name='diachi'
                                    onChange={handleInput}
                                    className='form-control'
                                />
                                {errors.diachi && <span className='text-danger'>{errors.diachi}</span>}
                            </div>
                            <div className='mb-3 space-flex-box'>
                                <label htmlFor='sdt'>
                                    <strong>Số điện thoại</strong>
                                </label>
                                <input
                                    type='int'
                                    placeholder='Nhập số điện thoại'
                                    name='sdt'
                                    onChange={handleInput}
                                    className='form-control'
                                />
                                {errors.sdt && <span className='text-danger'>{errors.sdt}</span>}
                            </div>
                        </div>
                        <button type='submit' className='btn btn-success w-100'>
                            <strong>Đăng ký</strong>
                        </button>
                        <div className='edit-text-signup'>
                            <p>Quay lại trang đăng nhập !!</p>
                        </div>
                        <Link to="/login" className='edit-signup btn btn-default border w-100 bg-light text-decoration-none'>
                            Đăng nhập
                        </Link>
                    </form>
                </div>
            </div>

            {/* <div className='d-flex justify-content-center aligin-items-center bg-primary vh-100'>
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
            </div> */}
        </>
    );
}

export default Signup;