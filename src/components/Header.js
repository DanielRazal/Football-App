import React from 'react';
import '../App.css';

// <div className="w-full flex items-center justify-center bg-black text-white h-12">
//     <h1 className="text-lg">Football App &#9917;</h1>
// </div>
const Header = () => {
  return (
    <header className="bg-neutral-800 text-center dark:bg-neutral-700 lg:text-left">
    <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
      <p className="text-lg text-white">Football App &#9917;</p>
    </div>
  </header>
  )
}

export default Header;