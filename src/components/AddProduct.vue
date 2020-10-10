<template>
  <div>
    <div class="addProduct">
      <div class="text">
        <h2>
          Name:
          <input type="text" v-model="product.name" />
        </h2>
        <h2>
          Price:
          <input type="text" v-model="product.price" />
        </h2>
        <h2>
          Sku:
          <input type="text" v-model="product.sku" />
        </h2>
        <h2>
          Qty:
          <input type="text" v-model="product.qty" />
        </h2>
        <h2>
          Category:
          <select v-model="category">
            <option
              v-for="category in categories"
              :key="category._id"
              :value="category._id"
            >{{category.title}}</option>
          </select>
        </h2>
        <!-- <h2>
          Short Description:
          <input type="text" placeholder="Example: Ultra Soft Toothbrush" />
        </h2>-->
        <h2>
          Description:
          <input
            type="text"
            placeholder="Example: Ultra Soft Toothbrush"
            v-model="product.description"
          />
        </h2>
        <button @click="CreateProduct" style="width:200px;">Add New Product</button>
      </div>
      <div class="img">
        <input type="file" @change="onFileSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// let formData = new FormData;
export default {
  data() {
    return {
      selectedFile: null,
      categories: [],
      category: "",
    };
  },
  components: {},
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    CreateProduct() {
      let body = {
        ...this.product,
        category_id: this.category,
      };
      let data = new FormData();
      for (let key in body) {
        data.append(key, body[key]);
      }
      data.append("file", this.selectedFile);
      console.log(body);
      axios.post("/api/product", data).then((res) => {
        console.log(res);
        this.$emit("product-created");
      });
    },
    hide() {},
  },
  mounted() {
    axios.get("/api/categories").then((res) => {
      this.categories = res.data;
      console.log(this.categories);
    });
  },
};
</script>

<style scoped>
.addProduct {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  max-width: 1200px;
  margin: auto;
  padding: 3% 0;
  border: 1px solid black;
}

img {
  max-width: 500px;
  width: 100%;
}

.text {
  padding: 50px 20px;
}
</style>