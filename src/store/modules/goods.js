import { getAllGoods, updateGoods, deleteGoods, newGoods } from '../../api/goods'

// initial state
const state = {
  allGoods: []
}

// getters
const getters = {
  allGoods: state => state.allGoods,
}

// actions
const actions = {
  async getAllGoods ({ commit }) {
    let response = await getAllGoods()
    commit('setGoods', response.data.data)
  },
  async updateGoods ({ commit }, {body, index}) {
    let response = await updateGoods(body)
    let payload = response.data.data
    console.log('update returned data', payload)
    commit('updateGoods', {payload, index})
  },
  async deleteGoods({ commit }, {body, index}) {
    console.log(body)
    let response = await deleteGoods(body)
    let payload = response.data.data
    console.log('delete returned data', payload)
    commit('deleteGoods', {payload, index})
  },
  async newGoods({ commit }, {body}) {
    let response = await newGoods(body)
    let payload = response.data.data
    console.log('create returned data', payload)
    commit('newGoods', {payload})
  },
}

// mutations
const mutations = {
  setGoods (state, goods) {
    console.log(goods)
    state.allGoods = [...goods]
  },
  updateGoods (state, {payload, index}) {
    state.allGoods.splice(index, 1, payload)
  },
  deleteGoods (state, {payload, index}) {
    state.allGoods.splice(index, 1)
  },
  newGoods (state, {payload}) {
    state.allGoods.push(payload)
  },
}

export default {
  namespaced: true,

  state,
  getters,
  actions,
  mutations
}
