'use client';

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around bg-rose-300 py-2">
        <h1 className="font-bold font-serif ">LoGo</h1>
        <ul className="flex gap-4 text-indigo-600 font-semibold">
          
          <li><Link href='/home'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/projects'>Projects</Link></li>
        </ul>
    </div>
  )
}

export default Navbar