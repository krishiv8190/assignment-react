import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Form from "./Form";
import { useState } from "react";
import Cross from "../assets/cross.svg";

export default function Register() {
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

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
                <>
                    <h1>Heheheheheh</h1>
                </>
            )}
        </>
    );
}
