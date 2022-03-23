import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/Screenshot 2022-03-22 141956.png";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="hero__banner" initial={{x: -500}} animate={{x: 0}} transition={{duration: 2}}>
        <h2>
          <span className="name">Godwin Docs</span> offers the link to the best cheatsheets from
          different blogs and also provide you the interview questions to ace
          your interview and land your dream job.
        </h2>
      </motion.div>
      <motion.div className="hero__img"
      initial={{x: 500}}
      animate={{x: 0, scale: 1.1}}
      transition={{duration: 2}}
      >
        <img src={heroImage} alt="hero image" />
      </motion.div>
    </div>
  );
};

export default Hero;
