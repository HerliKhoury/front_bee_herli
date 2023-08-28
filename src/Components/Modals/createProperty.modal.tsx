import { useContext } from "react";
import { RegisterPropertyForm } from "../Forms/RegisterProperty.form";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";

export const CreatePropertyModal = () => {
    const {flagRegisForm, toggleRegisFlag} = useContext(PropertyContext);

    

    return  (
        <Modal
            isOpen={flagRegisForm}
            onRequestClose={toggleRegisFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button onClick={toggleRegisFlag}>X</button>
            <RegisterPropertyForm/>
            <button onClick={toggleRegisFlag}>Close</button>
        </Modal>
    );
};