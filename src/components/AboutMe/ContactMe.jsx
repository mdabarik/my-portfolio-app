import { Container } from "@mui/material";
import { useRef, useState } from "react";
import { TiMessages } from "react-icons/ti";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import ContactLogo from "./../../assets/skills/contact-me.jpg";
import ContactMeLottie from "./../../assets/lotties/contact-me.json";
import Lottie from "lottie-react";
import ContactNowLottie from "./../../assets/lotties/contact-now.json";

const ContactMe = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const handleMessage = (e) => {
        setLoading(true);
        e.preventDefault();
        setError("");
        if (!name || name.length < 2) {
            setError("Name must be longer than 2 chars.");
            setLoading(false)
            return;
        }
        if (!email || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError("Please enter a valid email address");
            setLoading(false)
            return;
        }
        if (!subject || subject.length < 6) {
            setError("Subject must be longer than 6 chars.");
            setLoading(false)
            return;
        }

        if (!message || message.length < 20) {
            setError("Message must be longer than 20 chars.");
            setLoading(false)
            return;
        }

        emailjs.sendForm('service_wqabwgr', 'template_zl4crh7', form.current, 'yCrwCtJnDPzXUlfJP')
            .then((result) => {
                toast.success("Message Sent Successfully.")
                console.log(result);
                setLoading(false)
                form.current.reset();
            }, (error) => {
                toast.error("Something went wrong!")
                console.log(error);
                setLoading(false)
            });
    };


    return (
        <div className="my-10 relative z-20" id="contact-me">
            <Toaster />
            <Container maxWidth="xl">
                <h2 className="text-3xl font-bold text-center">Contact <span className="text-[red]">Me</span></h2>
                <div className="w-[90%] mx-auto mt-5">
                    <div className="flex flex-col md:flex-row justify-between mt-14 gap-2">
                        <div className="flex-1 p-3 border-2 rounded-xl text-center">
                            <div className="h-[300px]">
                                <Lottie className='w-full h-[250px] -ml-5' animationData={ContactNowLottie} loop={true} />
                                {/* <img className="w-full h-[260px] object-cover rounded-2xl" src={ContactLogo} alt="logo contact me" /> */}
                            </div>
                            <p className="text-sm w-[80%] mx-auto">Welcome to my contact hub! Whether you have questions, ideas, or just want to connect, I'm delighted to be at your service. Feel free to drop me a message anytime, and let's start a meaningful conversation.</p>
                            <div className="my-3">
                                <p className="font-bold">Email: <a href="mailto:mdabarik19@gmail.com">mdabarik19@gmail.com</a></p>
                                <p className="font-bold">Phone: <a href="call:+8801330759741">+8801330759741</a></p>
                            </div>
                        </div>
                        <div className="flex-1 border-[2px] rounded-lg p-3">
                            <div className="bg-[#] text-[white] py-2 text-center mb-3 rounded-full">
                                {/* <h3 className="text-xl text-black font-bold text-center uppercase">Fill Up Form to Send Message</h3> */}
                                <Lottie className='w-full h-[150px]' animationData={ContactMeLottie} loop={true} />
                            </div>
                            <form ref={form} onSubmit={handleMessage} className="space-y-4">
                                <div className="flex justify-between gap-4">
                                    <input name="from_name" onChange={e => setName(e.target.value.trim())} className="w-full px-3 py-2 border-2 rounded-xl outline-[red] border-grey-700" type="text" placeholder="Your Name" />
                                    <input name="user_email" onChange={e => setEmail(e.target.value.trim())} className="w-full px-3 py-2 border-2 rounded-xl outline-[red] border-grey-700" type="text" placeholder="Your Email" />
                                    <input className="hidden" value="Md. A. Barik" type="text" name="to_name" id="to_name" />
                                </div>
                                <div>
                                    <input name="reply_to" onChange={e => setSubject(e.target.value.trim())} className="w-full px-3 py-2 border-2 rounded-xl outline-[red] border-grey-700" type="text" placeholder="Subjects" />
                                </div>
                                <textarea name="message" onChange={e => setMessage(e.target.value.trim())} className="w-full  px-3 py-2 border-2 rounded-xl outline-[red] border-grey-700" placeholder="Enter your message" cols="30" rows="6"></textarea>


                                {
                                    loading ?
                                        <button disabled className="bg-[red] hover:cursor-progress text-white py-3 rounded-xl w-full flex gap-2 justify-center items-center">
                                            <span className="loading loading-bars loading-md text-white"></span>
                                        </button>
                                        :
                                        <button type="submit" className="bg-[red] hover:bg-[#ce2121] text-white py-3 rounded-xl w-full flex gap-2 justify-center items-center">
                                            <span className="uppercase">Send Message</span>
                                            <TiMessages className="text-2xl"></TiMessages>
                                        </button>
                                }
                            </form>
                            {
                                error ?
                                    <div className="bg-blue-200 text-blue-800 px-4 text-center py-1 mt-2 rounded">
                                        {error}
                                    </div> : ""
                            }
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default ContactMe;