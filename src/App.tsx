import { Routes, Route } from "react-router-dom"
import NavContainer from "./containers/NavContainer"
import Home from "./containers/Home"


function App () {

    return (
        <div>

            <NavContainer />
            <Routes>
                <Route path="/" element={<Home />}/> 
            </Routes>
            </div>

    )
}

export default App