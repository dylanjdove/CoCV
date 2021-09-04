<template>
  <div class = "bg" :style="{ backgroundImage: `url(${this.backgroundURL})`}" />
</template>

<script>
export default {
name: "BackgroundComponent",
  data(){
  return{

    }
  },
  props: [
      'backgroundURL'
  ]
}
</script>

<style scoped>
.bg{
  background-size:cover;
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index: 0;
}
</style>