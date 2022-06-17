import "./card-list.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getCharactersAsync } from "../../redux/apiSlice";
import axios from "axios";

function CardList() {
  // const [characters, setCharacters] = useState([])

  var characters = [];

  // axios.get("https://rickandmortyapi.com/api/character")
  // .then(res => {
  //     setCharacters(res.data.results)
  //   }, [])

  //     const error = useSelector((state) => state.api.character)
  //   console.log("error", error)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersAsync());
  }, [dispatch]);
  characters = useSelector((state) => state.data.characters);

  console.log(characters);

  //   const isLoading = useSelector((state) => state.api.isLoading)
  //   const error = useSelector((state) => state.api.error)
  return (
    <div className="container">

      <h4 className="char-title">Ricky and Morty</h4>
    
      {characters.map((item, i) => (
        <div>
          <div className="card">
            <div className="card-header">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-body">
              <div className="tags">
                <span className="tag tag-teal">{item.status}</span>
                <span className="tag tag-purple">{item.gender}</span>
                <span className="tag tag-pink">{item.species}</span>
              </div>

              <h4>{item.name}</h4>
              <h5>Last Location</h5>
              <p>{item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
