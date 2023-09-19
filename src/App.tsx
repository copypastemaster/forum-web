import { Routes, Route } from "react-router-dom"
import NavContainer from "./containers/NavContainer"
import Home from "./containers/Home"
import { ThemeProvider } from "./components/ui/theme-provider"
import './index.css'

function App () {

    return (
        <ThemeProvider defaultTheme="dark">
            <NavContainer />
            <Routes>
                <Route path="/" element={<Home />}/> 
            </Routes>
        </ThemeProvider>

    )
}

export default App