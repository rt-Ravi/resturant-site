import Layout from "./data/pages/Layout";
import HomePage from "./data/pages/Home";
import About from "./data/pages/About";
import Contact from "./data/pages/Contact";
import { Route, Routes} from "react-router-dom";
function App(){
    return(
        <>
           <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;