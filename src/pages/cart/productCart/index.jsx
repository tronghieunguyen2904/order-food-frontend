import styles from "./ProductCart.module.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import {
  deleteCart,
  increaseQty,
  decreaseQty,
} from "../../redux/actions/actions";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function ProductCart({ id, ten, gia, quantity1, tongTien }) {
  const dispath = useDispatch();
  const handleDelete = () => {
    dispath(
      deleteCart({
        id: id,
        ten: ten,
        dongia: gia,
        quantity: 1,
      })
    );
  };
  const handleIncrease = () => {
    dispath(
      increaseQty({
        id: id,
        ten: ten,
        dongia: gia,
        quantity: 1,
      })
    );
  };
  const handleDecrease = () => {
    dispath(
      decreaseQty({
        id: id,
        ten: ten,
        dongia: gia,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("second-container")}>
          <div className={cx("cv-form")}>
            <div className={cx("left-form")}>
              <table class={cx("table table-striped")}>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Tên món</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{id}</th>
                    <td><p>{ten}</p></td>
                    <td><p>{gia}</p></td>
                    <td><button className={cx("btn-qty-cart")} onClick={handleDecrease}>
                      Giảm
                      <i className={cx("fas fa-minus")}></i>
                    </button>
                      <span>{quantity1}</span>
                      <button className={cx("btn-qty-cart")} onClick={handleIncrease}>
                        Thêm
                        <i className={cx("fas fa-plus")}></i>
                      </button></td>
                    <td><p>{tongTien}</p></td>
                    <td><span>
                      <button
                        className={cx("fas fa-times icon-delete-cart")}
                        onClick={handleDelete}
                      >Xóa</button>
                    </span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={cx("right-form")}>
              <form id="paymentForm" />
              <label for="firstName">Tên:</label>
              <input type="text" id="firstName" name="firstName" required />

              <label for="lastName">Tên đệm:</label>
              <input type="text" id="lastName" name="lastName" required />

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label for="phone">Số điện thoại:</label>
              <input type="tel" id="phone" name="phone" required />

              <label for="address">Địa chỉ:</label>
              <input type="text" id="address" name="address" required />

              <label for="note">Ghi chú:</label>
              <textarea id="note" name="note" rows="4"></textarea>

              <button type="button" onclick="submitForm()">Thanh toán</button>


            </div>
          </div>
        </div>
      </div>

      {/* <tr>
        <td className={cx("product-cell")}>
          <div className={cx("name-product-cart")}>
            <p>{ten}</p>
          </div>
        </td>
        <td>
          <span className={cx("color-cart")} data-label-id="0"></span>
        </td>
        <td className={cx("cart-cell")}>
          <p>{gia}</p>
        </td>
        <td className={cx("cart-cell")}>
          <div className={cx("input-container")}>
            <div className={cx("input-sub-container")}>
              <button className={cx("btn-qty-cart")} onClick={handleDecrease}>
                Giảm
                <i className={cx("fas fa-minus")}></i>
              </button>
              <span>{quantity1}</span>
              <button className={cx("btn-qty-cart")} onClick={handleIncrease}>
                Thêm
                <i className={cx("fas fa-plus")}></i>
              </button>
            </div>
          </div>
        </td>
        <td className={cx("cart-cell")}>
          <p>{tongTien}</p>
        </td>
        <td className={cx("cart-cell")}>
          <span>
            <button
              className={cx("fas fa-times icon-delete-cart")}
              onClick={handleDelete}
            >Xóa</button>
          </span>
        </td>
      </tr> */}
    </>
  );
}

export default ProductCart;
