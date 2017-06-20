<template>
  <table class="course-section">
    <tbody>
      <template v-for="tokenPair of zippedSection">
        <tr>
          <token :token="tokenPair[0]"/>
          <token :token="tokenPair[1]"/>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import Token from '@/components/articulation/tokens/Token'

export default {
  name: 'course-section',
  props: ['section'],
  computed: {
    zippedSection() {
      let zipped = []
      let longerSection = undefined
      let shorterSection = undefined

      const toSection = this.section[0]
      const fromSection = this.section[1]
      if (toSection.length > fromSection.length) {
        longerSection = toSection
        shorterSection = fromSection
      }
      else {
        longerSection = fromSection
        shorterSection = toSection
      }

      const longerSectionLength = longerSection.length
      const shorterSectionLength = shorterSection.length
      const blankToken = {'blank': null}
      for (let i = 0; i < longerSectionLength; ++i) {
        if (i < shorterSectionLength) {
          zipped.push([toSection[i], fromSection[i]])
        }
        else if (longerSection === toSection) {
          zipped.push([toSection[i], blankToken])
        }
        else if (longerSection === fromSection){
          zipped.push([blankToken, fromSection[i]])
        }
      }

      return zipped
    }
  },
  components: { Token }
}
</script>

<style>
.course-section {
  width: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  table-layout: fixed;
}
</style>
