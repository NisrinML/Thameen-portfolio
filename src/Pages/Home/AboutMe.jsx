import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react';
import data from "../../data/index.json";
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
  const [about,setAbout]=useState(data.about[0])
  var currentIndex=-1;
  const getNextValue=(array)=> {
  if (array.length === 0) return null; 
  currentIndex = (currentIndex + 1) % array.length;
  setAbout(array[currentIndex]);
  console.log(currentIndex)
}
  return (
    <motion.section id="AboutMe" className="about--section" 
    variants={variants} ref={ref} initial="initial" whileInView="animate">
      <motion.div  variants={variants}
      className="about--section--img">
        <img src={about.img} alt="About Me" />
      </motion.div>
      <motion.div  variants={variants}
      className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
          {about.text}
          </p>
        </div>
      </motion.div>
         <motion.div  variants={variants} onClick={()=>getNextValue(data.about)}
      className="about--section--arrow">
        <svg width="28" height="46" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 43L25 23L3 3" stroke="#006B6A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </motion.div>
    </motion.section>
  );
}
