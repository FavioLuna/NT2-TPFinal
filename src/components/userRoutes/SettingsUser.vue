<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
      <div v-if="borrar" class="alert alert-danger" role="alert">
        Deleted successfully
      </div>
      <div v-if="!borrar" class="jumbotron2">
        <h1>User Info</h1>
        <hr>
        <h3>Name: {{userLoged.name}}</h3>
        <hr>
        <h3>Lastname: {{userLoged.lastname}}</h3>
        <hr>
        <h3>Edad: {{userLoged.edad}}</h3>
        <hr>
        <h3>Email: {{userLoged.email}}</h3>
        <hr>
        <button class="btn btn-success my-4" @click="change()">Cambiar nombre</button>

        <button class="btn btn-danger ml-4" @click="doLogout()">Logout</button>

        <button class="btn btn-danger ml-4" @click="deleteU()">Delete User</button>
      </div>




        <div v-if="success" class="alert alert-success" role="alert">
          Changed successfully
        </div>



        <div v-show="changeInfo" class="jumbotron">
            <vue-form  :state="formState" @submit.prevent="enviar()">
            <h1>New info</h1>
            <hr><hr>      

            <validate tag="div">
                <label for="name">new name</label>
                <input 
                type="name" 
                id="name" 
                class="form-control" 
                autocomplete="off" 
                v-model.trim="formData.name" 
                required
                name="name"
                />

                <field-messages name="name" show="$dirty">
                    <div slot="required" class="alert alert-danger mt-1">This field is required</div>     
                </field-messages> 
            </validate>

            <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="changeName()">Cambiar</button>
        </vue-form>
        </div>
        
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-forms-user',
    props: [],
    mounted () {
        
    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        passwordMin: 8,
        changeInfo: false,
        success: false,
        borrar: false,
      }
    },
    methods: {
      getInicialData(){
        return{
          name:'',      
        }
      },
      change(){
        this.changeInfo = true
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      changeName(){
        let newUser = {
          name : this.formData.name,
        }
        this.$store.dispatch("changeName", newUser)
        this.success = true
        this.changeInfo = false
        setTimeout(() => {
          this.success= false 
          },
        3000)
      },
      doLogout(){
        this.$store.dispatch("logout")
        this.$router.push("/")
      },
      deleteU(){
        this.borrar = true,
        setTimeout(() => {
          this.borrar = false 
          this.$store.dispatch("deleteUser")
          this.$router.push("/")
          },
        3000)
        
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-forms-user {
}
h1 {
  text-align: center;
  font-weight: bold;
}
h3 {
  text-align: center;
  font-weight: bold;

}
</style>

