<template>
  <div>
    <course-token :course="token" :onFromSide="onFromSide" v-if="isCourse()"/>
    <non-articulation-token v-else-if="isNonArticulation()"/>
    <operator-token :operator_="token" :onFromSide="onFromSide" v-else-if="isOperator()"/>
    <div class="info" v-else-if="isInfo()">
      {{ token['info'] }}
    </div>
  </div>
</template>

<script>
import CourseToken from '@/components/articulation/tokens/CourseToken'
import NonArticulationToken from '@/components/articulation/tokens/NonArticulationToken'
import OperatorToken from '@/components/articulation/tokens/OperatorToken'

export default {
  name: 'token',
  props: ['token', 'onFromSide'],
  methods: {
    isCourse() {
      return this.token.hasOwnProperty('department')
    },
    isNonArticulation() {
      return this.token.hasOwnProperty('no-articulation')
    },
    isOperator() {
      return this.token.hasOwnProperty('operator')
    },
    isInfo() {
      return this.token.hasOwnProperty('info')
    },
  },
  components: {
    CourseToken, NonArticulationToken, OperatorToken
  },
}
</script>

<style>
.info {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  padding: 6px;
  font-size: 0.8em;
}
</style>
