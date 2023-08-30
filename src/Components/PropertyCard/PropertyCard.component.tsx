import { useContext } from "react";
import { PropertyContext } from "../../Providers/propertyContext/property.context";

export const PropertyCard = (
    props : {
        id: number,
        name: string, 
        total_area: string, 
        built_area: string, 
        address: string, 
        zip_code: string, 
        price: string,
        onEdit(id:number):void
    }
) => {
    return(
        <div id={`${props.id}`}>
            <div>
                <h2>{props.name}</h2>
                <p>Área total: {props.total_area}</p>
                <p>Área construida: {props.built_area}</p>
                <p>Endereço: {props.address}</p>
                <p>CEP: {props.zip_code}</p>
                <p>Preço: {props.price}</p>
            </div>
            <div>
                <button onClick={()=> {props.onEdit(props.id)}}>Editar</button>
                <button>Excluir</button>
            </div>
        </div>
    );
}