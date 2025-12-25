import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
function PhotoEdit() {
  const location = useLocation();
  const { id } = useParams();
  const redirect = useNavigate();
  // console.log(id);
  //   const navigate = useNavigate(); // used to navigate along pages !
  const [editedPhotoData, setEditedPhotoData] = useState({
    image: "",
    caption: "",
    title: "",
  });

  useEffect(() => {
    const previousPhotoData = location.state.photo;

    if (previousPhotoData) {
      setEditedPhotoData({
        image: previousPhotoData.image,
        caption: previousPhotoData.caption,
        title: previousPhotoData.title,
      });
    } else {
      const fetchPhotoData = async () => {
        const response = await axios.get(
          `https://pixellpaht-backend.onrender.com/photo/${id}`,
          {
            withCredentials: true,
          }
        );
        setEditedPhotoData(response.data);
      };

      fetchPhotoData();
    }
  }, [id, location.state]);

  function handleOnChange(e) {
    setEditedPhotoData({
      ...editedPhotoData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/photo/${id}/edit`, editedPhotoData, {
        withCredentials: true,
      })
      .then((response) => console.log("edit ", response))
      .catch((error) => console.log("error on edit data ", error));
    //adPhotoData)
    console.log(editedPhotoData);

    redirect(`/photo/${id}`);
    // used to navigate along pages ! as we submit the form
    // navigate("/");
  }
  return (
    <div>
      <i>Add new Photo</i>
      <form onSubmit={handleOnSubmit} className="border m-5">
        <div>
          <label className="form-label" htmlFor="image">
            image
          </label>
          <input
            onChange={handleOnChange}
            className="form-control"
            type="text"
            placeholder="image"
            name="image"
            id="image"
            value={editedPhotoData.image}
          />
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
            value={editedPhotoData.caption}
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
            value={editedPhotoData.title}
          />
        </div>
        <div>
          <button className="btn">Save</button>
        </div>
      </form>
    </div>
  );
}

export default PhotoEdit;
