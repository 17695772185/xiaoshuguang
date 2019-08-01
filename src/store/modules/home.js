import {getHomeModul} from 'api/home'

const state ={
    homeData:[]
};
const mutations={
    getHomeData(state,params){
        state.homeData = params
    }
};
const actions ={
    async requestHomeData(context){
        let data = await getHomeModul(this.data);
        let newData = data.data 
        context.commit('getHomeData',newData)
    }
};

export default{
    state,
    mutations,
    actions,
    namespaced:true
}