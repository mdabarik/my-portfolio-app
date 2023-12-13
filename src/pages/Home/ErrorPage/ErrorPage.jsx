import { useNavigate } from "react-router-dom";
import PageNotFoundLottie from "./../../../assets/lotties/404.json";
import Lottie from "lottie-react";

const ErrorPage = () => {

    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center">
            <div>
                <Lottie
                    animationData={PageNotFoundLottie}
                    loop={true}
                    className="h-[400px]"
                />
            <h2 className="font-bold text-2xl text-center mb-3 -mt-10 uppercase">404 Page Not Found!</h2>
            </div>
            <button className="btn btn-accent" onClick={() => navigate("/")}>Back To Home</button>
        </div>
    );
};

export default ErrorPage;