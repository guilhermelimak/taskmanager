<template>
<div class="nav navbar">
  <div class="nav-left">
    <div class="nav-item">
      <project-select></project-select>
    </div>
  </div>
  <div class="nav-center">
    <div class="nav-item">
      <h4 class="title is-4">{{ currentProject.name }}</h4>
    </div>
  </div>
  <div class="nav-right is-hidden-touch">
    <div class="nav-item">
      <a class="button is-outlined is-primary" @click="toggleImportModal">
        <span class="icon is-small">
          <i class="fa fa-upload"></i>
        </span>
        <span>
          Import
        </span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import ProjectSelect from 'components/partials/ProjectSelect.vue'
import { toggleImportModal } from 'actions/uiActions'
import { currentProject } from 'getters'

export default {
  vuex: {
    actions: {
      toggleImportModal,
    },
    getters: {
      currentProject,
    },
  },
  components: {
    ProjectSelect,
  },
}
</script>

<style lang="sass">
$navbar-bg-color: #FFF;

.navbar {
  height: 52px;
  background-color: $navbar-bg-color;
}
</style>
