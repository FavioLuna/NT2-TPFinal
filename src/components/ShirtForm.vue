<template>
  <section class="src-components-index-formulario">
    <div class="jumbotron">
      <div v-if="success" class="alert alert-success" role="alert">
        Shirt added successfully
      </div>
      <vue-form v-if="!success"  :state="formState" @submit.prevent="enviar()">
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
          :minlength="nameMin"
          />

          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              La cantidad de caracteres minimos es {{nameMin}} 
            </div>
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
          :minlength="minDescription"
          :maxlength="maxDescription"
          />

          <field-messages name="description" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              La descripcion minimia permitida es de {{minDescription}} caracteres
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              La descripcion máxima permitida es de {{maxDescription}} caracteres
            </div>
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
          no-espacios
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
          no-espacios
          :min="minSize"
          :max="maxSize"
          />

          <field-messages name="size" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="min" class="alert alert-danger mt-1">
              El size minimo permitido es {{minSize}} 
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              El size máximo permitido es {{maxSize}} 
            </div>    
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
          no-espacios
          :min="minNumber"
          :max="maxNumber"
          />

          <field-messages name="number" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="min" class="alert alert-danger mt-1">
              El number minimo permitido es {{minNumber}} 
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              El number máximo permitido es {{maxNumber}} 
            </div>         
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
          no-espacios
          :min="minYear"
          :max="maxYear"
          />

          <field-messages name="year" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="min" class="alert alert-danger mt-1">
              El year minimo permitido es de {{minYear}} 
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              El year máximo permitido es de {{maxYear}} 
            </div>         
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
          :min="priceMin"
          no-espacios
          />

          <field-messages name="price" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>   
            <div slot="min" class="alert alert-danger mt-1">
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
          :minlength="minTeam"
          :maxlength="maxTeam"
          />

          <field-messages name="team" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El nombre de equipo minimo permitido es de {{minTeam}} 
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              El nombre de equipo máximo permitido es de {{maxTeam}} 
            </div>    
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
          :minlength="minLeague"
          :maxlength="maxLeague"
          />

          <field-messages name="league" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Required</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El nombre de liga minimo permitido es de {{minLeague}} 
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              El nombre de liga máximo permitido es de {{maxLeague}} 
            </div>    
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
        nameMin: 2,
        minNumber: 1,
        maxNumber: 99,
        priceMin: 1,
        minSize: 20,
        maxSize: 60,
        minDescription: 10,
        maxDescription: 100,
        minYear: 1910,
        maxYear: 2022,
        maxTeam: 20,
        minTeam: 2,
        minLeague: 2,
        maxLeague: 20,
        success: false
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
        this.success = true
        this.$store.dispatch("postShirt", newShirt)
        setTimeout(()=> {
          this.success = false
          this.$router.push('/')}, 
          2000
        )
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
