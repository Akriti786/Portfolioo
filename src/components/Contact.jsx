import { motion } from "framer-motion";

import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiSend,
} from "react-icons/fi";

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">

                {/* Heading */}

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-label">
                        CONTACT
                    </p>

                    <h2>
                        Let's build something <span>great.</span>
                    </h2>

                    <p className="section-subtitle">
                        Have a project, opportunity or idea?
                        I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Contact Layout */}

                <div className="contact-grid">

                    {/* Contact Information */}

                    <motion.div
                        className="contact-info"
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <div className="contact-info-header">
                            <h3>Get in touch</h3>

                            <p>
                                I'm always open to discussing new
                                projects, opportunities and ideas.
                            </p>
                        </div>

                        {/* Email */}

                        <a
                            href="mailto:akriti786shukla@gmail.com"
                            className="contact-item"
                        >
                            <div className="contact-icon">
                                <FiMail />
                            </div>

                            <div>
                                <span>Email</span>
                                <strong>
                                    akriti786shukla@gmail.com
                                </strong>
                            </div>
                        </a>

                        {/* Phone */}

                        <a
                            href="tel:+916360194063"
                            className="contact-item"
                        >
                            <div className="contact-icon">
                                <FiPhone />
                            </div>

                            <div>
                                <span>Phone</span>
                                <strong>
                                    +91 63601 94063
                                </strong>
                            </div>
                        </a>

                        {/* Location */}

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FiMapPin />
                            </div>

                            <div>
                                <span>Location</span>
                                <strong>
                                    India
                                </strong>
                            </div>
                        </div>

                        {/* Social Links */}

                        <div className="contact-socials">

                            <a href="https://github.com/Akriti786" aria-label="GitHub">
                                <FiGithub />
                            </a>

                            <a href="https://www.linkedin.com/in/akriti-a-036954253/?isSelfProfile=true" aria-label="LinkedIn">
                                <FiLinkedin />
                            </a>

                        </div>

                    </motion.div>

                    {/* Contact Form */}

                    <motion.form
                        className="contact-form"
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >

                        {/* Name */}

                        <div className="form-group">
                            <label htmlFor="name">
                                Your Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}

                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message */}

                        <div className="form-group">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        {/* Button */}

                        <motion.button
                            type="submit"
                            className="contact-submit"
                            whileHover={{
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >
                            Send Message
                            <FiSend />
                        </motion.button>

                    </motion.form>

                </div>
            </div>
        </section>
    );
}

export default Contact;
