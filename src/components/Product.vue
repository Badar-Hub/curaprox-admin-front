<template>
  <div id="container">
    <div class="img-container">
      <img :src="`${img}`" />
    </div>
    <div class="content">
      <div class="content-detail">
        <h3>SKU:</h3>
        <input type="text" v-model="sku" :readonly="!editing" />
      </div>
      <div class="content-detail">
        <h3>Title:</h3>
        <input type="text" v-model="name" :readonly="!editing" />
      </div>
      <div class="content-detail">
        <h3>Price:</h3>
        <input type="text" v-model="price" :readonly="!editing" />
      </div>
      <div class="content-detail">
        <h3>Quantity:</h3>
        <input type="text" v-model="qty" :readonly="!editing" />
      </div>
      <div class="content-detail">
        <h3>Description:</h3>
        <textarea type="text" v-model="description" :readonly="!editing"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sku: {
      type: String,
      required: true,
      default: () => "SK1",
    },
    name: {
      type: String,
      required: true,
      default: () => "Product 1",
    },
    price: {
      type: Number,
      required: true,
      default: () => 650,
    },
    qty: {
      type: Number,
      required: true,
      default: () => 1000,
    },
    description: {
      type: String,
      required: true,
      default: () => "Product One",
    },
    img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#container {
  transition: 0.2s;
  width: 350px;
  height: 500px;
  min-width: 350px;
  background-color: rgb(207, 207, 207);
  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 15px -6px rgba(92, 92, 92, 1);
  -webkit-box-shadow: 0px 0px 15px -6px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 0px 15px -6px rgba(92, 92, 92, 1);

  .img-container {
    height: 60%;
    width: 100%;
    background-color: rgb(139, 139, 139);

    img {
      object-fit: "contain";
      height: 100%;
    }
  }

  .content {
    height: 40%;
    width: 100%;
    padding: 10px 0;

    box-shadow: inset 0px 0px 15px -6px rgba(92, 92, 92, 1);
    -webkit-box-shadow: inset 0px 0px 15px -6px rgba(92, 92, 92, 1);
    -moz-box-shadow: inset 0px 0px 15px -6px rgba(92, 92, 92, 1);

    &-detail {
      margin: 5px 0;
      display: flex;
      justify-content: center;

      * {
        width: 50%;
        min-width: 40%;
        max-height: 40px;
        margin: 0 20px;

        text-align: center;
        font-weight: 500;
        font-size: 20px;
      }
      :first-child {
        text-align: right;
        width: 45%;
        min-width: 45%;
      }
      :nth-child(2) {
        text-align: left;
        width: 55%;
        min-width: 55%;
      }
      input:read-only {
        background-color: transparent;
        border: none;
      }
      textarea:read-only {
        background-color: transparent;
        border: none;
      }
    }
  }
}
#container:hover {
  cursor: pointer;

  min-width: 360px;
  width: 360px;
  height: 510px;
  background-color: rgb(223, 223, 223);

  box-shadow: 0px 0px 15px -6px rgb(80, 80, 80);
  -webkit-box-shadow: 0px 0px 15px -6px rgba(80, 80, 80, 1);
  -moz-box-shadow: 0px 0px 15px -6px rgba(80, 80, 80, 1);
}
</style>