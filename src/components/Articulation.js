import CourseSection from '@/components/CourseSection'

export default function(articulation) {
  return {
    template: `
      <articulation>
        <course-section
          v-for="(section, index) of courseSections"
          v-bind:slot="index"
          v-bind:key="index"
          v-bind:section="section"
        ></course-section>
      </articulation>
    `,
    data: function() {
      return { courseSections: articulation['courseSections'] }
    },
    components: {
      'articulation': { template: articulation['template'] },
      'course-section': CourseSection,
    }
  }
}
