import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
    new Vuex.Store({

  state: {
        product: [{
            nameProduct: 'Апельсин',
            description: 'Свежий, спелый',
            id: 1
        },
        {
            nameProduct: 'Йогурт',
            description: 'Из отборного молока',
            id: 2
        },
        {
            nameProduct: 'Автомобиль',
            description: 'Порш Кайен',
            id: 3
        },
        {
            nameProduct: 'Туалетная бумага',
            description: 'Лимонная',
            id: 4
        }
  ]
} 
})
export default store