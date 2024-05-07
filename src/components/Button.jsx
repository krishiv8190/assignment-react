import PropTypes from "prop-types";

export default function Button({
    children,
    icon: Icon,
    styleName,
    ...otherProps
}) {
    let styles;
    switch (styleName) {
        case "primary":
            styles = "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white font-manrope";
            break;
        case "secondary":
            styles = "bg-[#F1F1F1] hover:bg-[#EAEAEA] text-black font-manrope";
            break;
        case "form-true":
            styles =
                "bg-[#1C1C1C] mt-9 w-7/12 hover:bg-[#4E4E4E] text-white font-manrope font-semibold text-lg";
            break;
        case "form-false":
            styles =
                "bg-[#C9C9C9] hover:bg-[#EAEAEA] mt-9 w-7/12 text-white font-manrope font-semibold cursor-not-allowed";
            break;
        default:
            styles = "bg-[#1C1C1C] hover:bg-[#4E4E4E] text-white font-manrope";
    }

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
    styleName: PropTypes.oneOf([
        "primary",
        "secondary",
        "form-true",
        "form-false",
    ]),
};
