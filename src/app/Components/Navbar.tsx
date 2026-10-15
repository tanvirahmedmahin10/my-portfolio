import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const link = (
    <>
      <li><a href='#home'><button className='cursor-pointer' type="button">Home</button></a></li>
      <li><a href='#about'><button className='cursor-pointer' type="button">About</button></a></li>
      <li><a href='#skills'><button className='cursor-pointer' type="button">Skills</button></a></li>
      <li><a href='#projects'><button className='cursor-pointer' type="button">Project</button></a></li>
      <li><a href='#contact'><button className='cursor-pointer' type="button">Contact</button></a></li>
    </>
  );

  return (
    <div className="bg-[#171B21] w-full sticky top-0 z-50 max-lg:collapse lg:mb-10 shadow-sm rounded-md overflow-visible">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block z-20"></label>

      <div className="collapse-title navbar container mx-auto flex items-center justify-between p-2">
        <div className="navbar-start flex items-center gap-2 w-auto">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <Link href='/'><h2 className="font-semibold text-xl text-white whitespace-nowrap">Tanvir Ahmed Mahin</h2></Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 gap-2">
            {link}
          </ul>
        </div>
      </div>
      <div className="collapse-content lg:hidden z-30">
        <ul className="menu bg-base-100 rounded-box p-2 mt-2 shadow">
          {link}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;