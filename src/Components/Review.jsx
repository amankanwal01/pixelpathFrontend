import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../ErrorComponent/ErrorMessage";
// import { keep } from "../../../backend/schema";
function Review() {
  const { id } = useParams();
  const redirect = useNavigate();
  const location = useLocation();
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: "",
  });

  const [isReviewSubmited, setIsReviewSubmited] = useState(false);
  const [error, setError] = useState("");

  // handling on CHnge in input
  function handleOnChange(e) {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value,
    });
  }
  //Handling on CHnge in input

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      //call for review submit
      const response = await axios.post(
        `https://pixellpaht-backend.onrender.com/${id}/review`,
        reviewData,
        { withCredentials: true }
      );
      if (response.data.message) {
        setError(response.data.message);
        console.log(response.data.message);
        setTimeout(() => {
          setError(null);
          redirect("/login");
        }, 1500);
      } else {
        const responseData = response.data;
        setIsReviewSubmited(true);
        setTimeout(() => {
          redirect(`/photo/${id}`);
        }, 500);
      }
      //Storing response data for later use
    } catch (error) {
      console.log("errro", error);
    }

    // console.log(reviewData);
    setReviewData({
      rating: 0,
      comment: "",
    });
  }
  return (
    <div className="m-5 p-5 border">
      {error ? <ErrorMessage message={error} /> : null}

      {isReviewSubmited ? (
        <div class="alert alert-success" role="alert">
          Your review Submitted Successfully{" "}
          <i
            style={{ background: "none" }}
            class="fa-solid fa-champagne-glasses"
          ></i>
        </div>
      ) : null}
      <div>
        <h2>Review form </h2>
        <form onSubmit={handleOnSubmit}>
          <textarea
            style={{ height: "100px", width: "400px" }}
            className="form-control mb-3"
            onChange={handleOnChange}
            type="text"
            name="comment"
            placeholder="Add a comment"
            value={reviewData.comment}
            required
          />
          <input
            style={{ width: "400px" }}
            className="form-control mb-3"
            onChange={handleOnChange}
            type="number"
            min={1}
            max={5}
            name="rating"
            placeholder="Rating"
          />

          <button className="btn btn-primary">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Review;
