const state = {
  directoryPath: ""
}

const mutations = {
  setDirectoryPath (state, value) {
    //console.log("commit" + value)
    state.directoryPath = value
    //console.log("commit after value -- " + state.directoryPath)
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('setDirectoryPath')
  }
}

const getters = {
  getDirectoryPath (){
    return state.directoryPath
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
