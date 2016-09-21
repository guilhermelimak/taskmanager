<template>
<div class="nav navbar">
  <div class="nav-right">
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
import { toggleImportModal } from 'actions'

export default {
  vuex: {
    actions: {
      toggleImportModal,
    },
  },
}
</script>

<style lang="sass">
$navbar-bg-color: #FFF;

.navbar {
  background-color: $navbar-bg-color;
}
</style>
