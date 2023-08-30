import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";
import { GenericPropertyForm } from "../Forms/GenericProperty.form";

interface IProps {
    item: any
}

export const EditPropertyModal = (props:IProps) => {
    const {flagEditForm, toggleEditFlag} = useContext(PropertyContext);


    return  (
        <Modal
            isOpen={flagEditForm}
            onRequestClose={toggleEditFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button className="close-btn" onClick={toggleEditFlag}>X</button>
            <GenericPropertyForm itemToEdit={props.item}/>
        </Modal>
    );
};