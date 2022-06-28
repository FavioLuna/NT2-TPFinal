<template>
  <section class="src-components-get-users">
    <div class="jumbotron">
      <h2>Users</h2>
      <hr>
      <hr>
      <br>
      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>

          <tr v-for="(user, index) in users" :key="index">
            <td>{{user.name}}</td>
            <td>{{user.lastname}}</td>
            <td>{{user.edad}}</td>
            <td>{{user.email}}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    beforeMount(){
      this.$store.dispatch("getUsuariosAxios")
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

<style scoped lang="css">
  .src-components-get-users {

  }
  .jumbotron{
    background-color: rgb(49, 94, 192);
    color: black;
  }
</style>
