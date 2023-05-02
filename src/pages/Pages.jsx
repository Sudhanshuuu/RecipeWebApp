import Home from "./Home/Home.jsx";
import Cuisine from "./Cuisine/Cuisine.jsx";
import Recipe from "./Recipe/Recipe.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {

    const location = useLocation();
    return (
        <AnimatePresence >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/recipe/:id" element={<Recipe/>}/>
            </Routes>
        </AnimatePresence>

    )
}

export default Pages;