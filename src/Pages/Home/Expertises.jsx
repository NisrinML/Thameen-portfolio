import { motion } from 'framer-motion'
import data from "../../data/index.json";

export default function Expertises() {
  return (
    <motion.section 
      className="testimonial--section" 
      id="myExpertises"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 1 }}
    >
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Expertises</p>
          <h2 className="section--heading skills--section--heading">Work Experiences</h2>
        </div>
      </div>
      
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <motion.div 
            key={index}
            className="testimonial--section--card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration:0.5, delay: index * 0.3 }}
          >
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div className="testimonial--section--card--content">
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
                <a href={item.url} target="_blank" className="testimonial--author--url">
                  Visit Us
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}