import Branding from "../Components/Branding";
import Contact from "../Components/Service/Contact";
import ServiceCard from "../Components/Service/ServiceCard";
import "./Services.css";
function Services() {
  return (
    <div className="service-container border">
      <Branding />
      <main className="our-services ">
        <div className="service-card-container">
          <ServiceCard
            service={"Photoshoot"}
            serviceDescription={
              "We offer professional photoshoot services for weddings, portraits, products, and events. "
            }
            image={
              "Huge_camera_and_tiny_people_taking_pictures-removebg-preview.png"
            }
          />
          <ServiceCard
            service={"Videoshoot"}
            serviceDescription={
              "Our videoshoot services cover commercials, weddings, music videos, and promotional content."
            }
            image={"6106770-removebg-preview.png"}
          />
          <ServiceCard
            service={"Editing"}
            serviceDescription={
              "We provide expert photo and video editing services, including color correction, retouching, special effects, and transition."
            }
            image={"19197303-removebg-preview.png"}
          />
        </div>
      </main>
      <Contact />
    </div>
  );
}

export default Services;
