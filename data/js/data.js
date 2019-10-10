import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		num1:1,
		num2:0,
		num3:0,
		num4:1,
	},
	mutations:{
		add(state,n){
			state.num1 = state.num1+n
		},
		add1(state,n){
			
			state.num2 = state.num2+n
		},
		add2(state,n){
			
			state.num3 = state.num3+n
		},
		add3(state,n){
			
			state.num4 = state.num4+n
		},
		sub(state){
			state.num1--
		},
		sub1(state){
			state.num2--
		},
		sub2(state){
			state.num3--
		},
		sub3(state){
			state.num4--
		}
		
	}
})
