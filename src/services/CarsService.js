import { AppState } from "../AppState"
import { Car } from "../Models/Car"
import { api } from "./AxiosService"

class CarsService {

    async getAllCars() {
        const res = await api.get('api/cars')
        console.log(res)
        AppState.cars = res.data
    }

    async getCarById(id) {
        const res = await api.get('api/cars/' + id)
        console.log(res)
        AppState.activeCar = new Car(res.data)
    }

}

export const carsService = new CarsService()