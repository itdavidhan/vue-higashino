import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 2017,
        arr: [1, 2, 3, 4, 5, 6]
    },
    getters: {
        getFilter1(state) {
            return state.arr.filter(function(val) {
                return val > 4;
            });
        },
        getFilter2(state) {
            return function(n) {
                return state.arr.filter(function(val) {
                    return val > n;
                });
            }
        }
    },
    mutations: {
        add(state) {
            ++state.count
        }
    }
})

export default store