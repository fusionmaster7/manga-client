import React, { useEffect, useState } from "react";
import "../Styles/MangaList.css";
import axios from "axios";

const MangaCard = (props) => {
  return (
    <div className="card">
      <div>
        <img src="https://via.placeholder.com/150" alt="Manga" />
      </div>
      <div>{props.name}</div>
      <div>{props.author}</div>
    </div>
  );
};

const MangaList = () => {
  const [state, setState] = useState({ mangas: null });
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/manga/all");
    console.log(res.data);
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
