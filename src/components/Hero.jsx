import HeroSvg from "../assets/hero.svg";
import RocketSvg from "../assets/rocket.svg";
import StarsSvg from "../assets/stars.svg";
import Carousel from "./Carousal";
import Button from "./Button";
import { LuArrowRight } from "react-icons/lu";

function ArrowRight() {
    return <LuArrowRight size={20} />;
}

const DUMMY_CAROUSEL_DATA = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Elevate Fortune 50 insights teams with advanced research tools",
    "Maximize research potential for Fortune 50 companies' insights teams",
];

export default function Hero() {
    return (
        <div className="flex flex-col items-center gap-2 mt-10 mb-20">
            <h2 className="font-grace text-[#2DA950] text-4xl">
                Success Stories
            </h2>
            <p className="text-5xl font-semibold text-center font-manrope">
                Every success journey <br></br> we’ve encountered.
            </p>
            <div className="mt-20 flex">
                <div className="w-2/3 font-manrope">
                    <div className="relative w-[50%] mx-auto">
                        <img src={HeroSvg} alt="hero" className="" />
                        <div className="absolute top-20 -left-32 bg-white rounded-3xl drop-shadow-xl p-8 max-w-[250px] hover:scale-105 hover:ease-in-out transition-all">
                            <div className="relative">
                                <img
                                    src={StarsSvg}
                                    alt="stars"
                                    className="absolute -top-12 -left-7 w-20 h-20"
                                />
                                <span className="font-medium text-6xl">
                                    40%
                                </span>
                            </div>
                            <p className="text-[#828282] text-base mt-2 font-medium">
                                Achieved reduction in project execution time by
                                optimising team availability
                            </p>
                        </div>
                        <div className="absolute bottom-10 drop-shadow-xl -left-16 hover:scale-105 hover:ease-in-out transition-all flex gap-2 bg-white rounded-full p-5 max-w-[300px] shadow-sm shadow-black/20">
                            <img
                                className=" w-14 h-14"
                                src={RocketSvg}
                                alt="rocket"
                            />
                            <div>
                                <span className="font-bold text-2xl">
                                    10 DAYS
                                </span>
                                <p className="text-[#828282]">
                                    Staff Deployment
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#002E18] absolute -bottom-12 hover:scale-105 hover:ease-in-out transition-all -right-20 flex flex-col gap-2 rounded-2xl px-7 py-8 max-w-[250px] h-52 drop-shadow-2xl">
                            <div className="space-x-2">
                                <span className="text-white font-bold text-6xl">
                                    $0.5
                                </span>
                                <span className="text-[#CCCCCC] font-medium">
                                    MILLION
                                </span>
                            </div>
                            <p className="text-[#CCCCCC] font-medium mt-2">
                                Reduced client expenses by saving on hiring and
                                employee costs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-20 mt-20 w-1/3 font-manrope">
                    <Carousel data={DUMMY_CAROUSEL_DATA} />
                    <Button icon={ArrowRight} styleName="primary">
                        Explore More
                    </Button>
                </div>
            </div>
        </div>
    );
}
