import Vue from "vue";
import VueRouter from "vue-router";
import FormsUser from "./components/userRoutes/FormsUser.vue"
import LoginUser from "./components/userRoutes/LoginUser.vue"
import Settings from "./components/userRoutes/SettingsUser.vue"
import AdminGetUsers from "./components/userRoutes/AdminGetUsers.vue"
//import ChangePassword from "./components/userRoutes/ChangePassword.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/user'},
        { path: '/user', component: FormsUser},
        { path: '/user/login', component: LoginUser},
        { path: '/user/settings', component: Settings},
        //{ path: '/user/change-password', component: ChangePassword},
        { path: '/users', component: AdminGetUsers},
        { path: '*', redirect: '/'},
        
    ]
})