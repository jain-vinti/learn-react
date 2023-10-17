import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loggedInState, setLoggedInState] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="header-option">Home</li>
          <li className="header-option">About Us</li>
          <li className="header-option">Contact Us</li>
          <li className="header-option">Cart</li>
          <li
            className="header-option"
            onClick={() => setLoggedInState(!loggedInState)}
          >
            {loggedInState ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
