<template>
<div class="playbutton">
  <img id="button" :src="image" />
</div>
</template>

<script>
import PlayButton from '../assets/playbutton.jpg'
export default {
name: "LoadGameButton",
  data(){
  return{
    image: PlayButton,
  }
  }
}
</script>

<style scoped>

.playbutton{
  height: 10em;
  width: 10em;
}

#button{
  height: 100%;
  width: 100%;
}

</style>