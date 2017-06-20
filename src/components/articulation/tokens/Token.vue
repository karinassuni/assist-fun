<template>
  <td class="token">
    <template v-if="isCourse()">
      <div class="course">
        <div class="code">
          <div class="department">{{ department() }}</div>
          <div class="course-number">{{ courseNumber() }}</div>
        </div>
        <div class="title">{{ token.title }}</div>
      </div>
    </template>
    <template v-else-if="isNonArticulation()">
      <div class="non-articulation-large">No Course Articulated</div>
      <div class="non-articulation-small">N/A</div>
    </template>
    <template v-else-if="isOperator()">
      <div v-bind:class="['operator', { 'to-operator': isToOperator() }]">
        {{ operator() }}
      </div>
    </template>
    <template v-else-if="isNonCourse()">
      <div class="non-course">{{ token['non-course'] }}</div>
    </template>
  </td>
</template>

<script>
export default {
  name: 'token',
  props: ['token'],
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


    isToOperator() {
      let operator = this.token.operator
      return operator === "AND" || operator === "TO_or"
    },


    department() {
      let department = /([^\d]+) \d+[A-Z]*/
      return department.exec(this.token.code)[1]
    },
    courseNumber() {
      let courseNumber = /[^\d]+ (\d+[A-Z]*)/
      return courseNumber.exec(this.token.code)[1]
    },
    operator() {
      let operator = this.token.operator
      if (operator === "TO_or" || operator === "FROM_or") {
        return "OR"
      }
      else {
        return operator
      }
    },
  }
}
</script>

<style>
.token {
  width: 50%;
  max-width: 800px;
  vertical-align: top;
}


.course {
  display: flex;
  padding: 6px;
  background-color: #efefef;
  border-radius: 5px;
  font-size: 0.75em;
}
.code {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-right: 1.25em;
}
.department {
  margin-right: 3px;
}
.title {
}


.non-articulation-large {
  display: block;
  padding: 6px;
  background-color: #efefef;
  border-radius: 5px;
  font-size: 0.75em;
  font-weight: bold;
}
.non-articulation-small {
  display: none;
  padding: 6px;
  background-color: #efefef;
  border-radius: 5px;
  font-size: 0.75em;
  text-align: center;
  font-weight: bold;
}


.operator {
  margin-left: 2.0em;
  margin-top: 0.0em;
  margin-bottom: 0.0em;
  font-size: 0.5em;
}
.to-operator {
  text-align: center;
}


.non-course {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  padding: 6px;
  font-size: 0.75em;
}


@media (max-width: 500px) {
  .course {
    align-items: center;
  }
  .code {
    margin-right: 1em;
    flex-direction: column;
    align-items: left;
  }
}


@media (max-width: 300px) {
  .token {
    width: 50%;
    min-width: 160px;
  }


  .course {
    justify-content: center;
  }
  .code {
    flex-direction: row;
  }
  .title {
    display: none;
  }


  .non-articulation-large {
    display: none;
  }
  .non-articulation-small {
    display: block;
  }


  .operator {
    margin-left: 0;
    text-align: center;
  }
}
</style>
