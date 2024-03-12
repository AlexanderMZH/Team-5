import { useSelector } from "react-redux";
import "./style.scss";

const Cart = () => {
  const { cartData } = useSelector((state: any) => state.cart);

  console.log(cartData);

  return <h1>here is cart</h1>;
};

export default Cart;
