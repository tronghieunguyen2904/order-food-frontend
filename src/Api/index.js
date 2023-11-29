import axios from "axios";


const BASE_API = "http://localhost:3001/api"

export const loginApi = async (gmail,password)=>{
    const res = await axios.post(`${BASE_API}/user/login`,{
        gmail,
        password,
    })
    return res.data;
}

// Api đăng ký
export const registerApi = async (gmail,ten,password)=>{
    const res = await axios.post(`${BASE_API}/user/register`,{
        gmail,
        ten,
        password,
    })
    return res.data;
}
