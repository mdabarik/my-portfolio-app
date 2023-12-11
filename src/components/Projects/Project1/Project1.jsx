import ProjectImage1 from "./../../../assets/project1-screenshot1.png";
import { MdOutlineInsertLink } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { IoCodeWorking } from "react-icons/io5";



const Project1 = () => {
    return (
        <div className="drop-shadow-lg bg-white rounded-xl">
            <div className="h-[200px] overflow-hidden drop-shadow">
                <img className="rounded-xl" src={ProjectImage1} alt="image one" />
            </div>
            <div className="py-4 space-y-4 px-[15px]">
                <div>
                    <h2 className="font-bold text-center text-lg">Product Pulse - Product Mangement System</h2>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <a className="bg-blue-500 hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Live</span>
                        <MdOutlineInsertLink className="text-xl"></MdOutlineInsertLink>
                    </a>
                    <a className="bg-blue-500 hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Client</span>
                        <IoCodeSlash className="text-xl"></IoCodeSlash>
                    </a>
                    <a className="bg-blue-500 hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Server</span>
                        <IoCodeWorking className="text-lg"></IoCodeWorking>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project1;