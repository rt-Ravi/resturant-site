import Layout from "./data/pages/Layout";
import HomePage from "./data/pages/Home";
import About from "./data/pages/About";
import Contact from "./data/pages/Contact";
import Lunch from "./data/pages/Lunch";
import Breakfast from "./data/pages/Breakfast";
import Dinner from "./data/pages/Dinner";
import Dessert from "./data/pages/Dessert";
import { Route, Routes} from "react-router-dom";
function App(){
    return(
        <>
           <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/lunch" element={<Lunch />} />
                    <Route path="/breakfast" element={<Breakfast />} />
                    <Route path="/dinner" element={<Dinner />} />
                    <Route path="/dessert" element={<Dessert />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;