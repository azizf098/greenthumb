import axios from "axios";

const user = {
  namespaced: true,
  state: {
    userData: [],
  },
  getters: {
    getUser: (state) => state.userData,
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const data = await axios.get(
          "http://localhost:8080/api/v1/users/:id",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(data.data);
        commit("SET_USER", data.data["user"]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.userData = user;
    },
  },
};
export default user;
