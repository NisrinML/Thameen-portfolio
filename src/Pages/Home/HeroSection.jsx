import { Link } from "react-scroll";
import { motion } from 'framer-motion'
export default function HeroSection() {
  
  return (
    <section id="heroSection" className="hero--section">
      <motion.div initial={{ opacity: 0, scale:0.5}} animate={{ opacity: 1, scale:1 }} transition={{ duration: 0.9 }}
      className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Thameen</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">WordPress Developer</span>{" "}
            <br />
            & QA Specialist
          </h1>
          <p className="hero--section-description">
        Software Engineer specializing in WordPress Development and QA. I build high-performance websites and ensure flawless functionality through automated/manual testing, blending technical precision with problem-solving to deliver bug-free digital experiences.  <br />
          </p>
        </div>
        <Link spy={true} smooth={true} style={{marginTop:'1rem'}} to="Contact" className="btn btn-primary">Get In Touch</Link>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale:0 }} animate={{ opacity: 1, scale:1}} transition={{ duration: 0.9 }}
      className="hero--section--img">
        <img src="./img/hero-img.png" alt="Hero Section" />
      </motion.div>
    </section>
  );
}
