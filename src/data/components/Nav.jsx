import "../css/nav.css";
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
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
                <div className="phone-menues" id="p-m" style={p_style}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
            </header>
        </>
    )
}

export default Navbar;