export default {
  set({ commit }, data) {
    commit('set', data)
  },
  login({ commit }, data) {
    return this.$axios
      .post('/login', data)
      .then((res) => {
        commit('set', res.data)
        return res.data
      })
      .catch((err) => {
        commit('set', null)
        throw new Error(err)
      })
  },
  register({ commit }, data) {
    return this.$axios
      .post('/register', data)
      .then((res) => {
        commit('set', res.data)
        return res.data
      })
      .catch((err) => {
        commit('set', null)
        throw new Error(err)
      })
  }
}
