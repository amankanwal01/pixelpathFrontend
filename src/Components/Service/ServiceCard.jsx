import "./ServiceCard.css";
function ServiceCard({ service, serviceDescription, image }) {
  return (
    <div className="service-component border ">
      <div className="image-div">
        <img src={image} alt="image" />
      </div>

      <div className="info-div">
        <h1>{service}</h1>
        <p>{serviceDescription}</p>
        <button className=" buy-btn"> Book Now </button>
      </div>
    </div>
  );
}

export default ServiceCard;
