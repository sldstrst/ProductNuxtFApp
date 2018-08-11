<template>
 <div>
 <section class="container">
     
      <div class="row justify-content-center">
        <div class="col-3">
          <button class="btn-lg btn btn-success btn-block" v-on:click="ollert">
            <b>Судиться с Sony Music</b>
            <i class="material-icons" style="font-size: xx-large">done_all</i>
          </button>

          <div class="prdc">
            <h1>ID:</h1>
            <h3>{{prod.id}}</h3>
            <h1>Название продукта:</h1>
            <h3>{{prod.nameProduct}}</h3>
            <h1>Описание товара:</h1>
            <h3>{{prod.description}}</h3>            
          </div>

        </div>
        <nuxt-link :to="{path:'/product/'}">
              Вернутся назад
            </nuxt-link>   
      </div>
    </section>

 </div>
</template>
<script>
  export default {

    asyncData(context){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let prod = context.store.state.product
            .find(t => t.id == context.route.params.id);
          resolve({prod})
        }, 10) 
        })
      },

   methods:{
     ollert: function()
     {
       alert("Sony Music удачно засужены")
     }
   }
    
  }
</script>
<style>
.prdc{
  border: 10px solid rgb(136, 255, 0);
  padding: 10px;
  margin: 20px;
  padding-left: 10px;
  width: 400px;
}

</style>
