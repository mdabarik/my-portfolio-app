import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center text-clip w-full h-[300px] space-y-5">
            <div>
                Links
            </div>
            <div>
                <SocialLinks></SocialLinks>
            </div>
            <small>All Right Reserved 2023-2027 &copy; Md. A. Barik</small>
        </div>
    );
};

export default Footer;