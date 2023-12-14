import ContactMe from "../../components/AboutMe/ContactMe";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import TechnicalSkills from "../../components/TechnicalSkills/TechnicalSkills";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Snowfall from "react-snowfall";
import ExperienceTimeline from "../../components/ExperienceTimeline/ExperienceTimeline";


const Home = () => {


    return (
        <div className="bg-[#f8f8ff]">
            <Banner></Banner>
            <TechnicalSkills></TechnicalSkills>

            <Projects></Projects>

            {/* <div className="fixed top-0 left-0 z-0" style={{ height: '100vh', width: '100vw', background: 'transparent' }}>
                <Snowfall color="orange"   snowflakeCount={80} />
            </div> */}

            <ContactMe></ContactMe>

            <ExperienceTimeline></ExperienceTimeline>

            <Footer></Footer>
            <div className="fixed z-50">
                <ScrollToTop smooth component={<FaArrowUp className="drop-shadow-xl text-[#231f6f] flex items-center justify-center w-full bg-[]  text-2xl" ></FaArrowUp>} />
            </div>
        </div>
    );
};

export default Home;


// import ContactMe from "../../components/AboutMe/ContactMe";
// import Banner from "../../components/Banner/Banner";
// import Footer from "../../components/Footer/Footer";
// import Projects from "../../components/Projects/Projects";
// import TechnicalSkills from "../../components/TechnicalSkills/TechnicalSkills";
// import ScrollToTop from "react-scroll-to-top";
// import { FaArrowUp } from "react-icons/fa";
// import Snowfall from "react-snowfall";
// import ExperienceTimeline from "../../components/ExperienceTimeline/ExperienceTimeline";
// import { loadSlim } from "@tsparticles/slim";
// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";

// const Home = () => {


//     const [init, setInit] = useState(false);

//     // this should be run only once per application lifetime
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//             // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//             // starting from v2 you can add only the features you need reducing the bundle size
//             //await loadAll(engine);
//             //await loadFull(engine);
//             await loadSlim(engine);
//             //await loadBasic(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);

//     const options = useMemo(
//         () => ({
//             background: {
//                 color: {
//                     value: "#f8f8ff",
//                 },
//             },
//             fpsLimit: 120,
//             interactivity: {
//                 events: {
//                     onClick: {
//                         enable: true,
//                         mode: "push",
//                     },
//                     onHover: {
//                         enable: true,
//                         mode: "repulse",
//                     },
//                     resize: true,
//                 },
//                 modes: {
//                     push: {
//                         quantity: 3,
//                     },
//                     repulse: {
//                         distance: 200,
//                         duration: 0.8,
//                     },
//                 },
//             },
//             particles: {
//                 color: {
//                     value: "#000",
//                 },
//                 links: {
//                     color: "#000",
//                     distance: 150,
//                     enable: true,
//                     opacity: 0.5,
//                     width: 1,
//                 },
//                 move: {
//                     direction: "none",
//                     enable: true,
//                     outModes: {
//                         default: "bounce",
//                     },
//                     random: false,
//                     speed: 6,
//                     straight: false,
//                 },
//                 number: {
//                     density: {
//                         enable: true,
//                         area: 800,
//                     },
//                     value: 200,
//                 },
//                 opacity: {
//                     value: 0.5,
//                 },
//                 shape: {
//                     type: "circle",
//                 },
//                 size: {
//                     value: { min: 1, max: 5 },
//                 },
//             },
//             detectRetina: true,
//         }),
//         []
//     );


//     const particlesLoaded = (container) => {
//         console.log(container);
//     };



//     return (
//         <div className="bg-[#f8f8ff]">
//             <Banner></Banner>
//             <TechnicalSkills></TechnicalSkills>

//             <Particles
//                 id="tsparticles"
//                 particlesLoaded={particlesLoaded}
//                 options={options}
//             />

//             <Projects></Projects>

//             {/* <div className="fixed top-0 left-0 z-0" style={{ height: '100vh', width: '100vw', background: 'transparent' }}>
//                 <Snowfall color="orange"   snowflakeCount={80} />
//             </div> */}

//             <ContactMe></ContactMe>

//             <ExperienceTimeline></ExperienceTimeline>

//             <Footer></Footer>
//             <div className="fixed z-50">
//                 <ScrollToTop smooth component={<FaArrowUp className="drop-shadow-xl text-[#231f6f] flex items-center justify-center w-full bg-[]  text-2xl" ></FaArrowUp>} />
//             </div>
//         </div>
//     );
// };

// export default Home;