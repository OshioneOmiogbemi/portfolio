function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#050816]/90 backdrop-blur-md sticky top-0 z-50">
      
      <div
        style={{
          width: "90%",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="h-20 flex items-center justify-between"
      >

        {/* Logo */}
        <a
          href="#home"
          className="orbitron text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          OSHIONE
        </a>


        {/* Navigation */}
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

      </div>

    </nav>
  );
}

export default Navbar;