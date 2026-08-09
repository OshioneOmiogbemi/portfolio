import { motion } from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiDatabase,
  FiCpu,
  FiGitBranch,
  FiTool,
} from "react-icons/fi";

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
    >

      {/* Background Glow */}
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>


      {/* Main Container */}
      <div className="skills-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="skills-heading"
        >

          <p className="skills-label">
            What I work with
          </p>

          <h2 className="orbitron">
            Skills & Technologies
          </h2>

          <div className="skills-line"></div>

        </motion.div>


        {/* Skills Grid */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="skills-grid"
        >


          {/* Frontend */}
          <div className="skill-category">

            <div className="skill-category-header">
              <FiMonitor size={25} />

              <h3>
                Frontend Development
              </h3>
            </div>


            <div className="skill-list">

              <div className="skill-item">
                <FiCode />
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <FiCode />
                <span>CSS</span>
              </div>

              <div className="skill-item">
                <FiCode />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FiCode />
                <span>React.js</span>
              </div>

              <div className="skill-item">
                <FiCode />
                <span>Tailwind CSS</span>
              </div>

            </div>

          </div>


          {/* Backend */}
          <div className="skill-category">

            <div className="skill-category-header">
              <FiDatabase size={25} />

              <h3>
                Backend & APIs
              </h3>
            </div>


            <div className="skill-list">

              <div className="skill-item">
                <FiCode />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <FiDatabase />
                <span>REST APIs</span>
              </div>

              <div className="skill-item">
                <FiDatabase />
                <span>Express.js</span>
              </div>

              <div className="skill-item">
                <FiDatabase />
                <span>MongoDB</span>
              </div>

            </div>

          </div>


          {/* AI */}
          <div className="skill-category">

            <div className="skill-category-header">
              <FiCpu size={25} />

              <h3>
                AI & Intelligent Systems
              </h3>
            </div>


            <div className="skill-list">

              <div className="skill-item">
                <FiCpu />
                <span>Generative AI</span>
              </div>

              <div className="skill-item">
                <FiCpu />
                <span>AI APIs</span>
              </div>

              <div className="skill-item">
                <FiCpu />
                <span>Information Retrieval</span>
              </div>

              <div className="skill-item">
                <FiCpu />
                <span>AI Integration</span>
              </div>

            </div>

          </div>


          {/* Tools */}
          <div className="skill-category">

            <div className="skill-category-header">
              <FiTool size={25} />

              <h3>
                Tools & Workflow
              </h3>
            </div>


            <div className="skill-list">

              <div className="skill-item">
                <FiGitBranch />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <FiGitBranch />
                <span>GitHub</span>
              </div>

              <div className="skill-item">
                <FiTool />
                <span>VS Code</span>
              </div>

              <div className="skill-item">
                <FiTool />
                <span>Vercel</span>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;