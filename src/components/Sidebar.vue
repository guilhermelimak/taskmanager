<template>
<div
  class="sidebar sidebar__container box depth-4"
  :class="{ 'is-open': isSidebarOpen }">

  <div id="sidebar-content" class="sidebar__content">
    <i class="fa fa-close sidebar__close-button is-primary"
      @click="toggleSidebar">
    </i>

    <textarea
      resizable="false"
      class="sidebar__title title is-4"
      placeholder="Untitled"
      v-model="currentCard.title"
      @keyup="saveCard"></textarea>

    <p class="sidebar__title title is-6">
      Description
    </p>

    <textarea
      @keyup="saveCard"
      class="word-wrap sidebar__description"
      placeholder="Card description"
      v-model="currentCard.description">
    </textarea>

    <hr>

    <time-estimation :current-card="currentCard">

    </time-estimation>

    <hr>
    <work-log :current-card="currentCard">
    </work-log>

    <hr>
    <comments :current-card="currentCard">
    </comments>
  </div>
</div>
</template>

<script>
import { currentCard, isSidebarOpen, currentCardId } from 'getters'
import { updateCard } from 'actions/cardActions'
import { toggleSidebar } from 'actions/uiActions'
import TimeEstimation from 'components/sidebar/TimeEstimation.vue'
import Comments from 'components/sidebar/Comments.vue'
import WorkLog from 'components/sidebar/WorkLog.vue'

import Ps from 'perfect-scrollbar'

export default {
  ready() {
    this.scrollContainer = document.getElementById('sidebar-content')
    Ps.initialize(this.scrollContainer, {
      wheelSpeed: 0.7,
    })
  },
  data() {
    return {
      commentText: '',
    }
  },
  watch: {
    currentCardId() {
      Ps.update(this.scrollContainer)
    },
  },
  methods: {
    saveCard() {
      this.updateCard(this.currentCardId, this.currentCard)
    },
  },
  components: {
    TimeEstimation,
    Comments,
    WorkLog,
  },
  vuex: {
    actions: {
      toggleSidebar,
      updateCard,
    },
    getters: {
      currentCardId,
      currentCard,
      isSidebarOpen,
    },
  },
}
</script>

<style lang="sass">
@import '../general';

.sidebar {
  textarea,
  input {
    border: 1px solid #ddd;
    padding: 4px;

    &:focus {
      outline: none;
      border: 1px solid $blue-primary;
    }
  }

  &__container {
    transition: transform 0.3s;
    margin-left: auto;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 300px;
    z-index: 9999;
    overflow: auto;
    right: 0;
    height: calc(100% - 52px);
    transform: translateX(500px);
    position: fixed;

    &.is-open {
      transform: translateX(0);
    }
  }

  &__content {
    position: relative;
    height: 100%;
    padding: 0 20px;
  }

  &__close-button {
    color: #555;
    position: fixed;
    cursor: pointer;
    font-size: 14px;
    top: 5px;
    right: 5px;
  }

  &__description {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    min-height: 200px;
    border: none;
  }

  &__title {
    border: none;
    margin-bottom: 10px;
    width: 100%;
    font-weight: bold;
    line-height: 21px;
  }

  &__comments {
  }

  hr {
    margin: 10px 0;
  }
}

</style>
