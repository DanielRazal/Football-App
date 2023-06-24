import React, { useEffect, useState } from 'react';
import '../App.css';
import { Rings } from 'react-loader-spinner';
import { getStandings, getLeagues } from '../Services/FootballService';

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2022");
  const [leagueOptions, setLeagueOptions] = useState([]);

  useEffect(() => {
    setLoading(true);
    getStandings(selectedLeague, selectedYear)
      .then((standings) => {
        console.log(standings);
        setData(standings);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [selectedYear, selectedLeague]);

  useEffect(() => {
    getLeagues()
      .then((leagues) => {
        console.log(leagues);
        setLeagueOptions(leagues);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex items-center flex-col text-center">
      {loading ? (
        <Rings
          height="120"
          width="120"
          color="#00BFFF"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      ) : (
        <div>
          <div className="p-3 text-white bg-purple-950">
            <h1 className="text-2xl font-bold text-left">Premier League Table</h1>
          </div>
          <div className="bg-gray-100 p-2 text-center">
            <div className="flex justify-center items-center space-x-4">
              <select
                name="select-year"
                id="select-year"
                onChange={(e) => setSelectedYear(e.target.value)}
                defaultValue={selectedYear}
                className="mt-2 bg-transparent border-none"
              >
                {Array.from({ length: 13 }, (_, index) => {
                  const year = 2022 - index;
                  return (
                    <option key={year} value={year}>
                      {year}-{year + 1}
                    </option>
                  );
                })}
              </select>

              <select
                name="select-league"
                id="select-league"
                defaultValue={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
                className="mt-2 bg-transparent border-none"
              >
                {leagueOptions.map((league) => (
                  <option key={league.id} value={league.id}>
                    {league.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3 pr-2"><span class="text-sm">Team</span></th>
                    <th class="px-6 py-3">GP</th>
                    <th class="px-6 py-3">W</th>
                    <th class="px-6 py-3">D</th>
                    <th class="px-6 py-3">L</th>
                    <th class="px-6 py-3">PF</th>
                    <th class="px-6 py-3">PA</th>
                    <th class="px-6 py-3">GD</th>
                    <th class="px-6 py-3">P</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data) => (
                    <tr key={data.team.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                        <span className="mr-2">
                          {data.stats.find(stat => stat.name === 'rank').displayValue}
                        </span>
                        <span className="pl-team-logo">
                          <img src={data.team.logos[0].href} alt="#" />
                        </span>
                        <span className="ml-2">
                          {data.team.shortDisplayName}
                        </span>
                      </th>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'gamesPlayed').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'wins').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'ties').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'losses').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'pointsFor').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'pointsAgainst').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'pointDifferential').displayValue}
                      </td>
                      <td class="px-6 py-4">
                        {data.stats.find(stat => stat.name === 'points').displayValue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Standings;
