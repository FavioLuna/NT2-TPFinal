<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">

      <div v-if="success" class="alert alert-success" role="alert">
        Register successfully
      </div>

      <vue-form v-if="!success" :state="formState" @submit.prevent="enviar()">
        <h1>Registration</h1>
        <hr><hr>
        <validate tag="div">
          <label for="name">name</label>
          <input 
          type="text" 
          id="name" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.name" 
          required
          name="name"
          no-espacios
          />

          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">This field is required</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no permite espacios intermedios.
            </div>     
          </field-messages> 
        </validate>        

        <validate tag="div">
          <label for="lastname">lastname</label>
          <input 
          type="text" 
          id="lastname" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.lastname" 
          required
          lastname="lastname"
          no-espacios
          />

          <field-messages lastname="lastname" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">This field is required</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no permite espacios intermedios.
            </div>     
          </field-messages> 
        </validate>    

        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
          type="number" 
          id="edad" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.edad" 
          required
          name="edad"
          :min="edadMin"
          :max="edadMax"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad minimia permitida es de {{edadMin}} años
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años
            </div>
          </field-messages> 
        </validate>

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
          :minlength="passwordMin"
          no-espacios
          />

          <field-messages name="password" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">This field is required</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Password min length: {{passwordMin}}
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no permite espacios intermedios.
            </div>   
          </field-messages> 
        </validate>

        <hr>
        <a href="http://localhost:8080/user/login">Ya tengo un usuario</a>
        <hr>
        
       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="postUsuario()">Enviar</button>
      </vue-form>
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
        edadMin: 16,
        edadMax: 120,
        success: false
      }
    },
    methods: {
      getInicialData(){
        return{
          name:'',
          lastname: '',
          email:'',
          password: '',
          edad: ''
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      postUsuario(){
        let newUser = {
          name : this.formData.name, 
          lastname: this.formData.lastname,
          email : this.formData.email, 
          password: this.formData.password,
          edad: this.formData.edad
        }
        this.success = true
        this.$store.dispatch("postUser", newUser)
        setTimeout(()=> {
          this.success = false
          this.$router.push('/user/login')}, 
          2000
          )
        
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

