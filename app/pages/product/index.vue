<template>
<div>
             <div v-for="prod in product" :key="prod.id" class="product">
            <h2>Название товара: {{prod.nameProduct}}</h2>
            <h2>Описание:  {{prod.description}}</h2>

            <br/>
            <nuxt-link :to="{path:'/product/' + prod.id}">
              Посмотреть подробности о товаре
            </nuxt-link>       
        </div>
        <nuxt-link :to="{path:'/'}">
        Came back
            </nuxt-link> 
</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: mapState(['product']),

  }
</script>

<style>
.product{
  border: 10px solid rgb(136, 255, 0);
  padding: 10px;
  margin: 20px;
  padding-left: 10px;
  width: 400px;
}


</style>