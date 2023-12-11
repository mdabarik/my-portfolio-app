import { Container } from "@mui/material";
import BannerProfile from "./../../assets/profile.jpeg";
import VideoBanner from "./../../assets/banner-bg.mp4";

const Banner = () => {
    return (
        <Container maxWidth="xl">
            <div className="w-[100%] overflow-hidden relative bg-gray-200 text-black h-[500px] flex justify-between items-center">
                
                <video className="absolute top-0 left-0 min-w-[100%]" autoPlay muted loop id="myVideo">
                    <source src={VideoBanner} type="video/mp4" />
                </video>

                <div className="bg-gradient-to-b from-[#ffffffb3] via-white to-transparent w-full h-full absolute top-0 left-0"></div>

                <div className="flex-1 border-2 border-rose-500 relative z-50">
                    <div>
                        <h2 className="text-6xl font-bold">Hi, I'm Md. A. Barik</h2>
                        <p className="">Front End Web Developer</p>
                        <button className="btn btn-secondary">Download Resume</button>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="h-full flex items-end justify-end">
                        <img className="rounded-full w-[200px]" src={BannerProfile} alt="Md. A. Barik" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;