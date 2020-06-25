import React, { useState, useEffect } from "react";
import MangaList from "./MangaList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/Home.css";

const Home = () => {
  const [loading, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 3000);
  });
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-heading" id="quote">
          "You may have outsmarted me, But I have outsmarted your outsmarting!"
        </div>
        <br />
        <div className="loading-heading" id="name">
          - Joeseph Joestar
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <MangaList />
        <Footer />
      </>
    );
  }
};

export default Home;
