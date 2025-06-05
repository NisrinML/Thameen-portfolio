import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
export default function AboutMe() {
const variants = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1
        }
    }
}
  const ref = useRef()
  return (
    <motion.section id="AboutMe" className="about--section" 
    variants={variants} ref={ref} initial="initial" whileInView="animate">
      <motion.div  variants={variants}
      className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </motion.div>
      <motion.div  variants={variants}
      className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
           Software Engineer specializing in WordPress development, data analysis, and machine learning.
           I build responsive, user-centric web solutions while leveraging data-driven insights to create impactful applications. 
        
             Passionate about merging technical expertise with innovation to solve real-world problems and deliver measurable results.
              Always exploring cutting-edge technologies to drive meaningful solutions.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
