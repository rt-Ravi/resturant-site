import breakfast_items from "../API/breakfast";
import "../css/lunch.css";
import { useEffect } from "react";

function Breakfast(){

    useEffect(() =>{
        document.title = " Gourmet au Catering | Breakfast";
    }, []);

    return(
        <>
            <main>
                <div className="lunch-main-con">
                    <h1>Break Fast Items</h1>
                    <div className="lunch-sub-con">
                        {
                            breakfast_items.map((items, keyN) => {
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

export default Breakfast;