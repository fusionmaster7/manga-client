import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Manga.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Manga = (props) => {
  const [state, setState] = useState({ chapters: null });
  const getChapters = async () => {
    const { params } = props.match;
    const res = await axios.get(`http://localhost:5000/manga/${params.manga}`);
    console.log(res.data);
    console.log(state.chapters);
  };
  useEffect(() => {
    getChapters();
  }, []);
  const list = [1, 2, 3];
  if (state.chapters == null) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="name-heading">Loading...</div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="manga-container">
          <div className="name-heading">Manga Name</div>
          <div style={{ textAlign: "center" }}>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className="chapter-list">
            {list.map((e, i) => {
              return <div className="chapter">{`Chapter ${i + 1}`}</div>;
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Manga;
