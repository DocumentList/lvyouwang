<template>
	<main>
		<div class="header">
			<p class="heaPone">选择日期和人数</p>
			<span class="iconfont icon-xiangzuo2 heaIcon" @click="back"></span>
		</div>
		<div class="loginF">
			<div class="liginCon">
				<p class="loginLeft">登录后预定享受<span>享受优惠</span></p>
				<button class="loginRight">马上登录</button>
			</div>
		</div>
		<div class="mouths">	
			<div class="mouthCon" v-for="(v,i) in mouths" @click="change(i,$event)" v-bind:class="{icons:num==i}">
				<p class="mouthPone">{{v.moutho}}月</p>
				<p class="mouthPtwo">{{v.price}}</p>
			</div>
		</div>
		<div class="weeks">
			<ul class="weekUl">
				<li class="weeksCon" v-for="(v,i) in weeks" >
					<p>{{v.week}}</p>
				</li>
			</ul>
		</div>
		
		<div class="calendar">
			<div class="calenCon" v-for="(v,i) in calenfar" v-show="i==num" >
				<div class="calenDes" v-for="(v,i) in v.list" @click="dian(i,$event)" v-bind:class="{liOne:numli==i}">
					<i>{{v.rest}}</i>
					<h5>{{v.kong}}</h5>
					<b>{{v.day}}</b>
					<u>{{v.dayBlack}}</u>
					<a>{{v.dayRed}}</a>
					<span>{{v.priceRed}}</span>
					<p>{{v.priceBlack}}</p>
					<div>{{v.marry}}</div>
				</div>
			</div>
		</div>
		
		<div class="discounts">
			<div class="disCon">
				<p class="disConLeft">优惠<span>可享</span>广州农商最高减880满减卷</p>
				<p class="disConRight"><span class="iconfont icon-xiangyou"></span></p>
			</div>
		</div>
		<div class="people">
			<div class="peopleCon">
				<p class="peoPone">成人</p>
				<p class="peoPtwo">
					<span class="iconfont icon-jian peoInco" @click="sub()"></span>
					<span>{{this.$store.state.num1}}</span>
					<span class="iconfont icon-jia1 peoInco1" @click="add()"></span>
				</p>
			</div>
			
			<div class="child">
				<p class="peoPone">儿童<span>2-17周岁</span></p>
				<p class="peoPtwo">
					<span class="iconfont icon-jian peoInco" @click="sub1()"></span>
					<span>{{this.$store.state.num2}}</span>
					<span class="iconfont icon-jia1 peoInco1" @click="add1()"></span>
				</p>
			</div>
			
			<div class="yiner">
				<p class="peoPone">婴儿<span>14天-2周岁（不含）</span></p>
				<p class="peoPtwo">
					<span class="iconfont icon-jian peoInco" @click="sub2()"></span>
					<span>{{this.$store.state.num3}}</span>
					<span class="iconfont icon-jia1 peoInco1"  @click="add2()"></span>
				</p>
			</div>
		</div>
		
		<div class="man">
			<div class="manCon" v-for="(v,i) in man">
				<p class="manConPone">{{v.des}}</p>
			</div>
			<p class="manPone">*以上价格均为人均价</p>
		</div>
		<div class="bgc">
			
		</div>
		<div class="footer">
			<div class="footerLeft">
				<p class="fotPone"><span class="iconfont icon-002dianhua"></span></p>
				<p class="fotPtwo">电话咨询</p>
			</div>
			<div class="footerRight">
				<router-link to="/selectResource"><button>选择资源</button></router-link>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				num:"",
				numli:"",
				man:[],
				calenfar:[],
				weeks:[],
				mouths:[]
			}
		},
		methods:{
					change(i,a){
						this.num= i;
					},
					dian(i,a){
						this.numli=i;
					},
					add(){
	      				this.$store.commit('add',1)
	      			},
					add1(){
	      				this.$store.commit('add1',1)
	      			},
					add2(){
	      				this.$store.commit('add2',1)
	      			},
	      			sub(){
	      				this.$store.commit('sub')
	      			},
	      			sub1(){
	      				this.$store.commit('sub1')
	      			},
	      			sub2(){
	      				this.$store.commit('sub2')
	      			},
	      			back(){
	      				this.$router.go(-1)
	      			}
			},
		mounted(){
			this.$http.get('./data/reservations.json')
			.then((response)=>{
				this.man=response.data.man;
				this.calenfar=response.data.calenfar;
				this.weeks=response.data.weeks;
				this.mouths=response.data.mouths;
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			});
			
			$(".calenDes i:empty").hide()
			$(".calenDes b:empty").hide()
			$(".calenDes a:empty").hide()
			$(".calenDes u:empty").hide()
			$(".calenDes span:empty").hide()
		}
	}
		
</script>

<style scoped>
	.bgc{
		height: 1.5vh;
	}
	.footer{
		width: 100%;
		position: fixed;
		bottom: 0px;
		background-color: white;
		height: 8vh;
		padding-top: 5px;
		box-sizing: border-box;
	}
	.fotPone span{
		font-size: 24px;
	}
	.fotPtwo{
		font-size: 12px;
	}
	.footerLeft{
		float: left;
		width: 20%;
		margin-left: 5%;
		margin-right: 5%;
	}
	.footerRight{
		float: right;
		width: 67%;
		margin-right: 3%;
	}
	.footerRight button{
		width: 100%;
		height: 6vh;
		background-color: #ff6913;
		border: none;
		color: white;
		font-size: 18px;
		border-radius:5px ;
		
	}
	.man{
		    padding: 15px 20px 20px 40px;
		    box-sizing: border-box;
		    background-color: white;
		    margin-bottom: 8vh;
	}
	.manCon{
		text-align: left;
		font-size: 12px;
		color: #666;
	}
	.manConPone::before{
	    content: '';
	    background: #666;
	    float: left;
	    height: 4px;
	    width: 4px;
	    border-radius: 50%;
	    margin: 8px 0 0 -12px;
		}
	.manPone{
		 color: #ff3513;
		 font-size: 12px;
		 margin-left: 10px;
		 text-align: left;
	}
	.people{
		margin-top: 1.5vh;
		border: 1px solid transparent;
		background-color: white;
		width: 100%;
		padding: 10px 0px 10px 20px;
		box-sizing: border-box;
	}
	.peopleCon{
		line-height: 40px;
		overflow: hidden;
		border-bottom: #e8e8e8 1px solid;
		color: black;
		
	}
	.peoInco{
		color: #ddd;
		margin-right: -4px;
	}
	.peoInco1{
		color: #19a0f0;
		margin-left: -5px;
	}
	.child{
		line-height: 40px;
		overflow: hidden;
		border-bottom: #e8e8e8 1px solid;
		color: black;
	}
	.yiner{
		line-height: 40px;
		overflow: hidden;
		border-bottom: #e8e8e8 1px solid;
		color: black;
	}
	.peoPone{
		float: left;
	}
	.peoPtwo{
		float: right;
		padding-right: 10px;
	}
	.peoPtwo span{
		    border: 1px solid #ddd;
	        width: 28px;
   			height: 28px;
   			line-height: 28px;
   			display: inline-block;
	}
	.discounts{
		padding: 10px 15px 10px 15px;
		box-sizing: border-box;
		overflow: hidden;
		width: 100%;
	    border-top: #e8e8e8 1px solid;
        border-bottom: 1px solid #d4d4d4;
        background: #fdf4f3;
	}
	.disConLeft{
		float: left;
		font-size: 14px;
		color: black;
	}
	.disConLeft span{
		border: 1px solid #ff4646;
		transform: scale(.5);
		font-size: 12px;
	    border-radius: 2px;
	    color: #ff4646;
        padding: 0 2px;
        margin:0px  5px;
	}
	.disConRight{
		float: right;
	}
	.calenDes{
		float: left;
		width: 13.6%;
		height: 6.5vh;
		position: relative;
		margin-top: 1vh;
		margin-bottom: 2vh;
		padding-top:1vh ;
	}
	.calendar{
		width: 100%;
		overflow: hidden;
		background-color: white;
	}
	.calendar .calenCon .liOne{
		    background-color: #19a0f0;
		    color: white;
		    height: 6.5vh;
		    border-radius: 5px;
	}
	.calendar .calenCon .liOne u,
	.calendar .calenCon .liOne a,
	.calendar .calenCon .liOne span{
		color: #fff;
	}
	.calenDes p{
		font-size: 12px;
	}
	.calenDes div{
		font-size: 12px;
		width: 50px;
		position: absolute;
		top: -15px;
		color: #ccc;
	}
	.calenDes h5{
		color: white;
	}
	.calenDes i{
		display: block;
		color: #ccc;
		font-size: 12px;
		font-style: normal;
	}
	.calenDes b{
		display: block;
		color: #ccc;
		font-size: 17px;
		font-weight: normal;
		font-style: normal;
	}
	.icons{
		border-bottom:2px solid #1491c5 ;
	}
	.calenDes u{
		/*display: block;
		font-size: 17px;
		color: black;*/
		text-decoration: none;
	}
	.calenDes a{
		display: block;
		color: #ff3513;
	}
	.calenDes span{
		display: block;
		font-size: 12px;
		color: #ff3513;
	}
	.weeks{
		width: 100%;
		background-color: white;
    	border-bottom: 1px solid #f2f2f2;
   		border-top: 1px solid #f2f2f2;
   		height: 4vh;
   		overflow: hidden;
   		box-sizing: border-box;
	}
	.weeksCon{
		width: 13.5%;
		font-size: 12px;
		float: left;
		margin-top: 0.5vh;
	}
	.weeksCon p{
		width: 100%;
	}
	.weekUl li:nth-of-type(1){
		 color: #ff3535;
	}
	.weekUl li:nth-of-type(7){
		color: #ff3535;
	}
	.mouths{
	    padding-left: 10px;
		background-color: #f5f5f5;
		overflow: hidden;
	}
	.mouthPone{
		font-size: 12px;
		color: #333;
		margin-top: 5px;
	}
	.mouths div:nth-of-type(1) .mouthPone{
		color: #52bce8;
	}
	/*.mouths div:nth-of-type(1){
		border-bottom:2px solid #1491c5 ;
	}*/
	.mouthPtwo{
		font-size: 12px;
		color: #ff7d13;
		margin-bottom: 2px;
	}
	.mouthCon{
		float: left;
		width: 25%;
	}
	main{
		background-color: #f0f3f6;
	}
	.header{
		line-height:5vh;
		width: 100%;
		background-color: white;
		position: relative;
	}
	.heaPone{
		font-size: 18px;
		line-height:7vh;
	}
	.heaIcon{
		position: absolute;
		left: 2vh;
		top: 1vh;
		font-size: 18px;
		font-weight: bold;
	}
	.loginF{
		height: 6vh;
		width: 100%;
	    padding: 7px 8px 7px 15px;
        background-color: #fff5d1;
        box-sizing: border-box;
	}
	.liginCon{
		overflow: hidden;
	}
	.loginLeft{
		float: left;
		width: 60%;
		text-align: left;
		margin-top: 5px;
		color: #666;
		font-size: 14px;
	}
	.loginLeft span{
		    color: #ff6913;
   			 margin-left: 5px;
	}
	.loginRight{
		float: right;
		width: 25%;
		margin-right:7% ;
		line-height: 30px;
		border: none;
		background-color: #ff6913;
		color: white;
		border-radius: 5px;
	}
	
</style>