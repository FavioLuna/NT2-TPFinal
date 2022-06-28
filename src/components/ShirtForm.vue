<template>
  <section class="src-components-index-formulario">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <h1>Create Shirt</h1>
        <hr><hr>
        <validate tag="div">
          <label for="name">Name</label>
          <input 
          type="text" 
          id="name" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.name" 
          required
          name="name"
          />

          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>   
          </field-messages> 
        </validate>        

        <validate tag="div">
          <label for="description">description</label>
          <input 
          type="text" 
          id="description" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.description" 
          required
          name="description"
          />

          <field-messages name="description" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>     
          </field-messages> 
        </validate>

        <validate tag="div">
          <label for="img">Image</label>
          <input 
          type="text" 
          id="img" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.img" 
          required
          name="img"
          />

          <field-messages name="img" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="min" class="alert alert-danger mt-1">
            </div>
            
          </field-messages> 
        </validate>

        <validate tag="div">
          <label for="size">Size</label>
          <input 
          type="number" 
          id="size" 
          class="form-control" 
          autocomplete="off" 
          v-model="formData.size" 
          required
          name="size"
          />

          <field-messages name="size" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>     
          </field-messages> 
        </validate>

         <validate tag="div">
          <label for="number">Number</label>
          <input 
          type="number" 
          id="number" 
          class="form-control" 
          autocomplete="off" 
          v-model="formData.number" 
          required
          name="number"
          />

          <field-messages name="number" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>     
          </field-messages> 
        </validate>

         <validate tag="div">
          <label for="year">Year</label>
          <input 
          type="number" 
          id="year" 
          class="form-control" 
          autocomplete="off" 
          v-model="formData.year" 
          required
          name="year"
          />

          <field-messages name="year" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>     
          </field-messages> 
        </validate>

         <validate tag="div">
          <label for="price">Price</label>
          <input 
          type="number" 
          id="price" 
          class="form-control" 
          autocomplete="off" 
          v-model="formData.price" 
          required
          name="price"
          :minPrice="priceMin"
          />

          <field-messages name="price" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>   
            <div slot="minPrice" class="alert alert-danger mt-1">
              Negative or zero prices are not accepted
            </div>  
          </field-messages> 
        </validate>

           <validate tag="div">
            <label for="team">Team</label>
            <input 
            type="text" 
            id="team" 
            class="form-control" 
            autocomplete="off" 
            v-model.trim="formData.team" 
            required
            name="team"
            />
  
            <field-messages name="team" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Required</div>
              
              
            </field-messages> 
          </validate>

         <validate tag="div">
          <label for="league">League</label>
          <input 
          type="text" 
          id="league" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.league" 
          required
          name="league"
          />

          <field-messages name="league" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            
            
          </field-messages> 
        </validate>


       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="postShirt()">Enviar</button>
      </vue-form>
     </div>
  </section>
</template>

<script lang="js">


 

  export default  {
    name: 'src-components-shirt-form',
    props: [],
    mounted () {

    },
     data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        numeroMin: 1,
        numMax: 99,
        priceMin: 1,
        
      }
    },
   methods: {
      getInicialData(){
        return{
          name:'',
          number: '',
          description: '',
          year: '',
          size: '',
          img: '',
          price: '',
          league: '',
          team: ''
          
        }
      },

enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },

      postShirt(){
         let newShirt = {
          name : this.formData.name, 
           number: this.formData.number,
          description: this.formData.description,
          year: this.formData.year,
          size: this.formData.size,
          img: this.formData.img,
          price: this.formData.price,
          league: this.formData.league,
          team: this.formData.team,

        }
        this.$store.dispatch("postShirt", newShirt)
      }
   },
    computed: {

    }

  }


</script>

<style scoped lang="css">
  .src-components-shirt-form {

  }
</style>
