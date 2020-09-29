<template>
  <div id="container">
      <i class="fa fa-plus add-icon"></i>
  </div>
</template>

<script>
export default {
    data()
    {
        return{
            showDialog: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.add-icon{
    transition: .2s;
    font-size: 125px;
    color: rgb(172, 172, 172);
    margin: auto;

    :hover{
        font-size: 135px;
        color: rgb(134, 134, 134);
    }
}
#container:hover{
    cursor: pointer;
    min-width: 365px;
    width: 365px;
    height: 515px;
    background-color: rgb(232, 250, 250);
    .add-icon{
        font-size: 135px;
        color: rgb(134, 134, 134);
    }
}
#container{
    transition: .2s;
    width: 350px;
    height: 500px;
    min-width: 350px;
    background-color: rgb(227, 241, 241);
    display: flex;
    flex-direction: column;

    box-shadow: 0px 0px 15px -6px rgba(92,92,92,1);
    -webkit-box-shadow: 0px 0px 15px -6px rgba(92,92,92,1);
    -moz-box-shadow: 0px 0px 15px -6px rgba(92,92,92,1);
}
</style>