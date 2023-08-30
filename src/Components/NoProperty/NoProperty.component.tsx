import noPropertiesImg from "../../Assets/house_closed.png";
import "./noProperty.style.css";

export const NoProperty = () => {
    return(
        <div className="no-property-div">
            <img className="no-property-img" src={noPropertiesImg} alt="Casa Fechada"/>
            <h1 className="no-property-info">Você não possui imóveis cadastrados</h1>
        </div>
    );
};