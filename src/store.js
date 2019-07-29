import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  namespace: true,
  state: {
    detail: {},
    list: [{
        id: 1,
        name: 'りんご',
        price: 100,
        content: '青森のりんご',
      },
      {
        id: 2,
        name: 'ばなな',
        price: 200,
        content: '台湾とかのバナナ',
      },
      {
        id: 3,
        name: 'いちご',
        price: 300,
        content: '栃木の巨峰',
      }
    ]
  },
  getters: {
    item(state) {
      return id => state.list.find(el => el.id === id);
    },
    items(state)
    {
      return state.list
    },
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail })
    {
      state.detail = detail
    },
    clear(state){ state.detail = {} }
  },
  actions: {
    load({ commit, getters }, id)
    {
      let detail = getters.item(id)
      commit('set', { detail })
    },
    destroy({ commit })
    {
      commit('clear')
    }
  }
});
export default store
