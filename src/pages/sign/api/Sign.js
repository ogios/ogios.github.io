import axios from "axios";
import {ElMessage} from "element-plus";

const HTTP = "http://47.94.146.109:8080";
const HTTPS = "https://ogios.dns.army";



class Sign {
    constructor(https) {
        this.axios = axios;
        this.axios.defaults.baseURL = https ? HTTPS : HTTP;
    }

    login(username, password){
        let sep = "/api/sign/login";
        console.log(sep);
        return this.axios({
            method: "POST",
            url: sep,
            data: {username,password},
        });
    }

    register(username, password){
        let sep = "/api/sign/register";
        return this.axios({
            method: "POST",
            url: sep,
            data: {username, password},
        });
    }


    async checkToken(token){
        let sep = "/api/sign/token/checkToken";
        let res = await this.axios({
            method:"GET",
            url: sep,
            headers: {token},
        });
        console.log(res);
        return res.status === 200;
    }


    saveTokenAndRedirect(res, username){
        let data = res.data;
        console.log(data);
        if (data.success){
            localStorage.setItem("token", data.token);
            ElMessage({
                type: "success",
                message: "You are now logged in as: " + username + " | Redirecting...",
            });
            setTimeout(_ => {
                location.href = location.origin + "/home/";
            }, 500);
        } else {
            ElMessage({
                type: "error",
                message: "" + data.code + ": " + data.msg,
            });
        }
    }

}

export default Sign;