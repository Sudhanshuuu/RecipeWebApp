import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";
import Italian from "./img/Italian.jpeg";
import Greek from "./img/Greek.jpeg";
import American from "./img/American.jpeg";
import Japanese from "./img/Japanese.webp";
import Thai from "./img/Thai.jpg";
import Indian from "./img/Indian.jpg";
import French from "./img/French.jpeg";

function Category() {
    return (
        <div className={styles["category"]}>
            <div className={styles["category-head"]}>
            <p>Categories :</p>
            <p>We provide a variety of food recipes with spectular taste</p>
            </div>
            <div >
                <div className={styles["category-content"]}>
                    <div>
                    <NavLink to={"./cuisine/Italian"}><div><p>Italian</p><img src={Italian} alt="italianFood"/></div></NavLink>
                    <NavLink to={"./cuisine/Greek"}><div><p>Greek</p><img src={Greek} alt="GreekFood"/></div></NavLink> 
                    <NavLink to={"./cuisine/American"}><div><p>American</p><img src={American} alt="AmericanFood"/></div></NavLink>
                    </div>
                    <div>
                    <NavLink to={"./cuisine/Thai"}><div><p>Thai</p><img src={Thai} alt="ThaiFood"/></div></NavLink>
                    <NavLink to={"./cuisine/Japanese"}><div><p>Japanese</p><img src={Japanese} alt="JapaneseFood"/></div></NavLink>
                    <NavLink to={"./cuisine/French"}><div><p>French</p><img src={French} alt="FrenchFood"/></div></NavLink>
                    <NavLink to={"./cuisine/Indian"}><div><p>Indian</p><img src={Indian} alt="IndianFood"/></div></NavLink>
                    </div>
        
                </div>
            </div>
        </div>)
}

export default Category;