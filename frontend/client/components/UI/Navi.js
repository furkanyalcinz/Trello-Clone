import { useDispatch, useSelector } from "react-redux";
import {loginPageToggle,loggedin} from "@/redux/login";
import { Button, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import {signupPageToggle} from "@/redux/signup";
const Navi = (props) => {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state) => state.login);
  return (
    <>
      <Navbar style={{backgroundColor:"rgb(130, 0, 0)"}}>
        <NavbarBrand style={{color:"rgb(250, 236, 214)"}} href="/"><img alt="logo" src="/zeorbee.svg" style={{height:40, width:70}}/></NavbarBrand>
        <Nav>
          <NavItem>
            {isLoggedIn && (<Button style={{backgroundColor:"rgb(78, 108, 80)"}} onClick={()=>dispatch(loggedin())}>Çıkış</Button>)}
          </NavItem>
          <NavItem>
            {!isLoggedIn && <Button style={{ marginRight: 5, backgroundColor:"rgb(242, 222, 186)", color:"rgb(130, 0, 0)" }} onClick={()=>dispatch(loginPageToggle())}>Giriş</Button>}
          </NavItem>
          <NavItem>
          {!isLoggedIn && <Button style={{backgroundColor:"rgb(250, 236, 214)", color:"rgb(130, 0, 0)"}} onClick={()=>dispatch(signupPageToggle())}>Kayıt ol</Button>}
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};
export default Navi;
