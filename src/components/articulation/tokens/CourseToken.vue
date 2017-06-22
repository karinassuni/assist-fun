<template>
  <div :class="['course', { 'button-box': onFromSide }]">
    <div :class="onFromSide ? 'from-code' : 'to-code'">
      <div class="department">{{ department }}</div>
      <div class="course-number">{{ courseNumber }}</div>
    </div>
    <div class="title" v-if="onFromSide">{{ course.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'course-token',
  props: ['course', 'onFromSide'],
  computed: {
    department() {
      const department = /([^\d]+) \d+[A-Z]*/
      return department.exec(this.course.code)[1]
    },
    courseNumber() {
      const courseNumber = /[^\d]+ (\d+[A-Z]*)/
      return courseNumber.exec(this.course.code)[1]
    },
  }
}
</script>

<style>
.course {
  display: flex;
  padding: 6px 0.65em 6px 0.65em;
}

.button-box {
  background-color: #f6f6f6;
  border-radius: 5px;
  -webkit-box-shadow: 0px 4px 9px -4px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 4px 9px -4px rgba(0,0,0,0.3);
  box-shadow: 0px 4px 9px -4px rgba(0,0,0,0.3);
  cursor: pointer;

  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
.button-box:hover {
  background-color: #e5e5e5;

  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.to-code {
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
}

.from-code {
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
  font-weight: 900;
  margin-right: 1.25em;
}

.department {
  margin-right: 3px;
}

.title {
  font-size: 0.85em;
}


@media (max-width: 500px) {
  .course {
    align-items: center;
  }

  .to-code {
    flex-direction: column;
  }

  .from-code {
    margin-right: 1em;
    flex-direction: column;
    align-items: left;
  }
}


@media (max-width: 300px) {
  .course {
    justify-content: center;
  }

  .to-code {
    flex-direction: row;
  }

  .from-code {
    margin-right: 0;
    flex-direction: row;
  }

  .title {
    display: none;
  }
}
</style>
