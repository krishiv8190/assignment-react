import { useState } from "react";
import PropTypes from "prop-types";

export default function Accordion({ question, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  if (!question || !answer) {
    console.error(
      "Accordion component requires 'question' and 'answer' props.",
    );
    return null;
  }

  return (
    <div className="py-6 border-b border-gray-300 gap-6">
      <button
        onClick={() => setAccordionOpen((prev) => !prev)}
        className="flex justify-between w-full text-[#1C1C1C]"
      >
        <span className=" ml-2 text-xl leading-7 font-semibold w-3/4 font-manrope text-left">
          {question}
        </span>
        <span className="font-semibold text-3xl font-manrope">
          {accordionOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-base ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden leading-6 m-2 text-[#617275]">
          {answer}
        </div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
