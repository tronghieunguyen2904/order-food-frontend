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
    ghichu: item.ten,
    mahoadon:"",
    masanpham: item.id
  }))
  console.log(cartList);
  const [order,setOrder] = useState({
    hoten: '',
    diachi: '',
    sdt: '',
    trangthai: 'Pending',
    ngaydathang: "2023-11-29 04:30:43",
    mathanhtoan: 1,
    mavanchuyen: 1,
    makhachhang: idUser,
    details: detailOrder,
  })
  console.log(order.details);
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
              />
            );
          })}
        </div>
        <div className={cx("right-container")}>
          <form action="">
          <label htmlFor="firstName">Tên:</label>
          <input type="text" id="firstName" name="hoten" required onChange={handleInputChange}/>

          <label htmlFor="phone">Số điện thoại:</label>
          <input type="tel" id="phone" name="sdt" required onChange={handleInputChange}/>

          <label htmlFor="address">Địa chỉ:</label>
          <input type="text" id="address" name="diachi" required onChange={handleInputChange}/>

          <button type="button" onClick={handleCreateOrder}>
            Thanh toán
          </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
