<template>
  <div
    class="sidebar"
    @drop="handleDrop"
    @dragover.prevent
  >
    <v-treeview
      dense
      item-text="filename"
      :items="fileList"
    />
  </div>
</template>

<script>
module.exports = {
  props: {
    fileList: Array
  },

  methods: {
    handleDrop (ev) {
      if (ev.dataTransfer.files.length) {
        this.$emit('upload', ev.dataTransfer.files)
      }
    }
  }
}
</script>

<style>
.sidebar {
  height: 100%;
}
</style>
