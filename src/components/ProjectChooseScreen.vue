<template>
<div
  v-if="isWelcomeScreenOpen"
  transition="fade"
  transition-mode="out-in"
  class="background">
  <div class="container">
    <div v-for="(key, proj) in projects">
      <div class="box project" @click="selectProject(key)">
        {{ proj.name }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { changeCurrentProject } from 'actions'
import { hideWelcomeScreen } from 'actions/uiActions'
import { projects, isWelcomeScreenOpen } from 'getters'

export default {
  methods: {
    selectProject(key) {
      this.changeCurrentProject(key)
      this.hideWelcomeScreen()
    },
  },
  vuex: {
    getters: {
      projects,
      isWelcomeScreenOpen,
    },
    actions: {
      changeCurrentProject,
      hideWelcomeScreen,
    },
  },
}
</script>

<style lang="sass" scoped>
.background {
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.project {
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
}
</style>
