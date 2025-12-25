import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorComponent/ErrorMessage";
import "./Photo.css";
function Photo() {
  const redirect = useNavigate(); // Fixing the incorrect use of useNavigate
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [isOwner, setIsOwner] = useState(null);
  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `https://pixellpaht-backend.onrender.com/photo/${id}`,
          {
            withCredentials: true,
          }
        );

        // If no photo is found, throw an error
        if (!response.data.photo._id) {
          throw new Error(response.data.message);
        }
        // Otherwise, set the fetched photo
        console.log(response.data);
        setPhoto(response.data.photo);

        setIsOwner(response.data.isOwner);
      } catch (error) {
        // Handle errors by setting the error message
        setError(error.message || "An error occurred while fetching the photo");
      }
    };

    fetchPhoto();
  }, [id]); // Add 'id' to the dependency array

  // Handle onEdit
  function handleOnEdit() {
    redirect(`/photo/${id}/edit`, { state: photo });
  }

  // Handle onDelete
  async function handleOnDelete() {
    try {
      const response = await axios.delete(
        `https://pixellpaht-backend.onrender.com/delete`,
        { withCredentials: true }
      );
      console.log(response.data);
      if (response.data.success) {
        redirect("/");
      } else {
        setError(response.data.message);
        setTimeout(() => {
          setError(null);
        }, 1500);
        // Redirect back to home after deletion
      }
    } catch (error) {
      console.log("Unable to delete photo:", error);
    }
  }
  // Hnadle On review

  async function handleOnReview() {
    console.log("handling on review ");
    redirect(`/photo/${id}/review`, { state: photo });
  }
  // handleOnDeleteReview handling the process the deletion of the review
  async function handleOnDeleteReview(reviewId) {
    try {
      const { data } = await axios.delete(
        `https://pixellpaht-backend.onrender.com/review/${reviewId}`,
        { withCredentials: true }
      );

      console.log(data);
      if (data.message === "Login Please  ! Thank You") {
        setError(data.message);
        setTimeout(() => {
          setError(null);
        }, 1500);

        redirect("/login");
      }

      if (data.message === "permission denied") {
        setError(data.message);
        setTimeout(() => {
          setError(null);
        }, 1000);
      } else {
        setPhoto((preValue) => ({
          ...photo,
          reviews: preValue.reviews.filter((review) => review._id !== reviewId),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {error && <ErrorMessage message={error} />}{" "}
      {photo ? (
        <div className=" photo">
          <img
            style={{ height: "500px" }}
            src={photo.image}
            alt={photo.caption}
          />
          <br />
          <div className="like-and-caption">
            <span>
              {" "}
              <i>@{photo.owner.username} </i> | <i>&hearts; {photo.likes} </i>
            </span>

            <br />
            <i>{photo.caption}</i>
          </div>

          <hr />
          {isOwner?._id === photo.owner._id && (
            <div className="review-delete-edit ">
              <button className="photo-btn" onClick={handleOnEdit}>
                Edit
              </button>
              <button className="photo-btn" onClick={handleOnDelete}>
                Delete
              </button>
            </div>
          )}
          <div className="review-delete-edit ">
            <button className="photo-btn" onClick={handleOnReview}>
              review
            </button>
          </div>
          <div className="border row review-container">
            {photo.reviews.map((review) => (
              <div className="review-card" key={review._id}>
                <i>@{review.owner.username} </i>
                <p>Rating: {review.rating} Star</p>
                <p>Comment: {review.comment}</p>
                <i
                  onClick={() => {
                    handleOnDeleteReview(review._id);
                  }}
                  className="fa-solid fa-trash "
                ></i>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div> // Show loading state until photo is fetched
      )}
    </div>
  );
}

export default Photo;
