<template>
  <section class="src-components-index-formulario">
    <div v-if="success" class="alert alert-success" role="alert">
      Cambio realizado de forma correcta!
    </div>
    <div v-if="!success" class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <h1>Set Shirt</h1>
        <div>
          {{shirtState}}
        </div>
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

       <button class="btn btn-success my-4" @click="putShirt()">Enviar</button>
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
        priceMin: 1,
        minDescription: 10,
        maxDescription: 120,
        success: false
      }
    },
   methods: {
      getInicialData(){
        return{
          name:'',
          description: '',
          img: '',
          price: ''          
        }
      },

      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },

      putShirt(){
         let newShirt = {
          name : this.formData.name, 
          description: this.formData.description,
          img: this.formData.img,
          price: this.formData.price
        }
        this.$store.dispatch("changeShirt", newShirt)
        this.success = true
        setTimeout(() => {
          this.success= false 
          this.$router.push('/')},
          3000)
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
