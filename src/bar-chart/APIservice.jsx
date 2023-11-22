import axios from 'axios';

const USER_REST_API_URL = 'http://localhost:8080/userslist'
const CUST_REST_API_URL = 'http://localhost:8080/custlist'
const SALE_REST_API_URL = 'http://localhost:8080/saleslist'
const Bran_REST_API_URL = 'http://localhost:8080/saleslist'

class APIService {
    
    getUsers(){
        return axios.get(USER_REST_API_URL);
    }
    getCust(){
        return axios.get(CUST_REST_API_URL);
    }
    getSale(){
        return axios.get(SALE_REST_API_URL);
    }

}

export default new APIService();