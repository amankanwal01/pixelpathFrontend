import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios, { all } from "axios";
import "./HomePage.css";
import Flashmessage from "../ErrorComponent/FlashMessage";
import Branding from "../Components/Branding";
function HomePage() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flashMessage, setFlashMessage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setFlashMessage(location.state.message);
      setTimeout(() => {
        setFlashMessage(null);
        window.history.replaceState({}, document.title); // Safely reset state in history
      }, 2500);
    }
  }, [location.state]);

  //for retrive all images

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("/photos", {
          withCredentials: true,
        });
        setAllPhotos(response.data);
      } catch (error) {
        console.log(
          "Error in fetching data form backend , may be server not started ! "
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  console.log(allPhotos[0]);
  return (
    <div>
      {flashMessage && <Flashmessage message={flashMessage} />}
      <Branding />
      <div className="photo-gallary">
        {loading ? (
          <p>loadding...................</p>
        ) : (
          allPhotos.map((photo, i) => {
            return (
              <Link className="image-link" to={`/photo/${photo._id}`}>
                <div className="image-container border" key={i}>
                  <div>
                    <p className="photo-title"> {photo.owner.username}</p>
                    <p>Caption : {photo.caption}</p>

                    <img
                      className="image"
                      style={{ height: "500px" }}
                      src={photo.image}
                    ></img>

                    <div className="like-and-save">
                      {/* <p>created at {photo.createdAt}</p> */}
                      <i className="like"> &hearts;{photo.likes}</i>
                      <i>
                        Save <i class="far fa-save"></i>
                        <i class="fas far-save"></i>
                      </i>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomePage;
