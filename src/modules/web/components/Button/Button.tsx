interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
}

const Button = ({ children, href = "#", className }: ButtonProps) => {
    return (
        <a
            tabIndex={0}
            href={href}
            className={`max-w-48 w-fit px-4 py-2 rounded-lg cursor-pointer font-semibold lg:text-lg text-pretty text-center bg-blue-600 text-white hover:bg-blue-700 ${
                className || ""
            }`}
        >
            {children}
        </a>
    );
};

export default Button;
