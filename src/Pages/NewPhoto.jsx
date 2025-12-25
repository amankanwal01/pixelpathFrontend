import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./NewPhoto.css";
import ErrorMessage from "../ErrorComponent/ErrorMessage";
function NewPhoto() {
  const navigate = useNavigate(); // used to navigate along pages !
  const [photoData, setPhotoData] = useState({
    image: null,
    caption: "",
    title: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);

  const input = document.querySelectorAll("input");

  function handleOnChange(e) {
    setPhotoData({
      ...photoData,
      [e.target.name]: e.target.value,
    });

    // check is form data is valid or not
  }

  async function handleUploadImage(e) {
    setPhotoData({
      ...photoData,
      image: e.target.value[0],
    });
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    console.log(photoData);
    try {
      const response = await axios.post(
        "https://pixellpaht-backend.onrender.com/photo/new",
        photoData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate("/");
      } else {
        navigate("/login", { state: { message: response.data.message } });
        console.log(response.data);
        setError(response.data.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    } catch (error) {
      console.log("error in saving data", error);
    }

    // used to navigate along pages ! as we submit the form
  }
  return (
    <div>
      {" "}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="upload-container border">
          <form
            encType="multipart/form-data"
            onSubmit={handleOnSubmit}
            className="upload-form"
          >
            <div>
              <label className="form-label" htmlFor="image">
                image
              </label>
              <input
                required
                onChange={handleUploadImage}
                className="form-control"
                type="file"
                placeholder="image"
                name="image"
                id="image"
              />
              <div className="error"></div>
            </div>
            <div>
              <label className="form-label" htmlFor="caption">
                caption
              </label>
              <input
                onChange={handleOnChange}
                className="form-control"
                type="text"
                placeholder="caption"
                id="caption"
                name="caption"
                required
              />
            </div>
            <div>
              <label className="form-label" htmlFor="title">
                title
              </label>
              <input
                onChange={handleOnChange}
                className="form-control"
                type="text"
                name="title"
                id="title"
                placeholder="title"
              />
            </div>
            <div>
              <button className="btn">Submit</button>
            </div>
          </form>
          <div className="upload-image">
            <img src="58403.jpg" alt="sdfd" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            aspernatur? Recusandae blanditiis, reprehenderit quos ad dolores eos
            sunt tempore nobis veritatis animi molestias. Ea vel praesentium
            mollitia quaerat culpa tempora.
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPhoto;
