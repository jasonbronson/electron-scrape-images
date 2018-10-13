const state = {
  directoryPath: "test"
}

const mutations = {
  SET_DIRECTORY_PATH (state, value) {
    state.directoryPath = value
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('SET_DIRECTORY_PATH')
  }
}

export default {
  state,
  mutations,
  actions
}
