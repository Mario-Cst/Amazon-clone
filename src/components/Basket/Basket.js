import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../DataProvider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./Basket.css";

const Basket = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="basket">
      <div className="basket_left">
        <img
          className="basket_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt=""
        />
        <div className="basket_title">
          <h2>Tu carrito de la compra</h2>

          {basket.map((item) => (
            <BasketItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* <BasketItem /> */}
        </div>
      </div>
      <div className="basket_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Basket;
