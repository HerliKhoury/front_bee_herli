
import { propertySchema } from "../../Schemas/property.schemas";
import { GenericPropertyForm } from "./GenericProperty.form";

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