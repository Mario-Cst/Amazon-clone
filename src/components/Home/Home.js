import React from "react";
import Product from "../product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
          src="https://scontent-mad1-1.xx.fbcdn.net/v/t31.18172-8/28947215_1232612280204459_3998901684201658441_o.png?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=n5Zz9mWRBpoAX8-3KVP&_nc_ht=scontent-mad1-1.xx&oh=0412aaf3393dddb22b050521f0d5ec20&oe=6173A849"
        />
        <div className="home_row">
          <Product
            id="123456"
            title="God Of War"
            price={65.35}
            image="https://cf.geekdo-images.com/9teuz6hO5dK_rSGzQ86oiQ__opengraph/img/uQcuCrXX4WsvYoLy6nY69zuKhms=/fit-in/1200x630/filters:strip_icc()/pic4694072.png"
            rating={3}
          />
          <Product
            id="234567"
            title="PlayStation 5"
            price={500}
            image="https://theshopgamer.com/34618-large_default/ps5-nuevo-chasis-juego-ghost-of-tsushima-directors-cut-3-meses-playstation-now-playstation-5.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="234557"
            title="X-Box Serie X"
            price={510}
            image="https://es.static.webuy.com/product_images/Juegos/Xbox%20Series%20Consolas/SXSX1TBB001_l.jpg"
            rating={4}
          />
          <Product
            id="294557"
            title="Nintendo Switch"
            price={310}
            image="https://m.media-amazon.com/images/I/51gTnNRY2XL._AC_SX679_.jpg"
            rating={3}
          />
          <Product
            id="291557"
            title="Iphone 13 Pro"
            price={1250}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="297157"
            title="Sony Bravia"
            price={2270}
            image="https://m.media-amazon.com/images/I/91ADOxkYOfL._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
