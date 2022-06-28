<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
      <div v-if="success" class="alert alert-success" role="alert">
        Ingreso valido!
      </div>
      <vue-form v-if="!success" :state="formState" @submit.prevent="enviar()">
        <h1>Login</h1>
        <hr><hr>     
        <validate tag="div">
          <label for="email">email</label>
          <input 
          type="email" 
          id="email" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.email" 
          required
          name="email"
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">This field is required</div>     
          </field-messages> 
        </validate>

        <validate tag="div">
          <label for="password">password</label>
          <input 
          type="password" 
          id="password" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.password" 
          required
          name="password"
          no-espacios
          />

          <field-messages name="password" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">This field is required</div>
          </field-messages> 
        </validate>

       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="login()">Enviar</button>
      </vue-form>
      <div v-if="errorValidacion" class="alert alert-danger" role="alert">
        Email or password invalid
      </div>
     </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-forms-user',
    props: [],
    beforeMount(){

    },
    mounted () {
      console.log('mounted')
      this.$store.dispatch("getUsers")
    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        passwordMin: 8,
        errorValidacion: false,
        success: false,
      }
    },
    methods: {
      getInicialData(){
        return{
          email:'',
          password: '',
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      login(){
        let user = this.checkUser(this.formData.email, this.formData.password)
        if (user) {
          console.log(user)
          this.$store.dispatch("login", user)
          this.success = true
          setTimeout(() => {
            this.success= false 
            this.$router.push('/user/settings')},
            3000)
        }else
        {
          console.error('Error en login()');
          this.errorValidacion = true
          setTimeout(() => this.errorValidacion = false, 5000);
        }
      },
      checkUser(email, password){
        let encontrado = false
        let i = 0
        let user = null
        try {
          while (!encontrado) {
          if (this.users[i].email == email && this.users[i].password == password) {
            encontrado = true
            user = this.users[i]
          }
          i ++
        }
        return user
        } catch (error) {
          console.log(error.messages, error)
        }
        
      }
    },
    computed: {
      
  }
}

</script>

<style scoped lang="css">
  .src-components-forms-user {

  }
  h1{
    text-align: center;
    font-weight: bold;
  }
  h2{
    text-align: center;
    font-weight: bold;
    color: rgb(159, 9, 157);
  }
</style>

