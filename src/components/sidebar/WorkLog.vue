<template>
  <div>
    <p class="sidebar__title title is-6">Work log</p>
    <div class="columns">
      <div class="column is-three-quarters">
        <input @keyup.enter="logClick" placeholder="Time in hours (E.g. 1.5)" type="number" v-model="workLog.amount" class="tile">
        <input @keyup.enter="logClick" placeholder="Description" type="text" v-model="workLog.description" class="tile">
      </div>
      <div class="column is-one-quarter">
        <button @click="logClick" class="button">Log</button>
      </div>
    </div>

    <ul>
      <li v-for="(key, work) in currentCard.workLogged">
        <div class="columns">
          <div class="column">
            {{ work.amount }}h - {{ work.description }}
          </div>
          <div class="column">
            <i @click="deleteClick(key)"
              class="fa fa-remove is-pulled-right close-icon">
            </i>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { deleteWorkLog, logWork } from 'actions/cardActions'

export default {
  data() {
    return {
      workLog: {
        amount: '',
        description: '',
      },
    }
  },
  props: {
    currentCard: {
      type: Object,
      required: true,
    },
  },
  methods: {
    logClick() {
      console.log(this.workLog.amount)
      if (this.workLog.amount > 0) {
        this.logWork(this.workLog)
        this.workLog = {
          amount: '',
          description: '',
        }
      }
    },
    deleteClick(key) {
      if (confirm('Are you sure?')) {
        this.deleteWorkLog(key)
      }
    },
  },
  vuex: {
    actions: {
      logWork,
      deleteWorkLog,
    },
  },
}
</script>

<style lang="sass" scoped>
.close-icon {
  font-size: 13pt;
}
</style>
