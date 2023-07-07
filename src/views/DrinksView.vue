<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Template -->

<template>
<div>

  <Header type="main" :title="headerTitle"/>
  



  <!-- Topper (The 1st Container)
  ============================================= -->
  <section class="m-drinks-topper g8-container">
    <h2>List of the Available Alcoholic Drinks</h2>
    <p>
      An alcoholic drink is a drink that contains 0.5% or more ethanol. Red wine, malt whisky, lager, sparkling wine, lager, cherry liqueur, and etc. What else do you like?
    </p>
    <blockquote class="u8-mx-0">
      <q>A drink is shorter than a tale.</q>
      <footer><a href="https://en.wikipedia.org/wiki/Omar_Khayyam" target="_blank" rel="author">Omar Khayyam</a> - <cite>Persian Sufi</cite></footer>
    </blockquote>
  </section>




  <section class="g8-container">
    <hr>

    <!-- Loading Message
    ============================================= -->
    <template v-if="isLoading">
      <div class="u8-mt-xl u8-text-center">
        <h3>Loading... Oh yea! An awesome collection of alcoholic drinks is about to be shown...</h3>
      </div>
    </template>

    <template v-else>
      <!-- Error Message
      ============================================= -->
      <template v-if="msgError != ''">
        <div class="u8-mt-xl u8-text-center">
          <h3>{{ msgError }}</h3>
          <svg class="m-drinks-ic u8-svg-color-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.99 32">
            <path stroke="none" d="M30.93,12.8a1.06,1.06,0,0,0-1.06,1.06h0v6.4a9.6,9.6,0,0,1-9.6,9.6H3.64l1.82-1.82a3.18,3.18,0,0,0,.94-2.27v-14A9.63,9.63,0,0,1,16,2.13h2.16A1.07,1.07,0,0,0,18.34,0H16A11.74,11.74,0,0,0,4.27,11.73V25.78a1,1,0,0,1-.32.76L.31,30.18a1.07,1.07,0,0,0,0,1.51,1.05,1.05,0,0,0,.74.31h19.2A11.73,11.73,0,0,0,32,20.27v-6.4a1.07,1.07,0,0,0-1.07-1.07Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M12.8,16.53a1.08,1.08,0,0,0,1,1.17,1.06,1.06,0,0,0,1.17-1,.74.74,0,0,0,0-.21,1.06,1.06,0,0,0-1.17-1A1.08,1.08,0,0,0,12.8,16.53Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M18.13,15.47a1.07,1.07,0,1,0,.21,0Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M22.4,17.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,22.4,17.6Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M25.6,6.4a1.06,1.06,0,0,0,1.07-1.07V1.07a1.07,1.07,0,0,0-2.14,0V5.33A1.06,1.06,0,0,0,25.6,6.4Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
            <path stroke="none" d="M25.6,9.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,25.6,9.6Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
          </svg>
        </div>
      </template>

      <template v-else>
        <!-- Nothing to Show Message
        ============================================= -->
        <div v-if="all.length == 0" class="u8-mt-xl u8-text-center">
          <h3>No alcoholic drink is available at the moment!</h3>
          <svg class="m-drinks-ic u8-svg-color-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28.75">
            <path stroke="none" d="M11.14,3.39a.15.15,0,0,0,.11,0,6.52,6.52,0,0,1,.65-.42.17.17,0,1,0-.18-.28L11,3.09a.14.14,0,0,0,0,.22.13.13,0,0,0,.12.08" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M22,2.89a2.86,2.86,0,0,1,.7.47,5.43,5.43,0,0,1,.48.48.19.19,0,0,0,.13.05.19.19,0,0,0,.1-.05.14.14,0,0,0,0-.22,3.14,3.14,0,0,0-.52-.51,4.18,4.18,0,0,0-.79-.5.14.14,0,0,0-.2.07.17.17,0,0,0,.08.21" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M17,4.27A.17.17,0,0,0,17,4.5a.13.13,0,0,0,.08,0,.21.21,0,0,0,.15-.07,3.69,3.69,0,0,1,1-1.11.17.17,0,0,0,.06-.23.18.18,0,0,0-.23,0A3.69,3.69,0,0,0,17,4.27" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M24.47,7.42a.16.16,0,0,0-.17.15A11.71,11.71,0,0,1,24,9.11a.16.16,0,0,0,.1.2h.05a.15.15,0,0,0,.15-.13,9.7,9.7,0,0,0,.3-1.58.19.19,0,0,0-.15-.18" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M19.41,3.92a.15.15,0,0,0,.2.05.16.16,0,0,0,.05-.23,4.44,4.44,0,0,0-1.13-1.21.19.19,0,0,0-.23,0,.18.18,0,0,0,0,.23,4.23,4.23,0,0,1,1.08,1.13" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M19.31,2.79h.05a4.07,4.07,0,0,1,1.23-.21h.28c.1,0,.18-.05.18-.15a.17.17,0,0,0-.16-.17c-.1,0-.2,0-.3,0h0a4.23,4.23,0,0,0-1.33.23.16.16,0,0,0-.1.2.15.15,0,0,0,.15.13" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M19.13,6.26a.17.17,0,0,0-.05.23.15.15,0,0,0,.13.07.1.1,0,0,0,.07,0,1.61,1.61,0,0,0,.78-1.44v0a.16.16,0,0,0-.15-.15.17.17,0,0,0-.15.15v0a1.35,1.35,0,0,1-.63,1.16" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M17.12,5.71s-.05-.13-.08-.18a.17.17,0,0,0-.2-.1.15.15,0,0,0-.1.2.77.77,0,0,0,.1.23A1.68,1.68,0,0,0,18,6.77h0a.14.14,0,0,0,.15-.13.17.17,0,0,0-.13-.2,1.21,1.21,0,0,1-.9-.73" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M24.3,6.34a.16.16,0,0,0,.15.15h0a.17.17,0,0,0,.15-.18,4.66,4.66,0,0,0-.42-1.58A.15.15,0,0,0,24,4.65a.14.14,0,0,0-.07.2,4.8,4.8,0,0,1,.38,1.49" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M15.76,2a6.33,6.33,0,0,1,1.51.31h.05a.18.18,0,0,0,.15-.1.16.16,0,0,0-.1-.21,5.68,5.68,0,0,0-1.61-.32.17.17,0,0,0-.18.15.28.28,0,0,0,.18.17" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M13,2.41h0A7.07,7.07,0,0,1,14.52,2c.08,0,.15-.1.13-.17s-.1-.15-.18-.13a7.08,7.08,0,0,0-1.56.43.16.16,0,0,0-.1.2.24.24,0,0,0,.15.08" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M29.71,28.66a.48.48,0,0,1-.48.45H2.83a.38.38,0,0,1-.4-.37L1.12,15.11a.48.48,0,0,1,.45-.51h.15l28.7,0a.61.61,0,0,1,.6.63ZM21.7,14l.66-1.09a.16.16,0,1,1,.27.18c-.37.66-.65,1.08-.65,1.11a.15.15,0,0,1-.13.07.1.1,0,0,1-.07,0c-.1-.08-.13-.18-.08-.25Zm9.22-.46h-.4V11.38a.9.9,0,0,0-.91-.91H23.92a10.45,10.45,0,0,1-.48,1.06.18.18,0,0,1-.15.1.09.09,0,0,1-.08,0,.16.16,0,0,1-.07-.2,10,10,0,0,0,.4-.93H9.94L9.13,9.18a.78.78,0,0,0-.71-.37H1.87a.66.66,0,0,0-.65.65v4.16H1a1.46,1.46,0,0,0-1,1.54L1.37,29a1.47,1.47,0,0,0,1.46,1.33h26.3A1.45,1.45,0,0,0,30.59,29L32,15.16a1.31,1.31,0,0,0-1-1.62Z" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M9.1,4.4a.31.31,0,0,0,.38.15l1.06-.5a.31.31,0,0,0,.15-.38.31.31,0,0,0-.38-.15L9.26,4a.27.27,0,0,0-.16.38" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M8.45,3.42l.73.3.93-.43.08-.73c0-.33-.18-.48-.38-.51s-.88.18-.63.61a.57.57,0,0,0-.86,0,.55.55,0,0,0,.13.79" transform="translate(0 -1.63)"/>
            <path stroke="none" d="M11.4,5.36c.1-.18.07-.38-.15-.61l-.63-.43-.94.43-.25.73c0,.35.3.66.51.61s.63-.13.55-.66c.2.45.78.13.91-.07" transform="translate(0 -1.63)"/>
          </svg>
        </div>

        <!-- Cards
        ============================================= -->
        <div v-else class="g8-row g8-row-cols-1 g8-row-cols-md-3 u8-mt-xl">
          <div v-for="item in this.all" :key="item.idDrink" class="g8-col u8-mb">
            <Card
              :id="parseInt(item.idDrink)"
              :img="item.strDrinkThumb"
              :title="item.strDrink"
            />
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
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'


export default {

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Basic

  name: 'Drinks',

  components: {
    Header,
    Card,
    Footer,
  },

  
  

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Data/Props/Emits

  data() {
    return {
      headerTitle: process.env.VUE_APP_TITLE,
      isLoading: true,
    }
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Computed

  computed: {
    ...mapState('drinks', {
      all: state => state.all,
      msgError: state => state.msgError,
    }),
  },



  
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Watch

  watch: {
    all(newVal, oldVal) {
      // First check if this.all is ok.
      if (!newVal) return;

      // Now if we're here, it means that everything is ok, so let's do some stuff.
      this.isLoading = false;
    },
    
    msgError(newVal, oldVal) {
      // First check if this.msgError is ok.
      if (newVal === '') return;

      // Now if we're here, it means that everything is ok, so let's do some stuff.
      this.isLoading = false;
    },
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Lifecycle Hooks

  created() {
    // Reset msgError in $store. Why? Because if we come from another page that 
    // has changed the $store state, here we're also mapping from $store... So 
    // our msgError state will not be empty right at the beginning! So that's 
    //why we need to reset it here.
    this.$store.state.drinks.msgError = '';
    
    this.$store.dispatch('drinks/getAllDrinks');
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
$m-drinks-topper-margin-top:                          70px !default;
$m-drinks-ic-size-max:                                128px !default;




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Topper

.m-drinks-topper {
  margin-top: $m-drinks-topper-margin-top;
  padding-top: $m-spacer;
  padding-bottom: $m-spacer;
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Icon

.m-drinks-ic {
  margin: $m-spacer;
  max-width: $m-drinks-ic-size-max;
  max-height: $m-drinks-ic-size-max;
}

</style>
