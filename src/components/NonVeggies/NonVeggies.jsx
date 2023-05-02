import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./NonVeggies.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';



function NonVeggies() {


    window.addEventListener("resize", () => {

        if (window.innerWidth < 1282) {
            setPerPage("1");
        }
        else{
            setPerPage("2");
        }
    });

    let [NonVeggies, setNonVeggies] = useState([]);
    let [perPage, setPerPage] = useState("2");

    useEffect(() => { getNonVeggies() }, []);

    const getNonVeggies = async () => {
        let check = localStorage.getItem("NonVeggies");
        if (check) {
            setNonVeggies(JSON.parse(check));
        }
        else {
            let api = await axios.get("https://api.spoonacular.com/recipes/random?apiKey=a9a77ac495a14fdf9b32cf25eee3c2d7&number=9&tags=meat");
            let data = api.data;
            localStorage.setItem("NonVeggies", JSON.stringify(data.recipes));
            setNonVeggies(data.recipes);
            console.log(data);
        }

    }


    return (
        <div className={styles["container"]}>
            <p>NonVeg Picks -</p>
            <Splide options={{
                perPage: perPage,
                arrows: false,
                drag: "free",
                gap: "1vw"
            }}>
                {
                    NonVeggies.map((p, index) => {
                        return (
                            <SplideSlide key={index}>
                                <Link to={`/recipe/${p.id}`}>
                                    <div className={styles["box"]}>
                                        <div className={styles["gradient-box"]}></div>
                                        <p>{p.title}</p>
                                        <img src={p.image} alt="NonVeggiesImg" />
                                    </div>
                                </Link>

                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>


    )

}

export default NonVeggies;