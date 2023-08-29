import { useContext } from "react";
import { LoginForm } from "../Components/Forms/Login.form";
import { UserContext } from "../Providers/userContext/user.context";
import { RegisterUserForm } from "../Components/Forms/RegisterUser.form";
import houseImg from "../Assets/house.svg";
import "./pages.style.css";

export const HomePage =  () => {
    const {toggleForm} = useContext(UserContext);

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