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
                className="px-9 py-6 text-xl bg-[#EFEFEF] rounded-full w-7/12 max-w-lg placeholder:font-manrope placeholder:font-medium placeholder:text-xl placeholder:text-[#827A7A] focus:bg-[#EFEFEF]"
                id={id}
                {...props}
            />
            {isError && (
                <div className="relative mt-1 text-[#FF0808] text-xl flex items-center gap-1">
                    <div>{error}</div>
                </div>
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
