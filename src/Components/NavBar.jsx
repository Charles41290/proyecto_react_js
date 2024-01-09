import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 d-flex ">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Autores Nacionales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Autores internacionales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Contáctanos</a>
                        </li>
                    </ul>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>



    );
}

export default NavBar;