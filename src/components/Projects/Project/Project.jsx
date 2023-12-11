import { MdOutlineInsertLink } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { IoCodeWorking } from "react-icons/io5";



const Project = ({img, title, live, client, server}) => {
    return (
        <div className="drop-shadow-lg bg-white rounded-xl">
            <div className="h-[230px] overflow-hidden border-b-slate-200 border-b-[2px]">
                <img className="rounded-xl" src={img} alt="image one" />
            </div>
            <div className="py-4 space-y-4 px-[15px]">
                <div>
                    <h2 className="font-bold text-center text-lg">{title}</h2>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <a href={client} className="bg-red-700 hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Client</span>
                        <IoCodeSlash className="text-xl"></IoCodeSlash>
                    </a>
                    <a href={server} className="bg-[#cb8d1b] hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Server</span>
                        <IoCodeWorking className="text-lg"></IoCodeWorking>
                    </a>
                    <a href={live} className="bg-[orangered] hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Live</span>
                        <MdOutlineInsertLink className="text-xl"></MdOutlineInsertLink>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;