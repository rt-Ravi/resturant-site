import "../css/home.css";
import burger from "../images/hamburger.png";
import tablesetting1 from "../images/tablesetting1.png";
import tablesetting2 from "../images/tablesetting2.png";
import {useState} from "react";

function HomePage() {

    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput(values => ({...values, [name]:value}));
    }

    const showInput  = (event) => {
        event.preventDefault();
        // alert(input.username + ", " + input.number + ", " + input.date + ", "+ input.message);
    }

    return (
        <>
            <main>
                <div className="burger-con">
                    <img src={burger} alt="buger" />
                    <h2>Le Catering</h2>
                </div>

                <div className="main-con-dishes">
                    <div className="dish1">
                        <img src={tablesetting1} alt="dish1" />
                        <div>
                            <h1>About Catering</h1>
                            <h4>Tradition since 1889</h4>
                            <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="dish1 dish2">
                        <div>
                            <h1>About Catering</h1>
                            <h3>Bread Basket</h3>
                            <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                            <h3>Honey Almond Granola with Fruits</h3>
                            <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                            <h3>Belgian Waffle</h3>
                            <p>Vanilla flavored batter with malted flour 7.50</p>
                            <h3>Scrambled eggs</h3>
                            <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                            <h3>Blueberry Pancakes</h3>
                            <p>With syrup, butter and lots of berries 8.50</p>
                        </div>
                        <img src={tablesetting2} alt="dish1" />
                    </div>
                </div>
                <div className="contact-con">
                    <div className="sub-con">
                        <div>
                            <h1>Contact</h1>
                            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                            <h3>Catering Service, 42nd Living St, 43043 New York, NY</h3>
                            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Name" name="username" value={input.username || ""} onChange={handleChange}></input>
                            <input type="number" placeholder="How many People" name="number" value={input.number || ""} onChange={handleChange}></input>
                            <input type="date" name="date" value={input.date || ""} onChange={handleChange}/>
                            <input type="text" placeholder="Message \ Special requirements" name="message" value={input.message || ""} onChange={handleChange}/>
                            <input type="submit" value="SEND MESSAGE" onClick={showInput}/>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default HomePage;