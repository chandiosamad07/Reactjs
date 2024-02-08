import React from 'react';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center'>
      <div>
        <img className='' src="/images/logo.png" alt="logo" />
      </div>
      <ul className='flex justify-center gap-24'>
        <li>Home</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Nav;
