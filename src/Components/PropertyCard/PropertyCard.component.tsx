import { useContext } from "react";
import { PropertyContext } from "../../Providers/propertyContext/property.context";

export const PropertyCard = (
    props : {
        name: string, 
        total_area: string, 
        built_area: string, 
        address: string, 
        zip_code: string, 
        price: string
    }
) => {
    const {toggleEditFlag} = useContext(PropertyContext);
    return(
        <div>
            <div>
                <h2>{props.name}</h2>
                <p>`Área total: ${props.total_area}`</p>
                <p>`Área construida: ${props.built_area}`</p>
                <p>`Endereço: ${props.address}`</p>
                <p>`CEP: ${props.zip_code}`</p>
                <p>`Preço: {props.price}`</p>
            </div>
            <div>
                <button onClick={toggleEditFlag}>Editar</button>
                <button>Excluir</button>
            </div>
        </div>
    );
}