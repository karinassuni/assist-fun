<template>
  <div id="app">
    <Articulation></Articulation>
  </div>
</template>

<script>
import Articulation from '@/components/articulation/Articulation'
import articulation from '@/articulation.json'

export default {
  name: 'app',
  components: {
    'Articulation': Articulation(articulation)
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
