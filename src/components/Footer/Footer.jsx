import NavScrolLinks from "../Navbar/NavScrolLinks";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
    return (
        <div className="bg-[#30057098] text-white relative z-20 flex flex-col items-center justify-center text-clip w-full h-[300px] space-y-5">
            <div className="list-none flex flex-wrap gap-4">
                <NavScrolLinks></NavScrolLinks>
            </div>
            <div>
                <SocialLinks></SocialLinks>
            </div>
            <small>All Right Reserved 2023-2027 &copy; Md. A. Barik</small>
        </div>
    );
};

export default Footer;