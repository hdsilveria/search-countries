import axios from '@/src/libs/axios'

export default class countriesService {
    async getCountries() : Promise<any>{
        return axios.get('/region/america')
    }
}