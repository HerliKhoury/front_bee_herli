import { createContext, useState } from "react";
import { TDefaultProviderProps, TProviderContext } from "../../Interfaces/propertyProvider.interfaces";
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

    return(
        <PropertyContext.Provider value = {{
            toggleRegisFlag,
            toggleEditFlag,
            flagEditForm,
            flagRegisForm
        }}>
            {children}
        </PropertyContext.Provider>
    );
};