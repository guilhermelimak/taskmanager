<template>
<div class="modal is-active" transition="fade" transition-mode="out-in" v-if="isImportModalOpen">
  <div @click="toggleImportModal" class="modal-background"></div>
  <div class="modal-container">
    <div class="modal-content box">
      <label class="label">Import</label>
      <p class="control">
        <textarea
          autofocus
          @keyup.enter="importTasks(tasks)"
          class="textarea import__input"
          :placeholder="emptyCard | json"
          v-model="tasks">
        </textarea>
      <a
        class="import__button button is-outlined is-primary"
        @click="importTasks(tasks)">
        Import
      </a>
    </div>
  </div>
  <button class="modal-close" @click="toggleImportModal"></button>
</div>
</template>

<script>
import { toggleImportModal } from 'actions/uiActions'
import { importTasks } from 'actions'
import { isImportModalOpen } from 'getters'
import { emptyCard } from 'util'

export default {
  data() {
    return {
      tasks: '',
      emptyCard,
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

  &__input {
    min-height: 200px;
  }
}
</style>
