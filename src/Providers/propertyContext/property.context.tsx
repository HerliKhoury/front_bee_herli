import { createContext, useState } from "react";
import { TDefaultProviderProps, TProviderContext } from "../../Interfaces/propertyProvider.interfaces";

export const PropertyContext = createContext({} as TProviderContext);

export const PropertyProvider = ({children}: TDefaultProviderProps) => {
    const [flagRegisForm, setFlagRegisForm] = useState(false);
    const [flagEditForm, setFlagEditForm] = useState(false);
    const [flagConfirmDelete, setFlagConfirmDelete] = useState(false);
    const [flagConfirmOperation, setFlagConfirmOperation] = useState(false);
    const [flagRefreshFlag, setRefreshFlag] = useState(false);

    function toggleRegisFlag(){
        setFlagRegisForm(!flagRegisForm);
    };

    function toggleEditFlag(){
        setFlagEditForm(!flagEditForm);
    };

    function toggleConfirmDeleteFlag(){
        setFlagConfirmDelete(!flagConfirmDelete);
    };
    function toggleConfirmOperationFlag(){
        setFlagConfirmOperation(!flagConfirmOperation);
    };

    function toggleRefreshFlag(){
        setRefreshFlag(!flagRefreshFlag);
    }; 

    return(
        <PropertyContext.Provider value = {{
            toggleRegisFlag,
            toggleEditFlag,
            toggleConfirmDeleteFlag,
            toggleConfirmOperationFlag,
            toggleRefreshFlag,
            flagEditForm,
            flagRegisForm,
            flagConfirmOperation,
            flagConfirmDelete,
            flagRefreshFlag
        }}>
            {children}
        </PropertyContext.Provider>
    );
};