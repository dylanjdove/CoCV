<template>
<div class = "root">
  <div class="background">
  <background-component :background-u-r-l="this.background" />
  </div>
  <div class="menu">
    <div class="header">
      <header-component />
    </div>
    <div class="characters">

    </div>
    <div class="gamesetting">

    </div>
    <div class="buttons">
      <load-game-button />
    </div>
  </div>
</div>
</template>

<script>
import background from '@/assets/Inn.jpeg';
import BackgroundComponent from "./BackgroundComponent";
import HeaderComponent from "./HeaderComponent";
import LoadGameButton from "./LoadGameButton";

export default {
name: "HomeScreen",
  components: {
    LoadGameButton,
    BackgroundComponent,
    HeaderComponent
  },
  data(){
  return{
    background
  }
  }
}
</script>

<style scoped>

.root{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index: 0;
}

.background{
  z-index: -1;
  position: fixed;
}

.buttons{
  position: fixed;
  z-index: 1;
  height: 20vh;
  width: 20vw;
}

.menu{
}
</style>