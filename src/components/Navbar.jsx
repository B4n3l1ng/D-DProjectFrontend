import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/sheets">
        <button>Character sheets</button>
      </Link>
    </nav>
  );
}

export default Navbar;
