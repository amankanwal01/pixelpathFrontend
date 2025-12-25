import "./Branding.css";
function Branding() {
  return (
    <div className="branding-container  ">
      <div className="name-and-branding ">
        <div className="h1-p-ctnr">
          <h1 className="brand-name">Pixell PaTh</h1>
          <p>
            {" "}
            Your one-stop destination for professional photoshoots, videography,
            and high-quality editing.
          </p>
        </div>

        <div className="hr-lines">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>

        {/* <div className=""></div> */}
      </div>
      <div className="album-container  ">
        <div className="album album-1 ">
          <img src="36681.jpg" alt="lkjhgfds" />
        </div>
        <div className="album album-2 ">
          <img src="4848739.jpg" alt="asdfghj " />
        </div>
      </div>
    </div>
  );
}

export default Branding;
