import Vue from "vue";
import VueRouter from "vue-router";
import FormsUser from "./components/userRoutes/FormsUser.vue"
import LoginUser from "./components/userRoutes/LoginUser.vue"
import Settings from "./components/userRoutes/SettingsUser.vue"
import AdminGetUsers from "./components/userRoutes/AdminGetUsers.vue"
import ShirtForm from "./components/ShirtForm.vue"
import ListShirt from "./components/ListShirt.vue"
import SetShirt from "./components/SetShirt.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/shirts'},
        { path: '/user', component: FormsUser},
        { path: '/user/login', component: LoginUser},
        { path: '/user/settings', component: Settings},
        { path: '/users', component: AdminGetUsers},
        { path: '/shirt', component: ShirtForm},
        { path: '/shirts', component: ListShirt},
        { path: '/shirt/set', component: SetShirt},
        { path: '*', redirect: '/'},
        
    ]
})