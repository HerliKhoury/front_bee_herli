import { useContext } from "react";
import { PropertyContext } from "../../Providers/propertyContext/property.context";

export const Header = (
    props: { userName: string, userEmail: string}
) => {

    const { toggleRegisFlag } = useContext(PropertyContext);

    return(
        <div className="wrap-header">
            <div className="wrap-info">
                <h1 className="user-name">{props.userName}</h1>
                <p className="user-mail">{props.userEmail}</p>
            </div>
            <div className="wrap-btns">
                <button className="headder-btns" onClick={toggleRegisFlag}>Cadastrar imóvel</button>
                <button className="headder-btns">Logout</button>
            </div>
        </div>
    );
}