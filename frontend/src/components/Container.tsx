import { TContainerProps } from "@/types/types";

const Container = ({ children, className }: TContainerProps) => {
    return (
        <div className={`relative w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 ${className && className}`}>
            {children}
        </div>
    );
};

export default Container;