import { GenericPropertyForm } from "./genericProperty.form";
import { propertySchema } from "../../Schemas/property.schemas";

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
            validationSchema={propertySchema} 
            onSubmitFunction={onSubmit} 
            submitButtonText="Cadastrar"
            titleText="Cadastro de imóvel"
            />
        </>
    );
};