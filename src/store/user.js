export default {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setToken(state, payload) {
      // for directus
      localStorage.setItem("panda_token", payload);
      console.log("set token:", payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {},
};
