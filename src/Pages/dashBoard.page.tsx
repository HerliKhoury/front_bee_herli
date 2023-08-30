import { useContext, useEffect, useState } from "react";
import { Header } from "../Components/Header/Header.component";
import { CreatePropertyModal } from "../Components/Modals/CreateProperty.modal";
import { EditPropertyModal } from "../Components/Modals/EditProperty.modal";
import { PropertyCard } from "../Components/PropertyCard/PropertyCard.component";
import { propertyService } from "../Services/property.service";
import { toast } from "react-toastify";
import { NoProperty } from "../Components/NoProperty/NoProperty.component";
import { PropertyContext } from "../Providers/propertyContext/property.context";


export const DashBoard = () => {
    const {toggleEditFlag, flagEditForm, flagRegisForm, flagRefreshFlag} = useContext(PropertyContext);

    const [properties, setProperties] = useState<any[]>([]);
    const [edit, setEdit] = useState<any>();
    function handleEdition(id:number) {
        let selected = properties.find(el => el.id === id)
        if(!!selected) setEdit(selected)
        toggleEditFlag()
    }

    useEffect(()=> {
        async function loadProperties () {
            try {
                let response = await propertyService.getProperties();
                if (!!response) setProperties(response.data);
            } catch (error) {
                toast.error("Erro ao acessar base de dados")
            }
        }

        if(flagEditForm === false) loadProperties();    
    },[flagEditForm, flagRegisForm, flagRefreshFlag])

    return(
        <div className="wrap-dashboard">
            <div className="container">
                {/* <ConfirmEditModal/>
                <ConfirmDeleteModal/> */}
                <EditPropertyModal item={edit} />
                <CreatePropertyModal/>
                <Header userName="Herli" userEmail="meu@mail.com"/>
                {
                    properties.length > 0 ? 
                    <div>
                        {properties.map(property => (
                                    <PropertyCard
                                    key={Math.random()}
                                    id={property.id}
                                    name={property.name}
                                    total_area={property.total_area}
                                    built_area={property.built_area}
                                    zip_code={property.zip_code}
                                    price={property.price}
                                    address={property.address}
                                    onEdit={handleEdition}
                                    />
                                )
                            )
                        }
                    </div> 
                    : <NoProperty/>
                }
            </div>  
        </div>
    )
};