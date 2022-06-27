<template>
  <section class="src-components-login-user">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <h1>Registration</h1>
        <hr><hr>       
        <validate tag="div">
          <label for="email">Email</label>
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
          <label for="password">Password</label>
          <input 
          type="text" 
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

       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="enviar()">Enviar</button>
      </vue-form>
     </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-login-user',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        passwordMin: 8
      }
    },
    methods: {
      getInicialData(){
        return{
          name:'',
          email:'',
          password: '',
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
    },
    computed: {

    }
}