<template>
<div class="sidebar sidebar__container box depth-4" :class="{ 'is-open': isSidebarOpen }">
  <div class="sidebar__content">
    <i class="fa fa-close sidebar__close-button is-primary"
      @click="toggleSidebar">
    </i>

    <input class="sidebar__title title is-4" v-model="currentCard.title" @keyup="saveCard">

    <p class="sidebar__title title is-6">
      Description
    </p>

    <textarea
      @keyup="saveCard"
      class="word-wrap sidebar__description"
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
import { currentCard, isSidebarOpen, currentCardID } from 'getters'
import { toggleSidebar, addComment, updateCard } from 'actions'

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
      this.updateCard(this.currentCardID, this.currentCard)
    },
  },
  vuex: {
    actions: {
      toggleSidebar,
      addComment,
      updateCard,
    },
    getters: {
      currentCardID,
      currentCard,
      isSidebarOpen,
    },
  },
}
</script>

<style lang="sass" scoped>
.sidebar {
  &__container {
    transition: transform 0.3s;
    margin-left: auto;
    padding: 20px;
    width: 300px;
    transform: translateX(300px);

    &.is-open {
      height: auto;
      transform: translateX(0);
      position: relative;
      right: 0;
    }
  }

  &__close-button {
    color: #1fc8db;
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
