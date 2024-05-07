import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-center font-manrope">
      <div className=" w-11/12 mt-10 bg-[#F5F5F5] p-16 rounded-3xl flex justify-between items-center">
        <div>
          <p className="font-medium text-lg">
            {" "}
            © Talup {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
        <div className="space-x-5">
          <Link to="/" className="underline underline-offset-2 text-lg">
            Terms & Conditions
          </Link>
          <Link to="/" className="underline underline-offset-2 text-lg">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
