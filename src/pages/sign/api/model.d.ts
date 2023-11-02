declare namespace SignAPI {
    type UserInfo = {
        id: number;
        username: string,
        isAdmin: number;
    }

    type UserInfoResponse = {
        userinfo: UserInfo,
    }
}