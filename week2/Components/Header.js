"use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// function Header(props) {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <div>
//       <nav className="w-full bg-black top-0 left-0 right-0 z-10">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               {/* LOGO */}
//               <Link href="/">
//                 <h2 className="text-2xl text-cyan-600 font-bold ">{props.logoname}</h2>
//               </Link>

//               {/* HAMBURGER BUTTON FOR MOBILE */}
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <Image src="/close.svg" width={30} height={30} alt="logo" />
//                   ) : (
//                     <Image
//                       src="/hamburger-menu.svg"
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'p-12 md:p-0 block' : 'hidden'
//               }`}
//             >
//               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//                 <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/Api" onClick={() => setNavbar(!navbar)}>
//                     API
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/Blogs" onClick={() => setNavbar(!navbar)}>
//                     Blogs
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/Todo" onClick={() => setNavbar(!navbar)}>
//                     Todo
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/Contact" onClick={() => setNavbar(!navbar)}>
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 2,
      link: "Api",
    },
    {
      id: 3,
      link: "Blogs",
    },
    {
      id: 4,
      link: "Todo",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
          >
            Logo
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;