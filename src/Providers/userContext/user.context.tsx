import { createContext, useState } from "react";
import { TDefaultProviderProps, TUserContext } from "../../Interfaces/userProvider.interfaces";
import { api } from "../../Services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TLogin, TLoginRes } from "../../Interfaces/login.interfaces";
import { toast } from "react-toastify";

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({children}: TDefaultProviderProps) => {
    const [toggleForm, setToggleForm] = useState(false);

    const navigate = useNavigate();

    const userLogin = async (formData: TLogin) => {
        try {
            console.log(formData)
          const response = await api.post<TLoginRes>("/login", formData, {
            withCredentials: true
        });
    
          localStorage.setItem("Token", `${response.data.token}`);
          toast.success(`Usuário logado`);
          navigate("/dashboard");
        } catch (error) {
            toast.error("Credênciais inválidas");
            console.log(error);
        } 
    };

    return(
        <UserContext.Provider value = {{
            toggleForm,
            setToggleForm,
            userLogin
        }}>
            {children}
        </UserContext.Provider>
    );
};