import { GenericPropertyForm } from "./genericProperty.form";
import { propertySchemaOptional } from "../../Schemas/property.schemas";

export const RegisterPropertyForm = () => {

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