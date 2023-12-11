import YouTubeLogo from "./../../assets/youtube.png";
import LinkedListLogo from "./../../assets/linkedin.png";
import GitHubLogo from "./../../assets/github.png";
import GmailLogo from "./../../assets/gmail.png";
import GFGLogo from "./../../assets/gfg.png";
import UdemyLogo from "./../../assets/udemy.png";
import LeetCodeLogo from "./../../assets/leetcode.webp";

const SocialLinks = () => {
    return (
        <>
            <div className="flex gap-2 items-center">
                <a href="https://www.linkedin.com/in/md-a-barik/" className=" bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={LinkedListLogo} alt="LinkedList" />
                </a>
                <a href="https://github.com/mdabarik" className="bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GitHubLogo} alt="github" />
                </a>
                <a href="mailto:mdabarik19@gmail.com" className="bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GmailLogo} alt="gmail" />
                </a>
                <a href="https://www.youtube.com/channel/UCsQvox_DAmM8g027TnCNslA" className="bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={YouTubeLogo} alt="youtube" />
                </a>
                <a href="https://www.udemy.com/user/abdul-barik-3/" className="bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={UdemyLogo} alt="udemy" />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/mdabarik" className="bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GFGLogo} alt="gfg" />
                </a>
                <a href="https://leetcode.com/mdabarik/" className="bg-[#cccccc] border-2 p-2 rounded-2xl">
                    <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={LeetCodeLogo} alt="leetcode" />
                </a>
            </div>
        </>
    );
};

export default SocialLinks;