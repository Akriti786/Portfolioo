import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiLayers,
} from "react-icons/fi";

function About() {
  const stats = [
    {
      number: "2+",
      label: "Years Experience",
    },
    {
      number: "15+",
      label: "Projects Built",
    },
    {
      number: "10+",
      label: "Technologies",
    },
    {
      number: "100%",
      label: "Passion for Code",
    },
  ];

  const technologies = [
    {
      icon: <FiCode />,
      title: "Frontend",
      text: "React, JavaScript, HTML, CSS",
    },
    {
      icon: <FiServer />,
      title: "Backend",
      text: "Node.js, Express, REST APIs",
    },
    {
      icon: <FiDatabase />,
      title: "Database",
      text: "MongoDB, Mongoose",
    },
    {
      icon: <FiLayers />,
      title: "Architecture",
      text: "MERN, Context API, JWT",
    },
  ];

  return (
    <section id="about" className="about-section">

      <div className="section-container">

        {/* Section heading */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>
        </motion.div>

        {/* About content */}

        <div className="about-grid">

          {/* Left */}

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p>
              I'm a Full Stack Developer passionate about building
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              I enjoy working across the entire development process —
              from creating beautiful interfaces with React to building
              reliable backend APIs with Node.js and Express.
            </p>

            <p>
              My goal is to create applications that are not only
              visually appealing but also clean, scalable and easy
              to maintain.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            className="about-tech"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {technologies.map((technology, index) => (
              <motion.div
                className="tech-card"
                key={technology.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >

                <div className="tech-icon">
                  {technology.icon}
                </div>

                <div>
                  <h3>{technology.title}</h3>

                  <p>{technology.text}</p>
                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* Stats */}

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {stats.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <h3>{stat.number}</h3>

              <p>{stat.label}</p>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default About;