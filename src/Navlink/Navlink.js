
import { NavLink } from "react-router-dom";
export default function Navlink() {
  return (
    <div className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">Signup </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">Signin </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="contact" className="nav-link">Contact us </NavLink>
        </li>
      </ul>
    </div>
  );
}
