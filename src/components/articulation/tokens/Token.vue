<template>
  <td class="token">
    <course-token :course="token" :onFromSide="onFromSide" v-if="isCourse()"/>
    <non-articulation-token v-else-if="isNonArticulation()"/>
    <operator-token :operator_="token" v-else-if="isOperator()"/>
    <div class="non-course" v-else-if="isNonCourse()">
      {{ token['non-course'] }}
    </div>
  </td>
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
      return this.token.hasOwnProperty('code')
        && this.token.code !== "No Course Articulated"
    },
    isNonArticulation() {
      return this.token.code === "No Course Articulated"
    },
    isOperator() {
      return this.token.hasOwnProperty('operator')
    },
    isNonCourse() {
      return this.token.hasOwnProperty('non-course')
    },
  },
  components: {
    CourseToken, NonArticulationToken, OperatorToken
  },
}
</script>

<style>
.token {
  vertical-align: top;
}


.non-course {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  padding: 6px;
  font-size: 0.8em;
}
</style>
