import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Navbar() {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <div className="nav-container">

                {/* Logo */}
                <a href="#home" className="logo">
                    <span>&lt;</span>
                    AKRITI
                    <span>/&gt;</span>
                </a>

                {/* Navigation */}
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Social icons */}
                <div className="nav-socials">
                    <a href="https://github.com/Akriti786" aria-label="GitHub">
                        <FiGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/akriti-a-036954253/?isSelfProfile=true" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>

                    <a href="akriti786shukla@gmail.com" aria-label="Email">
                        <FiMail />
                    </a>
                </div>

            </div>
        </motion.nav>
    );
}

export default Navbar;
