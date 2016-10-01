<template>
<div
  class="sidebar sidebar__container box depth-4"
  :class="{ 'is-open': isSidebarOpen }">
  <div class="sidebar__content">
    <i class="fa fa-close sidebar__close-button is-primary"
      @click="toggleSidebar">
    </i>

    <input
      class="sidebar__title title is-4"
      placeholder="Untitled"
      v-model="currentCard.title"
      @keyup="saveCard">

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

    <ul>
      <p class="sidebar__title title is-6">Estimated time</p>
      <li>Analysis: {{ currentCard.analysis_duration }}h</li>
      <li>Development: {{ currentCard.development_duration }}h</li>
      <li>Testing: {{ currentCard.testing_duration }}h</li>
    </ul>

    <hr>

    <div class="sidebar__comments">
      <p class="sidebar__title title is-6">
        Comments
      </p>
      <ul>
        <div v-for="comment in currentCard.comments">
          <li><p>{{ comment }}</p></li>
          <hr class="comments__divider">
        </div>
      </ul>
      <input
        @keyup.enter="insertComment"
        v-model="commentText"
        type="text"
        class="input is-small comments__input">
    </div>
  </div>
</div>
</template>

<script>
import { currentCard, isSidebarOpen, currentCardId } from 'getters'
import { addComment, updateCard } from 'actions/cardActions'
import { toggleSidebar } from 'actions/uiActions'

export default {
  data() {
    return {
      commentText: '',
    }
  },
  methods: {
    insertComment() {
      this.addComment(this.commentText)
      this.commentText = ''
    },
    saveCard() {
      this.updateCard(this.currentCardId, this.currentCard)
    },
  },
  vuex: {
    actions: {
      toggleSidebar,
      addComment,
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

<style lang="sass" scoped>
@import '../general';

.sidebar {
  &__container {
    transition: transform 0.3s;
    margin-left: auto;
    padding: 20px;
    width: 300px;
    z-index: 9999;
    overflow: auto;
    right: 0;
    min-height: 100%;
    transform: translateX(500px);
    position: fixed;

    &.is-open {
      transform: translateX(0);
    }
  }

  &__close-button {
    color: $blue-primary;
    position: fixed;
    font-size: 14px;
    top: 10px;
    right: 10px;
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
    font-size: 13px;
  }

  hr {
    margin: 10px 0;
  }
}

.comments {
  &__input {
    margin-bottom: 10px;
  }
}
</style>
