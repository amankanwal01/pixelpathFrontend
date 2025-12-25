import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorComponent/ErrorMessage";
function Signup() {
  const redirect = useNavigate();
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    username: "",
  });

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
        "https://pixellpaht-backend.onrender.com/signup",
        userInfo,
        {
          withCredentials: true,
        }
      );
      if (response.data.message) {
        setError(response.data.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
      } else {
        console.log(response);
        redirect("/", {
          state: { flashMessage: "Signup successful! Welcome!" },
        });
      }
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 1000);
      console.log(error);
    }

    setUserInfo({
      email: "",
      password: "",
      username: "",
    });
  };

  console.log(userInfo);
  return (
    <div className="row col-6 offset-3">
      {error && <ErrorMessage message={error} />}
      <form onSubmit={handleOnSubmit}>
        <div className="mb-4 ">
          <label className="form-label" htmlFor="email">
            email
          </label>
          <input
            onChange={handleOnChange}
            value={userInfo.email}
            className="form-control "
            type="text"
            placeholder="Email"
            name="email"
            id="email"
          />
        </div>
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

        <button className="bnt primaer-btn">signup</button>
      </form>
    </div>
  );
}

export default Signup;
