import React from 'react';
import human from '../assets/human.svg';
import poisk from '../assets/poisk.svg';
import savat from '../assets/savat.svg';
import yurak from '../assets/yurak.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>


            <nav className="bg-[#FBEBB5] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-[500px] p-4">


                    <div className="bg-[#FBEBB5]  hidden w-full md:block md:w-auto" id="navbar-dropdown ">
                        <ul className="flex bg-[#FBEBB5] flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md: 0 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link to={'/'}>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                                </li>
                            </Link>

                            <Link to={'/shop'}>
                                <li>

                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</a>

                                </li>
                            </Link>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                            <div className="flex pl-[200px] gap-10 ">
                                <img src={human} alt="" />
                                <img src={yurak} alt="" />
                                <img src={poisk} alt="" />
                                <img src={savat} alt="" />

                            </div>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;
