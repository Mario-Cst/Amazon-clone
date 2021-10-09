import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../DataProvider/StateProvider";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    const auth = getAuth();
    if (user) {
      signOut(auth);
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hola </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sing In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Retornos</span>
          <span className="header_optionLineTwo">& Pedidos</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/basket">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
