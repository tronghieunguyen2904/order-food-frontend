import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { cartListSelectors } from "../../../pages/redux/selector";
import { useNavigate } from "react-router-dom";


const cx = classNames.bind(styles);

function Header() {
  const cartList = useSelector(cartListSelectors);
  const name = localStorage.getItem("name");
  const cartArr = useSelector((state) => state.cartArr);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    navigate('/')
  }
  const totalQuantity = cartArr.reduce((total, product) => total + product.quantity, 0);
  return (
    <>
      <div className={cx("home-header-container")}>
        <div className={cx("home-header-content")}>
          <div className={cx("left-content")}>
            <div className={cx("header-logo")}></div>
          </div>
          <div className={cx("center-content")}>
            <div className={cx("child-content")}>
              <div>
                <a href="/">
                  <b>Trang chủ</b>
                </a>
              </div>
            </div>
            <div className={cx("child-content")}>
              <div>
                <b>Thực đơn</b>
              </div>
            </div>
            <div className={cx("dropdown")}>
              <button className={cx("edit-btn-restaurant")}>
                <b>
                  Nhà hàng <i class="fa-solid fa-chevron-down"></i>
                </b>
              </button>
              <div className={cx("content")}>
                <a href="/news" target="_blank">
                  Tin tức
                </a>
                <a href="/restaurant" target="_blank">
                  Thông tin
                </a>
                {/* <a href="">Kinh nghiệm</a> */}
              </div>
            </div>
            {/* <div className={cx('child-content')}>
                            <div><b>Nhà hàng</b></div>
                        </div> */}
            <div className={cx("child-content")}>
              <div>
                <b>Đầu bếp</b>
              </div>
            </div>
            <div className={cx("child-content")}>
              <div>
                <b>Đặt bàn</b>
              </div>
            </div>
          </div>
          <div className={cx("right-content")}>
            <div className={cx("search-btn")}>
              <form action="#" className={cx("header-search-form")}>
                <input
                  type="search"
                  className={cx("form-input")}
                  placeholder="Tìm kiếm..."
                />
                <button className={cx("button-search")} type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
            <div className={cx("btn-cart")}>
              <a href="/cart">
                <i className={cx("fas fa-shopping-cart")}></i>
                <span className={cx("cart-number")}>{totalQuantity}</span>
              </a>
            </div>
            {name ? (
              <div className={cx("bnt-sign-up")}>
                <div className={cx("btn-cart")}><i class="fas fa-user-check" title={name}></i></div>
                {/* <p>{name}!</p> */}
                <div className={cx("btn-cart")}><p onClick={handleLogout}><i class="fas fa-sign-out-alt" title="Đăng xuất"></i></p></div>
              </div>
            ) : (
              <div className={cx("btn-cart")}>
                <a href="/login">
                  <i className={cx("fas fa-user")}></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className={cx("home-header-banner")}>
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
      </div> */}
    </>
  );
}

export default Header;
