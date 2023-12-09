import { useSelector } from "react-redux";
import { cartListSelectors } from "../redux/selector";
import ProductCart from "./productCart";

import styles from "../cart/productCart/ProductCart.module.scss";
import classNames from "classnames/bind";
import { useEffect, useLayoutEffect, useState } from "react";
import { createOrderApi, thanhtoanMomo } from "../../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function Cart() {
  const cartList = useSelector(cartListSelectors);
  const navigate = useNavigate();
  const idUser = localStorage.getItem("id") || undefined;
  let detailOrder = cartList.map((item) => ({
    id: item.id,
    soluong: item.quantity,
    gia: item.dongia.replace(",", ""),
    tong: (item.quantity * parseFloat(item.dongia.replace(",", ""))).toString(),
    ghichu: item.ghichu,
    mahoadon: "",
    masanpham: item.id,
  }));
  const totalAmount = detailOrder.reduce((total, item) => {
    // Convert 'tong' to a number and add it to the total

    return total + parseFloat(item.tong);
  }, 0);

  // Sử dụng totalAmount để cập nhật state order
  useEffect(() => {
    setOrder((prevOrder) => ({ ...prevOrder, tongtien: totalAmount }));
  }, [totalAmount]);

  const url = new URL(window.location.href);
  const partnerCode = url.searchParams.get("partnerCode") || null;
  const [order, setOrder] = useState({
    hoten: "",
    diachi: "",
    sdt: "",
    trangthai: "Pending",
    ngaydathang: "2023-11-29 04:30:43",
    mathanhtoan: 1,
    mavanchuyen: 1,
    makhachhang: idUser,
    tongtien: totalAmount,
    details: detailOrder,
    ghichu: "",
    quan: "Quận 2",
  });

  console.log(order);

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
      if (idUser === undefined) {
        navigate("/login");
      }
      const response = await createOrderApi(order);
      var isConfirmed = null; // Use createOrderApi function
      if (partnerCode == null) {
        isConfirmed = window.confirm("Bạn chắn chắc muốn đặt món này?");
      }
      if (isConfirmed && response.success) {
        console.log("Order created successfully");
        console.log("Order ID:", response.id);
        localStorage.removeItem("persist:root");
        navigate("/user/order/payment");
        // Optionally, clear the cart or perform other actions
      } else {
        console.error("Failed to create order:", response.message);
      }
    } catch (error) {
      console.error("Error creating order:", error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      if (partnerCode) {
        try {
          const hoten = localStorage.getItem("hoten");
          const diachi = localStorage.getItem("diachi");
          const sdt = localStorage.getItem("sdt");
          const ghichu = localStorage.getItem("ghichu");
          const quan = localStorage.getItem("quan");
          const tongtien = localStorage.getItem("tongtien");
          const details = localStorage.getItem("details");

          setOrder((prevOrder) => ({
            ...prevOrder,
            hoten: hoten || prevOrder.hoten,
            diachi: diachi || prevOrder.diachi,
            sdt: sdt || prevOrder.sdt,
            ghichu: ghichu || prevOrder.ghichu,
            quan: quan || prevOrder.quan,
            tongtien: tongtien || prevOrder.tongtien,
            details: details || prevOrder.details,
            mathanhtoan: 2,
          }));

          localStorage.removeItem("hoten");
          localStorage.removeItem("diachi");
          localStorage.removeItem("sdt");
          localStorage.removeItem("ghichu");
          localStorage.removeItem("quan");
          localStorage.removeItem("tongtien");
          localStorage.removeItem("details");
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();

    // Check if the order has all the required data before calling handleCreateOrder
  }, [partnerCode]);

  useEffect(() => {
    if (
      order.hoten &&
      order.diachi &&
      order.sdt &&
      order.ghichu &&
      order.quan &&
      order.tongtien &&
      order.details &&
      order.mathanhtoan == 2
    ) {
      console.log(order.details);
      handleCreateOrder();
    }
  }, [order.details]);
  const handleMomo = async (event) => {
    try {
      event.preventDefault();
      const updatedOrder = {
        ...order,
        details: detailOrder,
      };

      const response = await axios.post(
        "http://localhost:3001/api/thanhtoan/momo",
        {}
      );
      if (response.data.url) {
        // Lưu vào localStorage
        localStorage.setItem("hoten", updatedOrder.hoten);
        localStorage.setItem("diachi", updatedOrder.diachi);
        localStorage.setItem("sdt", updatedOrder.sdt);
        localStorage.setItem("ghichu", updatedOrder.ghichu);
        localStorage.setItem("quan", updatedOrder.quan);
        localStorage.setItem("tongtien", updatedOrder.tongtien);
        localStorage.setItem("details", JSON.stringify(updatedOrder.details));

        // Chuyển hướng sau khi lưu vào localStorage
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const tongtien = cartList.reduce((total, product) => {
    const dongia =
      product.dongia && typeof product.dongia === "string"
        ? parseFloat(product.dongia.replace(",", ""))
        : 0;
    return total + dongia * product.quantity;
  }, 0);

  return (
    <>
      <div className={cx("cart-container")}>
        <div className={cx("left-container")}>
          <div className={cx("title-left-sp")}>
            <h4>Chi tiết giỏ hàng</h4>
            <span>Tổng tiền: {tongtien}vnd</span>
          </div>
          <table className={cx("table table-striped")}>
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
                    image={product.image}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <div className={cx("right-container")}>
          <form action="">
            <h3 className="title-cart">Thông tin đơn hàng</h3>
            <label htmlFor="firstName">Họ tên:</label>
            <input
              type="text"
              id="firstName"
              name="hoten"
              placeholder="Nhập tên người nhận"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="telephone"
              id="phone"
              name="sdt"
              placeholder="Số điện thoại người nhận"
              required
              onChange={handleInputChange}
            />

            <div className={cx("edit-address-cart")}>
              <div className={cx("left-div-address")}>
                <label htmlFor="address">Địa chỉ:</label>
                <input
                  type="text"
                  id="address"
                  name="diachi"
                  placeholder="Số nhà, tòa nhà, đường..."
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className={cx("edit-option")}>
                <label htmlFor="dropdown">Quận:</label>
                <select id="dropdown" name="quan" onChange={handleInputChange}>
                  <option value="Quận 2">Quận 2</option>
                  <option value="Quận 5">Quận 5</option>
                  <option value="Quận 8">Quận 8</option>
                  <option value="Quận 10">Quận 10</option>
                  <option value="Bình Chánh">Bình Chánh</option>
                </select>
              </div>
            </div>

            <label htmlFor="note">Ghi chú:</label>
            <input
              type="text"
              id="note"
              name="ghichu"
              required
              onChange={handleInputChange}
            />

            <div className={cx("btn-cart-option")}>
              <div className={cx("button-cash")}>
                <button type="button" onClick={handleCreateOrder}>
                  Thanh toán tiền mặt
                </button>
              </div>
              <div className={cx("button-momo")}>
                <button onClick={handleMomo}>Online thanh toán</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
