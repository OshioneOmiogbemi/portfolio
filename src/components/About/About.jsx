import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[160px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>


      {/* Main Container */}
      <div className="about-container">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="about-heading"
        >

          <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">
            Get to know me
          </p>

          <h2 className="orbitron text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 mt-5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.7)]" />

        </motion.div>


        {/* Main About Layout */}
        <div className="about-layout">


          {/* LEFT — ABOUT TEXT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="about-text"
          >

            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
              Who I am
            </p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-7">
              Building ideas into{" "}
              <span className="text-blue-400">
                digital experiences.
              </span>
            </h3>

            <p className="text-slate-400 text-base md:text-lg leading-8 mb-6">
              I'm a Software Engineer passionate about building
              modern web applications, intelligent systems and
              technology that solves real-world problems.
            </p>

            <p className="text-slate-400 text-base md:text-lg leading-8 mb-10">
              My interests span frontend development, artificial
              intelligence and software engineering. I enjoy
              taking an idea from concept to a functional,
              polished product.
            </p>


          

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
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
                delay: 0.35,
                ease: "easeOut",
              }}
              className="quick-info"
            >

              <div className="quick-info-card">

                <p className="text-slate-500 text-sm mb-1">
                  Focus
                </p>

                <p className="text-white font-semibold">
                  Software & AI
                </p>

              </div>


              <div className="quick-info-card">

                <p className="text-slate-500 text-sm mb-1">
                  Location
                </p>

                <p className="text-white font-semibold">
                  Nigeria
                </p>

              </div>

            </motion.div>

          </motion.div>


         

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="about-cards"
          >

            

            <div className="about-card">

              <FiCode
                size={30}
                className="text-blue-400 mb-5"
              />

              <h4 className="text-xl font-semibold text-white mb-3">
                Development
              </h4>

              <p className="text-slate-500 text-sm leading-6">
                Building responsive and scalable web applications
                with modern technologies.
              </p>

            </div>


            
            <div className="about-card">

              <FiCpu
                size={30}
                className="text-blue-400 mb-5"
              />

              <h4 className="text-xl font-semibold text-white mb-3">
                Artificial Intelligence
              </h4>

              <p className="text-slate-500 text-sm leading-6">
                Exploring AI systems and building intelligent
                applications that solve real problems.
              </p>

            </div>


      

            <div className="about-card">

              <FiGlobe
                size={30}
                className="text-blue-400 mb-5"
              />

              <h4 className="text-xl font-semibold text-white mb-3">
                Web Technologies
              </h4>

              <p className="text-slate-500 text-sm leading-6">
                Creating modern interfaces and engaging digital
                experiences for the web.
              </p>

            </div>


           

            <div className="about-card">

              <FiLayers
                size={30}
                className="text-blue-400 mb-5"
              />

              <h4 className="text-xl font-semibold text-white mb-3">
                Problem Solving
              </h4>

              <p className="text-slate-500 text-sm leading-6">
                Turning complex problems into practical and
                effective software solutions.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;