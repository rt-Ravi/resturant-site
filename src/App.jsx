import Layout from "./data/pages/Layout";
import HomePage from "./data/pages/Home";
import About from "./data/pages/About";
import { Route, Routes} from "react-router-dom";
function App(){
    return(
        <>
           <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;