<template>
  <div class="comments">
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
</template>

<script>
import { addComment } from 'actions/cardActions'

export default {
  props: {
    currentCard: {
      type: Object,
      required: true,
    },
  },
  vuex: {
    actions: {
      addComment,
    },
  },
  methods: {
    insertComment() {
      this.addComment(this.commentText)
      this.commentText = ''
    },
  },
}
</script>

<style lang="sass">
.comments {
  font-size: 13px;

  &__divider {
    margin: 8px 0;
  }

  &__input {
    margin-bottom: 10px;
  }
}
</style>
