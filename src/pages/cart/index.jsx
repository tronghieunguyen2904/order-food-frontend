import { useSelector } from "react-redux";
import { cartListSelectors } from "../redux/selector";
import ProductCart from "./productCart";

import styles from "../cart/productCart/ProductCart.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { createOrderApi } from "../../Api";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart() {
  const cartList = useSelector(cartListSelectors);
  const navigate = useNavigate();
  const idUser = localStorage.getItem('id') || 1;
  let detailOrder = cartList.map(item => ({
    id: item.id,
    soluong: item.quantity,
    gia: item.dongia.replace(',', ''),
    tong: (item.quantity * parseFloat(item.dongia.replace(',', ''))).toString(),
    ghichu: item.ghichu,
    mahoadon: "",
    masanpham: item.id
  }))
  const totalAmount = detailOrder.reduce((total, item) => {
    // Convert 'tong' to a number and add it to the total
    return total + parseFloat(item.tong);
  }, 0);

  console.log(totalAmount);
  const [order, setOrder] = useState({
    hoten: '',
    diachi: '',
    sdt: '',
    trangthai: 'Pending',
    ngaydathang: "2023-11-29 04:30:43",
    mathanhtoan: 1,
    mavanchuyen: 1,
    makhachhang: idUser,
    tongtien: totalAmount,
    details: detailOrder,
    ghichu: '',
  })
  console.log(order.tongtien);
  useEffect(() => {
    // Optionally, you can update the order details when cartList changes
    setOrder((prevOrder) => ({ ...prevOrder, details: detailOrder }));
  }, [cartList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleCreateOrder = async () => {
    try {
      const response = await createOrderApi(order); // Use createOrderApi function
      if (response.success) {
        console.log('Order created successfully');
        console.log('Order ID:', response.id);
        localStorage.removeItem('persist:root')
        navigate("/")
        // Optionally, clear the cart or perform other actions
      } else {
        console.error('Failed to create order:', response.message);
      }
    } catch (error) {
      console.error('Error creating order:', error.message);
    }
  };
  return (
    <>
      <div className={cx("cart-container")}>
        <div className={cx("left-container")}>
          {cartList.map((product, index) => {
            const dongia =
              product.dongia && typeof product.dongia === "string"
                ? parseFloat(product.dongia.replace(",", ""))
                : 0;

            const tongTien = dongia * product.quantity;

            return (
              <ProductCart
                key={index}
                id={product.id}
                ten={product.ten}
                gia={dongia}
                quantity1={product.quantity}
                tongTien={tongTien}
                ghichu={product.ghichu}
              />
            );
          })}
        </div>

        <div className={cx("right-container")}>
          <form action="">
            <h3 className="title-cart">Thông tin đơn hàng</h3>
            <label htmlFor="firstName">Họ tên:</label>
            <input type="text" id="firstName" name="hoten" placeholder="Nhập tên người nhận" required onChange={handleInputChange} />

            <label htmlFor="phone">Số điện thoại:</label>
            <input type="telephone" id="phone" name="sdt" placeholder="Số điện thoại người nhận" required onChange={handleInputChange} />

            <div className={cx("edit-address-cart")}>
              <div className={cx("left-div-address")}>
                <label htmlFor="address">Địa chỉ:</label>
                <input type="text" id="address" name="diachi" placeholder="Số nhà, tòa nhà, đường..." required onChange={handleInputChange} />
              </div>
              <div className={cx("edit-option")}>
                <label htmlFor="dropdown">Quận:</label>
                <select id="dropdown">
                  <option value="option1">Quận 2</option>
                  <option value="option2">Quận 5</option>
                  <option value="option3">Quận 8</option>
                  <option value="option4">Quận 10</option>
                  <option value="option5">Bình Chánh</option>
                </select>
              </div>
            </div>

            <label htmlFor="note">Ghi chú:</label>
            <input type="text" id="note" name="ghichu" required onChange={handleInputChange} />

            <div className={cx("btn-cart-option")}>
              <div className={cx("button-cash")}>
                <button type="button" onClick={handleCreateOrder}>
                  Thanh toán tiền mặt
                </button>
              </div>
              <div className={cx("button-momo")}>
                <button type="button">
                  Online thanh toán
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
