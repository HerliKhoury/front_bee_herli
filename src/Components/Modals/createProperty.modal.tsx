import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";
import { GenericPropertyForm } from "../Forms/GenericProperty.form";

export const CreatePropertyModal = () => {
    const {flagRegisForm, toggleRegisFlag} = useContext(PropertyContext);

    return  (
        <Modal
            isOpen={flagRegisForm}
            onRequestClose={toggleRegisFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button className="close-btn" onClick={toggleRegisFlag}>X</button>
            <GenericPropertyForm itemToEdit={undefined}/>
        </Modal>
    );
};