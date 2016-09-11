<template>
<div class="sidebar sidebar__container box depth-4" :class="{ 'is-open': isSidebarOpen }">
  <div class="sidebar__content">
    <h2 class="title is-4">
      {{ currentCard.title }}
      <i class="fa fa-close sidebar__close-button"
        @click="toggleSidebar">
      </i>
    </h2>
    <p>{{ currentCard.description }}</p>
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

    <div class="sidebar__comments">
      <p class="sidebar__title title is-6">
        Hours spent
        <i class="fa fa-plus is-pulled-right is-small"></i>
      </p>
      <li>{{ currentCard.hours }}h</li>
    </div>
  </div>
</div>
</template>

<script>
import { currentCard, isSidebarOpen } from 'getters'
import { toggleSidebar, addComment } from 'actions'

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
  },
  vuex: {
    actions: {
      toggleSidebar,
      addComment,
    },
    getters: {
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
    position: fixed;
    top: 10px;
    right: 10px;
  }

  &__title {
    margin-bottom: 10px;
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
