import React from "react";
import Contact from "../../components/Contact/Contact.js";
import NonVeggies from "../../components/NonVeggies/NonVeggies.jsx";
import Veggies from "../../components/Veggies/Veggies.jsx";
import Popular from "../../components/Popular/Popular.jsx";
import Category from "../../components/Category/Category.jsx";
import Main from "../../components/Main/Main.jsx";
import { motion } from "framer-motion";
import styles from "./Home.module.css";



function Home() {
  return( <motion.div
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    exit={{ opacity: 0 }}

  >
    <Main />
    <Category />
    <div className={styles["popular"]}>
      <Popular />
      <Veggies />
      <NonVeggies />
    </div>
    <Contact />

  </motion.div>)
}

export default Home;