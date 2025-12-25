import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorComponent/ErrorMessage";
import { use } from "react";
import Flashmessage from "../../ErrorComponent/FlashMessage";
function Login() {
  const redirect = useNavigate();
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({
    password: "",
    username: "",
  });
  const [flashMessage, setFlashMessage] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.message && location.state) {
      setFlashMessage(location.state.message);
      setTimeout(() => {
        setFlashMessage(null);
      }, 1000);
    }
  }, [location.state]);

  const handleOnChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://pixellpaht-backend.onrender.com/login",
        userInfo,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const username = response.data.user.username;
        console.log(response.data);
        redirect("/", {
          state: {
            message: `Login Successful Welcome ${username}`,
          },
        });
      }

      console.log(response.data.message);

      // if(response.)
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 1500);
      console.log(error.message);
    }

    setUserInfo({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="row col-6 offset-3">
      {error && <ErrorMessage message={error} />}
      {flashMessage && <Flashmessage message={flashMessage} />}
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4 ">
          <label className="form-label" htmlFor="email">
            username
          </label>
          <input
            onChange={handleOnChange}
            value={userInfo.username}
            className="form-control "
            type="text"
            placeholder="username"
            name="username"
            id="username"
          />
        </div>
        <div className="mb-4 ">
          <label className="form-label" htmlFor="password">
            password
          </label>
          <input
            onChange={handleOnChange}
            value={userInfo.password}
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
        </div>

        <button className="bnt primaer-btn">login</button>
      </form>
    </div>
  );
}

export default Login;
