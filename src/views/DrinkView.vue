<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Template -->

<template>
<div>

  <Header type="sub" :title="headerTitle"/>

  


  <section class="m-drink-topper g8-container">

    <!-- Loading Message
    ============================================= -->
    <template v-if="isLoading">
      <div class="u8-text-center">
        <h2>Loading the drinks information...</h2>
      </div>
    </template>

    <template v-else>
      <!-- Error Message
      ============================================= -->
      <template v-if="msgError != ''">
        <div class="u8-text-center">
          <h3>{{ msgError }}</h3>
          <svg class="m-drink-ic u8-svg-color-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.99 32">
            <path stroke="none" d="M30.93,12.8a1.06,1.06,0,0,0-1.06,1.06h0v6.4a9.6,9.6,0,0,1-9.6,9.6H3.64l1.82-1.82a3.18,3.18,0,0,0,.94-2.27v-14A9.63,9.63,0,0,1,16,2.13h2.16A1.07,1.07,0,0,0,18.34,0H16A11.74,11.74,0,0,0,4.27,11.73V25.78a1,1,0,0,1-.32.76L.31,30.18a1.07,1.07,0,0,0,0,1.51,1.05,1.05,0,0,0,.74.31h19.2A11.73,11.73,0,0,0,32,20.27v-6.4a1.07,1.07,0,0,0-1.07-1.07Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M12.8,16.53a1.08,1.08,0,0,0,1,1.17,1.06,1.06,0,0,0,1.17-1,.74.74,0,0,0,0-.21,1.06,1.06,0,0,0-1.17-1A1.08,1.08,0,0,0,12.8,16.53Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M18.13,15.47a1.07,1.07,0,1,0,.21,0Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M22.4,17.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,22.4,17.6Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M25.6,6.4a1.06,1.06,0,0,0,1.07-1.07V1.07a1.07,1.07,0,0,0-2.14,0V5.33A1.06,1.06,0,0,0,25.6,6.4Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M25.6,9.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,25.6,9.6Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
          </svg>
        </div>
      </template>

      <!-- Drink Info
      ============================================= -->
      <template v-else>
        <div class="g8-row">
          <div class="g8-col-md-4">
            <figure class="m-drink-figure u8-curved">
              <img class="u8-img-contain u8-img-sm-cover u8-img-md-contain u8-img-lg-cover" :src="this.current.strDrinkThumb" :alt="this.current.strDrink">
            </figure>
          </div>
          <div class="g8-col-md-8">
            <dl class="m-drink-list">
              <template v-if="ingredients.length > 0">
                <dt>Ingredients</dt>
                <dd v-for="(item, index) in ingredients" :key="index"> {{ item }} </dd>
              </template>

              <template v-if="instructions.length > 0">
                <dt>
                  <span>Instructions</span>
                  <div class="f8-button__group u8-curved">
                    <a v-for="(item, index) in instructionsNames" :key="index"
                      class="f8-button f8-button--size-sm"
                      href="#" role="button" @click.prevent="onInstructionBtnClick(index, $event)">
                        {{ item }}
                    </a>
                  </div>
                </dt>
                <dd> {{ this.activateInstruction(this.activatedInstruction) }} </dd>
              </template>
            </dl>
          </div>
        </div>
      </template>
    </template>

  </section>




  <Footer/>
  
</div>
</template>








<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Script -->

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Basic

  name: 'Drink',

  components: {
    Header,
    Footer,
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Data/Props/Emits

  data() {
    return {
      headerTitle: 'Loading...',
      isLoading: true,
      activatedInstruction: 0,
    }
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Computed

  // NOTE: ingredients, instructions, and instructionsNames getters, will be 
  // called ONLY IF this.current is OK, according to the template structure.

  computed: {
    
    ingredients() {
      let obj = Object.fromEntries(Object.entries(this.current).filter(([key]) => key.includes('strIngredient')));
      return Object.values(obj);
    },

    instructions() {
      let obj = Object.fromEntries(Object.entries(this.current).filter(([key]) => key.includes('strInstructions')));

      // Now re-order the EN instruction in the object, by removing and adding 
      // it to the beginning! Why? To make sure that the EN instruction is 
      // ALWAYS the first language... Because the order of the languages MUST be 
      // the same in both, the array that instructions and instructionsNames 
      // getters return! In the instructionsNames getter, we're putting the EN 
      // language as the first instruction language too.
      if ('strInstructions' in obj)  {
        const langEN = obj['strInstructions'];
        delete obj['strInstructions'];
        obj = Object.assign({'strInstructions': langEN}, obj);
      }
      
      return Object.values(obj);
    },

    instructionsNames() {
      let obj = Object.fromEntries(Object.entries(this.current).filter(([key]) => key.includes('strInstructions')));
      let arr = [];

      // Loop through the instructions object to extract the language's string 
      // out of the object's key names, and push them to the array.
      for (const [key, value] of Object.entries(obj)) {
        const lang = key.split('strInstructions').pop();
        if (lang !== '') arr.push(lang);
      }

      // Now add the English (default) language to the array as well.
      if ('strInstructions' in obj) arr.unshift('EN');
      
      return arr;
    },

    ...mapState('drinks', {
      current: state => state.current,
      msgError: state => state.msgError,
    }),
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Methods

  // NOTE: activeInstruction(), and onInstructionBtnClick() methods, will be 
  // called ONLY IF this.current is OK, according to the template structure.

  methods: {
    activateInstruction(index = 0) {
      this.activatedInstruction = index;
      return this.instructions[index];
    },

    onInstructionBtnClick(index, event) {
      this.activateInstruction(index);
    }
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Watch

  watch: {
    current(newVal, oldVal) {
      // First check if this.current is ok.
      if (!newVal) return;

      // Now if we're here, it means that everything is ok, so let's do some stuff.
      this.headerTitle = newVal.strDrink;
      this.isLoading = false;
    },
    
    msgError(newVal, oldVal) {
      // First check if this.msgError is ok.
      if (newVal === '') return;

      // Now if we're here, it means that everything is ok, so let's do some stuff.
      this.headerTitle = 'Error';
      this.isLoading = false;
    },
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Lifecycle Hooks

  created() {
    // Reset msgError in $store.
    this.$store.state.drinks.msgError = '';

    this.$store.dispatch('drinks/getOneDrink', this.$route.params.drink);
  },
  
}
</script>








<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Style -->

<style scoped lang="scss">

@import '~@/assets/styles/variables';


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Variables

// Var Sets
$m-drink-topper-margin-top:                           70px !default;
$m-drink-ic-size-max:                                 128px !default;
$m-drink-figure-height-max:                           400px !default;




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Topper

.m-drink-topper {
  margin-top: $m-drink-topper-margin-top;
  padding-top: $m-spacer;
  padding-bottom: $m-spacer;
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Icon

.m-drink-ic {
  margin: $m-spacer;
  max-width: $m-drink-ic-size-max;
  max-height: $m-drink-ic-size-max;
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Figure

.m-drink-figure {
  margin: 0;
  height: $m-drink-figure-height-max;
  border: solid 1px $m-color-neutral-hr;
  overflow: hidden;
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// List

.m-drink-list {
  margin-top: $m-spacer;
  margin-bottom: $m-spacer;

  dt {
    margin-top: $m-spacer;
    font-weight: bold;

    > * {
      margin-right: 0.5rem;
    }
  }

  dd {
    margin: 0.5rem 0;
    
    &::before {
      content: '•';
      padding-right: 0.5rem;
    }
  }
}

</style>
