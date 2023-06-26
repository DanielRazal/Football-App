import { useState } from 'react'
import React from 'react'
import '../App.css'
import Leagues from './Leagues'
import Standings from './Standings'

const Content = () => {

    const [active, setActive] = useState(true);

    return (
        <div className="w-full min-h-screen flex items-center flex-col">
            <div className="flex flex-row w-full items-center justify-center my-8">
                <div className="w-60 h-12 flex items-center justify-center bg-black text-white h-50
                 border border-r-4 border-gray-500 cursor-pointer"
                    onClick={() => setActive(true)}>
                    <h2 style={{ color: active ? "#c20114" : null }}>Leagues</h2>
                </div>
                <div className="w-60 h-12 flex items-center justify-center bg-black
                 text-white h-50 cursor-pointer" onClick={() => setActive(false)}>
                    <h2 style={{ color: !active ? "#c20114" : null }}>Standings</h2>
                </div>
            </div>
            {active ? <Leagues /> : <Standings />}
        </div>
    )
}

export default Content;