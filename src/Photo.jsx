import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Photo() {
  const redirect = useNavigate("/photo/:id/edit");
  const [photo, setPhoto] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await axios.get(
        `https://pixellpaht-backend.onrender.com//photo/${id}`
      );

      setPhoto([response.data]);
    };

    fetchPhoto();
  }, []);

  console.log(useParams(), photo);

  //handleOnEdit
  function handleOnEdit(id) {
    redirect(`/photo/${id}/edit`);
  }

  async function handleOnDelete() {
    console.log("delete");
    try {
      await axios.delete();
    } catch (error) {}
  }
  return (
    <div>
      {photo.map((photo) => {
        return (
          <div key={photo._id}>
            <img style={{ height: "500px" }} src={photo.image}></img>
            <hr />
            <i> &hearts; {photo.likes}</i>
            <p>{photo.caption}</p>
            <div>
              <button onClick={() => handleOnEdit(photo._id)}>edit</button>
              <button onClick={handleOnDelete}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Photo;
