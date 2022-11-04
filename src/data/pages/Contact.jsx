import "../css/contact.css";
import {useState} from "react";
import { useEffect } from "react";

function Contact(){
    const [input, setInput] = useState({});

    useEffect(() =>{
        document.title = " Gourmet au Catering | Contact";
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput(values => ({...values, [name]:value}));
    }

    return(
        <>
            <main>
                <div className="main-contact-con">
                    <div className="sub-contact-con">
                        <h2>SEND YOUR MESSAGE</h2>
                        <form action="/contact" method="post">
                            <input type="email" name="mail" value={input.mail || ""} onChange={handleChange} placeholder="Enter your Mail" className="mail"/>
                            <textarea name="message" value={input.message || ""} onChange={handleChange} id="" cols="30" rows="3" placeholder="Message"></textarea>
                            <input type="submit"  value="SEND MESSAGE" className="btn"/>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact;