//Authentication service
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService{
    //login
    login(username, password){
        return axios.post(API_URL + "signin", {
            username,
            password
        }).then(response=>{
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
        })
    }
    //logout
    logout(){
        localStorage.removeItem("user");
    }
    //register_user
    register(username, email, password){
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }
    //get_current_user
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();