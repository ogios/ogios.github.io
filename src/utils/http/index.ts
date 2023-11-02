import axios, {AxiosRequestConfig} from "axios";
import {BaseResponse, HTTPOptions} from "./model";
import {ElMessage as $message} from "element-plus";

// const HTTP: string = "http://47.94.146.109:8080";
// const HTTPS: string = "https://ogios.dns.army";

// const baseApiUrl: string = "https://ogios.dns.army";
// const baseApiUrl: string = "http://127.0.0.1:8080";
// const baseApiUrl: string = "http://ipv4.fiddler:8080";

const UNKNOWN_ERROR = '未知错误，请重试';

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 60000,
});

service.interceptors.response.use(
    async response => {
        console.log('---response---', response);

        if (['text/plain'].includes(response.headers['content-type'] as string)) {
            return response;
        }

        const res = response.data;
        response.status;

        // if the custom code is not 2000, it is judged as an error.
        if (res.status !== 200) {
            console.log("message: ", res.message);
            // $message.error(response.status.toString());
            $message.error(res.message || UNKNOWN_ERROR);
            // throw other
            const error = new Error(res.message || UNKNOWN_ERROR) as Error & { code: any };
            error.code = res.status;

            return Promise.reject(error);
        } else {
            return res;
        }
    },
    error => {
        // 处理 422 或者 500 的错误异常提示
        const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
        $message.error(errMsg);
        error.message = errMsg;
        return Promise.reject(error);
    }
);

export const request = async <T = any> (
    config: AxiosRequestConfig,
    options: HTTPOptions = {},
): Promise<T> => {
    try {
        // const { isHTTPS = true, successMessage, errorMessage } = options;
        // config.url = `${(isHTTPS ? HTTPS : HTTP) + config.url}`;
        const { successMessage, errorMessage, originalResponse } = options;

        const res = await service(config);

        successMessage && $message.success(successMessage);
        errorMessage && $message.error(errorMessage);

        return originalResponse ? (await res) : (await (res as unknown as BaseResponse)).result;
    } catch (e: any){
        return Promise.reject(e);
    }
}