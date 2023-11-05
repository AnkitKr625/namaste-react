import { useState } from "react";
import { LOGO_URL, LOGIN_BTN_TEXT } from "../utils/constant";
function Header() {
  const [btnText, setBtnText] = useState(LOGIN_BTN_TEXT.LOGIN);
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  setBtnText((prev) =>
                    prev === LOGIN_BTN_TEXT.LOGIN
                      ? LOGIN_BTN_TEXT.LOGOUT
                      : LOGIN_BTN_TEXT.LOGIN
                  );
                }}
              >
                {btnText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
