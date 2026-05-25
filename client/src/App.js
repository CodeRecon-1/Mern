import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import TrendingMissing from "./pages/TrendingMissing";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/trending"
                    element={<TrendingMissing />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;