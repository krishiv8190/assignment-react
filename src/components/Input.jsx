import { MdErrorOutline } from "react-icons/md";
import PropTypes from "prop-types";

export default function Input({
    id,
    isError,
    error,
    additionalClasses,
    ...props
}) {
    return (
        <div
            className={`space-y-1 w-full flex items-center justify-center ${additionalClasses}`}
        >
            <input
                className="px-9 py-6 bg-[#EFEFEF] rounded-full w-7/12 max-w-lg placeholder:font-manrope placeholder:font-medium placeholder:text-xl placeholder:text-[#827A7A]"
                id={id}
                {...props}
            />
            {isError && (
                <span className="text-[#FF0808] text-sm flex items-center gap-1 pl-4">
                    <MdErrorOutline size={18} className="text-[#FF0808]" />
                    {error}
                </span>
            )}
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    isError: PropTypes.bool,
    error: PropTypes.string,
    additionalClasses: PropTypes.string,
};
