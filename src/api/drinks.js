import Axios from 'axios'

const _URLGetAllDrinks = ' https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
const _URLGetOneDrink = '  https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export default {

  /**
   * Get a list of available drinks (Alcoholics).
   *
   *
   * Request:
   * GET https://www.thecocktaildb.com/api/jsson/v1/1/filter.php?a=Alcoholic
   *
   *
   * Authorized:
   * Public
   *
   *
   * Query Parameters:
   * 'a'          => 'required',              // Filter the results. Accepted values: 'Alcoholic', 'Non_Alcoholic'
   *
   *
   * Probable Responses:
   *
   * #01. If everything is ok:
   * {
   *  "drinks":
   *  [
   *   {
   *     "strDrink": "1-900-FUK-MEUP",
   *     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
   *     "idDrink": "15395"
   *   },
   *  ...
   *  ]
   * }
   * 
   * #02. If we face an error:
   * 'Error! Could not reach the API. ...'
   *
   *
   * @return {Array|String}       Array of drinks, or the error message
   */
  async getAllDrinks() {
    try {
      const res = await Axios.get(_URLGetAllDrinks);
      return res.data.drinks; // Array of drinks
    } catch (error) {
      return 'Error! Could not reach the API. ' + error;
    }
  },




  /**
   * Get detailed information of a single drink.
   *
   *
   * Request:
   * GET https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1234
   *
   *
   * Authorized:
   * Public
   *
   *
   * Query Parameters:
   * 'i'          => 'required',              // Drink ID
   *
   *
   * Probable Responses:
   *
   * #01. If everything is ok:
   * {
   *  "drinks":
   *  [
   *   "idDrink": "15395",
   *   "strDrink": "1-900-FUK-MEUP",
   *   "strDrinkAlternate": null,
   *   "strTags": null,
   *   "strVideo": null,
   *   "strCategory": "Shot",
   *   "strIBA": null,
   *   "strAlcoholic": "Alcoholic",
   *   "strGlass": "Old-fashioned glass",
   *   "strInstructions": "Shake ingredients in a mixing tin filled with ice cubes. Strain into a rocks glass.",
   *   "strInstructionsES": null,
   *   "strInstructionsDE": "Die Zutaten in einem mit Eiswürfeln gefüllten Mischgefäß schütteln. In ein Rocks Glas abseihen.",
   *   "strInstructionsFR": null,
   *   "strInstructionsIT": "Shakerare gli ingredienti in una teglia piena di cubetti di ghiaccio.\r\nFiltrare in un bicchiere alto.",
   *   "strInstructionsZH-HANS": null,
   *   "strInstructionsZH-HANT": null,
   *   "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
   *   "strIngredient1": "Absolut Kurant",
   *   "strIngredient2": "Grand Marnier",
   *   "strIngredient3": "Chambord raspberry liqueur",
   *   "strIngredient4": "Midori melon liqueur",
   *   "strIngredient5": "Malibu rum",
   *   "strIngredient6": "Amaretto",
   *   "strIngredient7": "Cranberry juice",
   *   "strIngredient8": "Pineapple juice",
   *   "strIngredient9": null,
   *   "strIngredient10": null,
   *   "strIngredient11": null,
   *   "strIngredient12": null,
   *   "strIngredient13": null,
   *   "strIngredient14": null,
   *   "strIngredient15": null,
   *   "strMeasure1": "1/2 oz ",
   *   "strMeasure2": "1/4 oz ",
   *   "strMeasure3": "1/4 oz ",
   *   "strMeasure4": "1/4 oz ",
   *   "strMeasure5": "1/4 oz ",
   *   "strMeasure6": "1/4 oz ",
   *   "strMeasure7": "1/2 oz ",
   *   "strMeasure8": "1/4 oz ",
   *   "strMeasure9": null,
   *   "strMeasure10": null,
   *   "strMeasure11": null,
   *   "strMeasure12": null,
   *   "strMeasure13": null,
   *   "strMeasure14": null,
   *   "strMeasure15": null,
   *   "strImageSource": null,
   *   "strImageAttribution": null,
   *   "strCreativeCommonsConfirmed": "No",
   *   "dateModified": "2016-07-18 22:27:04"
   *  ]
   * }
   *  
   * #02. If we face an error:
   * 'Error! Could not reach the API. ...'
   *
   *
   * @param  {Number} id
   * @return {Object|String}       Object of the drink info, or the error message
   */
  async getOneDrink(id) {
    try {
      const res = await Axios.get(_URLGetOneDrink + id);
      const obj = res.data.drinks[0]; // Object of the drink
      Object.keys(obj).forEach((k) => (obj[k] == null || obj[k] == '') && delete obj[k]); // Clean the null or empty items in the object
      return obj;
    } catch (error) {
      return 'Error! Could not reach the API. ' + error;
    }
  },
  
}
