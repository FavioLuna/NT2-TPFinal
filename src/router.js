import Vue from "vue";
import VueRouter from "vue-router";
import FormsUser from "./components/FormsUser.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/user'},
        { path: '/user', component: FormsUser}
    ]
})