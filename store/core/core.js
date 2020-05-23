export const state = () => ({
  countries: [],
  lang: null,
  country: null,
  darkMode: false
})

export const mutations = {
  setCountries(state, data) {
    state.countries = data
  },
  setUserCountry(state, data) {
    state.country = data
  },
  setLang(state, data) {
    state.lang = data
  },
  setDarkMode(state, data) {
    state.darkMode = data
  }
}

export const getters = {
  // mutations to be here
  alignmentReflect(state) {
    return state.lang && state.lang.alignment === 'right' ? 'left' : 'right'
  }
}

export const actions = {
  setCountries({ commit }, data) {
    commit('setCountries', data)
  },
  setUserCountry({ commit }, data) {
    commit('setUserCountry', data)
  }
}
