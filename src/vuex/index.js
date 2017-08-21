import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


let state = {
    userInfo:{
        username: 'admin',
        passworld: 123456,
        isAdmin: false
    },
}
let mutations = {
    changeuser(state,userInfo){
        state.userInfo = userInfo
    }
}


let store = new Vuex.Store({
    state,
    mutations
})

export default store
