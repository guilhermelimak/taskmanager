<template>
<div id="toast" :class="{ 'show': isShown }" v-text="message"></div>
</template>

<script>
export default {
  props: {
    isShown: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  watch: {
    isShown() {
      if (this.isShown) {
        window.setTimeout(() => {
          this.isShown = false
        }, 3000)
      }
    },
  },
}
</script>

<style lang="sass">
#toast {
   visibility: hidden;
   min-width: 250px;
   margin-left: -125px;
   background-color: #333;
   color: #fff;
   text-align: center;
   border-radius: 2px;
   padding: 16px;
   position: fixed;
   z-index: 99999;
   left: 50%;
   bottom: 30px;
}

#toast.show {
   visibility: visible;

   -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
   animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@keyframes fadein {
   from {bottom: 0; opacity: 0;}
   to {bottom: 30px; opacity: 1;}
}

@keyframes fadeout {
   from {bottom: 30px; opacity: 1;}
   to {bottom: 0; opacity: 0;}
}
</style>
