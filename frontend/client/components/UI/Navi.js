import { useDispatch, useSelector } from "react-redux";
import {loginPageToggle,loggedin} from "@/redux/login";
import { Button, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import {signupPageToggle} from "@/redux/signup";
const Navi = (props) => {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state) => state.login);
    console.log(isLoggedIn);
  return (
    <>
      <Navbar>
        <NavbarBrand href="/">ZRELLO</NavbarBrand>
        <Nav>
          <NavItem>
            {isLoggedIn && (<Button onClick={()=>dispatch(loggedin())}>Çıkış</Button>)}
          </NavItem>
          <NavItem>
            {!isLoggedIn && <Button style={{ marginRight: 5 }} onClick={()=>dispatch(loginPageToggle())}>Log In</Button>}
          </NavItem>
          <NavItem>
          {!isLoggedIn && <Button onClick={()=>dispatch(signupPageToggle())}>Sign In</Button>}
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};
export default Navi;
