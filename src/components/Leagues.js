import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from "axios";

const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://api-football-standings.azharimm.dev/leagues")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
  }, []);

  return (
    <div className='leagues-container'>
      {data.map((data) => (
        <div key={data.id} className="league-div">
          <img src={data.logos.light} alt="#"/>
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
