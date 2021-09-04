<template>
<div>
  <img id="fullOrb" :src="image" />
</div>
</template>

<script>
import FullOrb from "../assets/orbfull.jpg"

export default {
name: "FullHealthOrb",
  data(){
  return{
    image: FullOrb,
  }
  }
}
</script>

<style scoped>

#fullOrb{
  height: 100%;
  width: 100%;
}

</style>