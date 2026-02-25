import React from 'react'

const Header = () => {
  return (
    <div className="flex m-2 p-4 bg-gray-700 text-white font-extrabold">
      <div className='flex gap-3'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/testing">Testing</a>
      </div>
    </div>
  );
}

export default Header