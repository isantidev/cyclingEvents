const Navbar = () => {
    return (
        <nav className="flex justify-between py-2 px-6">
            <div className="flex">
                <figure>
                    <img src="#" alt="logo" />
                </figure>
                <ul>
                    <a href="#">Inicio</a>
                    <a href="#">Eventos</a>
                    <a href="#">Acerca de</a>
                </ul>
            </div>
            <div className="user">
                <button>Inicia sesión</button>
            </div>
        </nav>
    );
};

export default Navbar;
