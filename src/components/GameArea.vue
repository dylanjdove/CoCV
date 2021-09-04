<template>
<div class="root">
  <div class="background">
    <background-component :background-u-r-l="backgroundURL"/>
  </div>
</div>
</template>

<script>
import BackgroundComponent from "./BackgroundComponent";

export default {
  components: {BackgroundComponent},
  props: ['backgroundURL'],
name: "GameArea"
}
</script>

<style scoped>

</style>