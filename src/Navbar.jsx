import { Link, useNavigation } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "./Components/Buttons/NavLinks";
import ServiceHover from "./Components/Service/ServiceHover";
import axios from "axios";
function Navbar() {
  const redirect = useNavigate();
  const [isServices, setIsServices] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://pixellpaht-backend.onrender.com/loginstatus",
          {
            withCredentials: true,
          }
        );
        console.log(response);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
        // setUser(null);
      }
    };
    fetchUser();
  }, []);
  // const [flashMessage, setFlashMessage] = useState(null);
  const handleOnMouseEnter = () => {
    setIsServices(true);
    console.log("isServise : ", isServices);
  };

  const handleOnMouseLeave = () => {
    setTimeout(() => {
      setIsServices(false);
    }, 100);

    console.log("isServise : ", isServices);
  };

  // handling log out !
  const handleOnLogot = async (e) => {
    try {
      const rsponse = await axios.post(
        "/logout",
        {},
        { withCredentials: true }
      );
      // setFlashMessage("Logout Sucessfully! ")
      console.log(rsponse);
      redirect("/", { state: { message: "Logout Sucessfully!" } });
    } catch (error) {
      console.log("error in logut ! ", error);
    }
  };
  return (
    <div className="navbar-ctnr">
      <nav className="navbar-nav border ">
        <div className="navbar-logo  ">
          <Link className="navbar-logo-link nav-links" to="/">
            <h1>PixelPath</h1>
          </Link>
        </div>
        <div className="search-bar  ">
          <div className="border">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search for image"
            />
          </div>
        </div>
        <ul className="navbar-links ">
          <li>
            <NavButton to={"/"} name={"Home"} />
          </li>
          <li>
            <NavButton name={"Upload"} to={"/photo/new"} />
          </li>

          <li
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            className=""
          >
            <Link className="nav-likns services " to={"/services"}>
              Services
              <i className="fa-solid fa-chevron-down"></i>
              {isServices && <ServiceHover />}
            </Link>
          </li>
          <li>
            <NavButton to={"about"} name={"About"} />
          </li>
        </ul>
        <ul className=" login-and-logout ">
          {user ? (
            <li onClick={handleOnLogot} style={{ cursor: "pointer" }}>
              logout
            </li>
          ) : (
            <div className="login-signup ">
              <li>
                <Link className="nav-likns  " to={"/login"}>
                  login
                </Link>
              </li>
              |
              <li>
                <Link className="nav-likns  " to="/signup">
                  signup
                </Link>
              </li>
            </div>
          )}
        </ul>
        <button className="menu-btn ">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
