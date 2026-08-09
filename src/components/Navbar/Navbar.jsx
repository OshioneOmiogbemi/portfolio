import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div
        style={{
          width: "90%",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="navbar-inner h-20 flex items-center justify-between"
      >
        <a
          href="#home"
          className="orbitron text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          OSHIONE
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <li>
            <a
              href="#home"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={menuOpen ? "menu-bar bar-one" : "menu-bar"}
          ></span>

          <span
            className={menuOpen ? "menu-bar bar-two" : "menu-bar"}
          ></span>

          <span
            className={menuOpen ? "menu-bar bar-three" : "menu-bar"}
          ></span>
        </button>
      </div>

      <div className={menuOpen ? "mobile-nav active" : "mobile-nav"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;