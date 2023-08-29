import { api } from "./api";

export class propertyService {
   
    static async getProperties(){
        let token = localStorage.getItem('Token')
        let response = await api.get('property', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
}