import React from "react";
import { useStateValue } from "../DataProvider/StateProvider";
import "./BasketItem.css";

const BasketItem = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="baskeiItem">
      <img className="basketItem_image" src={image} alt="" />
      <div className="basketItem_info">
        <p className="baskeiItem_title">{title}</p>
        <p className="baskeiItem_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Quitar de la cesta</button>
      </div>
    </div>
  );
};

export default BasketItem;
