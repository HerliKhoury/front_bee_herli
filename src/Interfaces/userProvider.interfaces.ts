import { TLogin } from "./login.interfaces";
import { TUser, TUserInfoState } from "./user.interfaces";

export type TDefaultProviderProps = {
    children: React.ReactNode;
};

export type TUserContext = {
    toggleForm: boolean;
    setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
    userLogin: (formData: TLogin) => Promise<void>;
    createUser: (formData: TUser) => Promise<void>;
    userInfo: TUserInfoState
}

