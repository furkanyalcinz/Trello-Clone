import React from "react";

import { Button, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
const Navi = (props) => {
  return (
    <>
      <Navbar>
        <NavbarBrand href="/">ZRELLO</NavbarBrand>
        <Nav>
          <NavItem>
            
            {props.isLoggedInInfo && (
              <Button onClick={props.logOut}>Çıkış</Button>
            )}
          </NavItem>
          <NavItem>
            {!props.isLoggedInInfo && (
              <Button style={{ marginRight: 5 }} onClick={props.onLogin}>
                Log In
              </Button>
            )}
          </NavItem>
          <NavItem>
            {!props.isLoggedInInfo && (
              <Button onClick={props.onSignin}>Sign In</Button>
            )}
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};
export default Navi;
