import React, { useEffect, useState } from 'react';
import '../App.css';
import { getLeagues } from '../Services/FootballService';

const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLeagues()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="w-full grid grid-cols-4 justify-items-center text-center">
      {data.map((data) => (
        <div key={data.id} className="mt-20 mb-20 hover:scale-110 cursor-pointer">
          <img src={data.logos.light} alt="#" className="w-60" />
          <h1 className="font-bold text-lg">{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
