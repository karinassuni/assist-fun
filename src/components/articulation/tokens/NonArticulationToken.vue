<template>
  <div class="non-articulation">
    <div class="non-articulation-large">No Course Articulated</div>
    <div class="non-articulation-small">No Articulation</div>
  </div>
</template>

<script>
export default {
  name: 'non-articulation-token',
}
</script>

<style>
.non-articulation {
  font-size: 0.85em;
  padding: 6px 0.65em 6px 0.65em;
}

.non-articulation-large {
  display: block;
}

.non-articulation-small {
  display: none;
}


@media (max-width: 250px) {
  .non-articulation-large {
    display: none;
  }
  .non-articulation-small {
    display: block;
  }
}
</style>
