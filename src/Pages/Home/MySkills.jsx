import { useRef } from "react";
import data from "../../data/index.json";
import {motion} from 'framer-motion'
export default function MySkills() {
const variants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.5
        }
    }
}
    const ref=useRef()
  return (
    <motion.section className="skills--section" id="mySkills" variants={variants} ref={ref}
    initial="initial" whileInView="animate">
      <motion.div className="portfolio--container" variants={variants}>
        <p className="section--title">My Skills</p>
        <h1 className="skills--section--heading">My Skills</h1>
      </motion.div>
      <motion.div className="skills--section--container"  variants={variants}>
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card"  >
            <div className="skills--section--img" >
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content" >
              <h3 className="skills--section--title" >{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
