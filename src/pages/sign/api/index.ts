import {request} from "@/utils/http";
// import {ElMessage} from "element-plus";
const prefix: string = "/api/sign";

export function gotoHome(): void {window.location.href = window.location.origin + "/home";}

function checkTokenExist(): string {
    const token: string | null = localStorage.getItem("token");
    return token === null ? "" : token;
    // if (token === null) {
    //     ElMessage.error("Token not exist");
    //     throw Error("Token not exist");
    //     // return Promise.reject("Token not exist");
    // } else {
    //     return token;
    // }
}

export async function apiCheckToken(): Promise<boolean> {
    try{
        const token: string = checkTokenExist();
        // const result = await request(
        await request(
            {
                url: `${prefix}/token/checkToken`,
                method: "GET",
                headers: {token},
            },
        );
        // console.log(result);
        return true;
    } catch (e){
        localStorage.removeItem("userinfo");
        return false;
    }
}

export function apiGetUserInfo(): Promise<SignAPI.UserInfoResponse> {
    try {
        const token: string = checkTokenExist();
        return request<SignAPI.UserInfoResponse>(
            {
                url: `${prefix}/token/userinfo`,
                method: "GET",
                headers: {token}
            },
            // {successMessage: "获取用户信息成功"}
        )
    } catch (e) {
        // ElMessage.error(e);
        // return Promise.reject(e);
        return Promise.reject(e);
    }

}



export function apiSignLogin(username: string, password: string): Promise<any> {
    return request<any>(
        {
            url: `${prefix}/login`,
            method: "POST",
            data: {username, password},
        },
        { successMessage: "登录成功" },
    )
}

export function apiSignRegister(username: string, password: string): Promise<any> {
    return request<any>(
        {
            url: `${prefix}/register`,
            method: "POST",
            data: {username, password},
        },
        { successMessage: "注册成功" },
    )
}