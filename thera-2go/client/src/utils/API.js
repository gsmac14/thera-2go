/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default{

    //Logs in user post route
    getUser: function (userData) {
    return axios.post("/api/auth/login", userData);
},
    //creates a new account for a user 
    createUser: function(userData){
        return axios.post("/api/auth/register", userData);
    },

    //Retrieves exercises and accepts a query or term to search the exercise api 
    getImage: function(query){
        return axios.post("/api/images", { params: {q: query} });
    }

}

