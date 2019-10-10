// 开始我们引入了vue-router，因为配置路由只有他自己知道怎么配置，因此引入是必须的；
import VueRouter from 'vue-router'

import index from '../../component/index.vue'
import search from '../../component/search.vue'
import my from '../../component/my.vue'
import login from '../../component/login.vue'
import tel from '../../component/tel.vue'
import register from '../../component/register.vue'
import strategy from '../../component/strategy.vue'
import evenMore from '../../component/evenMore.vue'
import details from '../../component/details.vue'
import reservations from '../../component/reservations.vue'

import selectResource from '../../component/selectResource.vue'
export default new VueRouter({			
		routes:[
					{
						//页面刚刚进入的时候url 中的路径就是一个 /
						path:'/',component:index,
					},
					{
						path:'/search',component:search,
					},
					{
						path:'/my',component:my,
					},
					{
						path:'/login',component:login,
					},
					{
						path:'/tel',component:tel,
					},
					{
						path:'/register',component:register,
					},
					{
						path:'/strategy',component:strategy,
					},
					{
						path:'/evenMore',component:evenMore,
					},
					{
						path:'/details',component:details,
					},
					{
						path:'/reservations',component:reservations,
					},
					{
						path:'/selectResource',component:selectResource,
					}
				]
		})