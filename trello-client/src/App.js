import React, { useState, useEffect } from "react";
import Navi from "./components/UI/Navi";
import Login from "./components/User/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/User/SignIn";
import TodoCard from "./components/UI/TodoCard";
function App() {
  const DUMMY_USERS = [
    {
      id: "e1",
      fullname: "Furkan Yalçın",
      email: "furkanyalcin@outlook.com",
      password: "123456",
    },
  ];
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUser = (user) => {
    setUsers([user, ...DUMMY_USERS]);
  };

  // Login page
  /**************/

  // is loggedin state
  const storedLoggedInInformation = localStorage.getItem("isLoggedin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (storedLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, [storedLoggedInInformation]);

  const logOut = () => {
    localStorage.removeItem("isLoggedin");
    setIsLoggedIn(false);
  };
  //***************/
  const [userLoginPage, setUserLoginPage] = useState(false);
  const onPageLogin = () => {
    setUserLoginPage(true);
  };
  const onCloseLoginModal = () => {
    setUserLoginPage(false);
  };
  const loginHandler = (email, password) => {
    const isLoggin = users.map((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }
      return false;
    });
    if(isLoggin[0]){
      localStorage.setItem("isLoggedin", "1");
      onCloseLoginModal();
      return true;
    };
    return false;
  };

  // Signin modal **********
  const [singInPage, setSignInPage] = useState(false);
  const openCloseSingInPage = () => {
    setSignInPage(!singInPage);
  };

  return (
    <>
      <Navi
        onLogin={onPageLogin}
        onSignin={openCloseSingInPage}
        isLoggedInInfo={isLoggedIn}
        logOut={logOut}
      />
      {userLoginPage && (
        <Login
          isOpen={userLoginPage}
          onCloseLoginModal={onCloseLoginModal}
          onLoggedin={loginHandler}
        />
      )}
      {singInPage && (
        <SignIn
          isOpen={singInPage}
          closePage={openCloseSingInPage}
          addUser={addUser}
        />
      )}
      {isLoggedIn && <TodoCard/>}
    </>
  );
}

export default App;
