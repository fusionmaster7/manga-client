import React, { useEffect, useState } from "react";
import "../Styles/MangaList.css";
import axios from "axios";
import { Link } from "react-router-dom";

const MangaCard = (props) => {
  return (
    <Link to={`/manga/${props.name}`}>
      <div className="card">
        <div>
          <img src="https://via.placeholder.com/150" alt="Manga" />
        </div>
        <div>{props.name}</div>
        <div>{props.author}</div>
      </div>
    </Link>
  );
};

const MangaList = () => {
  const [state, setState] = useState({ mangas: null });
  const getData = async () => {
    const res = await axios.get("http://127.0.0.1:5000/manga/all");
    setState({ mangas: [...res.data] });
  };
  useEffect(() => {
    getData();
  }, []);
  if (state.mangas) {
    return (
      <div className="container">
        <div className="all-manga">All Manga:</div>
        <div className="cards">
          {state.mangas.map((e, i) => {
            return <MangaCard name={e.name} author={e.author} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="all-manga">Loading all Mangas</div>;
  }
};

export default MangaList;
