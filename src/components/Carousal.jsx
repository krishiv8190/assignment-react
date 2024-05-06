import PropTypes from "prop-types";
import { useState } from "react";

export default function Carousel({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative space-y-10">
            <div className="overflow-hidden">
                <ul
                    className="flex transition-transform ease-in-out duration-300"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {data.map((item, index) => (
                        <li key={index} className="flex-shrink-0 w-full">
                            <p className="max-w-96 text-4xl text-start font-semibold mb-3">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex ">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full mx-1 ${
                            index === activeIndex
                                ? "bg-green-500"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

Carousel.propTypes = {
    data: PropTypes.array.isRequired,
};
