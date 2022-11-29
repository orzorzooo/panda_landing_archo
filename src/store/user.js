import { post } from "@/api/request";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setToken(state, payload) {
      // for directus
      localStorage.setItem("panda_token", payload.token);
      localStorage.setItem("panda_refresh_token", payload.refresh_token);
      console.log("set token:", payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },

    setLogout(state, payload) {
      localStorage.removeItem("panda_token");
      localStorage.removeItem("panda_refresh_token");
      state.user = null;
    },
  },
  actions: {
    async logout({ commit }) {
      const refresh_token = localStorage.getItem("panda_refresh_token");
      try {
        const data = await post({
          data: { refresh_token },
          type: "auth",
          collection: "logout",
        });
        commit("setLogout");
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
