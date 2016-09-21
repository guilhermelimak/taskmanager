<template>
<div class="modal" :class="{ 'is-active': isImportModalOpen }">
  <div @click="toggleImportModal" class="modal-background"></div>
  <div class="modal-container">
    <div class="modal-content box">
      <label class="label">Import</label>
      <p class="control">
        <textarea
          autofocus
          @keyup.enter="importTasks(tasks)"
          class="textarea"
          placeholder="Paste the json here"
          v-model="tasks">
        </textarea>
      <a class="import__button button is-outlined is-primary" @click="importTasks(tasks)">Import</a>
    </div>
  </div>
  <button class="modal-close" @click="toggleImportModal"></button>
</div>
</template>

<script>
import { importTasks, toggleImportModal } from 'actions'
import { isImportModalOpen } from 'getters'

export default {
  data() {
    return {
      tasks: '',
    }
  },
  vuex: {
    getters: {
      isImportModalOpen,
    },
    actions: {
      importTasks,
      toggleImportModal,
    },
  },
}
</script>

<style lang="sass">
.import {
  &__button {
    margin-top: 20px;
  }
}
</style>
