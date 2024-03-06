import { createStore } from 'vuex';
import auth from './modules/auth';
import user from './modules/users';
import tanaman from './modules/tanaman';


const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    user,
    tanaman
  },
});

export default store;