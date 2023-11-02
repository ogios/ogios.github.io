import {defineStore} from "pinia";
import Category = BlogAPI.Category;
import {apiGetBlogs, apiGetCategories, apiGetTabs} from "@/pages/home/api/blogs";
import {reactive, ref} from "vue";
import CategoryList = BlogAPI.CategoryList;
import TabList = BlogAPI.TabList;

export const useBlogStore = defineStore('blog', {
    state: () => {
        console.log("initing store...")
        const categories: Category[] = reactive([]);
        const tabs: string[] = reactive([]);

        apiGetCategories().then((data: CategoryList):void => {
            for (const index in data.categories) categories.push(data.categories[index]);
            console.log(categories)
        });
        apiGetTabs().then((data: TabList):void => {
            for (const index in data.tabs) tabs.push(data.tabs[index]);
        })

        return {
            categories,
            tabs,
            // userinfo,
        }
    },
    getters: {

    },
    actions:{
        getCategoryNameById(id: number): string {
            for (const index in this.categories){
                if (this.categories[index].id == id) return this.categories[index].name;
            }
            return "No category found";
        }
    }
});