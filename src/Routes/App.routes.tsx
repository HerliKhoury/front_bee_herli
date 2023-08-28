import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home.page";
import { DashBoard } from "../Pages/DashBoard.page";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
    );
        
};