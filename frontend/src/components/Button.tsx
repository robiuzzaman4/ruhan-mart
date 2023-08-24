import { TButtonProps } from "@/types/types";

const Button = ({children, className, type, onClick}: TButtonProps) => {
    return (
        <button
        onClick={onClick}
        type={type ? type : "button"} 
        className={`px-4 py-2 text-sm font-medium ${className && className}`}>
            {children}
        </button>
    );
};

export default Button;