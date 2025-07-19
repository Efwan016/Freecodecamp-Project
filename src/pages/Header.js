import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Quote</Link>
        <Link to="/drum">Drum Machine</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;
