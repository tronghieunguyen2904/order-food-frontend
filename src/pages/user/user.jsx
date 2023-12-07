import React, { useState, useEffect } from 'react';
import './user.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function user() {
    const name = localStorage.getItem("name");
    const gmail = localStorage.getItem("gmail");


    const [customerData, setCustomerData] = useState({
        ten: '',
        tendem: '',
        gmail: '',
        password: '',
        diachi: '',
        gioitinh: '',
        sdt: ''
    });

    useEffect(() => {
        // Define the API endpoint you want to fetch data from
        const apiUrl = 'http://localhost:3001/api/khachhang';

        // Make the API call using Axios
        axios.get(apiUrl)
            .then(response => {
                if (response.data && response.data.data && response.data.data.length > 0) {
                    // Lưu ý: response.data.data[0] sẽ chỉ lấy dữ liệu của khách hàng đầu tiên, bạn có thể điều chỉnh nếu cần thiết.
                    setCustomerData(response.data.data[0]);
                    console.log('check data ', data);
                }
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='user-container'>
            <div className='user-background'>
                <div className='user-type'>
                    <div className='user-header'>
                        <h5>Xin chào!! {name}</h5>
                    </div>
                    <div className='user-body'>
                        <div className='left-menu-user'>
                            <section id="option-menu">
                                <ul className='menu'>
                                    <li className='list-menu'>
                                        <Link to="/user"><span className='text'>Thông tin tài khoản</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/user/order"><span className='text'>Quản lý đơn hàng</span></Link>
                                    </li>
                                    <li>
                                        <a href="#"><span className='text'>Danh sách yêu thích</span></a>
                                    </li>
                                </ul>

                                <ul class="footer-menu">
                                    <li>
                                        <a href="#"><span className='text'>Cài đặt</span></a>
                                    </li>
                                    <li>
                                        <a href="#" class="logout"><span className='text'>Đăng xuất</span></a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className='user-function'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12 my-3'>Tài khoản</div>
                                    <div className='col-3'>
                                        <label>Email</label>
                                        <input className='form-control' type='email' value={customerData.gmail}
                                            readOnly // Ngăn người dùng sửa đổi thông tin email
                                        // value={email}
                                        // onChange={(event) => { this.onChangeInput(event, 'email') }}
                                        // disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label>Password</label>
                                        <input className='form-control' type='password'
                                            value={customerData.password}
                                            readOnly // Ngăn người dùng sửa đổi thông tin password
                                        // value={password}
                                        // onChange={(event) => { this.onChangeInput(event, 'password') }}
                                        // disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label>First Name</label>
                                        <input className='form-control' type='text'
                                            value={customerData.ten}
                                        // onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label>Last Name</label>
                                        <input className='form-control' type='text'
                                            value={customerData.tendem}
                                        // onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label>Phone Number</label>
                                        <input className='form-control' type='text'
                                        // value={phoneNumber}
                                        // onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                        />
                                    </div>
                                    <div className='col-9'>
                                        <label>Address</label>
                                        <input className='form-control' type='text'
                                        // value={address}
                                        // onChange={(event) => { this.onChangeInput(event, 'address') }}
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <label>Gender</label>
                                        <select className='form-control'
                                        // onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                        // value={gender}
                                        >
                                            {/* {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>{item.valueVi}</option>
                                            )
                                        })
                                    } */}
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                        <label>Image</label>
                                        <div className='preview-img-container'>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-3'>
                                    <button>
                                        Save
                                    </button>
                                </div>
                                <div className='col-12 mb-5'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default user;