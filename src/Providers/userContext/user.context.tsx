import { createContext, useState } from "react";
import { TDefaultProviderProps, TUserContext } from "../../Interfaces/userProvider.interfaces";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { TLogin, TLoginRes } from "../../Interfaces/login.interfaces";
import { toast } from "react-toastify";
import { TUser, TUserInfo, TUserReq } from "../../Interfaces/user.interfaces";

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({children}: TDefaultProviderProps) => {
    const [toggleForm, setToggleForm] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: ""
    });

    const navigate = useNavigate();

    const userLogin = async (formData: TLogin) => {
        try {
            const response = await api.post<TUserInfo>(
                "/login", 
                formData, {
                withCredentials: true
                }
            );
    
          localStorage.setItem("Token", `${response.data.token}`);
          setUserInfo({
            name: response.data.name,
            email: response.data.email
          });
          localStorage.setItem('user_name', response.data.name)
          localStorage.setItem('user_email', response.data.email)
          toast.success(`Usuário logado`);
          navigate("/dashboard");
        } catch (error) {
            toast.error("Credênciais inválidas");
            console.log(error);
        } 
    };

    const createUser = async(formData: TUser) => {
        const treatedData: TUserReq = {
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            name: formData.name
        }

        try {
            const response = await api.post("user", treatedData);
      
            toast.success(`Usuário ${response.data.name} cadastrado com sucesso `);
            setToggleForm(!toggleForm)
        } catch (error: any) {
            toast.error("Usuário não criado");
            console.log(error);
        } 
    }

    return(
        <UserContext.Provider value = {{
            toggleForm,
            setToggleForm,
            userLogin,
            createUser,
            userInfo
        }}>
            {children}
        </UserContext.Provider>
    );
};