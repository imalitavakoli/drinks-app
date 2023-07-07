<!-- ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Template -->

<template>
<div>

  <header v-if="type === 'main'" class="m-header m-header--visual-shadow">
    <div class="m-header__perspective g8-container">

      <div class="m-header__brand-holder">
        <figure class="m-header__brand m-header__brand--visual-stroke">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.7 31.59">
            <path d="M17.24,9H28.15a.7.7,0,0,1,.7.7.69.69,0,0,1-.22.51L17.24,20.92,5.85,10.16a.69.69,0,0,1,.05-1A.7.7,0,0,1,6.33,9H10.9" transform="translate(-2.15 -0.2)" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
            <line x1="15.09" y1="20.72" x2="15.09" y2="30.59" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
            <line x1="9.45" y1="30.59" x2="20.72" y2="30.59" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
            <line x1="1" y1="1" x2="10.86" y2="10.86" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
            <circle cx="12.98" cy="12.98" r="2.11" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
            <line x1="15.09" y1="15.09" x2="16.15" y2="16.15" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
          </svg>
        </figure>
        <h1>{{ title }}</h1>
      </div>
    
      <div class="f8-switch-daylight" data-f8-target="body" data-f8-custom-style data-f8-target-dark-class="m--theme-dark">
        <div class="f8-switch-daylight__indicator">
          <input type="checkbox" id="sd">
          <label for="sd" class="f8-switch-daylight__label">
            <span class="f8-switch-daylight__handler">
              <span class="sd-crater sd-crater--1"></span>
              <span class="sd-crater sd-crater--2"></span>
              <span class="sd-crater sd-crater--3"></span>
            </span>
            <span class="sd-star sd-star--1"></span>
            <span class="sd-star sd-star--2"></span>
            <span class="sd-star sd-star--3"></span>
            <span class="sd-star sd-star--4"></span>
            <span class="sd-star sd-star--5"></span>
            <span class="sd-star sd-star--6"></span>
          </label>
        </div>
      </div>

    </div>
  </header>

  <header v-else-if="type === 'sub'" class="m-header m-header--visual-shadow">
    <div class="m-header__perspective g8-container">

      <div class="m-header__brand-holder">
        <a class="m-header__btn m-header__brand m-header__brand--visual-fill" href="#" @click.prevent="this.$router.push({ name: 'Drinks' })">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 23.87">
            <path d="M16,4.06a1.25,1.25,0,0,0-.72.25L8,9.77a1.24,1.24,0,0,0-.24,1.73,1.36,1.36,0,0,0,.24.24l7.28,5.46A1.24,1.24,0,0,0,17,17h0a1.23,1.23,0,0,0-.24-1.72h0L12.46,12h10.4a6.75,6.75,0,0,1,0,13.49H1.23A1.24,1.24,0,0,0,0,26.71H0a1.24,1.24,0,0,0,1.23,1.23H22.86a9.21,9.21,0,0,0,0-18.41H12.46l4.33-3.25A1.22,1.22,0,0,0,17,4.56h0a1.23,1.23,0,0,0-.81-.48l-.2,0Z" transform="translate(0 -4.06)"/>
          </svg>
        </a>
        <h1>{{ title }}</h1>
      </div>
    
      <div class="f8-switch-daylight u8-d-none" data-f8-custom-style data-f8-target="body" data-f8-target-dark-class="m--theme-dark">
        <input type="checkbox" id="sd">
      </div>

    </div>
  </header>

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
  /// Basic

  name: 'Header',




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Data/Props/Emits

  props: {
    type: {
      type: String,
      default: 'main',
    },
    title: {
      type: String,
      default: 'Hello World!',
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
$m-header-bg-color:                                   $m-headings-color !default;
$m-header-text-color:                                 $m-bg-color !default;

$m-header-font-size:                                  1rem !default;
$m-header-brand-size:                                 32px !default;

$m-header-zindex:                                     2010 !default;




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Main

.m-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: $m-spacer;
  padding-bottom: $m-spacer;
  background-color: $m-header-bg-color;
  color: $m-header-text-color;
  z-index: $m-header-zindex;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: $m-header-font-size;
    color: $m-header-text-color;
  }
}

.m-header--visual-shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Element(s): Perspective

.m-header__perspective {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Element(s): Brand Holder, Brand

.m-header__brand-holder {
  display: flex;
  align-items: center;
  gap: 1rem;
}


.m-header__brand {
  display: inline-flex;
  margin: 0;

  svg {
    width: $m-header-brand-size;
    height: $m-header-brand-size;
  }
}

.m-header__brand--visual-stroke {
  svg {
    path,
    line,
    rect,
    circle,
    polygon {
      fill:none;
      stroke: $m-header-text-color;
    }
  }
}

.m-header__brand--visual-fill {
  svg {
    path,
    line,
    rect,
    circle,
    polygon {
      fill: $m-header-text-color;
      stroke: none;
    }
  }
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Element(s): Btn

.m-header__btn {
  &,
  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
}

</style>
