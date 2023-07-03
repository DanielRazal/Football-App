import React, { useEffect, useState } from 'react';
import '../App.css';
import FootballService from '../Services/FootballService';
import Content from './Content';
import { Oval } from 'react-loader-spinner';

const Leagues = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FootballService.getLeagues()
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Content />

      <div className="w-full grid grid-cols-4 justify-items-center text-center">
        {loading ? (
          <div className="col-span-4 flex items-center justify-center">
            <Oval
              height={50}
              width={50}
              color="#cccc"
              secondaryColor="#6c63ff"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          data.map((item) => (
            <div key={item.id} className="mt-20 mb-20 hover:scale-110 cursor-pointer">
              <img src={item.logos.light} alt="#" className="w-60" />
              <h1 className="font-bold text-lg">{item.name}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Leagues;
