<template>
<div class="header" id="header" :style="{ backgroundImage: `url(${this.image})`}">
  <span>Creatures of Calden</span>
</div>
</template>

<script>
import MenuBoard from '../assets/menuboardbothdeco.jpg'

export default {
name: "HeaderComponent",
  data(){
  return{
    image: MenuBoard,
  }
  }
}
</script>

<style scoped>

.header{
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

#header{}

</style>