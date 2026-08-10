import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const mailto = `mailto:omiogbemioshione@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Hello Oshione,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="contact-heading"
        >
          <p className="contact-label">
            Get in touch
          </p>

          <h2 className="orbitron">
            Let's Work Together
          </h2>

          <div className="contact-line"></div>

          <p className="contact-intro">
            Have a project, opportunity, or idea you'd like
            to discuss? I'd love to hear from you.
          </p>
        </motion.div>


        <div className="contact-layout">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >

            <h3>
              Let's build something
              <span> great.</span>
            </h3>

            <p>
              Whether you're looking for a developer,
              have an exciting project in mind, or simply
              want to connect, feel free to reach out.
            </p>


            <div className="contact-details">

              <a
                href="mailto:omiogbemioshione@gmail.com"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FiMail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    omiogbemioshione@gmail.com
                  </strong>
                </div>
              </a>


              <a
                href="tel:+2349060350366"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FiPhone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    +234 906 035 0366
                  </strong>
                </div>
              </a>


              <div className="contact-detail">
                <div className="contact-icon">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>
                    Nigeria
                  </strong>
                </div>
              </div>

            </div>


            <div className="contact-socials">

              <a
                href="https://github.com/OshioneOmiogbemi"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub size={20} />
                GitHub
                <FiArrowUpRight size={15} />
              </a>


              <a
                href="https://www.linkedin.com/in/oshione-omiogbemi-615537290"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin size={20} />
                LinkedIn
                <FiArrowUpRight size={15} />
              </a>

            </div>

          </motion.div>


          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-row">

              <div className="contact-field">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>


              <div className="contact-field">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>


            <div className="contact-field">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>


            <div className="contact-field">
              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message
              <FiArrowUpRight size={19} />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;