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
}

.code {
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
    margin-right: 0;
    flex-direction: row;
  }

  .title {
    display: none;
  }
}
</style>
