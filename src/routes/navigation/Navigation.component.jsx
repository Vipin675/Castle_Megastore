import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/Cart-icon.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

// /////////////////////////////////////////////////////

// import { UserContext } from "../../contexts/user.context";
import { selectCurrentUser } from "../../store/user/user.selector";

// import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

// /////////////////////////////////////////////////////

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/Cart-dropdown.component";

// Styled Components :
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div className="logo">
            <CrwnLogo />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
