import {motion} from 'framer-motion'
import { useRef, useState } from 'react';
import Phone from '../components/Phone';
import emailjs from '@emailjs/browser';
export default function ContactMe() {
  const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}
    const ref=useRef()
    const formRef = useRef()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_i8ckid8', 'template_vlf87th', formRef.current, {
                publicKey: 'Lh_fDYdPkU2Ve_-Xm',
            })
            .then(
                () => {
                    setError(false)
                    setIsLoading(false); 
                    setSuccess(true)
                    const nameInput = document.getElementsByName('name')[0];
                    const emailInput = document.getElementsByName('email')[0];
                    const messageInput = document.getElementsByName('message')[0];
            
                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';
                },
                (error) => {
                    setError(true)
                    setErrMsg(error.text)
                    setIsLoading(false); 
                    setSuccess(false)
                },
                
            );
    };
  return (
    <motion.section id="Contact" className="contact--section"
     variants={variants} ref={ref}  initial="initial" whileInView="animate">
      <motion.div  variants={variants}>
        <motion.p className="sub--title"  variants={variants}>Get In Touch</motion.p>
        <motion.h2 className="skills--section--heading"  variants={variants}>Contact Me</motion.h2>
        <motion.p className="text-lg"  variants={variants}>
          Let's work together.
        </motion.p>
      </motion.div>
       <motion.div className="phoneSvg" initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }} transition={{ delay: 2, duration: 0.5 }} >
                        <Phone contactRef={ref} />
        </motion.div>
      <motion.form className="contact--form--container" onSubmit={sendEmail}
      initial={{ opacity: 0 }} ref={formRef} whileInView={{ opacity: 1 }} transition={{ delay: 3, duration: 0.5}}>
      
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md label-color">Name :</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="name" 
              placeholder="username"
              required
            />
          </label>
         <label htmlFor="email" className="contact--label">
            <span className="text-md label-color">Email :</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              placeholder="username@gmail.com"
              required
            />
          </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md label-color">Message :</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div className='submit-btn'>
          <button className="btn btn-primary contact--form--btn">{isLoading?
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="mingcuteLoadingFill0" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#fff" stop-opacity="0.55"/></linearGradient><linearGradient id="mingcuteLoadingFill1" x1="50%" x2="50%" y1="15.24%" y2="87.15%"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="100%" stop-color="#fff" stop-opacity="0.55"/></linearGradient></defs><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="url(#mingcuteLoadingFill0)" d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021" transform="translate(1.5 1.625)"/><path fill="url(#mingcuteLoadingFill1)" d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118" transform="translate(1.5 1.625)"/></g></svg>
  
          :'Submit'}</button>
              {error && <label className='error text-md'>{errMsg}</label>}
              {success&&<label className='text-md label-color'>Message sent successfully</label>}
        </div>
      </motion.form>
    </motion.section>
  );
}
