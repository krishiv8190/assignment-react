import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";
import Caution from "../assets/caution.svg";

export default function Form({ onRegistration }) {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
    });

    const [error, setError] = useState({
        name: false,
        email: false,
    });

    const isValidEmail = (email) => {
        return email.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const formChangeHandler = (event) => {
        setFormValues((prevValues) => {
            return {
                ...prevValues,
                [event.target.name]: event.target.value,
            };
        });
    };

    const registrationSubmitHandler = (event) => {
        event.preventDefault();

        const nameValid = formValues.name.trim() !== "";
        const emailValid = isValidEmail(formValues.email);

        setError({
            name: !nameValid,
            email: !emailValid,
        });

        if (nameValid && emailValid) {
            onRegistration(true);
        } else {
            onRegistration(false);
        }
    };

    return (
        <section className="mt-10 flex flex-col items-center">
            <div className="space-y-4">
                <h2 className="text-center font-grace font-normal text-[#2DA950] text-4xl">
                    Registration Form
                </h2>
                <p className="text-center font-semibold text-6xl font-manrope">
                    Start your success <br /> Journey here!
                </p>
            </div>
            <form
                onSubmit={registrationSubmitHandler}
                className="flex flex-col gap-4 mt-8 w-1/2 items-center"
                noValidate
            >
                <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formValues.name}
                    onChange={formChangeHandler}
                    additionalClasses="m-3"
                />
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formValues.email}
                    onChange={formChangeHandler}
                    isError={error.email}
                />
                {error.email && (
                    <div className="text-[#FF0808] -mb-4 mt-3 mr-32 text-base font-medium flex justify-start items-center gap-1 pl-4 font-manrope">
                        <img
                            src={Caution}
                            alt="caution"
                            className="w-5 h-5 mr-1 justify-center items-center flex"
                        />
                        Please enter a valid email address
                    </div>
                )}
                {formValues.name && formValues.email ? (
                    <Button type="submit" styleName="form-true" formnovalidate>
                        Submit
                    </Button>
                ) : (
                    <Button type="button" styleName="form-false" formnovalidate>
                        Submit
                    </Button>
                )}
            </form>
        </section>
    );
}

Form.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};
