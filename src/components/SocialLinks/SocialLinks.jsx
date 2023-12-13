import YouTubeLogo from "./../../assets/youtube.png";
import LinkedListLogo from "./../../assets/linkedin.png";
import GitHubLogo from "./../../assets/github.png";
import GmailLogo from "./../../assets/gmail.png";
import GFGLogo from "./../../assets/gfg.png";
import UdemyLogo from "./../../assets/udemy.png";
import LeetCodeLogo from "./../../assets/leetcode.webp";
import { Link } from "react-router-dom";

const SocialLinks = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 items-center">
                <Link rel="noopener noreferrer" target="_blank" to="https://www.linkedin.com/in/md-a-barik/" className=" bg-[#0277b530] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={LinkedListLogo} alt="LinkedList" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://github.com/mdabarik" className="bg-[#00000025] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GitHubLogo} alt="github" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="mailto:mdabarik19@gmail.com" className="bg-[#f4433630] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GmailLogo} alt="gmail" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://www.youtube.com/channel/UCsQvox_DAmM8g027TnCNslA" className="bg-[#e6000130] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={YouTubeLogo} alt="youtube" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://www.udemy.com/user/abdul-barik-3/" className="bg-[#eb524f30] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={UdemyLogo} alt="udemy" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://auth.geeksforgeeks.org/user/mdabarik" className="bg-[#2c8e4430] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GFGLogo} alt="gfg" />
                </Link>
                <Link rel="noopener noreferrer" target="_blank" to="https://leetcode.com/mdabarik/" className="bg-[#00000020] p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={LeetCodeLogo} alt="leetcode" />
                </Link>
            </div>
        </>
    );
};

export default SocialLinks;