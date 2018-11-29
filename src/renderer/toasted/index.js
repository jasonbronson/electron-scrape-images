import Toasted from 'vue-toasted'
import Vue from 'vue';

Vue.use(Toasted)

Vue.toasted.register('app_error', 'Oops.. Something Went Wrong..', {
    type : 'error'
})
