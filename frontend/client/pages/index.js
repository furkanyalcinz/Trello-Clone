import Navi from "@/components/UI/Navi";
import Login from "../components/Login";
import Singup from "../components/Signup";
import TodoList from "@/components/Todo/TodoList";
import { useSelector } from "react-redux";
function HomePage() {
  const { loginPageIsOpen } = useSelector((state) => state.login);
  const {signUpPageIsOpen} = useSelector((state)=>state.signup);
  const {isLoggedIn} = useSelector((state)=> state.login);
  return (
    <>
      <Login isOpen={loginPageIsOpen} />
      <Singup isOpen={signUpPageIsOpen}/>
      {isLoggedIn && (<TodoList/>)}
    </>
  );
}
export default HomePage;
