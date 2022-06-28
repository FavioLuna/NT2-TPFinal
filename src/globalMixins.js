import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        getUsers(){
            this.$store.dispatch("getUsuariosAxios")
         },
    },
    computed: {
        users(){
            return this.$store.state.users
        },
        isLog(){
            return this.$store.state.isLog
        },
        isAuth(){
            return this.$store.state.isAuth
        },
        userLoged(){
            return this.$store.state.user
        }
    }
}

Vue.mixin(miMixinGlobal)