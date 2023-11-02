import {request} from "@/utils/http";
import {ElMessage} from "element-plus";
import BlogRequest = BlogAPI.BlogRequest;
import TabList = BlogAPI.TabList;
import {AxiosResponse} from "axios";
const prefix_api = "/api/blogs";


function checkTokenExist(): string {
    const token: string | null = localStorage.getItem("token");
    if (token === null) {
        ElMessage.error("Token not exist");
        throw Error("Token not exist");
    } else {
        return token;
    }
}

export function apiUploadHTML(content: string): Promise<BlogAPI.HTMLUploadResponse> {
    const token: string = checkTokenExist();
    let formData = new FormData();
    formData.append("file", new Blob([content], {type: "text/plain"}), "content.txt");
    return request<BlogAPI.HTMLUploadResponse>(
        {
            url: `${prefix_api}/token/htmlUpload`,
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data; boundary=--------------------------775508843388052746199662',
                'token': token,
            },
            data: formData,
        },
        { successMessage: "文本已上传" },
    );
}

export function apiUploadHeadImg(file): Promise<BlogAPI.HeadImgUploadResponse> {
    const token: string = checkTokenExist();
    let formData = new FormData();
    formData.append("file", file);
    return request<BlogAPI.HeadImgUploadResponse>(
        {
            url: `${prefix_api}/token/imageUpload`,
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data; boundary=--------------------------775508843388052746199662',
                'token': token,
            },
            data: formData,
        },
        { successMessage: "图片已上传" },
    );
}

export function apiUploadBlog(data: BlogRequest): Promise<BlogAPI.BlogUploadResponse> {
    const token: string = checkTokenExist();
    return request<BlogAPI.BlogUploadResponse>(
        {
            url: `${prefix_api}/token/blogUpload`,
            method: "POST",
            headers: {token},
            data: data,
        },
        { successMessage: "文章已上传" },
    );
}

export function apiGetBlogs(pageIndex: number, size: number): Promise<BlogAPI.BlogsResponse> {
    return request<BlogAPI.BlogsResponse>(
        {
            url: `${prefix_api}/`,
            params: {pageIndex, size},
            method: "GET",
        },
        // {successMessage: "已获取多个文章"},
    )
}

export function apiGetOneBlog(id: number): Promise<BlogAPI.OneBlogResponse> {
    return request<BlogAPI.OneBlogResponse>(
        {
            url: `${prefix_api}/blog/${id}`,
            method: "GET",
        },
        // {successMessage: `已获取 id=${id} 的文章`},
    );
}

export function apiGetBlogContent(content: string): Promise<AxiosResponse> {
    return request<AxiosResponse>(
        {
            url: `${window.BASE_TEXT_URL}/${content}`,
            method: "GET"
        },
        // { successMessage: "已获取文章内容", originalResponse: true }
        { originalResponse: true }
    );
}

export function apiDeleteBlog(blog_id: number): Promise<any> {
    const token = checkTokenExist();
    return request<any>(
        {
            url: `${prefix_api}/token/blogUpload`,
            method: "DELETE",
            headers: {token},
            params: {blog_id},
        },
        { successMessage: "文章已删除" }
    )
}

export function apiUpdateHTML(content: string, blog_id: number): Promise<BlogAPI.HTMLUploadResponse> {
    const token: string = checkTokenExist();
    let formData = new FormData();
    formData.append("file", new Blob([content], {type: "text/plain"}), "content.txt");
    return request<BlogAPI.HTMLUploadResponse>(
        {
            url: `${prefix_api}/token/htmlUpload`,
            method: "PUT",
            params: {blog_id},
            headers: {
                'Content-Type': 'multipart/form-data; boundary=--------------------------775508843388052746199662',
                'token': token,
            },
            data: formData,
        },
        { successMessage: "文本已更新" },
    );
}

export function apiUpdateHeadImg(file, blog_id: number): Promise<BlogAPI.HeadImgUploadResponse> {
    const token: string = checkTokenExist();
    let formData = new FormData();
    formData.append("file", file);
    return request<BlogAPI.HeadImgUploadResponse>(
        {
            url: `${prefix_api}/token/imageUpload`,
            method: "PUT",
            params: {blog_id},
            headers: {
                'Content-Type': 'multipart/form-data; boundary=--------------------------775508843388052746199662',
                'token': token,
            },
            data: formData,
        },
        { successMessage: "图片已更新" },
    );
}

export function apiUpdateBlog(data: BlogRequest): Promise<BlogAPI.BlogUploadResponse> {
    const token: string = checkTokenExist();
    return request<BlogAPI.BlogUploadResponse>(
        {
            url: `${prefix_api}/token/blogUpload`,
            method: "PUT",
            headers: {token},
            data: data,
        },
        { successMessage: "文章已更新" },
    );
}















export function apiGetCategories(): Promise<BlogAPI.CategoryList> {
    return request<BlogAPI.CategoryList>(
        {
            url: `${prefix_api}/categories`,
            method: "GET",
        },
        // { successMessage: "获取分类完成" },
    )
}

export function apiGetTabs(): Promise<TabList> {
    return request<TabList>(
        {
            url: `${prefix_api}/tabs`,
            method: "GET",
        },
        // { successMessage: "获取标签完成" },
    )
}
