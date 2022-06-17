import "../episode-list/episode-list.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getLocationAsync } from "../../redux/apiSlice";

function LocationList() {
  // const [characters, setCharacters] = useState([])
  var [info, setInfo] = useState([]);
  var [location, setLocation] = useState({name: 'Earth (C-137)', type: 'Planet', dimension: 'Dimension C-137'})
  var [id, setID] = useState(1);
  var [results, setResults] = React.useState([]);


  var api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
        console.log(location)
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      console.log(data)

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api, id]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationAsync());
  }, [dispatch]);
  location = useSelector((state) => state.data.location);

  console.log(info)

  return (
   <div className="episode-container">

<div class="row">
<h1 className="episode-title">{info.name}</h1>
<h3 className="episode-title">{info.type}</h3>
<h3 className="episode-title">{info.dimension}</h3>
  <div class="column side">
  <div className="hList">
    <li className="hlist-li">
    <a href="#click" className="menu">
      <h2 className="menu-title">Locations</h2>
      <ul className="menu-dropdown">
      {location.map((item, i) => (
        <li className="li-dropdown">
            <label className="li-link" onClick={() => {setID(item.id); } }> {item.name}</label>
            
            </li>
      ))}

      </ul>
    </a>
  </li>
</div>  
  </div>
  
  <div class="column middle">
  <div className="container">
    
  {results.map((item, i) => (
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
  </div>
  

 </div> 


   </div>
    
  );
}

export default LocationList;
