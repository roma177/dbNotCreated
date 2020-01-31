<template>
  <div
    id="project-info"
    :class="{ slide: true, 'slide-enter': show, 'slide-leave': !show }"
  >
    <div id="info">
      <p>Want to learn how to build this Vue.js app?</p>
      <p>This app is the case-study project for the course <strong>Enterprise Vue</strong>!</p>
      <a href="https://vuejsdevelopers.com/courses/enterprise-vue">Learn more</a>
    </div>
    <div
      id="tab"
      @click="show = !show"
    >
      Learn To Build Me!
      <svg
        v-if="show"
        id="Capa_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="10px"
        height="10px"
        viewBox="0 0 284.929 284.929"
        style="enable-background:new 0 0 284.929 284.929;"
        xml:space="preserve"
      ><g><path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285 C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854 c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848 c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566 C284.929,199.378,283.984,197.188,282.082,195.285z" /></g></svg>
      <svg
        v-else
        id="Capa_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="10px"
        height="10px"
        viewBox="0 0 284.929 284.929"
        style="enable-background:new 0 0 284.929 284.929;"
        xml:space="preserve"
      ><g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441 L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082 c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647 c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" /></g></svg>
    </div>
  </div>
</template>
<script>
export default {
  directives: {
    focus: {
      update (el) {
        el.focus();
      }
    }
  },
  data () {
    return {
      show: false,
      email: ""
    };
  }
};

</script>
<style lang="scss" rel="stylesheet/scss">

    // Colors
    $punch: #D73128;
    $border-color: darken($punch, 10%);
    $grey: #DCDCDC;
    $white: #FFFFFF;
    $black: #000000;
    $green: #29a129;

    // Fonts
    $font-sm: 13px;
    $font-md: 16px;

    $break-point: 400px;

    .slide {
        transition: transform 0.3s;
    }

    .slide-enter {
        transform: translateY(0);
    }

    .slide-leave {
        transform: translateY(calc(32px - 100%));
    }

    #project-info {
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        font-size: $font-sm;
        top: 0;
        right: 20px;
        width: 350px;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;

        @media screen and (max-width: $break-point) {
            right: 0;
            width: 100%;
            font-size: $font-md;
        }

        #info {
            -webkit-text-size-adjust: 100%;
            color: $black;
            border: 1px solid $border-color;
            border-top: none;
            border-bottom-left-radius: 5px;
            background-color: $white;
            padding: 0.25rem 1rem 1rem;

            @media screen and (max-width: $break-point) {
                border: none;
                border-radius: 0;
                border-bottom: 1px solid $border-color;
            }

            p {
                margin: 0.75rem 0;
            }

            a {
                background: $green;
                padding: 5px 10px;
                border-radius: 3px;
                color: white;
                text-decoration: none;
                display: inline-block;
                margin-top: 5px;
            }

        }

        #tab {
            color: $white;
            font-weight: bold;
            background-color: $punch;
            padding: 0.5rem 2rem 0.75rem 0.75rem;
            height: 11px;
            position: relative;
            cursor: pointer;
            user-select: none;
            border: 1px solid $border-color;
            border-top: none;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            @media screen and (max-width: $break-point) {
                font-size: $font-sm;
            }

            svg {
                position: absolute;
                right: 12px;
                top: 12px;
                fill: $white;
            }
        }
    }
</style>
