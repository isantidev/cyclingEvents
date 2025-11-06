import type { NavLink } from "@/shared/types/routes.types";
import { Link } from "react-router-dom";

interface NavbarProps {
    links: NavLink[];
}

const Navbar = ({ links }: NavbarProps) => {
    if (!links || links.length === 0) {
        return null; // or return a fallback UI
    }
    return (
        <nav className="@container flex justify-between items-center max-h-20 max-w-[1600px] w-full py-2 px-6">
            <div className="inline-flex justify-between items-center gap-2 md:gap-10">
                <figure className="flex gap-2 items-center">
                    <img
                        src="https://imgs.search.brave.com/haZNWP1vcgonKfJu-4Ub5jnw9tOMd08YhGdXo3GAmvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEzNTg1MC9p/c29sYXRlZC9wcmV2/aWV3L2ZkYmUyNjNj/ZTEyMjZhNGE0YWNl/MzUyNDFhYWZmYmY2/LWRlc2Nhcmdhci1p/Y29uby1kZS1udWJl/LnBuZw"
                        alt="isotipo"
                        className="aspect-square max-h-14 md:p-2"
                    />
                    <h1 className="hidden @3xl:block max-h-14 py-2 italic font-extrabold tracking-tighter text-2xl">
                        Eventos de Ciclismo
                    </h1>
                </figure>
            </div>
            <ul className="inline-flex gap-2 lg:gap-8 [&_a]:px-1 [&_a]:py-0.5 [&_a]:font-light [&_a]:text-md [&_a]:lg:text-lg [&_a]:hover:text-blue-600">
                {links.map((link: NavLink) => {
                    console.log(link.to);
                    return (
                        <Link key={link.to} to={link.to}>
                            {link.label}
                        </Link>
                    );
                })}
            </ul>
            <div className="inline-flex items-center gap-2 md:gap-8">
                <Link className="button-style" to={"client/auth"}>
                    Área del Cliente
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
