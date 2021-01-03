import Vue from "vue";
import App from "./App.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(CKEditor);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
