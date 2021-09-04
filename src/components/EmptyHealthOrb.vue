<template>
<div>
  <img id="emptyOrb" :src="image" />
</div>
</template>

<script>
import EmptyOrb from "../assets/orbempty.jpg"

export default {
name: "EmptyHealthOrb",
  data(){
  return{
    image: EmptyOrb,
  }
  }
}
</script>

<style scoped>

#emptyOrb{
  height: 100%;
  width: 100%;
}

</style>