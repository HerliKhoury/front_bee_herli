import { Header } from "../Components/Header/Header.component";
import { CreatePropertyModal } from "../Components/Modals/CreateProperty.modal";
import { EditPropertyModal } from "../Components/Modals/EditProperty.modal";
import { PropertyCard } from "../Components/PropertyCard/PropertyCard.component";


export const DashBoard = () => {
    return(
        <div>
            <EditPropertyModal/>
            <CreatePropertyModal/>
            <Header userName="Herli" userEmail="meu@mail.com"/>
            {/* lógica dos cards ou vazio */}
            <PropertyCard 
            name="Erebor" 
            total_area="20000 Km squared"
            built_area="15000 Km squared"
            address="Undet The Mountain"
            zip_code="73345-22"
            price="2000000000000000000 Golden Coins"/>
        </div>
    )
};