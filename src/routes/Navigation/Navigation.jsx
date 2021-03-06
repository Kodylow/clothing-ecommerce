import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../context/User.context";
import { CartContext } from "../../context/Cart.context";

import CartIcon from "../../components/Cart/CartIcon/CartIcon";
import CartDropdown from "../../components/Cart/CartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN-OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
