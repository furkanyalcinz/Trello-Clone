import React, { useState, useEffect } from "react";
import Navi from "./components/UI/Navi";
import Login from "./components/User/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/User/SignIn";
import TodoList from "./components/Todo/TodoList";

import AddTodo from "./components/Todo/AddTodo";
function App() {
  const DUMMY_USERS = [
    {
      id: "e1",
      fullname: "Furkan Yalçın",
      email: "furkanyalcin@outlook.com",
      password: "123456",
    },
  ];
  const DUMMY_TODOS = [
    {
      id:"c1",
      title:"Test",
      description: "test test testest.",
      expireDate:"22/01/2023",
      taskStatu :"1"
    },
    {
      id:"c2",
      title:"Test2",
      description: "test test testest.",
      expireDate:"22/01/2023",
      taskStatu :"1"
    },
  ];
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const addTodo = (todo) => {

    setTodos([todo, ...DUMMY_TODOS]);
    addTodoModalHandler();
  };
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

  // add new todo

  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const addTodoModalHandler = () => {setIsAddingTodo(!isAddingTodo)};
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
      {/* {isLoggedIn && (<Button onClick={addTodoModalHandler} style={{margin:"30px"}}>Görev Ekle</Button>)} */}
      {isLoggedIn && isAddingTodo && (<AddTodo isOpen={isAddingTodo} close={addTodoModalHandler} add={addTodo}/>)}
      {isLoggedIn && (<TodoList add={addTodoModalHandler} cards={todos}/>)}
    </>
  );
}

export default App;
