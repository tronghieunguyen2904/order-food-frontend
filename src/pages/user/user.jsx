import React, { useState, useEffect } from 'react';
import './user.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

function user() {
    //const history = useHistory();
    const handleLogout = () => {
        const confirmation = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
        if (confirmation) {
            // Xóa thông tin người dùng từ localStorage
            localStorage.removeItem("name");
            localStorage.removeItem("id");

            // Chuyển hướng về trang chủ
            history.push('/');
        }
    }

    return (
        <div className='user-container'>
            <div className='user-background'>
                <div className='user-type'>
                    <div className='user-header'>
                        <h5>Quản lý khách hàng</h5>
                    </div>
                    <div className='user-body'>
                        <div className='left-menu-user'>
                            <section id="option-menu">
                                <div className='menu'>
                                    <i class="fas fa-user-circle"></i>
                                    <Link to="/user"><span className='text'>   Thông tin tài khoản</span></Link>
                                </div>
                                <div className='menu'>
                                    <i class="fas fa-chart-bar"></i>
                                    <Link to="/user/order"><span className='text'>   Quản lý đơn hàng</span></Link>
                                </div>
                                <div className='menu'>
                                    <i class="far fa-list-alt"></i>
                                    <a href="#"><span className='text'>   Danh sách yêu thích</span></a>
                                </div>

                                <div class="footer-menu-user">
                                    <div className='menu'>
                                        <div className='horver-menu-footer'>
                                            <div onClick={handleLogout}><p>Đăng xuất</p></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className='right-menu-user'>
                            <div class="box-info-user">
                                <div className='s1'>
                                    <i class="fas fa-clipboard-list"></i>
                                    <span class="text">
                                        <h3>1020</h3>
                                        <p>Đơn hàng</p>
                                    </span>
                                </div>
                                <div className='s2'>
                                    <i class="far fa-thumbs-up"></i>
                                    <span class="text">
                                        <h3>100</h3>
                                        <p>Món yêu thích</p>
                                    </span>
                                </div>
                                <div className='s3'>
                                    <i class="fas fa-cart-arrow-down"></i>
                                    <span class="text">
                                        <h3>$2543</h3>
                                        <p>Tổng chi tiêu</p>
                                    </span>
                                </div>
                            </div>

                            <div className='edit-user-info'>
                                <div className='info'>
                                    <div className='header-info'>Tài khoản</div>
                                    <div className='input1'>
                                        <div className='input-info'>
                                            <label>Email:</label>
                                            <input className='form-control' type='gmail' readOnly
                                            //value={customerData.ten}
                                            // onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                            />
                                        </div>
                                        <div className='input-info'>
                                            <label>Tên:</label>
                                            <input className='form-control' type='text'
                                            //value={customerData.ten}
                                            // onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                            />
                                        </div>
                                        <div className='input-info'>
                                            <label>Tên đệm:</label>
                                            <input className='form-control' type='text'
                                            //value={customerData.tendem}
                                            // onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                            />
                                        </div>
                                    </div>

                                    <div className='input2'>
                                        <div className='input-info'>
                                            <label>Số điện thoại:</label>
                                            <input className='form-control' type='text'
                                            // value={phoneNumber}
                                            // onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                            />
                                        </div>
                                        <div className='input-info'>
                                            <label>Địa chỉ:</label>
                                            <input className='form-control' type='text'
                                            // value={address}
                                            // onChange={(event) => { this.onChangeInput(event, 'address') }}
                                            />
                                        </div>
                                        <div className='edit-gender'>
                                            <label>Giới tính: </label>
                                            <select name="gioitinh">
                                                <option value="nam">Nam</option>
                                                <option value="Nu">Nữ</option>
                                                <option value="Khác">Khác</option>
                                            </select>
                                        </div>
                                        <div className='input-info-button'>
                                            <div className='btn-save-info'><p>Lưu</p></div>
                                        </div>
                                    </div>
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