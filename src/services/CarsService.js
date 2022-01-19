import { AppState } from "../AppState"
import { api } from "./AxiosService"

class CarsService {

    async getAllCars() {
        const res = await api.get('api/cars')
        console.log(res)
        AppState.cars = res.data
    }

}

export const carsService = new CarsService()