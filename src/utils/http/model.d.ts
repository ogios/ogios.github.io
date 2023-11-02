
export interface HTTPOptions {
    originalResponse?: boolean,
    // isHTTPS?: boolean
    successMessage?: string,
    errorMessage?: string,
}

export type Response<T = any> = {
    stats: number;
    message: string;
    module: string;
    result: T;
}

export type BaseResponse<T = any> = Promise<Response<T>>;

