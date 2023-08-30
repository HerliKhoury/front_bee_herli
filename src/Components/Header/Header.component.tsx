import { useContext } from "react";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/userContext/user.context";

export const Header = (
) => {
    const navigation = useNavigate();
    const { toggleRegisFlag } = useContext(PropertyContext);
    const userInfo = {
        name: localStorage.getItem('user_name'),
        email: localStorage.getItem('user_email'),
    }

    const logOut = () => {
        localStorage.clear();
        navigation("/");
    };

    return(
        <div className="wrap-header">
            <div className="wrap-info">
                <h1 className="user-name">{userInfo.name}</h1>
                <p className="user-mail">{userInfo.email}</p>
            </div>
            <div className="wrap-btns">
                <button className="headder-btns" onClick={toggleRegisFlag}>Cadastrar imóvel</button>
                <button className="headder-btns" onClick={logOut}>Logout</button>
            </div>
        </div>
    );
}