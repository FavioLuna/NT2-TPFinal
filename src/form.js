import Vue from 'vue'
import VueForm from 'vue-form'

var opciones = {
    validators: {
        'no-espacios' : function(value) {
            return !value.includes(' ')
        }
    }
}

Vue.use(VueForm, opciones)