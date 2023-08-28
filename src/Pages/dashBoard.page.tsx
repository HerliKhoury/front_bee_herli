import { Header } from "../Components/Header/Header.component";
import { CreatePropertyModal } from "../Components/Modals/createProperty.modal";

export const DashBoard = () => {
    return(
        <div>
            <CreatePropertyModal/>
            <Header userName="Herli" userEmail="meu@mail.com"/>
            {/* lógica dos cards ou vazio */}
        </div>
    )
};