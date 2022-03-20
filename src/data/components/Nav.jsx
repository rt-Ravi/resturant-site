import "../css/nav.css";
import { Link } from 'react-router-dom';
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
                if (window.outerWidth >= 619) {
                    setP_style({ height: "0px", display: "block" });
                    clearInterval(intervalId);
                }
            }, 300);
            setTimeout(() => {
                setShow_nav(true);
                setUp(false);
                setP_style(values => ({...values, overflow: "unset"}));
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
                        <p>|||</p>
                    </div>
                    <span className="main-heading">
                        <Link to="/"><h1>Gourmet au Catering</h1></Link>
                    </span>
                    <ul className="left-side-links">
                        <Link to="/about"><li>About</li></ Link>
                        <li className="menu-btn">Menu
                            <ul className="bar">
                                <Link to="/breakfast"><li>Break Fast</li></Link>
                                <Link to="/lunch"><li>Lunch</li></Link>
                                <Link to="/dinner"><li>Diner</li></Link>
                                <Link to="/dessert"><li>Dessert</li></Link>
                            </ul>
                        </li>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                    <div className="phone-menues" id="p-m" style={p_style}>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <li className="phone-menu-btn">Menu
                                <ul className="phone-bar">
                                    <Link to="/breakfast"><li>Break Fast</li></Link>
                                    <Link to="/lunch"><li>Lunch</li></Link>
                                    <Link to="/dinner"><li>Diner</li></Link>
                                    <Link to="/dessert"><li>Dessert</li></Link>
                                </ul>
                            </li>
                            <Link to="/contact"><li>Contact</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;