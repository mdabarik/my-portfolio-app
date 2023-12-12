import { MdOutlineInsertLink } from "react-icons/md";
import { IoCodeSlash, IoEye, IoEyeOffOutline } from "react-icons/io5";
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
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <a href={client} className="bg-red-700 hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Client</span>
                        <IoCodeSlash className="text-xl"></IoCodeSlash>
                    </a>
                    <a href={server} className="bg-[blue] hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Server</span>
                        <IoCodeSlash className="text-lg"></IoCodeSlash>
                    </a>
                    <a href={live} className="bg-[orangered] hover:cursor-pointer border-[2px] items-center justify-center text-white px-4 py-1 text-sm rounded-full flex gap-2 uppercase">
                        <span>Live</span>
                        <IoEye className="text-xl"></IoEye>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;