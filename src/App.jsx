import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Photo from "./Components/Photo.jsx";
import PageNotFOund from "./Components/PageNotFound.jsx";
import NewPhoto from "./Pages/NewPhoto.jsx";
import PhotoEdit from "./Components/PhotoEditForm.jsx";
import Services from "./Pages/Services.jsx";
import Review from "./Components/Review.jsx";
import Signup from "./Pages/LoginAndSignup/Signup.jsx";
import Login from "./Pages/LoginAndSignup/Login.jsx";
import { FlashMessageProvider } from "./Components/flashmessage/flashMessage.jsx";

function App() {
  return (
    <FlashMessageProvider>
      <BrowserRouter>
        <div className="main-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/photo/:id" element={<Photo />} />
              <Route path="/photo/new" element={<NewPhoto />} />
              <Route path="/services" element={<Services />} />
              <Route path="/photo/:id/edit" element={<PhotoEdit />} />
              <Route path="/photo/:id/review" element={<Review />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<PageNotFOund />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </FlashMessageProvider>
  );
}

export default App;
