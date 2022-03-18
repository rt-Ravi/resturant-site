import "../css/nav.css";
import {Link } from 'react-router-dom';
import { useState } from "react";

function Navbar() {

    const [p_style, setP_style] = useState({});
    const [show_nav, setShow_nav] = useState(true);
    const [up, setUp] = useState(true);
    let intervalId;

    const phone_menu = () => {
        if (show_nav && up) {
            setP_style({ height: "160px", display: "block" });
            setShow_nav(false);
            intervalId = setInterval(() => {
                if(window.outerWidth >= 619){
                    setP_style({ height: "0px", display: "block" });
                    clearInterval(intervalId);
                }
            }, 300);
            setTimeout(() => {
                setShow_nav(true);
                setUp(false);
            }, 400);
        }

        else if (show_nav && !up) {
            clearInterval(intervalId);
            setP_style({ height: "0px", display: "block" });
            setShow_nav(false);
            setTimeout(() => {
                setShow_nav(true);
                setUp(true);
            }, 400);
        }
    }

    return (
        <>
            <header>
            <nav>
                <div className="phone-nav" onClick={() => { phone_menu() }}>
                    <p>Click</p>
                </div>
                <span className="main-heading">
                    <h1>Gourmet au Catering</h1>
                </span>
                <ul className="left-side-links">
                    <Link to="/about"><li>About</li></ Link>
                    <li className="menu-btn">Menu
                       <ul className="bar">
                       <Link to="/#"><li>Samosa</li></Link>
                       <Link to="/#"><li>Bread Pakora</li></Link>
                       <Link to="/#"><li>Aalu Pakora</li></Link>
                       <Link to="/#"><li>Jalabi</li></Link>
                       <Link to="/#"><li>Sweets</li></Link>
                       <Link to="/#"><li>Ice Cream</li></Link>
                       </ul>
                    </li>
                    <Link to="/#"><li>Contact</li></Link>
                </ul>
                <div className="phone-menues" id="p-m" style={p_style}>
                    <ul>
                    <Link to="/#"><li>Home</li></Link>
                    <Link to="/#"><li>About</li></Link>
                    <Link to="/#"><li>Menu</li></Link>
                    <Link to="/#"><li>Contact</li></Link>
                    </ul>
                </div>
            </nav>
            </header>
        </>
    )
}

export default Navbar;