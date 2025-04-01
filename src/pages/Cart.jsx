import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleDraw } from "../redux/slice/cart.slice";

const Cart = ({ isDrawVisiable }) => {
  const { arrCart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(toggleDraw());
  };

  console.log(arrCart);

  return (
    <Drawer title="Basic Drawer" onClose={onClose} open={isDrawVisiable}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Cart;
