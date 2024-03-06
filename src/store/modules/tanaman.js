import axios from "axios";

const tanaman = {
    namespaced: true,
    state: {
        tanaman: [],
    },
    getters: {
        getTanaman: (state) => state.tanaman
    },
    actions: {
        async getTanaman({ commit }) {
            try {
                const data = await axios.get(
                    "http://localhost:8080/api/v1/tanaman"
                );
                console.log(data.data);
                commit("SET_TANAMAN",data.data["tanaman"]);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_TANAMAN(state, tanaman) {
            state.tanaman = tanaman;
        },
    },
};
export default tanaman;