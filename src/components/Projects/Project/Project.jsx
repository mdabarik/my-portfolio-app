import { IoCodeSlash, IoEye } from "react-icons/io5";

// const lists = ["User can add product and authentication system", "Moderator can review product, User can add product and authentication system, User can add product and authentication system", "normal user can pay using stripe to post more than 1 product"]

const Project = ({img, title, live, client, server, lists, technologies}) => {
    return (
        <div className="drop-shadow-xl bg-white border-[2px] rounded-xl flex flex-col md:flex-row p-4 w-[90%] lg:w-full mx-auto">
            <div className="h-[350px] rounded-xl overflow-hidden border-b-slate-200 border-b-[2px] flex-1">
                <img className="rounded-xl h-full object-cover w-full border-[2px] border-[#e7e6e6]" src={img} alt="image one" />
            </div>
            <div className="py-4 space-y-4 px-[15px] flex-1">
                <div>
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl">{title}</h2>
                </div>
                <div>
                    <ul className="space-y-[4px]">
                        {
                            lists?.map((item, i) => <li key={i}> {i+1}- {item}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <p><span className="font-bold">Technologies:</span> {technologies}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <a href={client} className="bg-red-700 hover:cursor-pointer border-[2px] items-center justify-center text-white px-6 py-2 rounded-full flex gap-2 uppercase">
                        <span>Client</span>
                        <IoCodeSlash className="text-xl"></IoCodeSlash>
                    </a>
                    <a href={server} className="bg-[blue] hover:cursor-pointer border-[2px] items-center justify-center text-white px-6 py-2 rounded-full flex gap-2 uppercase">
                        <span>Server</span>
                        <IoCodeSlash className="text-lg"></IoCodeSlash>
                    </a>
                    <a href={live} className="bg-[orangered] hover:cursor-pointer border-[2px] items-center justify-center text-white px-6 py-2 rounded-full flex gap-2 uppercase">
                        <span>Live</span>
                        <IoEye className="text-xl"></IoEye>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;