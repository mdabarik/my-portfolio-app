import { Container } from "@mui/material";
import Project1Image1 from "./../../assets/project1-screenshot1.png";
import Project from "./Project/Project";
import Project2Image1 from "./../../assets/hotel-booking-1.png";
import Project3Image1 from "./../../assets/brand-shop-1.png";


const Projects = () => {
    return (
        <Container maxWidth="xl">
            <h2 className="text-3xl font-bold text-center">My <span className="text-[red]">Projects</span></h2>
            <div className="my-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Project img={Project1Image1} title={"Product Pulse - Product Management System"} live={"https://product-pulse-web-app.web.app/"} client={"https://github.com/mdabarik/product-pulse-mern-app-client"} server={"https://github.com/mdabarik/product-pulse-mern-app-server"} />
                    <Project img={Project2Image1} title={"Hotel Booking - Hotel Management System"} live={"https://hotel-booking-assignment-11.web.app/"} client={"https://github.com/mdabarik/hotel-booking-client"} server={"https://github.com/mdabarik/hotel-booking-server"} />
                    <Project img={Project3Image1} title={"Brand Shop - Online Shopping"} live={"https://brand-shop-app.web.app/"} client={"https://github.com/mdabarik/brand-shop-client"} server={"https://github.com/mdabarik/brand-shop-server"} />
                </div>
            </div>
        </Container>
    );
};

export default Projects;