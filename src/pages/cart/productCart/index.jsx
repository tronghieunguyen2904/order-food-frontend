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
function ProductCart({ id, ten, gia, quantity1, tongTien, image }) {
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
              <div className={cx("title-left-sp")}>
                <h4>Chi tiết giỏ hàng</h4>
                <span>Tổng tiền: {tongTien}vnd</span>
              </div>
              <div className={cx("cv-table")}>
                <table class={cx("table table-striped")}>
                  <thead>
                    <tr>
                      <th scope="col">Ảnh</th>
                      <th scope="col">Tên món</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số Lượng</th>
                      <th scope="col">Thành tiền</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><img src={image} alt="" className={cx("image-cart")} /></th>
                      <td><p className={cx("content-dt")}>{ten}</p></td>
                      <td><p className={cx("content-dt")}>{gia}</p></td>
                      <td>
                        <button onClick={handleDecrease} className={cx("content-text")} title="Giảm món">
                          <i className={cx("fas fa-minus")}></i>
                        </button>
                        <span>{quantity1}</span>
                        <button className={cx("content-text")} onClick={handleIncrease} title="Thêm món">
                          <i className={cx("fas fa-plus")}></i>
                        </button>
                      </td>

                      <td><p className={cx("content-dt")}>{tongTien}</p></td>

                      <td><span >
                        <button onClick={handleDelete} className={cx("content-text")} title="Xóa món">
                          <i class="fas fa-trash-alt"></i>
                        </button></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
