import React from "react";
import styles from "./Main.module.css";


function Main(){
    return <div className={styles['Main']}>
        <p>Recipe</p>
        <p>Therapie <span>&hearts;</span></p>
        <p>- A recipe is a story that ends with a good meal</p>
    
    </div>
}

export default Main;