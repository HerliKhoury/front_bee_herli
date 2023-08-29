
import { useContext } from "react";
import { propertySchema } from "../../Schemas/property.schemas";
import { GenericPropertyForm } from "./GenericProperty.form";
import { PropertyContext } from "../../Providers/propertyContext/property.context";


export const RegisterPropertyForm = () => {

    const { createProperty, toggleRegisFlag } = useContext(PropertyContext);
    
    const onSubmit = (formData: any) =>{
        createProperty(formData);
    }

    return(
        <div className="centralize">
            <GenericPropertyForm 
            validationSchema={propertySchema} 
            onSubmitFunction={onSubmit} 
            submitButtonText="Cadastrar"
            titleText="Cadastro de imóvel"
            cancelFunction={toggleRegisFlag}
            />
        </div>
    );
};