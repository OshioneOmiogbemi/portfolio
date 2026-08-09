import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiArrowUpRight,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi";

function Experience() {
  const experiences = [
    {
      year: "2022 — 2026",
      title: "Software Engineering Student",
      company: "Michael and Cecilia Ibru University",
      icon: <FiBookOpen size={15} />,
      description:
        "Studying Software Engineering with a focus on software development, artificial intelligence, web technologies and problem solving. Developed academic and personal software projects while gaining practical experience with modern development tools and technologies.",
      technologies: [
        "Software Engineering",
        "React",
        "JavaScript",
        "AI",
        "Web Development",
      ],
    },

    {
      year: "2025 — 2026",
      title: "Student Representative Council",
      company: "Michael and Cecilia Ibru University",
      icon: <FiUsers size={15} />,
      description:
        "Served in student leadership, coordinating initiatives, events, communications and student-focused projects while developing leadership, organization, teamwork and problem-solving skills.",
      technologies: [
        "Leadership",
        "Teamwork",
        "Communication",
        "Event Management",
      ],
    },

    {
      year: "6 Months",
      title: "Software Development Training",
      company: "Bayelsa Tech Hub",
      icon: <FiBriefcase size={15} />,
      description:
        "Completed practical software development training focused on web technologies, programming fundamentals and building real-world applications through hands-on development.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
    },

    {
      year: "Professional Project",
      title: "Software Developer",
      company: "Confidential Client",
      icon: <FiBriefcase size={15} />,
      description:
        "Contributed to the development of software solutions for a private client, working on application functionality, frontend development and user experience while maintaining client confidentiality.",
      technologies: [
        "React",
        "JavaScript",
        "Frontend Development",
        "UI/UX",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section"
    >

      {/* Background Glow */}
      <div className="experience-glow experience-glow-one"></div>

      <div className="experience-glow experience-glow-two"></div>


      {/* Main Container */}
      <div className="experience-container">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="experience-heading"
        >

          <p className="experience-label">
            My journey
          </p>

          <h2 className="orbitron">
            Experience
          </h2>

          <div className="experience-line"></div>

        </motion.div>


        {/* Experience Timeline */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <motion.div
              key={experience.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="experience-item"
            >

              {/* Timeline Dot */}
              <div className="experience-dot"></div>


              {/* Experience Card */}
              <div className="experience-card">

                {/* Top Section */}
                <div className="experience-top">

                  <div>

                    {/* Date */}
                    <p className="experience-date">
                      <FiCalendar size={15} />
                      {experience.year}
                    </p>


                    {/* Title */}
                    <h3>
                      {experience.title}
                    </h3>


                    {/* Company */}
                    <p className="experience-company">
                      {experience.icon}
                      {experience.company}
                    </p>

                  </div>


                  {/* Arrow */}
                  <FiArrowUpRight
                    className="experience-arrow"
                    size={23}
                  />

                </div>


                {/* Description */}
                <p className="experience-description">
                  {experience.description}
                </p>


                {/* Technologies / Skills */}
                <div className="experience-technologies">

                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;