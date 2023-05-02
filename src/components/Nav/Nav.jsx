import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';

function moveUp() {
    window.scroll({ top: 0, behavior: "smooth" });
}

let moveDown = (e)=> {
    if (e.target.innerHTML == "Categories") {
        window.scroll({ top: 650, behavior: "smooth" });
    }

    else if (e.target.innerHTML == "Popular") {
        window.scroll({ top: 1300, behavior: "smooth" });
    } 
    else if (e.target.innerHTML == "Service") {
        window.scroll({ top:2000, behavior: "smooth" });
    } 
}

function Nav() {
    return (<div className="head">
        <div>&hearts;</div>
        <div className="nav">
            <div onClick={moveUp}><NavLink to={"./"} >Home</NavLink></div>
            <div onClick={moveDown}><NavLink to={"./"}>Categories</NavLink></div>
            <div onClick={moveDown}><NavLink to={"./"}>Popular</NavLink></div>
            <div onClick={moveDown}><NavLink to={"./"}>Service</NavLink></div>
        </div>
    </div>
    )
}

export default Nav;