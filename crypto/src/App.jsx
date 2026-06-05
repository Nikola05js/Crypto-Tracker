import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { CoinDetails } from "./pages/CoinDetail";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/coin/:id" element={<CoinDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App
