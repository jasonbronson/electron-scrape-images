const state = {
  directoryPath: ""
}

const mutations = {
  setDirectoryPath (state, value) {
    state.directoryPath = value
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('setDirectoryPath')
  }
}

const getters = {
  getDirectoryPath (state){
    return state.directoryPath
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
