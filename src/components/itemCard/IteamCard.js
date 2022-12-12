import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Box from "../utility/Box";
import Button from "../utility/Button";

function IteamCard(props) {
  const { quantities, setQuantities } = props;
  const imgLink = props.img;
  const [quantity, setQuantity] = useState(0);

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    cartCtx.changeitems(quantity, props.unique_id);
    var indIfExists = quantities.findIndex(
      (product) => product.unique_id === props.unique_id
    );
    if (quantity === 0) {
      if (indIfExists !== -1) {
        setQuantities((prev) => {
          return prev.filter((i) => i.unique_id !== props.unique_id);
        });
      }
    } else {
      if (indIfExists !== -1)
        setQuantities((prev) => {
          prev[indIfExists].quantity = quantity;
          return prev;
        });
      else {
        setQuantities((prev) => {
          prev.push({ unique_id: props.unique_id, quantity: 1 });
          return prev;
        });
      }
    }
  }, [quantity]);

  function onIncrease() {
    if (quantity === props.limit) return;
    setQuantity((prev) => prev + 1);
  }

  function onDecrease() {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <Box className="box-shadow hover-increase-size">
      <img className="iteam-card-img" src={imgLink} alt="IteamCard" />
      <div className="flex-row" style={{ justifyContent: "space-between" }}>
        <h1>{props.name}</h1>
        <h3>
          {props.cur} {props.cost}
        </h3>
      </div>
      <div className="flex-row">
        <Button onClick={onDecrease} disabled={quantity === 0 ? true : false}>
          -
        </Button>
        {quantity}
        <Button
          onClick={onIncrease}
          disabled={quantity === props.limit ? true : false}
        >
          +
        </Button>
      </div>
    </Box>
  );
}

export default IteamCard;
