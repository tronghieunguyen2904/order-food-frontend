import { useDispatch } from "react-redux";
import styles from "../Menu.module.scss";
import classNames from "classnames/bind";
import { addCart } from "../../../redux/actions/actions";
import images from "../../../../assets";
const cx = classNames.bind(styles);


// eslint-disable-next-line react/prop-types
function Product({ id, ten, tenLoai, gia, mota, img }) {
  const dispath = useDispatch()
  const handleCart = () => {
    dispath(addCart({
      id: id,
      ten: ten,
      mota: mota,
      dongia: gia,
      quantity: 1,
      image: img
    }))
  }
  return (
    <div
      className={cx("col-lg-4", " col-sm-6", "dish-box-wp", "breakfast")}
      data-cat="breakfast">
      <div className={cx("dish-box", "text-center")}>
        <div className={cx("dist-img")}>
          <img src={img} alt='Hinh' />
        </div>
        <div className={cx("dish-rating")}>
          4.3
          <i className={cx("uil", "uil-star")}></i>
        </div>
        <div className={cx("dish-title")}>
          <h3 className={cx("h3-title")}>{ten}<i class="far fa-bookmark" title="Thêm vào yêu thích"></i></h3>
          {/* <p>80 calories</p> */}
        </div>
        <div className={cx("dish-info")}>
          <ul>
            <li>
              <p>Loại</p>
              <b>{tenLoai}</b>
            </li>
            <li>
              <p>Mô tả</p>
              <b>{mota}</b>
            </li>
          </ul>
        </div>
        <div className={cx("dist-bottom-row")}>
          <ul>
            <li>
              <b>Vnd.{gia}</b>
            </li>
            <li>
              <div>
                <button className={cx("dish-add-btn")} onClick={handleCart}><i className="fa-solid fa-plus"></i></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
