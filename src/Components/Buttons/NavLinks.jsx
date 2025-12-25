import { Link } from "react-router-dom";
function NavButton({ to, name }) {
  return (
    <Link className="nav-likns" to={to}>
      {name}
    </Link>
  );
}

export default NavButton;
