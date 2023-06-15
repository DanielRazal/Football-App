import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from "axios";

const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://api-football-standings.azharimm.dev/leagues")
      .then((res) => {
        console.log(res.data);
      })
  }, []);

  return (
    <div className='leagues-container'>Leagues</div>
  );
};

export default Leagues;
