<template>
  <div v-bind:class="['operator', { 'to-operator': isToOperator }]">
    {{ operator }}
  </div>
</template>

<script>
export default {
  name: 'operator-token',
  props: ['operator_'],
  computed: {
    operator() {
      const operator = this.operator_.operator
      if (operator === "TO_or" || operator === "FROM_or") {
        return "OR"
      }
      else {
        return operator
      }
    },

    isToOperator() {
      const operator = this.operator_.operator
      return operator === "AND" || operator === "TO_or"
    },
  },
}
</script>

<style>
.operator {
  margin-left: 2.0em;
  margin-top: 0.0em;
  margin-bottom: 0.0em;
  font-size: 0.5em;
}

.to-operator {
  text-align: center;
}


@media (max-width: 300px) {
  .operator {
    margin-left: 0;
    text-align: center;
  }
}
</style>

