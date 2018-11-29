const state = {
  directoryPath: "",
  uri: ""
}

const mutations = {
  setDirectoryPath (state, value) {
    state.directoryPath = value
  },
  setUri(state, value){
    state.uri = value
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('setDirectoryPath'),
    commit('setUri')
  }
}

const getters = {
  getDirectoryPath (state){
    return state.directoryPath
  },
  getUri (state){
    return state.uri
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
