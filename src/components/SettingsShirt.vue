<template lang="html">

<template>
  <section class="src-components-forms-user">
    <div class="jumbotron">
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

        <!-- <button class="btn btn-success ml-4" @click="changePassword()">Cambiar password</button> -->

        <button class="btn btn-danger ml-4" @click="doLogout()">Logout</button>

        <button class="btn btn-danger ml-4" @click="deleteU()">Delete User</button>


        <div v-if="success" class="alert alert-success" role="alert">
          Changed successfully
        </div>

        <div v-if="borrar" class="alert alert-success" role="alert">
          Changed successfully
        </div>

</template>

<script lang="js">

  export default  {
    name: 'src-components-settings-shirt',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-settings-shirt {

  }
</style>
