import { toast } from "react-toastify";
import { propertyService } from "../../Services/property.service";
import { UserContext } from "../../Providers/userContext/user.context";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import { useContext } from "react";


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
    const {toggleRefreshFlag} = useContext(PropertyContext);

    async function handleSubmit(){
        try {
            await propertyService.deleteProperty(props.id);
            toast.success("Imóvel excluído com sucesso");
            toggleRefreshFlag();
        } catch (error) {
            toast.error("Operação não realizada")
        }
    };

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
                <button onClick={handleSubmit}>Excluir</button>
            </div>
        </div>
    );
}