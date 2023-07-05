import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const Content = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLeagues = () => {
        navigate('/leagues');
    };

    const handleStandings = () => {
        navigate('/standings');
    };

    const isLeaguesActive = location.pathname === '/leagues' || location.pathname === '/';
    const isStandingsActive = location.pathname === '/standings';

    return (
        <div className="content-container">
            <div className="flex flex-row w-full items-center justify-center my-8">
                <button
                    className={`w-60 h-12 flex items-center justify-center bg-black
                    h-50 border border-r-4 border-gray-500 cursor-pointer`}
                    style={{ color: isLeaguesActive ? '#c20114' : 'white' }}
                    onClick={handleLeagues}
                >
                    <h2>Leagues</h2>
                </button>
                <button
                    className={`w-60 h-12 flex items-center justify-center
                     bg-black h-50 cursor-pointer`}
                    style={{ color: isStandingsActive ? '#c20114' : 'white' }}
                    onClick={handleStandings}
                >
                    <h2>Standings</h2>
                </button>
            </div>
        </div>
    );
};

export default Content;
