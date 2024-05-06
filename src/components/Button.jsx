import PropTypes from "prop-types";

export default function Button({
    children,
    icon: Icon,
    styleName,
    ...otherProps
}) {
    const styles =
        styleName === "primary"
            ? "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white font-manrope"
            : "bg-[#F1F1F1] hover:bg-[#EAEAEA] text-black font-manrope";
    return (
        <button
            className={`${styles} px-6 py-3 rounded-full gap-2 h-16 font-semibold text-lg ${
                Icon ? "flex gap-3 items-center" : ""
            }`}
            {...otherProps}
        >
            {children}
            <span>{Icon && <Icon />}</span>
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.elementType,
    styleName: PropTypes.string,
    // Add other prop validations if needed
};
