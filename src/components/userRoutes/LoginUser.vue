<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
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
        user: new User('', ''),
        loading: false,
        message: ''
      }
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.$validator.validateAll().then(isValid => {
          if (!isValid) {
            this.loading = false;
            return;
          }
          if (this.user.email && this.user.password) {
            this.$store.dispatch('auth/login', this.user).then(
              () => {
                this.$router.push('/user');
              },
              error => {
                this.loading = false;
                this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              }
            );
          }
        });
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      login(){
        this.logs.push(this.formData)
        this.$store.dispatch("login", this.formData)
      }
    },
    computed: {
      loggedIn() {
      return this.$store.state.auth.status.loggedIn;
      },
      created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
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

