import "./card-list.css";
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect } from "react";
import { getCharactersAsync } from "../../redux/apiSlice";

function CardList() {
  // const [characters, setCharacters] = useState([])

  var characters = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersAsync());
  }, [dispatch]);
  characters = useSelector((state) => state.data.characters);

  console.log(characters);


  return (
    <div className="container">

      <h4 className="char-title">Rick and Morty</h4>
    
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
