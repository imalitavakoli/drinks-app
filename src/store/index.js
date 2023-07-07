import { createStore } from 'vuex'
import drinks from './modules/drinks'

export default createStore({
  modules: {
    drinks,
  }
})
