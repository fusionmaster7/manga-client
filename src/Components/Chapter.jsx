import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import "../Styles/Chapter.css";

//NAME HEADING CLASS IMPORTED FROM MANGA.CSS

const Chapter = (props) => {
  const { params } = props.match;
  return (
    <>
      <NavBar />
      <div className="chapter-container">
        <div className="name-heading" id="current-manga">
          Manga Name Chapter Number
        </div>
        <div className="name-heading" id="current-page">
          Page 1
        </div>
        <div className="chapter-img-container">
          <img
            src="https://via.placeholder.com/350x600"
            className="chapter-img"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chapter;
