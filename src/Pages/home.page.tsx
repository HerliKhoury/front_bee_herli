import { useContext } from "react";
import { LoginForm } from "../Components/Forms/Login.form";
import { UserContext } from "../Providers/userContext/user.context";
import { RegisterUserForm } from "../Components/Forms/RegisterUser.form";
import houseImg from "../Assets/house.svg";

export const HomePage =  () => {
    const {toggleForm} = useContext(UserContext);

    return(
        <div>
            <div>
                <h1>Bee Imóveis</h1>
                <p>Crie sua própria lista de Imóveis de maneira fácil e interativa</p>
                <img src={houseImg} alt="Ilustração imóvel"/>
            </div>
            <div>
                {toggleForm ? <RegisterUserForm/> : <LoginForm/>} 
            </div>
        </div>
    );
};