<template>
  <section class="src-components-get-users">
    <div class="col">
      <div class="card">
        <img class="card-img-top" src="../assets/barca2010local.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div v-if="shirts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>

          <tr v-for="(user, index) in shirts" :key="index">
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
    beforeMount(){
      this.getShirts()
    },
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

<style scoped lang="css">
  .src-components-get-users {

  }
  .jumbotron{
    background-color: rgb(49, 94, 192);
    color: black;
  }
</style>
