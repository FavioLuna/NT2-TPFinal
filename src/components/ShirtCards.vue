<template>
  <section class="src-components-get-users">
    <div class="col">
      <div class="card">
        <img class="card-img-top" src="../assets/barca2010local.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{cardData.name}}</h5>
          <p class="card-text">{{cardData.team}} {{cardData.league}} {{cardData.year}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'shirtCard',
    props: ["cardData"],
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
