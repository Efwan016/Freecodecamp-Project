import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import { Fade } from "react-awesome-reveal";


const Header = () => {

  const footerData = {
    social: [
      {
        name: "GitHub",
        url: "https://github.com/efwanrizaldi",
        className: "fab fa-github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/efwanrizaldi",
        className: "fab fa-linkedin",
      },
      {
        name: "X",
        url: "https://x.com/flowrich333",
        className: "fab fa-twitter",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/vhanzrz/",
        className: "fab fa-instagram",
      },
    ],
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Clock</Link>
        <Link to="/drum">Drum Machine</Link>
        <Link to="/Markdown">Markdown Previewer</Link>
        <Link to="/Quote">Quotes Machine</Link>
        <Link to="/Calculator">Calculator</Link>
      </nav>

      <main>
        <Outlet />
      </main>
      <Fade>
        <Footer data={footerData} />
      </Fade>
    </div>
  );
}

export default Header;
