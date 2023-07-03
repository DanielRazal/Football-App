import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Content = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="content-container">
            <div className="flex flex-row w-full items-center justify-center my-8">
                <Link
                    to="/leagues"
                    className={`w-60 h-12 flex items-center justify-center bg-black text-white h-50 border border-r-4 border-gray-500 cursor-pointer ${active ? 'active' : ''
                        }`}
                    onClick={() => setActive(true)}
                >
                    <h2 style={{ color: active ? '#c20114' : null }}>Leagues</h2>
                </Link>
                <Link
                    to="/standings"
                    className={`w-60 h-12 flex items-center justify-center bg-black text-white h-50 cursor-pointer ${!active ? 'active' : ''
                        }`}
                    onClick={() => setActive(false)}
                >
                    <h2 style={{ color: !active ? '#c20114' : null }}>Standings</h2>
                </Link>
            </div>
        </div>
    );
};

export default Content;