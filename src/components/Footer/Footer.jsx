import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-logo orbitron">
            OSHIONE
          </a>

          <p>
            Building digital experiences, intelligent systems
            and software that solves real problems.
          </p>

          <div className="footer-socials">
            <a
              href="https://https://github.com/OshioneOmiogbemi"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/oshione-omiogbemi-615537290"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={18} />
            </a>

            <a href="#home">
              <FiArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Oshione David. All rights reserved.
          </p>

          <p>
            Designed & Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;