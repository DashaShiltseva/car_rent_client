import axios from "axios";

export default class CarService {
    static async getAll(){
        const response =  axios.get(`http://localhost:3000/api/v1/cars`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        return response
    }

    static async getRentingAll(){
        const response =  axios.get(`http://localhost:3000/api/v1/cars?renting=true`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        return response
    }

    static async getById(id){
        const response =  axios.get(`http://localhost:3000/api/v1/cars/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        return response
    }

    static async toRent(id){
        const response =  axios.get(`http://localhost:3000/api/v1/cars/to_rent?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        return response
    }

    static async toRepair(id){
        const response =  axios.get(`http://localhost:3000/api/v1/cars/to_repair?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            }
        });
        return response
    }

}
