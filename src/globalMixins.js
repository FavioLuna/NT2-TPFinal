import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        getUsers(){
            this.$store.dispatch("getUsers")
         },
         getShirts(){
            this.$store.dispatch("getShirts")
         }
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
        },
        shirts(){
            return this.$store.state.shirts
        }
    }
}

Vue.mixin(miMixinGlobal)