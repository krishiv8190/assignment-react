import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Form from "./Form";
import { useState, useEffect } from "react";
import Cross from "../assets/cross.svg";
import Success from "../assets/success.svg";

export default function Register() {
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [redirectTimer, setRedirectTimer] = useState(5);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (registrationSuccess) {
            const timer = setTimeout(() => {
                setRedirectTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            if (redirectTimer === 0) {
                navigateTo("/");
            }

            return () => clearTimeout(timer);
        }
    }, [registrationSuccess, redirectTimer, navigateTo]);

    return (
        <>
            <header className="mx-12 flex justify-between items-center">
                <img src={Logo} alt="brand" className="w-30" />
                {!registrationSuccess && (
                    <Link
                        to="/"
                        className="justify-center items-center flex border border-gray-300 rounded-full py-3 px-5 font-bold w-20 h-20"
                    >
                        <img className="w-24" src={Cross} alt="" />
                    </Link>
                )}
            </header>
            {!registrationSuccess ? (
                <Form onRegistration={setRegistrationSuccess} />
            ) : (
                <div className="flex items-center justify-center max-h-full mt-20">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <img src={Success} alt="tick" />
                        <h4 className="font-grace text-4xl text-[#2DA950] mt-10">
                            Success Submitted
                        </h4>
                        <h1 className="font-manrope font-semibold text-6xl mt-2 text-[#1C1C1C]">
                            Congratulations
                        </h1>
                        <p className="font-manrope font-medium text-2xl text-center text-[#727272] mt-10">
                            Your request has been successfully submitted to us.
                            We will validate your information and reach out to
                            your shortly with updates
                        </p>
                        <div className="font-manrope text-xl text-center mt-32 ">
                            <span className="font-medium text-[#727272]">
                                Redirecting you to Homepage in
                            </span>
                            <span className="ml-1 font-bold text-[#1C1C1C]">
                                {redirectTimer} Seconds
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
