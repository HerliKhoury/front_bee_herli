import { useContext, useEffect } from "react";
import { LoginForm } from "../Components/Forms/Login.form";
import { UserContext } from "../Providers/userContext/user.context";
import { RegisterUserForm } from "../Components/Forms/RegisterUser.form";
import houseImg from "../Assets/house.svg";
import "./pages.style.css";
import { useNavigate } from "react-router-dom";

export const HomePage =  () => {
    const navigation = useNavigate();

    const {toggleForm} = useContext(UserContext);

    useEffect(() => {
        if(localStorage.getItem('Token')){
            navigation("/dashboard");
        }
    });

    return(
        <div className="wrap-home">
            <div className="info-div">
                <h1 className="page-title">Bee Imóveis</h1>
                <p className="page-sub-title">Crie sua própria lista de Imóveis de maneira fácil e interativa</p>
                <img className="my-img" src={houseImg} alt="Ilustração imóvel"/>
            </div>
            <div className="forms-div">
                {toggleForm ? <RegisterUserForm/> : <LoginForm/>} 
            </div>
        </div>
    );
};