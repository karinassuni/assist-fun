<template>
  <div :class="['course', { 'button-box': onFromSide }]">
    <div :class="['code', onFromSide ? 'from-code' : 'to-code']">
      <div class="department">{{ course.department }}</div>
      <div class="course-number">{{ course.cnum }}</div>
    </div>
    <div class="title" v-if="onFromSide">{{ course.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'course-token',
  props: ['course', 'onFromSide'],
}
</script>

<style>
.course {
  display: flex;
  align-items: center;
  padding: 0.5em 0.5em;
}

.button-box {
  background-color: #f9f9f9;
  border-radius: 5px;
  -webkit-box-shadow: 0px 4px 4px -4px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 4px 4px -4px rgba(0,0,0,0.3);
  box-shadow: 0px 4px 4px -4px rgba(0,0,0,0.3);
  cursor: pointer;

  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}
.button-box:hover {
  background-color: #f0f0f0;

  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}


.code {
  display: flex;
  flex-direction: row;
  font-size: 0.8em;
}

.to-code {
}

.from-code {
  font-weight: 900;
  margin: 0 1em;
}


.department {
  margin-right: 3px;
}

.title {
  font-size: 0.85em;
  margin-right: 1em;
}


@media (max-width: 400px) {
  .code {
    flex-direction: column;
  }

  .from-code {
    align-items: left;
  }
}


@media (max-width: 200px) {
  .course {
    justify-content: center;
  }


  .code {
    flex-direction: row;
  }

  .from-code {
    margin-right: 0;
  }


  .title {
    display: none;
  }
}
</style>
