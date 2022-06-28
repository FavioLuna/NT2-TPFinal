import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        getUsers(){
            this.$store.dispatch("getUsuariosAxios")
         },
         clearUsers(){
            this.$store.dispatch("clearUsers")
         },

    },
    computed: {
        users(){
            return this.$store.state.users
        },
        isLog(){
            return this.$store.state.isLog
        },
        userLoged(){
            return this.$store.state.user
        }
    }
}

Vue.mixin(miMixinGlobal)