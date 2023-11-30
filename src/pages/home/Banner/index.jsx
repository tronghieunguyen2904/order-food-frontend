import styles from "../home.module.scss";
import classNames from "classnames/bind";
import './banner.scss';


const cx = classNames.bind(styles);

function Banner() {
    return (
        <>
            <div className={cx("home-header-banner")}>
                <div className={cx("title1")}>Bùng lên hương vị</div>
                <div className={cx("title2")}>
                    <p>
                        Chào mừng bạn đến với nhà hàng của chúng tôi! Cùng trải nghiệm những
                        món ăn ngon đặc trưng gà rán giòn tan, mì Ý đậm đà, pizza hấp dẫn và
                        vô vàn món ăn khác. Chúng tôi tự hào mang đến cho bạn những hương vị
                        tinh tế và đa dạng. Đặt món ngay để tận hưởng những bữa ăn thú vị!!
                    </p>
                </div>
                <div className={cx("search")}></div>
                <div className={cx("options")}>
                    <button>
                        <a href="#menu">Đặt món ngay</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Banner;