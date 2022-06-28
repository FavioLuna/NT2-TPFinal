<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
        <h1>User Info</h1>
        <hr>
        <h3>Name: {{this.getUserLoged["name"]}}</h3>
        <hr>
        <h3>Email: {{this.getUserLoged["email"]}}</h3>
        <hr>
        <h3>Fecha de creacion: {{this.getUserLoged["createdAt"]}}</h3>
        <hr>
        <button class="btn btn-success my-4" @click="change()">Cambiar nombre</button>

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

            <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="changeName()">Enviar</button>
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
        changeInfo: false
      }
    },
    methods: {
      getInicialData(){
        return{
          name:'',
          changeInfo: false
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
        const token = this.getToken()
        const credentials = {... this.formData, token}
        console.log(credentials)
        this.$store.dispatch("changeName", credentials)
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

