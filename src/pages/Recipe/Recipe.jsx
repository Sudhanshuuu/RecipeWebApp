import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import styles from "./Recipe.module.css";

function Recipe() {

    let para = useParams().id;
    let [details, setDetails] = useState({});
    let [active, setActive] = useState("instructions");

    useEffect(() => {
        let getRecipe = async () => {
            let api = await axios.get(`https://api.spoonacular.com/recipes/${para}/information?apiKey=a9a77ac495a14fdf9b32cf25eee3c2d7`);
            let data = api.data;
            setDetails(data);
        }
        getRecipe()
    }, [para]);



    return (
        <motion.div className={styles["box"]}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5}}
        >
            <div className={styles["recipe-container"]}>

                <div className={styles["recipe-intro"]}>
                    <p>{details.title}</p>
                    <img src={details.image} alt="recipeImg" />
                </div>
                <div className="recipe-content">

                    <button onClick={() => { setActive("instructions") }}>Summary</button>
                    <button onClick={() => { setActive("ingredients") }}>Ingredients</button>
                    {active === "instructions" ? (<div><p dangerouslySetInnerHTML={{ __html: details.summary }}></p><p dangerouslySetInnerHTML={{ __html: details.instructions }}></p></div>) : (<ul> {details.extendedIngredients.map((i, index) => { return <li key={index}>{i.original}</li> })}</ul>)}



                </div>
            </div>
        </motion.div>);
}

export default Recipe;