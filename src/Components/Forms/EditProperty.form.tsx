
import { useContext } from "react";
import { propertySchemaOptional } from "../../Schemas/property.schemas";
import { GenericPropertyForm } from "./GenericProperty.form";
import { PropertyContext } from "../../Providers/propertyContext/property.context";

export const EditPropertyForm = () => {

    const { toggleEditFlag } = useContext(PropertyContext)

    /* function onSubmit(data: TProperty){
        console.log(data);
    }
    */
    function onSubmit(){
        console.log("AJUDA A FIRMA");
    }

    return(
        <div className="centralize">
            <GenericPropertyForm 
            validationSchema={propertySchemaOptional} 
            onSubmitFunction={onSubmit} 
            submitButtonText="Editar"
            titleText="Edição de imóvel"
            cancelFunction={toggleEditFlag}
            />
        </div>
    );
};