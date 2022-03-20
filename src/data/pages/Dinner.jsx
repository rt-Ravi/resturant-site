import Dinner_items from "../API/Dinner";
import "../css/lunch.css";
import { useEffect } from "react";

function Dinner(){

    useEffect(() =>{
        document.title = " Gourmet au Catering | Dinner";
    }, []);

    return(
        <>
            <main>
                <div className="lunch-main-con">
                    <h1>Dinner Items</h1>
                    <div className="lunch-sub-con">
                        {
                            Dinner_items.map((items, keyN) => {
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

export default Dinner;