import { toast } from "react-toastify";
import { propertyService } from "../../Services/property.service";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import { useContext } from "react";
import "./propertyCard.style.css";

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
        <div className="card" id={`${props.id}`}>
            <div className="wrap-info-card">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-infos">Área total: {props.total_area}</p>
                <p className="card-infos">Área construida: {props.built_area}</p>
                <p className="card-infos">Endereço: {props.address}</p>
                <p className="card-infos">CEP: {props.zip_code}</p>
                <p className="card-infos">Preço: {props.price}</p>
            </div>
            <div className="wrap-btns">
                <button className="card-btns" onClick={()=> {props.onEdit(props.id)}}>Editar</button>
                <button className="card-btns" onClick={handleSubmit}>Excluir</button>
            </div>
        </div>
    );
}