import axios from "axios";


const BASE_API = "http://localhost:3001/api"

export const loginApi = async (gmail, password) => {
  const res = await axios.post(`${BASE_API}/user/login`, {
    gmail,
    password,
  })
  return res.data;
}

// Api đăng ký
export const registerApi = async (gmail, ten, password, sdt, diachi) => {
  const res = await axios.post(`${BASE_API}/user/register`, {
    gmail,
    ten,
    password,
    diachi,
    sdt,
  })
  return res.data;
}

export const createOrderApi = async ({
  hoten,
  diachi,
  sdt,
  trangthai,
  ngaydathang,
  mathanhtoan,
  mavanchuyen,
  makhachhang,
  tongtien,
  details,
  ghichu,
  quan
}) => {
  try {
    const res = await axios.post(`${BASE_API}/order/create`, {
      hoten,
      diachi,
      sdt,
      trangthai,
      ngaydathang,
      mathanhtoan,
      mavanchuyen,
      makhachhang,
      tongtien,
      details,
      ghichu,
      quan
    });
    return res.data;
  } catch (error) {
    // Handle error, you might want to log or throw an exception
    console.error("Error creating order:", error.message);
    throw error;
  }
};

export const userOrderApi = async (id) => {
  const res = await axios.get(`${BASE_API}/user/order/${id}`);
  return res.data.data;
}
export const thanhtoanMomo = async () => {
  const res = await axios.post(`${BASE_API}/thanhtoan/momo`);
  return res.data;
}