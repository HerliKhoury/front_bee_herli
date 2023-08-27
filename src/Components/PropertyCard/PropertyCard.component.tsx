
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
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        </div>
    );
}