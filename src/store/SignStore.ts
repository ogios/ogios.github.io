import {defineStore} from "pinia";
import {reactive} from "vue";
import {apiCheckToken, apiGetUserInfo} from "@/pages/sign/api";

export const useSignStore = defineStore('sign', {
    state: () => {
        console.log("initing store...")
        const userinfo: SignAPI.UserInfo = reactive({id: 0, isAdmin: 0, username: "Guest"});

        apiCheckToken().then((ok: boolean) => {
            if (ok){
                apiGetUserInfo().then((data) => {
                    const info: SignAPI.UserInfo = data!.userinfo;
                    for (const key in info) userinfo[key] = info[key];
                    setInterval(() => {
                        console.log("检查token...");
                        apiCheckToken();
                    }, 1000*60*5);
                });
            }
        });

        return {
            userinfo,
        }
    },
});