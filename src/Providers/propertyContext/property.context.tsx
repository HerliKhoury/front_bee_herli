import { createContext, useState } from "react";
import { TDefaultProviderProps, TProviderContext } from "../../Interfaces/propertyProvider.interfaces";
import { TProperty, TPropertyRes, TPropertyUpdate } from "../../Interfaces/property.interfaces";
import { api } from "../../Services/api";
import { toast } from "react-toastify";

export const PropertyContext = createContext({} as TProviderContext);

export const PropertyProvider = ({children}: TDefaultProviderProps) => {
    const [flagRegisForm, setFlagRegisForm] = useState(false);
    const [flagEditForm, setFlagEditForm] = useState(false);
    const [flagConfirmDelete, setFlagConfirmDelete] = useState(false);

    function toggleRegisFlag(){
        setFlagRegisForm(!flagRegisForm);
    };

    function toggleEditFlag(){
        setFlagEditForm(!flagEditForm);
    };

    function toggleConfirmDeleteFlag(){
        setFlagConfirmDelete(!flagConfirmDelete);
    };

    return(
        <PropertyContext.Provider value = {{
            toggleRegisFlag,
            toggleEditFlag,
            flagEditForm,
            flagRegisForm,
            flagConfirmDelete,
            toggleConfirmDeleteFlag
        }}>
            {children}
        </PropertyContext.Provider>
    );
};