import React, { useEffect, useState } from 'react';
import '../App.css';
import FootballService from '../Services/FootballService';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import OvalLoader from './OvalLoader';

const Leagues = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FootballService.getLeagues()
      .then((data) => { setData(data); })
      .catch((error) => { console.log(error); })
      .finally(() => setLoading(false));
  }, []);

  const topFiveIndexes = [5, 9, 16, 7, 6, 13, 4, 18, 12];

  const topFiveLeagues = topFiveIndexes.map((index) => data[index]);

  const remainingLeagues = data.filter(
    (_, index) => !topFiveIndexes.includes(index)
  );

  const updatedLeagueOptions = [...topFiveLeagues, ...remainingLeagues];

  return (
    <div>

      {loading ? (
        <OvalLoader />
      ) : (
        <>
          <Header />
          <Content />
          <div className="w-full grid grid-cols-4 justify-items-center text-center">
            {updatedLeagueOptions.map((item) => (
              <div key={item?.id} className="mt-20 mb-20 hover:scale-110 cursor-pointer">
                <img src={item?.logos?.light} alt="#" className="w-60" />
                <h1 className="font-bold text-lg">{item?.name}</h1>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Leagues;
