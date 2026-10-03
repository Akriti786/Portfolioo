import { motion } from "framer-motion";

import {
    FiGithub,
    FiExternalLink,
    FiArrowUpRight,
} from "react-icons/fi";

function Projects() {
    const projects = [
        {
            title: "Developer Portfolio",
            category: "React Web Application",
            description:
                "A modern and responsive developer portfolio showcasing professional experience, technical skills and projects.",
            technologies: [
                "React.js",
                "JavaScript",
                "Framer Motion",
                "CSS3",
            ],
            image:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
            github: "https://github.com/Akriti786/my-portfolio",
            demo: "https://my-portfolio-chi-cyan-56.vercel.app/",
        },

        {
            title: "What To Watch",
            category: "React Web Application",
            description:
                "A movie discovery application where users can search for movies, explore content and find something interesting to watch.",
            technologies: [
                "React.js",
                "JavaScript",
                "REST API",
                "CSS3",
            ],
            image:
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
            github: "https://github.com/Akriti786/WTW-advance",
            demo: "#",
        },

        {
            title: "Weather Web App",
            category: "React Web Application",
            description:
                "A responsive weather application that allows users to search locations and view weather information using a weather API.",
            technologies: [
                "React.js",
                "JavaScript",
                "Weather API",
                "CSS3",
            ],
            image:
                "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80",
            github: "https://github.com/Akriti786/Weather-Web",
            demo: "https://weathers-app-six.vercel.app/",
        },

        {
            title: "BLE Health Monitoring App",
            category: "React Native Application",
            description:
                "A health monitoring mobile application that connects with a BLE wearable device and displays real-time health and activity data.",
            technologies: [
                "React Native",
                "Expo",
                "BLE",
                "JavaScript",
                "Supabase",
            ],
            image:
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
            github: "#",
            demo: "#",
        },

        {
            title: "Food Delivery Website",
            category: "MERN Full Stack Application",
            description:
                "A full-stack food delivery platform with customer, restaurant, delivery and admin workflows, including menus, cart, orders and order management.",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
            ],
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
            github: "https://github.com/Akriti786/Food-Delivery-Web",
            demo: "#",
        },

        {
            title: "Recipe Making App",
            category: "React Native Application",
            description:
                "A recipe application that allows users to discover recipes, search for dishes and view detailed ingredients and cooking instructions.",
            technologies: [
                "React Native",
                "Expo",
                "JavaScript",
                "REST API",
            ],
            image:
                "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
            github: "https://github.com/Akriti786/CookSathi-App",
            demo: "#",
        },
    ];
    return (
        <section id="projects" className="projects-section">
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
                        MY PROJECTS
                    </p>

                    <h2>
                        Things I've <span>built.</span>
                    </h2>

                    <p className="section-subtitle">
                        A selection of projects that showcase my
                        experience in frontend, backend and full-stack
                        development.
                    </p>
                </motion.div>

                {/* Projects */}

                <div className="projects-grid">

                    {projects.map((project, index) => (
                        <motion.article
                            className="project-card"
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 60,
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
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                        >

                            {/* Project Image */}

                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                                <div className="project-image-overlay"></div>

                                <motion.div
                                    className="project-arrow"
                                    whileHover={{
                                        rotate: 45,
                                    }}
                                >
                                    <FiArrowUpRight />
                                </motion.div>

                            </div>

                            {/* Project Content */}

                            <div className="project-content">

                                <p className="project-category">
                                    {project.category}
                                </p>

                                <h3>{project.title}</h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                {/* Technologies */}

                                <div className="project-technologies">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Buttons */}

                                <div className="project-links">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link"
                                    >
                                        <FiGithub />
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link project-demo"
                                    >
                                        Live Demo
                                        <FiExternalLink />
                                    </a>

                                </div>

                            </div>

                        </motion.article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;