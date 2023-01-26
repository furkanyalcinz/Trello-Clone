
import Login from "../components/Login";
import Singup from "../components/Signup";
import TodoList from "@/components/Todo/TodoList";
import { useSelector } from "react-redux";
import background from '@/public/zeorbee.svg';
function HomePage() {
  const { loginPageIsOpen } = useSelector((state) => state.login);
  const {signUpPageIsOpen} = useSelector((state)=>state.signup);
  const {isLoggedIn} = useSelector((state)=> state.login);
  return (
    <div
					style={{
						backgroundImage: `url(${background})`,
						//   backgroundPosition: 'center',
						//   backgroundSize: 'cover',
						//   backgroundRepeat: 'no-repeat'
					}}
				>
      <Login isOpen={loginPageIsOpen} />
      <Singup isOpen={signUpPageIsOpen}/>
      {isLoggedIn && (<TodoList/>)}
    </div>
  );
}
export default HomePage;
