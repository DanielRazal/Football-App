import React, { useState } from 'react';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeagueTable = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    const handleLoadMore = () => {
        setShowAll(true);
    };

    const handleLoadLess = () => {
        setShowAll(false);
    };

    const visibleData = showAll ? data : data.slice(0, 5);

    return (
        <div>
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-small">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3 pr-2">
                            <span className="text-sm">Team</span>
                        </th>
                        <th className="px-6 py-3">GP</th>
                        <th className="px-6 py-3">W</th>
                        <th className="px-6 py-3">D</th>
                        <th className="px-6 py-3">L</th>
                        <th className="px-6 py-3">PF</th>
                        <th className="px-6 py-3">PA</th>
                        <th className="px-6 py-3">GD</th>
                        <th className="px-6 py-3">P</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleData &&
                        visibleData.map((data) => (
                            <tr
                                key={data.team.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                                >
                                    <span className="mr-2">
                                        {data.stats.find((stat) => stat.name === 'rank').displayValue}
                                    </span>
                                    {data.team && data.team.logos && (
                                        <span className="w-8 h-8 object-cover rounded-full">
                                            <img src={data.team.logos[0].href} alt="#" />
                                        </span>
                                    )}
                                    <span className="ml-2">{data.team && data.team.shortDisplayName}</span>
                                </th>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'gamesPlayed').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'wins').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'ties').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'losses').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'pointsFor').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'pointsAgainst').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'pointDifferential').displayValue}
                                </td>
                                <td className="px-6 py-4">
                                    {data.stats.find((stat) => stat.name === 'points').displayValue}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <br />

            {!showAll && data.length > 5 && (
                <div className="flex justify-center mt-4">
                    <button className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={handleLoadMore}>
                        <FontAwesomeIcon icon={faArrowDown} />

                    </button>
                </div>
            )}

            {showAll && (
                <div className="flex justify-center mt-4">
                    <button className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={handleLoadLess}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            )}
            <br /><br />
        </div>
    );
};

export default LeagueTable;
