import HtmlLogo from "./../../assets/skills/html.png";
import CssLogo from "./../../assets/skills/css.png";
import TailwindLogo from "./../../assets/skills/tailwind.png";
import MuiLogo from "./../../assets/skills/material-ui.png";
import JsLogo from "./../../assets/skills/js.png";
import ReactLogo from "./../../assets/skills/reactjs.png";
import NodejsLogo from "./../../assets/skills/nodejs.png";
import ExpressLogo from "./../../assets/skills/express.png";
import FirebaseLogo from "./../../assets/skills/firebase.png";
import GitLogo from "./../../assets/skills/git.png";
import GitHubLogo from "./../../assets/skills/github.png";
import MongoDbLogo from "./../../assets/skills/mongodb.png";
import CLogo from "./../../assets/skills/cprogramming.png";
import JavaLogo from "./../../assets/skills/java.png";
import PythonLogo from "./../../assets/skills/python.png";
import PostGreSQLLogo from "./../../assets/skills/postgresql.png";
import VsCodeLogo from "./../../assets/skills/vscode.png";
import Tilt from 'react-parallax-tilt';
import "./TechnicalSkills.css";

const TechnicalSkills = () => {
    return (
        <div className='my-10 pt-[600px] lg:pt-[80vh] relative z-20' id="technical-skills">
            <div className='max-w-[1280px] mx-auto'>
                <h2 className="text-3xl font-bold text-center mb-8">Technical <span className="text-[red]">Skills</span></h2>
                <div className='flex flex-wrap gap-6 items-center justify-center'>
                    <Tilt className="hover:cursor-pointer">
                        <div className='glow-animation bg-[#ff6f0130] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={HtmlLogo} alt="html logo" />
                            <span className='text-center text-[10px] block'>html</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#0278bd30] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={CssLogo} alt="css logo" />
                            <span className='text-center text-[10px] block'>css</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#05acc130] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={TailwindLogo} alt="tailwind logo" />
                            <span className='text-center text-[10px] block'>tailwind css</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#0088d130] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={MuiLogo} alt="mui logo" />
                            <span className='text-center text-[10px] block'>mui</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#fed70350] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={JsLogo} alt="js logo" />
                            <span className='text-center text-[10px] block'>javascript</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#3977bd35] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={ReactLogo} alt="reactjs logo" />
                            <span className='text-center text-[10px] block'>react js</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#21a36635] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={NodejsLogo} alt="nodejs logo" />
                            <span className='text-center text-[10px] block'>node js</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#00000038] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={ExpressLogo} alt="exress logo" />
                            <span className='text-center text-[10px] block'>express js</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#4caf5030] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={MongoDbLogo} alt="mongodb logo" />
                            <span className='text-center text-[10px] block'>mongodb</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#ffc40345] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={FirebaseLogo} alt="firebase logo" />
                            <span className='text-center text-[10px] block'>firebase</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#f4511e35] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={GitLogo} alt="git logo" />
                            <span className='text-center text-[10px] block'>git</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#00000030] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={GitHubLogo} alt="github logo" />
                            <span className='text-center text-[10px] block'>github</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#0088d130] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={VsCodeLogo} alt="vscode logo" />
                            <span className='text-center text-[10px] block'>vs code</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#565f9f30] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={CLogo} alt="c logo" />
                            <span className='text-center text-[10px] block'>c programming</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#0277bd30] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={JavaLogo} alt="java logo" />
                            <span className='text-center text-[10px] block'>java</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#ffc00830] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={PythonLogo} alt="python logo" />
                            <span className='text-center text-[10px] block'>python</span>
                        </div>
                    </Tilt>
                    <Tilt className="hover:cursor-pointer">
                        <div className='bg-[#0277bd30] w-fit p-2 rounded-lg'>
                            <img className='w-[100px]' src={PostGreSQLLogo} alt="postgresql logo" />
                            <span className='text-center text-[10px] block'>postgresql</span>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkills;
