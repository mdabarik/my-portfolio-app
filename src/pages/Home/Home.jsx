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

            <div className="fixed top-0 left-0 z-0" style={{ height: '100vh', width: '100vw', background: 'transparent' }}>
                <Snowfall color="orange"   snowflakeCount={80} />
            </div>

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