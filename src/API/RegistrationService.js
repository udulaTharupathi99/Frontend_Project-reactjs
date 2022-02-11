import axios from "axios"

const API_URL = 'http://localhost:8080'

class RegistrationService{
 
    addUser(user){
        return axios.post(`${API_URL}/user`, user);
    }

    viewAllUser(){
       
        return axios.get(`${API_URL}/user/getall`);
       
    }

    getlogin(email, password){
        return axios.get(`${API_URL}/user/login/${email}/${password}`);

    }

}
export default new RegistrationService()