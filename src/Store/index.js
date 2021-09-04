import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        character:{
            id: 1,
            userName: '',
            level: 1,
            hitPoints: 5,
            characterClass: '',
            attack: 1,
            defense: 1,
            canUseSpellBook: false,

        }
    },
    mutations: {},
    actions: {},
    modules: {}
});