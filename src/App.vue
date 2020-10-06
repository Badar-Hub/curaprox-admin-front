<template>
  <div id="app">
    <div class="products-container">
      <CreateProduct @toggle-create="showCreateModal = !showCreateModal" />
      <ProductModal
        :product="selectedProduct"
        v-if="showCreateModal"
        @toggle="showCreateModal = !showCreateModal"
      />
      <Product
        @toggle-create="selectedProduct"
        v-for="prod in products"
        :key="prod._id"
        v-bind="prod"
      />
    </div>
    <a-table v-if="false" :columns="columns" :data-source="products">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Sku",
    dataIndex: "sku",
    key: "sku",
    width: 80,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    ellipsis: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: true,
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
    ellipsis: true,
  },
  // {
  //   title: "Long Column",
  //   dataIndex: "address",
  //   key: "address 4",
  //   ellipsis: true,
  // },
];

import axios from "axios";
import Product from "./components/Product";
import CreateProduct from "./components/CreateProduct";
import ProductModal from "./components/ProductModal";

export default {
  name: "App",
  data() {
    return {
      products: [],
      showCreateModal: false,
      selectedProduct: null,
      columns,
    };
  },
  components: {
    Product,
    CreateProduct,
    ProductModal,
  },
  mounted() {
    axios.get("/api/products").then((res) => {
      this.products = res.data;
      console.log(this.products);
    });
  },
  methods: {
    selectProduct(id) {
      {
        this.selectProduct = this.products.find((x) => x._id == id);
        this.showCreateModal = !this.showCreateModal;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.products-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  transition: 0.2s;
  height: 100%;
  margin-top: 60px;
}
</style>
