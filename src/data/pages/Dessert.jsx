import Desert_items from "../API/Dessert";
import "../css/lunch.css";

function Dessert(){
    return(
        <>
            <main>
                <div className="lunch-main-con">
                    <h1>Dessert Items</h1>
                    <div className="lunch-sub-con">
                        {
                            Desert_items.map((items, keyN) => {
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

export default Dessert;