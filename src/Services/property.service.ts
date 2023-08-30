import { TProperty, TPropertyUpdate } from "../Interfaces/property.interfaces";
import { api } from "./api";

export class propertyService {

    static async createProperty(propertyData: TProperty){
        let token = localStorage.getItem('Token');
        let response = await api.post(
            "property",
            propertyData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response;
    };
   
    static async getProperties(){
        let token = localStorage.getItem('Token');
        let response = await api.get('property', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    };

    static async updateProperty(
        id: number, 
        formData: TPropertyUpdate
    ){
        let token = localStorage.getItem('Token');
        let response = await api.patch(
            `property/${id}`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response;
    };

    static async deleteProperty(id: number){
        let token = localStorage.getItem('Token');
        await api.delete(
            `property/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    };
};