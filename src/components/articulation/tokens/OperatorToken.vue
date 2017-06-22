<template>
  <div v-bind:class="[
      'operator',
      { 'to-operator': isToOperator },
      onFromSide ? 'from-side-operator' : 'to-side-operator',
    ]">
    {{ operator }}
  </div>
</template>

<script>
export default {
  name: 'operator-token',
  props: ['operator_', 'onFromSide'],
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
  font-size: 0.75em;
  padding-top: calc(4px + 1px);
  padding-bottom: 1px;
}


.from-side-operator {
  margin-left: 3.0em;
}

.to-side-operator {
  margin-left: 3.0em;
}


.to-operator {
  text-align: center;
}


@media (max-width: 400px) {
  .from-side-operator {
    margin-left: 3.25em;
  }

  .to-side-operator {
    margin-left: 1.5em;
  }
}


@media (max-width: 200px) {
  .from-side-operator {
    margin-left: 0;
    text-align: center;
  }
}
</style>

