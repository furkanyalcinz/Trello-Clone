import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "reactstrap";
import {ReturnTodoList} from "@/bussiness/TodoService"
const TodoList = (props) => {
    const cards = ReturnTodoList("1");
    return (
        <>
        <div style={{display: "flex"}}>
            <Button onClick={props.add}>Görev ekle</Button>
        <h2 style={{marginLeft: 10, textAlign:"center", color:"red"}}>Yapılacaklar</h2>
        </div>
        
        <div style={{display: "flex"}}>
        
        {cards.map((card)=>{
            return(<TodoCard  key={card.id}  title={card.title} description={card.description} expireDate={card.expireDate} taskStatu={card.taskStatu} />);
        })}
        </div>
        </>
    );
};

export default TodoList;