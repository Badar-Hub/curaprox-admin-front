<template>
  <div class="editor-main">
    <ckeditor :editor="editor" :value="value" @input="changed" v-bind="$attrs"></ckeditor>
  </div>
  <!-- <button v-on:click="emptyEditor()">Empty the editor</button>

  <h2>Editor data</h2>-->
  <!-- <code>{{ editorData }}</code> -->
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      // editorData: "<p>Content of the editor.</p>",
    };
  },
  props: ["value"],
  methods: {
    changed(data) {
      console.log(data);
      this.$emit("input", data);
    },
    emptyEditor() {
      this.value = "";
    },
  },
};
</script>

<style scoped>
.editor-main {
  /* max-width: 400px; */
  height: 200px;
}
</style>