import noPropertiesImg from "../../Assets/house_closed.png";

export const NoProperty = () => {
    return(
        <div>
            <img src={noPropertiesImg} alt="Casa Fechada"/>
            <h1>Você não possui imóveis cadastrados</h1>
        </div>
    );
};