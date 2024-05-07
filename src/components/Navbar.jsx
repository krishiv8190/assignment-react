import Button from "./Button";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="rounded-full py-4 px-5 border border-gray-300 flex justify-between items-center w-11/12">
        <div>
          <img src={Logo} alt="brand" className="h-10" />
        </div>
        <div className="space-x-5">
          <Link to="/register">
            <Button styleName="secondary">Get Projects</Button>
          </Link>
          <Button styleName="primary">Onboard Talent</Button>
        </div>
      </nav>
    </div>
  );
}
