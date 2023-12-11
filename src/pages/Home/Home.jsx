import ContactMe from "../../components/AboutMe/ContactMe";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import TechnicalSkills from "../../components/TechnicalSkills/TechnicalSkills";

const Home = () => {
    return (
        <div className="bg-[#f8f8ff]">
            <Banner></Banner>
            <TechnicalSkills></TechnicalSkills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;