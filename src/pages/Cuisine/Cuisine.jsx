import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./Cuisine.module.css";
import { motion } from "framer-motion";

function Cuisine() {
    let para = useParams().type;
    let [cuisine, setCuisine] = useState([]);

    useEffect(() => {
        async function getCuisine() {
            let check = localStorage.getItem(`${para}`);
            if (!check) {
                let api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a9a77ac495a14fdf9b32cf25eee3c2d7&cuisine=${para}`);
                let data = api.data;
                localStorage.setItem(`${para}`, JSON.stringify(data.results));
                setCuisine(data.results);
            }
            else {
                setCuisine(JSON.parse(check));
            }
        }
        getCuisine();
    }, [para]);



    return (
        <motion.div className={styles["cuisine"]}

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>

            {cuisine.map((c, index) => {
                return (<Link to={`/recipe/${c.id}`} key={index} className={styles["cuisine-items"]}>
                    <img src={c.image} alt="cuisineImg" />
                    <p>- {c.title}</p>
                </Link>)
            })
            }

        </motion.div>
    )
}

export default Cuisine;