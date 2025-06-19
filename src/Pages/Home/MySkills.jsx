import { useRef } from "react";
import data from "../../data/index.json";
import { motion } from 'framer-motion'
export default function MySkills() {
  return (
    <motion.section
      className="skills--section"
      id="mySkills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 1 }}
    >
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h1 className="skills--section--heading">My Skills</h1>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <motion.div 
            key={index}
            className="skills--section--card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
