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
            className={`bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 ${
                className || ""
            }`}
        >
            {children}
        </a>
    );
};

export default Button;
