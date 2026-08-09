import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-8"
    >

      <div
        style={{
          width: "90%",
          maxWidth: "1280px",
          marginTop: "-100px",
        }}
        className="max-w-7xl w-full grid md:grid-cols-2 gap-10"
      >

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="orbitron text-6xl font-black leading-tight">
            OSHIONE DAVID
            <br />
            OMIOGBEMI
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              1500,
              "AI Developer",
              1500,
              "Frontend Developer",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-2xl text-blue-400 mt-6 font-semibold"
          />

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            I build modern software, AI systems,
            beautiful web applications and digital
            experiences that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                font-semibold
                rounded-lg
                px-7
                py-4
                transition-all
                duration-300
                hover:border-blue-400
                hover:bg-blue-500/10
                hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]
                hover:-translate-y-1
              "
            >
              Download Resume
            </a>

          </div>

        </motion.div>


        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="relative w-[365px] h-[365px] flex items-center justify-center">

            <div
              className="
                absolute
                inset-0
                rounded-full
                p-[5px]
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-blue-700
              "
              style={{
                boxShadow:
                  "0 0 20px #2563eb, 0 0 40px #2563eb80, 0 0 80px #38bdf840",
              }}
            />

            <div className="relative w-[365px] h-[365px] rounded-full overflow-hidden border-2 border-[#0f172a] bg-[#050816]">

              <img
                src={profile}
                alt="David"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;