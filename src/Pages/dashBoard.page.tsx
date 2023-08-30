import { useContext, useEffect, useState } from "react";
import { Header } from "../Components/Header/Header.component";
import { CreatePropertyModal } from "../Components/Modals/CreateProperty.modal";
import { EditPropertyModal } from "../Components/Modals/EditProperty.modal";
import { PropertyCard } from "../Components/PropertyCard/PropertyCard.component";
import { propertyService } from "../Services/property.service";
import { toast } from "react-toastify";
import { NoProperty } from "../Components/NoProperty/NoProperty.component";
import { PropertyContext } from "../Providers/propertyContext/property.context";
import { useNavigate } from "react-router-dom";
import DashBoardTable from "../Components/DashBoardTable";
import { ConfirmDeleteModal } from "../Components/Modals/ConfirmDelete.modal";


export const DashBoard = () => {
    const navigation = useNavigate();
    const [toDelete, setToDelete] = useState(-1)
    const {toggleConfirmDeleteFlag, toggleEditFlag, flagEditForm, flagRegisForm, flagRefreshFlag, flagConfirmDelete} = useContext(PropertyContext);
    
    const [properties, setProperties] = useState<any[]>([]);
    const [edit, setEdit] = useState<any>();

    function askConfirmation(target: number) {
        setToDelete(target)
        toggleConfirmDeleteFlag()
    }
    function handleEdition(id:number) {
        let selected = properties.find(el => el.id === id)
        if(!!selected) setEdit(selected)
        toggleEditFlag() 
    }
    function handleSelection(target: number, action:string) {
        if(action === 'edit') handleEdition(target)
        else askConfirmation(target) // ação de deletar aqui!
    }
    useEffect(() => {
        if(!localStorage.getItem('Token')){
            navigation("/");
        }
    });

    useEffect(()=> {
        async function loadProperties () {
            try {
                let response = await propertyService.getProperties();
                if (!!response) setProperties(response.data);
            } catch (error) {
                toast.error("Erro ao acessar base de dados")
            }
        }

        if(flagEditForm === false || flagConfirmDelete === false) loadProperties();    
    },[flagEditForm, flagRegisForm, flagRefreshFlag, flagConfirmDelete])
    
    return(
        <div className="wrap-dashboard">
            <ConfirmDeleteModal id={toDelete} name={''}/>
            <div className="container">
                {/* <ConfirmEditModal/>
                <ConfirmDeleteModal/> */}
                <EditPropertyModal item={edit} />
                <CreatePropertyModal/>
                <Header/>
                {
                    properties.length > 0 ? 
                    <div className="wrap-table">
                         <DashBoardTable properties={properties} onSelect={handleSelection} />
                        {/* {properties.map(property => (
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
                        } */}
                       
                    </div> 
                    : <NoProperty/>
                }
            </div>  
        </div>
    )
};