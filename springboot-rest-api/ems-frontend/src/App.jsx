import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import EmployeeComponent from "./components/EmployeeComponent.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<ListEmployeeComponent/>}></Route>
                    <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
                    <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    )
}

export default App
