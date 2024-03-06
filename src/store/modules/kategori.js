import axios from "axios";

const kategori = {
    namespaced: true,
    state: {
        kategori: [],
    },
    getters: {
        getKategori: (state) => state.kategori
    },
    actions: {
        async fetchKategori({ commit }) {
            try {
                const cate = await axios.get(
                    "https://localhost:8080/api/v1/kategori"
                );
                commit("SET_KATEGORI",data.data["kategori"]);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_KATEGORI(state, kategori) {
            state.kategori = kategori;
        },
    },
};
export default kategori;