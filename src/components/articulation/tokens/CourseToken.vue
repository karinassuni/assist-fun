<template>
  <div class="course">
    <div class="code">
      <div class="department">{{ department }}</div>
      <div class="course-number">{{ courseNumber }}</div>
    </div>
    <div class="title">{{ course.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'course-token',
  props: ['course'],
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
  .course {
    justify-content: center;
  }

  .code {
    flex-direction: row;
  }

  .title {
    display: none;
  }
}
</style>
