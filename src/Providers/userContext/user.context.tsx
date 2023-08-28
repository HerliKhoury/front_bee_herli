import { createContext, useState } from "react";
import { TDefaultProviderProps, TUserContext } from "../../Interfaces/userProvider.interfaces";

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({children}: TDefaultProviderProps) => {
    const [toggleForm, setToggleForm] = useState(false);
    return(
        <UserContext.Provider value = {{
            toggleForm,
            setToggleForm
        }}>
            {children}
        </UserContext.Provider>
    );
};