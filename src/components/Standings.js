import React, { useEffect, useState } from 'react';
import '../App.css';
import FootballService from '../Services/FootballService';
import Content from './Content';
import Selects from './Selects';
import Header from './Header';
import OvalLoader from './OvalLoader';
import Footer from './Footer';
import LeagueTable from './LeagueTable';

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [leagueOptions, setLeagueOptions] = useState([]);
  const [league, setLeague] = useState([]);


  useEffect(() => {
    setLoading(true);
    FootballService.getStandings(selectedLeague, selectedYear)
      .then((standings) => {
        setData(standings);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeague]);

  useEffect(() => {
    FootballService.getLeagues()
      .then((leagues) => {
        setLeagueOptions(leagues);
      })
      .catch((error) => {
        console.log(error);
      });

    FootballService.getLeagueById(selectedLeague)
      .then((league) => {
        setLeague(league);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedLeague]);


  return (
    <div>
      {loading ? (
        <OvalLoader />
      ) : (
        <>
          <Header />
          <Content />
          <div className="flex flex-col items-center">
              <div className="relative">
                <div className="p-3 text-white bg-purple-700 flex items-center">
                  {league && league.logos && (
                    <img src={league.logos.light} alt="#" className="w-6 mr-2" />
                  )}
                  <h1 className="text-2xl font-bold text-left text-black">
                    {league ? league.name : "Loading..."} Table
                  </h1>
                </div>
                  <div className="bg-gray-300 p-2 text-center">
                    <Selects
                      selectedYear={selectedYear}
                      selectedLeague={selectedLeague}
                      setSelectedYear={setSelectedYear}
                      setSelectedLeague={setSelectedLeague}
                      leagueOptions={leagueOptions}
                    />
                  </div>
                <LeagueTable data={data} />
              </div>
            </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Standings;
