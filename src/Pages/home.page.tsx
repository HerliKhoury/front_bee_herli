import { LoginForm } from "../Components/Forms/login.form";

export const HomePage =  () => {

    return(
        <div>
            <div>
                <h1>Bee Imóveis</h1>
                <p>Crie sua própria lista de Imóveis de maneira fáilc e interativa</p>
                <img src="../Assets/house.svg" alt="Ilustração imóvel"/>
            </div>
            <div>
                <LoginForm/>
                <p>Ou</p>
                <button>Registre se</button>
            </div>
        </div>
    );
};