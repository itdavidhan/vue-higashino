import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 2017,
        arr: [1, 2, 3, 4, 5, 6]
    },
    getters: {
        getFilter(state) {
            return state.arr.filter(function(val) {
                return val > 3;
            });
        }
    },
    mutations: {
        add(state) {
            ++state.count
        }
    }
})

export default store