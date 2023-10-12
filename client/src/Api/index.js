const { BaseUrl } = require("../Base");
const axios = require("axios");

export const Login = (username,password) =>{
    axios.post(`${BaseUrl}\Login`,{username,password})
    .then(result =>{
        console.log(result);
        if(result.data === "Success"){
            console.log("gas");
        }
        else{
            console.log("nije gas");
        }
    })
    .catch(err => console.log(err));
}