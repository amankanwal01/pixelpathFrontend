import "./Contact.css";
function Contact() {
  return (
    <div className="contact ">
      <div className="contact-form ">
        <h1>Contact form</h1>
        <p>
          Fill this out so we can learn more about you <br /> and your needs .
        </p>

        <div className="contact-form-and-info contact-form-inputs  ">
          <form style={{ display: "flex", flexDirection: "column" }} action="">
            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Message" />
              <input type="text" placeholder="Full Name" />
            </div>

            <button className="send-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <div className="contact-info contact-form-and-info ">
        <div className="address ">
          <p style={{ fontSize: "2rem" }} className="brand-name">
            PixellPath
          </p>
          <p>
            <b>Address</b> <br />
            Unit 24 Suite 3 - THe COda CEnter <br /> 189 MUnster ROad <br />{" "}
            London <br />
            SWG ANGF
          </p>
          <p>
            Email: kanwalaman1212@gmail.com <br />
            Call us : +91 8439213173 <br />
            MOnday - FRiday : <i>09:00 AM</i> to <i>06:00 PM</i>
          </p>
          <div className="socail-media  ">
            <i style={{ color: "#1877F2" }} class="fa-brands fa-facebook"></i>{" "}
            {/* Facebook (Deep Blue) */}
            <i
              style={{ color: "#1DA1F2" }}
              class="fa-brands fa-twitter"
            ></i>{" "}
            {/* Twitter (Sky Blue) */}
            <i
              style={{ color: "#FF0000" }}
              class="fa-brands fa-youtube"
            ></i>{" "}
            {/* YouTube (Bright Red) */}
            <i
              style={{
                backgroundColor:
                  "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
              }}
              class="fa-brands fa-instagram"
            ></i>{" "}
            {/* Instagram (Gradient) */}
            <i
              style={{ color: "#0A66C2" }}
              class="fa-brands fa-linkedin"
            ></i>{" "}
            {/* LinkedIn (Blue) */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
