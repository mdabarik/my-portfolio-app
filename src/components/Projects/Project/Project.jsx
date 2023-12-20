import { IoCodeSlash, IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';

const Project = ({ img, title, live, client, server, lists, technologies }) => {

    return (
        <div className="drop-shadow-xl bg-[#ffffff90] border-[2px] rounded-xl flex flex-col md:flex-row p-4 w-[90%] lg:w-full mx-auto">
            <div className="h-[350px] relative z-0 rounded-xl overflow-hidden border-b-slate-200 border-b-[2px] flex-1">
                <Tilt>
                    <img className="rounded-xl h-full object-cover w-full border-[2px] border-[#e7e6e6]" src={img} alt="image one" />
                </Tilt>
            </div>
            <div className="py-4 space-y-4 px-[15px] flex-1">
                <div>
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl">{title}</h2>
                </div>
                <div>
                    <ul className="space-y-[4px]">
                        {
                            lists?.map((item, i) => <li key={i}> {i + 1}- {item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <p><span className="font-bold">Technologies:</span> {technologies}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <Link rel="noopener noreferrer" target="_blank" to={client} className="bg-red-700 hover:cursor-pointer border-[2px] items-center justify-center text-white px-6 py-2 rounded-full flex gap-2 uppercase">
                        <span>Client</span>
                        <IoCodeSlash className="text-xl"></IoCodeSlash>
                    </Link>
                    <Link rel="noopener noreferrer" target="_blank" to={server} className="bg-[blue] hover:cursor-pointer border-[2px] items-center justify-center text-white px-6 py-2 rounded-full flex gap-2 uppercase">
                        <span>Server</span>
                        <IoCodeSlash className="text-lg"></IoCodeSlash>
                    </Link>
                    <Link rel="noopener noreferrer" target="_blank" to={live} className="bg-[orangered] hover:cursor-pointer border-[2px] items-center justify-center text-white px-6 py-2 rounded-full flex gap-2 uppercase">
                        <span>Live</span>
                        <IoEye className="text-xl"></IoEye>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;