<template>
  <section class="src-components-get-users">
    <div class="col">
      <div class="card" >
        
        <div class="card-body" :style="{backgroundColor: this.setColor(verMas).backColor}">
          <h4 :class="{cardTitle: verMas}">{{cardData.name}}</h4>
          <p :class="{cardSubtitle: verMas}">{{cardData.team}} {{cardData.league}} {{cardData.year}}</p>
          <img class="card-img-top" src="../assets/barca2010local.jpg" alt="Card image cap">
          <div v-if="verMas" class="card-text">
            <br>
            <p>{{cardData.description}}</p>
            <p>Numero: {{cardData.number}}</p>
            <p>Talle: {{cardData.size}}</p>
            <p>Precio: {{cardData.price | precio('$')}}</p>
          </div>

          <a class="btn btn-primary" @click="showMore()">{{texto}}</a>
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
        verMas: false,
        texto: "Ver más"
      }
    },
    methods: {
      showMore(){
        this.verMas ? (this.verMas = false, this.texto = "Ver más") : (this.verMas = true, this.texto = "Ver menos")
      },
      setColor(show){
        let backColor = 'white' 
        if (show) {
          backColor = 'LightGray'
        }
        return{
          backColor,
        } 
      }
    },
    computed: {

    },
    filters: {
      precio: function(value, signo) {
      return signo + (Number(value || 0).toFixed(2))
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-get-users {
    color: black;
  }
  .jumbotron{
    background-color: rgb(49, 94, 192);
    color: rgb(0, 0, 0);
  }
  .cardTitle, .cardSubtitle{
    text-decoration: underline;
    font-weight: bold;
  }
  .cardSubtitle{
    font-style: italic;
  }
  .card-text{
    font-weight: bold;
  }
</style>
