import * as React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Lottie from "lottie-react";
import flowerLottie from "./../../assets/lotties/flower.json";
import Scroll, { Events, scrollSpy } from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import NavScrolLinks from './NavScrolLinks';




const Navbar = () => {
    const [mode, setMode] = React.useState("light");

    const navlinks = <>
        <NavScrolLinks></NavScrolLinks>
    </>

    return (
        <div id="home-id" className='text-white'>
            <div className="drawer absolute top-0 left-0 z-50">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full py-4 max-w-[1280px] mx-auto flex justify-between items-center">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1">
                            <Link to="/" className='font-bold text-left flex items-center justify-start'>
                                <Lottie className='w-[100px] -ml-5' animationData={flowerLottie} loop={true} />
                                <span className='text-2xl uppercase'>Portfolio</span>
                            </Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {
                                    navlinks
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                </div>
                <div className="drawer-side fixed z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white text-black fixed z-50">
                        {/* Sidebar content here */}
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;