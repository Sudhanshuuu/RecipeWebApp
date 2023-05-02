import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import '@splidejs/react-splide/css';


function Popular() {
    
    window.addEventListener("resize", () => {
        if(window.innerWidth>1282){
            setPerPage("4");
        }

        if(window.innerWidth<600){
            setPerPage("1");
        }
     
       else if(window.innerWidth<1024){
            setPerPage("2");
        }
       else if(window.innerWidth<1282){
            setPerPage("3");
        }
    });

    let [popular, setPopular] = useState([]);
    let [perPage, setPerPage] = useState("4");
    useEffect(() => { getPopular() }, []);

    const getPopular = async () => {
        let check = localStorage.getItem("popular");
        if (check) {
            setPopular(JSON.parse(check));
        }
        else {
            let api = await axios.get("https://api.spoonacular.com/recipes/random?apiKey=a9a77ac495a14fdf9b32cf25eee3c2d7&number=9");
            let data = api.data;
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data);
        }

    }


    return (
        <div className={styles["container"]}>
            <p>Popular Picks -</p>
            <Splide options={{
                perPage: perPage,
                arrows: false,
                drag: "free",
                gap: "1rem"
            }}>
                {
                    popular.map((p, index) => {
                        return (
                            <SplideSlide key={index}>
                                <Link to={`/recipe/${p.id}`}>
                                    <div className={styles["box"]}>
                                        <p>{p.title}</p>
                                        <img src={p.image} alt="PopularImg" />
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

export default Popular;