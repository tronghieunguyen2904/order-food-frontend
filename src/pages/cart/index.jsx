import { useSelector } from "react-redux";
import { cartListSelectors } from "../redux/selector";
import ProductCart from "./productCart";

function Cart() {   
    const cartList = useSelector(cartListSelectors);

    return ( 
        <>
            <div>
                {cartList.map((product, index) => {
                    const dongia = product.dongia && typeof product.dongia === 'string'
                        ? parseFloat(product.dongia.replace(',', ''))
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
        </>
    );
}

export default Cart;
