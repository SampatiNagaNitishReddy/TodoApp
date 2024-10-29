import styles from "./todoitem.module.css";
export default function Todoitem({item,todos,settodos}){
    function handleDelete(item){
        settodos(todos.filter((todo)=> todo!==item));
    }
    function handleClick(name){
       settodos(todos.map((todo)=>todo.name===name ?{...todo,done:!todo.done}:todo))
    }
    const class1= item.done?styles.completed:"";
    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span  className={class1} onClick={()=>handleClick(item.name)}>{item.name}</span>
                <span>
                    <button  onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button>
                </span>
                </div>
            <hr className={styles.line}/>
        </div>
    );
}