import ContactMe from "../../components/AboutMe/ContactMe";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import TechnicalSkills from "../../components/TechnicalSkills/TechnicalSkills";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Scroll, { Events, scrollSpy } from 'react-scroll';


const Home = () => {



    return (
        <div className="bg-[#f8f8ff]">
            <Banner></Banner>
            <TechnicalSkills></TechnicalSkills>

            <Projects></Projects>

            <ContactMe></ContactMe>
            <Footer></Footer>
            <div>
                <ScrollToTop smooth component={<FaArrowUp className="drop-shadow-xl text-[#231f6f] flex items-center justify-center w-full bg-[]  text-2xl" ></FaArrowUp>} />
            </div>
        </div>
    );
};

export default Home;