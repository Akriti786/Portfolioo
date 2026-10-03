import { motion } from "framer-motion";
import {
    FiBriefcase,
    FiCalendar,
    FiCheck,
} from "react-icons/fi";

function Experience() {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Your Current Company",
            period: "2025 — Present",
            description:
                "Working on full-stack web applications and developing modern, responsive solutions using JavaScript technologies.",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
            responsibilities: [
                "Developed responsive React applications.",
                "Created and integrated REST APIs.",
                "Worked with MongoDB and Mongoose.",
                "Implemented authentication and authorization.",
            ],
        },

        {
            role: "Software Developer Intern",
            company: "Your Internship Company",
            period: "2023",
            description:
                "Started my software development journey through an internship, gaining practical experience in web development and modern JavaScript technologies.",
            technologies: [
                "JavaScript",
                "React.js",
                "HTML5",
                "CSS3",
            ],
            responsibilities: [
                "Built and maintained reusable frontend components.",
                "Integrated APIs into web applications.",
                "Worked on responsive user interfaces.",
                "Learned Git, GitHub and software development practices.",
            ],
        },
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">

                {/* Heading */}

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-label">
                        EXPERIENCE
                    </p>

                    <h2>
                        My professional <span>journey.</span>
                    </h2>

                    <p className="section-subtitle">
                        A timeline of my experience, projects,
                        responsibilities and technologies I've worked with.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="experience-timeline">

                    {/* Timeline Line */}

                    <div className="timeline-line"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            className={`experience-item ${index % 2 === 0
                                ? "experience-left"
                                : "experience-right"
                                }`}
                            key={experience.role}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                            }}
                        >

                            {/* Timeline Dot */}

                            <motion.div
                                className="timeline-dot"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.2 + 0.2,
                                }}
                            >
                                <FiBriefcase />
                            </motion.div>

                            {/* Experience Card */}

                            <motion.div
                                className="experience-card"
                                whileHover={{
                                    y: -8,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                            >

                                <div className="experience-top">

                                    <div>
                                        <h3>{experience.role}</h3>

                                        <p className="experience-company">
                                            {experience.company}
                                        </p>
                                    </div>

                                    <div className="experience-date">
                                        <FiCalendar />
                                        <span>{experience.period}</span>
                                    </div>

                                </div>

                                <p className="experience-description">
                                    {experience.description}
                                </p>

                                {/* Responsibilities */}

                                <div className="responsibilities">

                                    {experience.responsibilities.map(
                                        (item) => (
                                            <div
                                                className="responsibility"
                                                key={item}
                                            >
                                                <FiCheck />
                                                <span>{item}</span>
                                            </div>
                                        )
                                    )}

                                </div>

                                {/* Technologies */}

                                <div className="experience-technologies">

                                    {experience.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}

                                </div>

                            </motion.div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Experience;