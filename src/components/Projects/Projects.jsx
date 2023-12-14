import Project1Image1 from "./../../assets/project1-screenshot1.png";
import Project from "./Project/Project";
import Project2Image1 from "./../../assets/hotel-booking-1.png";
import Project3Image1 from "./../../assets/brand-shop-1.png";


const Projects = () => {
    const lists1 = [
        "Implemented three-tier user roles (admin, moderator, normal user) with streamlined management and coupon creation for admins.", 
        "Moderator can approve/reject products, enhancing user engagement.", 
        "Successfully integrated Stripe payment API for seamless and secure transactions, enhancing the user experience."
    ]
    const lists2 = [
        "Created a user-friendly MERN app enabling seamless room bookings, date edits, and cancellations.", 
        "Implemented interactive features, including a homepage carousel, testimonials, and newsletter sign-up.", 
        "Developed essential pages (About Us, Our Team, Contact Us) for a professional and informative user journey."
    ]
    const lists3 = [
        "Developed an efficient Cart system allowing users to manage products.", 
        "Implemented secure user authentication with Google Sign-In and Login/Registration system.", 
        "Designed and optimized Add/Edit Product Pages for smooth product management."
    ]

    const technologies1 = "React, React Router Dom, Tailwnd, DaisyUI, MUI, Express, JWT, Firebase, Stripe and others packages."
    const technologies2 = "React, React Router Dom, Tailwind, DaisyUi, MUI, ExpressJS, JWT, Firebase, Stripe and some others packages"
    const technologies3 = "React, React Router Dom, Tailwind, DaisyUi, MUI, ExpressJS, Firebase, Stripe and many other npm package."

    return (
        <div className="max-w-[1280px] mx-auto relative z-20" id="projects">
            <div>
                <h2 className="text-3xl font-bold text-center">My <span className="text-[red]">Projects</span></h2>
                <div className="my-4">
                    <div className="grid grid-cols-1 gap-6">
                        <Project technologies={technologies1} lists={lists1} img={Project1Image1} title={"Product Pulse - Product Management System"} live={"https://product-pulse-web-app.web.app/"} client={"https://github.com/mdabarik/product-pulse-mern-app-client"} server={"https://github.com/mdabarik/product-pulse-mern-app-server"} />
                        <Project technologies={technologies2} lists={lists2} img={Project2Image1} title={"Hotel Booking - Hotel Management System"} live={"https://hotel-booking-system-a8ac5.web.app/"} client={"https://github.com/mdabarik/hotel-booking-client"} server={"https://github.com/mdabarik/hotel-booking-server"} />
                        <Project technologies={technologies3} lists={lists3} img={Project3Image1} title={"Brand Shop - Online Shopping"} live={"https://brand-shop-app.web.app/"} client={"https://github.com/mdabarik/brand-shop-client"} server={"https://github.com/mdabarik/brand-shop-server"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;