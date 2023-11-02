declare namespace BlogAPI {
    type BlogInfo = {
        id: number;
        title: string
        headImg: string;
        summary: string;
        content: string;
        createTime: string;
        updateTime: string;
        updateUserId: number;
        ownerId: number;
        categoryId: number;
        tabs: string[] | string;
        isFinished: number;
        isTop: number;
        ownerName: string;
    }

    type BlogsResponse = {
        index: number;
        size: number;
        total: number;
        blogs: BlogInfo[];
    }

    type BlogRequest = {
        id: number;
        title: string;
        content: string;
        headImg: string;
        summary: string;
        isFinished: number;
        isTop: number;
        categoryId: number;
        tabs: string[];
    }

    type Category = {
        id: number;
        name: string;
    }

    type CategoryList = {
        categories: Category[];
    }

    type TabList = {
        tabs: string[];
    }

    type HTMLUploadResponse = {
        content: string;
    }

    type HeadImgUploadResponse = {
        imageName: string;
    }

    type BlogUploadResponse = {
        id: number;
    }

    type OneBlogResponse = {
        blogInfo: BlogInfo;
    }
}
