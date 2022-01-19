import { api } from "./AxiosService"

class CarsService {

    async getAllCars() {
        const res = await api.get('api/cars')
        console.log(res)
    }

}

export const carsService = new CarsService()