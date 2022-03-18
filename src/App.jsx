import Layout from "./data/pages/Layout";
import HomePage from "./data/pages/Home";
import { Route, Routes} from "react-router-dom";
function App(){
    return(
        <>
           <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;