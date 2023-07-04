import React from 'react';

const Selects = ({
  selectedYear,
  selectedLeague,
  setSelectedYear,
  setSelectedLeague,
  leagueOptions
}) => {

  const topFiveIndexes = [5, 9, 16, 7, 6, 13, 4, 18, 12];

  const topFiveLeagues = topFiveIndexes.map((index) => leagueOptions[index]);

  const remainingLeagues = leagueOptions.filter(
    (_, index) => !topFiveIndexes.includes(index)
  );

  const updatedLeagueOptions = [...topFiveLeagues, ...remainingLeagues];

  return (
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
        {updatedLeagueOptions.map((league) => (
          <option key={league?.id} value={league?.id}>
            {league?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selects;
