import styles from "../home.module.scss";
import classNames from "classnames/bind";


const cx = classNames.bind(styles);

function Specialty() {
    return (
        <>
            <div className={cx('section-specialty')}>
                <div className={cx('specialty-container')}>
                    <div className={cx('specialty-header')}>
                        <div className={cx('edit-title')}>Món Ngon Khuyến Mãi</div>
                        <span>-------------------------------------</span>
                    </div>
                    {/* <Slider {...settings}>
                        <div className={cx('img-customize edit-font')}>
                            <img src={specialtyImg} />
                            <div className={cx('text-font')}>
                                <h4>Burger cùng gà rán khoai</h4>
                            </div>
                        </div>
                        <div className={cx('img-customize edit-font')}>
                            <img src={specialtyImg2} />
                            <div className={cx('text-font')}>
                                <h4>Gà sốt tròn vị</h4>
                            </div>
                        </div>
                        <div className={cx('img-customize edit-font')}>
                            <img src={specialtyImg3} />
                            <div className={cx('text-font')}>
                                <h4>Siêu Burger thả ga</h4>
                            </div>
                        </div>
                        <div className={cx('img-customize edit-font')}>
                            <img src={specialtyImg4} />
                            <div className={cx('text-font')}>
                                <h4>Pizza khổng lồ khoai lắc</h4>
                            </div>
                        </div>
                        <div className={cx('img-customize edit-font')}>
                            <img src={specialtyImg5} />
                            <div className={cx('text-font')}>
                                <h4>Sốt kem bơ gà giòn</h4>
                            </div>
                        </div>
                        <div className={cx('img-customize edit-font')}>
                            <img src={specialtyImg6} />
                            <div className={cx('text-font')}>
                                <h4>Bỏng ngô khoai chiên</h4>
                            </div>
                        </div>
                    </Slider> */}
                </div>
            </div>
        </>
    );
}

export default Specialty;