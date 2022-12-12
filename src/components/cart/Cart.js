import Box from "../utility/Box";
import Button from "../utility/Button";
import Modal from "../utility/Modal";
import data from "../../API/data";
import Info from "./Info";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const [showFields, setShowFields] = useState(false);
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);
  return (
    <Modal flag={props.showCart} modalHandler={props.setShowCart}>
      {props.quantities.length === 0 ? (
        <Box>Add Some Items</Box>
      ) : (
        <>
          <Box>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Quantity</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {props.quantities.map((item) => {
                  const dataInd = data.findIndex(
                    (i) => i.unique_id === item.unique_id
                  );
                  return (
                    <tr key={item.unique_id}>
                      <td>{data[dataInd].name}</td>
                      <td>{data[dataInd].cost}</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity * data[dataInd].cost}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
          <span className="cart-button-span">
            <Button
              onClick={() => {
                setShowFields(true);
              }}
            >
              Checkout
            </Button>
          </span>
          {showFields && <Info />}
        </>
      )}
    </Modal>
  );
}

export default Cart;
