import { createContext, useState } from "react";
import { TDefaultProviderProps, TProviderContext } from "../../Interfaces/propertyProvider.interfaces";
import { TProperty, TPropertyRes, TPropertyUpdate } from "../../Interfaces/property.interfaces";
import { api } from "../../Services/api";
import { toast } from "react-toastify";

export const PropertyContext = createContext({} as TProviderContext);

export const PropertyProvider = ({children}: TDefaultProviderProps) => {
    const [flagRegisForm, setFlagRegisForm] = useState(false);
    const [flagEditForm, setFlagEditForm] = useState(false);

    function toggleRegisFlag(){
        setFlagRegisForm(!flagRegisForm);
    };

    function toggleEditFlag(){
        setFlagEditForm(!flagEditForm);
    };

    const createProperty = async (formData: TProperty) => {
        const token: string | null = localStorage.getItem("Token");
        try {
            await api.post("property", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
      
            toast.success("Imóvel cadastrado com sucesso");
            toggleRegisFlag();
        } catch (error: any) {
            toast.error("Imóvel não criado");
            console.log(error);
        } 
    };

    const getProperties = async () => {
        const token: string | null = localStorage.getItem("Token");
        try {
            const propertiesList:TPropertyRes[] = await api.get('property',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return propertiesList;
        } catch (error: any) {
            console.log(error);
        } 
    }

    /* const editProperty = async (formData: TPropertyUpdate) => {
        const token: string | null = localStorage.getItem("Token");
        try {
            await api.patch(`property/${formData.name}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
      
            toast.success("Imóvel cadastrado com sucesso");
            toggleRegisFlag();
        } catch (error: any) {
            toast.error("Imóvel não criado");
            console.log(error);
        } 
    }; */

    return(
        <PropertyContext.Provider value = {{
            toggleRegisFlag,
            toggleEditFlag,
            flagEditForm,
            flagRegisForm,
            createProperty,
            getProperties
        }}>
            {children}
        </PropertyContext.Provider>
    );
};