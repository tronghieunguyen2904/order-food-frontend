import { useEffect, useState } from "react";
import { userOrderApi } from "../../Api";
import { Link } from "react-router-dom";

function UserOrder() {
  const name = localStorage.getItem("name");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Make the API call to get user orders data
    const fetchData = async () => {
      try {
        // Replace 'userId' with the actual user ID you want to fetch orders for
        const userId = localStorage.getItem('id'); // Example user ID, replace it with your logic to get the user ID
        const data = await userOrderApi(userId);
        console.log(data.data);
        setOrders(data); // Assuming the API response structure is an array of orders
      } catch (error) {
        console.error('Error fetching user orders:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='user-container'>
      <div className='user-background'>
        <div className='user-type'>
          <div className='user-header'>
            <h5>Xin chào!! {name}</h5>
          </div>
          <div className='user-body'>
            <div className='left-menu-user'>
              <section id="option-menu">

                <div className="option-menu-user">
                  <li className='list-menu'>
                    <Link to="/user"><span className='text'>Thông tin tài khoản</span></Link>
                  </li>
                </div>
                <div className="option-menu-user">
                  <li>
                    <Link to="/user/order"><span className='text'>Quản lý đơn hàng</span></Link>
                  </li>
                </div>
                <div className="option-menu-user">
                  <li>
                    <a href="#"><span className='text'>Danh sách yêu thích</span></a>
                  </li>
                </div>


                <ul class="footer-menu">
                  <li>
                    <a href="#"><span className='text'>Cài đặt</span></a>
                  </li>
                  <li>
                    <a href="#" class="logout"><span className='text'>Đăng xuất</span></a>
                  </li>
                </ul>
              </section>
            </div>
            <div className='user-function'>
              <div>
                <table id="customers" className="table-order">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Số điện thoại</th>
                      <th>Tổng tiền</th>
                      <th>Thời gian</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td>{order.hoten}</td>
                        <td>{order.sdt}</td>
                        <td>{order.tongtien}</td>
                        <td>{order.ngaydathang}</td>
                        <td>{order.trangthai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrder;