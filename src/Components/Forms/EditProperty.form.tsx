
import { propertySchemaOptional } from "../../Schemas/property.schemas";
import { GenericPropertyForm } from "./GenericProperty.form";

export const EditPropertyForm = () => {

    /* function onSubmit(data: TProperty){
        console.log(data);
    }
    */
    function onSubmit(){
        console.log("AJUDA A FIRMA");
    }

    return(
        <>
            <GenericPropertyForm 
            validationSchema={propertySchemaOptional} 
            onSubmitFunction={onSubmit} 
            submitButtonText="Editar"
            titleText="Edição de imóvel"
            />
        </>
    );
};