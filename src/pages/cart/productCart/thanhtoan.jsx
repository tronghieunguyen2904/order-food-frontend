import styles from "./ProductCart.module.scss";
import classNames from "classnames/bind";
import axios from "axios";


const cx = classNames.bind(styles);
function Thanhtoan() {
    const thanhtoan = () => {
        axios.post("http://localhost:3001/api/thanhtoan/momo").then(res => {
            console.log(res);
        })
    }

    return (
        <>
            <div className={cx("tt")}>
                <button onClick={thanhtoan}>THANH TOAN</button>
            </div>
        </>
    );
}

export default Thanhtoan;
