import "./episode-list.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getEpisodeAsync } from "../../redux/apiSlice";
import axios from "axios";

function EpisodeList() {
  // const [characters, setCharacters] = useState([])
  var [info, setInfo] = useState([]);
  var [episode, setEpisode] = useState({name: 'Pilot', date: 'December 2, 2013'})
  var [id, setID] = useState(1);
  var [results, setResults] = React.useState([]);

  var episodes = [];

  var api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
        var data = await fetch(api).then((res) => res.json());
      setInfo(data);

      var a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      console.log(results)
    })();
  }, [api, id]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEpisodeAsync());
  }, [dispatch]);
  episodes = useSelector((state) => state.data.episode);

  console.log(episodes);

  //   const isLoading = useSelector((state) => state.api.isLoading)
  //   const error = useSelector((state) => state.api.error)
  return (
   <div className="episode-container">

<div class="row">
<h1 className="episode-title">{info.name}</h1>
<h3 className="episode-title">{info.air_date}</h3>
  <div class="column side">
  <div className="hList">
    <li className="hlist-li">
    <a href="#click" className="menu">
      <h2 className="menu-title">Episodes</h2>
      <ul className="menu-dropdown">
      {episodes.map((item, i) => (
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

export default EpisodeList;
