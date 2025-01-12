"use client"
import { useState } from 'react';
import styles from './contactForm.module.css';
import TypedWrapper from '@/components/gadgets/Typed';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting ] = useState(false);
  const [responseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <section>

      <div className={styles.contactformcontainer}>
        <h2>
          <div className={styles.typedWrapper}>

            <TypedWrapper strings={["Contact Me", "Lets Connect"]} />
          </div>
        </h2>
        <form  className={styles.contactform}>
          <div className={styles.formgroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.button}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {responseMessage && <p className={styles.responsemessage}>{responseMessage}</p>}

      </div>
      <div className={styles.contactlinkscontainer}>
        <h2>
        <div className={styles.typedWrapper}>

<TypedWrapper strings={["Hire me", "Lets talk"]} />
</div>
        </h2>


        <div className={styles.contactlinks}>


        <Link 
        href="https://www.linkedin.com/in/muhammad-ashar-827262320" 
        target="_blank" 
        className={styles.contactlink}
      >
        <FaLinkedin className={styles.contacticon} />
        LinkedIn
      </Link>
      <Link 
        href="mailto:azhar.jang@gmail.com" 
        className={styles.contactlink}
      >
        <FaEnvelope className={styles.contacticon} />
        azhar.jang@gmail.com
      </Link>
        </div>
      </div>
    </section>

  );
};

export default ContactForm;
