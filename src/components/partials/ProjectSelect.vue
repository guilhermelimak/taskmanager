<template>
<div>
  <span class="select is-">
    <select v-model="selected">
      <option v-for="(key, proj) in projects" :value="key">{{ proj.name }}</option>
    </select>
  </span>

</div>
</template>

<script>
import { projects, currentProjectID } from 'getters'
import { changeCurrentProject } from 'actions'

export default {
  computed: {
    selected: {
      get() {
        return this.currentProjectID
      },
      set(val) {
        this.changeCurrentProject(val)
      },
    },
  },
  vuex: {
    getters: {
      projects,
      currentProjectID,
    },
    actions: {
      changeCurrentProject,
    },
  },
}
</script>

<style lang="sass">
</style>
