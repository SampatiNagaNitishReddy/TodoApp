import { useState } from "react";
import Formcomponent from "./formcomponent";
import Todolist from "./todoslist";
import Footer from "./footer";
export default function Todo(){
    const[todos,settodos]=useState([]);
    const completedTodos=(todos.filter((todo)=>todo.done)).length
    const totalTodos=todos.length;
    return(
        <div>
            <Formcomponent todos={todos} settodos={settodos}/>
            <Todolist todos={todos} settodos={settodos}/>
            <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </div>
    );
}