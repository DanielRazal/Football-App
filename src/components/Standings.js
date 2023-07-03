import React, { useEffect, useState } from 'react';
import '../App.css';
import { Oval } from 'react-loader-spinner';
import FootballService from '../Services/FootballService';
import Content from './Content';
import Selects from './Selects';
import Table from './Table';

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2022");
  const [leagueOptions, setLeagueOptions] = useState([]);
  const [league, setLeague] = useState([]);

  useEffect(() => {
    setLoading(true);
    FootballService.getStandings(selectedLeague, selectedYear)
      .then((standings) => {
        // console.log(standings);
        setData(standings);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeague]);

  useEffect(() => {
    FootballService.getLeagues()
      .then((leagues) => {
        // console.log(leagues);
        setLeagueOptions(leagues);
      })
      .catch((error) => {
        console.log(error);
      });

    FootballService.getLeagueById(selectedLeague)
      .then((league) => {
        console.log(league);
        setLeague(league);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedLeague]);


  return (
    <div>
      <Content />
      <div className="flex items-center flex-col text-center">
        {loading ? (
          <Oval
            height={50}
            width={50}
            color="#cccc"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#6c63ff"
            strokeWidth={2}
            strokeWidthSecondary={2}

          />
        ) : (
          <div>
            <div className="p-3 text-white bg-purple-700 flex items-center">
              {league && league.logos && (
                <img src={league.logos.light} alt="#" className="w-6 mr-2" />
              )}
              <h1 className="text-2xl font-bold text-left text-black">
                {league ? league.name : "Loading..."} Table
              </h1>
            </div>
            <div className="bg-gray-100 p-2 text-center">
              <div className="bg-gray-100 p-2 text-center">
                <Selects
                  selectedYear={selectedYear}
                  selectedLeague={selectedLeague}
                  setSelectedYear={setSelectedYear}
                  setSelectedLeague={setSelectedLeague}
                  leagueOptions={leagueOptions}
                />
              </div>
            </div>
            <div>
              <Table data={data} />
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default Standings;
