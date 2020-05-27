import merge from "lodash.merge";
import assign from 'lodash.assign';

export const state = () => ({
  list: [],
  car: {},
});

export const mutations = {
  set(state, car) {
    state.list = car
  },
  add(state, value) {
    merge(state.list, value)
  },
  remove(state, {car}) {
    state.list = state.list.filter(c => car.id !== c.id)
  },
  mergeCars(state, form) {
    assign(state.car, form)
  },
  setCars(state, form) {
    state.car = form
  }
};

export const actions = {
  async get({commit}) {
    await this.$axios.get(`/cars`)
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },
  async show({commit}, params) {
    await this.$axios.get(`/cars/${params.car_id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('mergeCars', res.data)
        }
      })
  },
  async set({commit}, cars) {
    await commit('set', cars)
  },
  async form({commit}, form) {
    await commit('mergeCars', form)
  },
  async add({commit}, car) {
    await commit('add', car)
  },
  create({commit}, params) {
    return this.$axios.post(`/cars`, {car: params})
  },
  update({commit}, params) {
    return this.$axios.put(`/cars/${params.id}`, {car: params})
  },
  delete({commit}, params) {
    return this.$axios.delete(`/cars/${params.id}`)
  }
};
