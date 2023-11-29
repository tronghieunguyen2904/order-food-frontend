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
      <tr>
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
      </tr>
    </>
  );
}

export default ProductCart;
