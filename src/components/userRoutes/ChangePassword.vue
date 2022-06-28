<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <h1>New password</h1>
        <hr><hr>

        <validate tag="div">
          <label for="password">New password</label>
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

        <validate tag="div">
          <label for="password2">Repeat password</label>
          <input 
          type="password" 
          id="password2" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.password2" 
          required
          name="password2"
          :minlength="passwordMin"
          no-espacios
          />

          <field-messages name="password2" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">This field is required</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Password min length: {{passwordMin}}
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              El campo no permite espacios intermedios.
            </div>   
          </field-messages> 
        </validate>

       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="changePassword()">Cambiar</button>
      </vue-form>
     </div>
  </section>
</template>


<script lang="js">

  export default  {
    name: 'src-components-change-password',
    props: [],
   mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        passwordMin: 8,
      }
    },
    methods: {
      getInicialData(){
        return{
          password: '',
          password2: ''
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      changePassword(){
        let check = this.checkPassword(this.formData.password, this.formData.password2)
        if (check) {
          let newUser = {
          password : this.formData.password,
        }
        this.$store.dispatch("changePass", newUser)
        }
      },
      checkPassword(password, password2){
        if (password !== password2) {
          this.invalid = true
          setTimeout(()=> this.invalid = false, 3000)
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
h1 {
  text-align: center;
  font-weight: bold;
}
h3 {
  text-align: center;
  font-weight: bold;

}
</style>