<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
      <vue-form  :state="formState" @submit.prevent="enviar()">
        <h1>New info</h1>
        <hr><hr>      

        <validate tag="div">
          <label for="password">new password</label>
          <input 
          type="password" 
          id="password" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.password" 
          required
          password="password"
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

        <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="changePassword()">Enviar</button>
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
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      changePassword(){
        this.$store.dispatch("changePassword", this.formData)
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