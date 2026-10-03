import { motion } from "framer-motion";
import {
    FiArrowDown,
    FiGithub,
    FiLinkedin,
    FiMail,
} from "react-icons/fi";

function Hero() {
    return (
        <section id="home" className="hero">

            {/* Animated background */}
            <div className="hero-glow glow-one"></div>
            <div className="hero-glow glow-two"></div>

            <div className="hero-container">

                {/* Left content */}
                <div className="hero-content">

                    <motion.p
                        className="hero-small-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        HELLO, I'M
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Akriti A
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        I build modern, scalable and user-focused web
                        applications using React, Node.js, Express and MongoDB.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.65 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <FiArrowDown />
                        </a>

                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <a href="#">
                            <FiGithub />
                        </a>

                        <a href="#">
                            <FiLinkedin />
                        </a>

                        <a href="#">
                            <FiMail />
                        </a>
                    </motion.div>

                </div>

                {/* Right visual */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >

                    <motion.div
                        className="code-card"
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >

                        <div className="code-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="code-content">
                            <p>
                                <span className="purple">const</span>{" "}
                                developer = {"{"}
                            </p>

                            <p className="indent">
                                name: <span className="green">"Akriti"</span>,
                            </p>

                            <p className="indent">
                                role: <span className="green">"Full Stack Developer"</span>,
                            </p>

                            <p className="indent">
                                skills: [
                            </p>

                            <p className="indent-more">
                                <span className="green">"React"</span>,
                            </p>

                            <p className="indent-more">
                                <span className="green">"Node.js"</span>,
                            </p>

                            <p className="indent-more">
                                <span className="green">"MongoDB"</span>
                            </p>

                            <p className="indent">
                                ]
                            </p>

                            <p>
                                {"}"};
                            </p>
                        </div>

                    </motion.div>

                    {/* Floating circles */}
                    <motion.div
                        className="floating-circle circle-one"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="floating-circle circle-two"
                        animate={{
                            y: [0, 20, 0],
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;