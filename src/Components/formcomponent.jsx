import styles from "./form.module.css";
import { useState } from "react";
export default function Formcomponent({todos,settodos}){
    const[todo,settodo]=useState({name:"",done:false});
    function handlesubmit(e){
        e.preventDefault();
        settodos([...todos,todo]);
        settodo({name:"",done:false});
    }
    return(
        <form className={styles.todoform} onSubmit={handlesubmit}>
            <div className={styles.inputContainer}>
            <input className={styles.modernInput}onChange={(e)=>settodo({name:e.target.value})} type="text" value={todo.name} placeholder="Enter Todo item"/>
            <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    )
}