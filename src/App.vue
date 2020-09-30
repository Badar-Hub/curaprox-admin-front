<template>
  <div id="app">
    <div class="products-container">
      <CreateProduct @toggle-create="showCreateModal = !showCreateModal"/>
      <ProductModal v-if="showCreateModal" @toggle="showCreateModal = !showCreateModal" />
      <Product v-for="prod in products" :key="prod.id" v-bind="prod"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Product from './components/Product'
import CreateProduct from './components/CreateProduct'
import ProductModal from './components/ProductModal'

export default {
  name: 'App',
  data() {
    return { 
      products: [],
      showCreateModal: false,
    }
  },
  components: {
    Product,
    CreateProduct,
    ProductModal
  },
  mounted(){
    axios.get('/api/products').then((res) => {
        this.products = res.data
        console.log(this.products);
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.products-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  transition: .2s;
height: 100%;
  margin-top: 60px;
}
</style>
