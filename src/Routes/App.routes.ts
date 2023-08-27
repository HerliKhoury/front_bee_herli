import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/home.page";
import { DashBoard } from "../Pages/dashBoard.page";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
    );
};