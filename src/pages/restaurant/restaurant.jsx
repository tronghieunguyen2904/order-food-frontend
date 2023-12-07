import React from 'react';
import './restaurant.scss';

function restaurant() {
    return (
        <>
            <div className='section-book'>
                <div className='title'><h2>Đặt bàn với chúng tôi</h2></div>
                <div className='book-container'>
                    <div className='book-body-left'>
                        <form action="">
                            <div>
                                <input type="text" className="form-text" placeholder="Tên bạn" />
                            </div>
                            <div>
                                <input type="text" className="form-text" placeholder="Số điện thoại" />
                            </div>
                            <div>
                                <input type="email" className="form-text" placeholder="Email của bạn" />
                            </div>
                            <div>
                                <select className="form-text">
                                    <option value="" disabled="" selected="">
                                        Bạn đi mấy người?
                                    </option>
                                    <option value="">1 người</option>
                                    <option value="">2 người</option>
                                    <option value="">3 người</option>
                                    <option value="">Trên 4 người</option>
                                </select>

                            </div>
                            <div className='box-date-time'>
                                <input type="date" className="form-text dtime" />
                                <input type='time' className="form-text ttime" />
                            </div>
                            <div>
                                <button className='btn-book'>Đặt ngay</button>
                            </div>
                        </form>
                    </div>
                    <div className='book-body-right'>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9459979853514!2d106.67781657330947!3d10.738645559892996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fac4c2ec679%3A0x1b72da582829a169!2zMTgwIMSQLiBDYW8gTOG7lywgUGjGsOG7nW5nIDQsIFF14bqtbiA4LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700122428999!5m2!1svi!2s" width="500" height="300"></iframe>

                    </div>
                </div>
            </div>
        </>
    );
}

export default restaurant;