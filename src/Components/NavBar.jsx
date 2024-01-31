import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 d-flex ">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/autores/nacionales"}>Autores Nacionales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/autores/internacionales"}>Autores Internacionales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/sobre_nosotros"}>Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/contacto"}>Contáctanos</Link>
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