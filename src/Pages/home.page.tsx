import { useState } from "react";
import { LoginForm } from "../Components/Forms/Login.form";


export const HomePage =  () => {
    

    return(
        <div>
            <div>
                <h1>Bee Imóveis</h1>
                <p>Crie sua própria lista de Imóveis de maneira fácil e interativa</p>
                <img src="../Assets/house.svg" alt="Ilustração imóvel"/>
            </div>
            <div>
                <LoginForm/>
            </div>
        </div>
    );
};