import apiDrinks from '../../api/drinks'

export default {

  namespaced: true,

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// State

  state () {
    return {
      all: [],
      current: undefined,
      msgError: '',
    }
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Actions

  actions: {
    async getAllDrinks ({ commit }) {
      const drinks = await apiDrinks.getAllDrinks();
      commit('setAllDrinks', drinks);
    },
    async getOneDrink ({ commit }, drinkId) {
      const drink = await apiDrinks.getOneDrink(drinkId);
      commit('setOneDrink', drink);
    },
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Mutations

  mutations: {
    setAllDrinks (state, drinks) {
      if (Array.isArray(drinks)) state.all = drinks;
      else state.msgError = drinks;
    },
    setOneDrink (state, drink) {
      if (drink instanceof Object) state.current = drink;
      else state.msgError = drink;
    },
  },

}
