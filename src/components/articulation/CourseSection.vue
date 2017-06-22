<template>
  <table class="course-section">
    <thead class="accessibility-info">
      <tr>
        <th>To Institution Courses</th>
        <th>From Institution Courses</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="tokenPair of zippedSection">
        <tr>
          <td class="token to-token">
            <token :token="tokenPair[0]" :onFromSide="false"/>
          </td>
          <td class="token">
            <token :token="tokenPair[1]" :onFromSide="true"/>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import Token from '@/components/articulation/tokens/Token'

// assertion: tokens only have one key
const keyOf = obj => Object.keys(obj)[0]
const valueOf = obj => obj[keyOf(obj)]

const tokensAreEqual = (token, other) => {
  if (keyOf(token) === keyOf(other)) {
    return valueOf(token) === valueOf(other)
  }
  else {
    return false
  }
}

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
          const toToken = toSection[i]
          const fromToken = fromSection[i]

          if (keyOf(toToken) === 'non-course' && tokensAreEqual(toToken, fromToken)) {
            zipped.push([blankToken, fromToken])
          }
          else {
            zipped.push([toToken, fromToken])
          }
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
}


.token {
  vertical-align: middle;
}

.to-token {
  width: 130px;
}


.accessibility-info {
  display: none;
}


@media (max-width: 600px) {
  .to-token {
    width: 22.5%;
    min-width: 115px;
  }
}

@media (max-width: 400px) {
  .to-token {
    width: 22.5%;
    min-width: 70px;
  }
}

@media (max-width: 200px) {
}
</style>
