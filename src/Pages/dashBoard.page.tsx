import { useEffect, useState } from "react";
import { Header } from "../Components/Header/Header.component";
import { CreatePropertyModal } from "../Components/Modals/CreateProperty.modal";
import { EditPropertyModal } from "../Components/Modals/EditProperty.modal";
import { PropertyCard } from "../Components/PropertyCard/PropertyCard.component";
import { propertyService } from "../Services/property.service";
import { toast } from "react-toastify";
import { NoProperty } from "../Components/NoProperty/NoProperty.component";


export const DashBoard = () => {
    const [properties, setProperties] = useState<any[]>([])
    useEffect(()=> {
        async function loadProperties () {
            try {
                let response = await propertyService.getProperties()
                if (!!response) setProperties(response)
            } catch (error) {
                toast.error("Erro ao acessar base de dados")
            }
        }
        loadProperties();    
    },[])
    return(
        <>
            <EditPropertyModal/>
            <CreatePropertyModal/>
            <Header userName="Herli" userEmail="meu@mail.com"/>
            {
                properties.length > 0 ? 
                <div>
                    {properties.map(property => (
                                <PropertyCard
                                id={property.id}
                                name={property.name}
                                total_area={property.total_area}
                                built_area={property.built_area}
                                zip_code={property.zip_code}
                                price={property.price}
                                address={property.address}
                                />
                            )
                        )
                    }
                </div> 
                : <NoProperty/>
            }
        </>
    )
};