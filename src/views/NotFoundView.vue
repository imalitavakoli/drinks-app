<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Template -->

<template>
<div>

  <div class="f8-switch-daylight u8-d-none" data-f8-custom-style data-f8-target="body" data-f8-target-dark-class="m--theme-dark">
    <input type="checkbox" id="sd">
  </div>




  <section v-if="notFoundURL != ''" class="u8-text-center g8-container">
    
    <h1>Are you lost?</h1>
    <p>This url doesn't exist: <em class="u8-opacity-base"> {{ notFoundURL }} </em></p>
    <div class="u8-my-lg">
      <a class="f8-button f8-button--color-accent f8-button--size-sm u8-curved" href="#" role="button" @click.prevent="this.$router.push({ name: 'Drinks' })">Go back to home</a>
    </div>

    <svg class="m-notfound-ic u8-svg-color-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.99 32">
      <path stroke="none" d="M30.93,12.8a1.06,1.06,0,0,0-1.06,1.06h0v6.4a9.6,9.6,0,0,1-9.6,9.6H3.64l1.82-1.82a3.18,3.18,0,0,0,.94-2.27v-14A9.63,9.63,0,0,1,16,2.13h2.16A1.07,1.07,0,0,0,18.34,0H16A11.74,11.74,0,0,0,4.27,11.73V25.78a1,1,0,0,1-.32.76L.31,30.18a1.07,1.07,0,0,0,0,1.51,1.05,1.05,0,0,0,.74.31h19.2A11.73,11.73,0,0,0,32,20.27v-6.4a1.07,1.07,0,0,0-1.07-1.07Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
      <path stroke="none" d="M12.8,16.53a1.08,1.08,0,0,0,1,1.17,1.06,1.06,0,0,0,1.17-1,.74.74,0,0,0,0-.21,1.06,1.06,0,0,0-1.17-1A1.08,1.08,0,0,0,12.8,16.53Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
      <path stroke="none" d="M18.13,15.47a1.07,1.07,0,1,0,.21,0Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
      <path stroke="none" d="M22.4,17.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,22.4,17.6Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
      <path stroke="none" d="M25.6,6.4a1.06,1.06,0,0,0,1.07-1.07V1.07a1.07,1.07,0,0,0-2.14,0V5.33A1.06,1.06,0,0,0,25.6,6.4Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
      <path stroke="none" d="M25.6,9.6a1.07,1.07,0,1,0-1.07-1.07h0A1.07,1.07,0,0,0,25.6,9.6Z" transform="translate(-0.01 0)" fill-rule="evenodd"/>
    </svg>
  </section>

</div>
</template>








<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Script -->

<script>

export default {

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Computed

  computed: {
    notFoundURL() {
      return (this.$route.params.notfound) ? '/' + this.$route.params.notfound.join('/') : '';
    },
  },




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Lifecycle Hooks

  mounted() {
    $('.f8-switch-daylight').f8switchdaylight();
  },

  beforeUnmount() {
    $('.f8-switch-daylight').f8switchdaylight('destroy', true);
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
$m-notfound-ic-size-max:                              128px !default;




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Icon

.m-notfound-ic {
  margin: $m-spacer;
  max-width: $m-notfound-ic-size-max;
  max-height: $m-notfound-ic-size-max;
}

</style>
