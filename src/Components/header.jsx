import styles from"./header.module.css"
export default function Header(){
    return(
        <div>
            <h1 className={styles.header}>Todo App</h1>
        </div>
    );
}