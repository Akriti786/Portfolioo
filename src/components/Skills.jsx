import { motion } from "framer-motion";

import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiSmartphone,
} from "react-icons/fi";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      description: "Building modern web and mobile applications.",
      icon: <FiCode />,
      level: 90,
      skills: [
        "React.js",
        "React Native",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
    },

    {
      title: "Backend",
      description: "Creating APIs and server-side applications.",
      icon: <FiServer />,
      level: 85,
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "JWT",
        "Authentication",
      ],
    },

    {
      title: "Database",
      description: "Working with data storage and database operations.",
      icon: <FiDatabase />,
      level: 80,
      skills: [
        "MongoDB",
        "Mongoose",
        "CRUD Operations",
        "Database Design",
      ],
    },

    {
      title: "Tools",
      description: "Tools I use for development and API testing.",
      icon: <FiTool />,
      level: 85,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "NPM",
      ],
    },

    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native.",
      icon: <FiSmartphone />,
      level: 85,
      skills: [
        "React Native",
        "Expo",
        "Expo Router",
        "JavaScript",
        "BLE",
        "Supabase",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">MY SKILLS</p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <p className="section-subtitle">
            A collection of technologies and tools I use to build
            modern, scalable and user-friendly applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
            >
              {/* Icon */}
              <div className="skill-icon">
                {group.icon}
              </div>

              {/* Title */}
              <h3>{group.title}</h3>

              {/* Description */}
              <p className="skill-description">
                {group.description}
              </p>

              {/* Skill Tags */}
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill Level */}
              <div className="skill-level">

                <div className="skill-level-header">
                  <span>Experience</span>
                  <span>{group.level}%</span>
                </div>

                <div className="skill-progress">
                  <motion.div
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${group.level}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3 + index * 0.1,
                    }}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Technology Strip */}
        <motion.div
          className="skills-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>TECH STACK</span>

          <div className="skills-strip-items">
            <div>React</div>
            <div>JavaScript</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>MongoDB</div>
            <div>Git</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;