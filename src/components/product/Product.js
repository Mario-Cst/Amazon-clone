import React from "react";
import { useStateValue } from "../DataProvider/StateProvider";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  //console.log("this is the basket >>>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <img className="product_image" alt="" src={image} />
        <button className="product_button" onClick={addToBasket}>
          Añade a la cesta
        </button>
      </div>
    </div>
  );
};

export default Product;
