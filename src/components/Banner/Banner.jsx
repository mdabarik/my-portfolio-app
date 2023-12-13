import BannerProfile from "./../../assets/profile.jpeg";
import { FaDownload } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from "../SocialLinks/SocialLinks";
import Lottie from "lottie-react";
import flowerLottie from "./../../assets/lotties/banner-bg.json";
// import CodingIcon from "./../../assets/lotties/profile-me.json";
import CodingIcon from "./../../assets/lotties/codingLive.json";

const Banner = () => {
    return (

        <div className="w-[100%] text-white overflow-hidden flex items-center justify-center absolute z-20 top-0 left-0 h-[100vh]  mb-[100vh] md:mb-[100vh] md:h-[580px] pt-5">
            {/* bg animation */}
            <div>
                <Lottie className='w-[100vw] absolute z-10 top-0 left-0' animationData={flowerLottie} loop={true} />
            </div>
            {/* <div>
                <Lottie className='w-[100vw] absolute z-10 top-0 left-0' animationData={banner2} loop={true} />
            </div> */}
            {/* overlay */}
            <div className="w-[100vw] bg-[#00000090] z-20 absolute top-0 left-0 h-[100vh]"></div>

            <div className="max-w-[1280px] mx-auto">
                <div className="h-full w-[100%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="flex-1 relative z-50">
                        <div className="">
                            <h2 className="text-xl md:text-4xl lg:text-5xl font-bold">Hi, I'm Md. A. Barik</h2>
                            <div className="">
                                <TypeAnimation
                                    sequence={[
                                        'Front End Developer',
                                        1000,
                                        'ReactJS Developer',
                                        1000,
                                        'MERN Stack Developer',
                                        1000,
                                        'LeetCode Problem Solver',
                                        1000
                                    ]}
                                    className="text-2xl md:text-3xl lg:text-5xl py-2"
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block', margin: '0px 0px' }}
                                    repeat={Infinity}
                                />
                            </div>
                            <div>
                                <p className="pb-3">
                                    I'm a dedicated front-end developer with a robust grasp of HTML5, CSS3, and JavaScript. Proficient in developing dynamic web applications using React, Express, Node.js, and MongoDB. I also share my knowledge by teaching programming and data structures on Udemy.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://drive.google.com/uc?export=download&id=16LPKzBpudfSX4i92i85qwtPOMLsDFKc-" className="bg-[red] border-[2px] border-red-600 hover:bg-[#b01d1d] text-white px-6 py-3 text-sm rounded-full flex gap-2 uppercase" download>
                                    <FaDownload></FaDownload>
                                    <span>Download Resume</span>
                                </a>
                                <a href="https://drive.google.com/file/d/16LPKzBpudfSX4i92i85qwtPOMLsDFKc-/view?usp=sharing" className="bg-[white] border-[2px] hover:cursor-pointer border-red-600 hover:bg-[transparent] text-black px-6 py-3 text-sm rounded-full flex gap-2 uppercase">
                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                    <span>View Resume</span>
                                </a>
                            </div>
                            <div className="mt-3">
                                <SocialLinks></SocialLinks>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative z-20">
                        <div className="h-full flex items-end justify-end">
                            {/* <img className="rounded-full w-[200px] md:w-[400px]" src={BannerProfile} alt="Md. A. Barik" /> */}
                            <div>
                                <Lottie className='w-[500px] -mt-20 h-[500px] rounded-full' animationData={CodingIcon} loop={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;