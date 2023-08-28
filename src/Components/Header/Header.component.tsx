import { useContext } from "react";
import { PropertyContext } from "../../Providers/propertyContext/property.context";

export const Header = (
    props: { userName: string, userEmail: string}
) => {

    const { toggleRegisFlag } = useContext(PropertyContext);

    return(
        <div>
            <div>
                <div>
                    <h1>{props.userName}</h1>
                    <p>{props.userEmail}</p>
                </div>
                <div>
                    <button onClick={toggleRegisFlag}>Cadastrar imóvel</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
}