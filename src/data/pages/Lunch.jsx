import lunch_items from "../API/lunch";
import "../css/lunch.css";
import { useEffect } from "react";

function Lunch(){

    useEffect(() =>{
        document.title = " Gourmet au Catering | Lunch";
    }, []);

    return(
        <>
            <main>
                <div className="lunch-main-con">
                    <h1>Lunch Items</h1>
                    <div className="lunch-sub-con">
                        {
                            lunch_items.map((items, keyN) => {
                                return(
                                    <div key={keyN}>
                                        <img src={items.img} alt={items.type} />
                                        <h2>{items.type}</h2>
                                        <p>{items.Price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Lunch;