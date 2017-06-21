<template>
  <div class="non-articulation">
    <div class="non-articulation-large">No Course Articulated</div>
    <div class="non-articulation-small">N/A</div>
  </div>
</template>

<script>
export default {
  name: 'non-articulation-token',
}
</script>

<style>
.non-articulation {
  padding: 6px;
  background-color: #efefef;
  border-radius: 5px;
  font-size: 0.85em;
}

.non-articulation-large {
  display: block;
}

.non-articulation-small {
  display: none;
  text-align: center;
}


@media (max-width: 300px) {
  .non-articulation-large {
    display: none;
  }
  .non-articulation-small {
    display: block;
  }
}
</style>
