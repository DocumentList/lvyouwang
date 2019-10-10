<template>
	<main>
		<div class="header1">
			<div class="hea-con">
				<span @click="back"></span>
				<span></span>
			</div>
			<p>登入携程 , 开启旅途</p>
			<router-link to="/login"><button class="btn1">登入/注册</button></router-link>
			<router-link to="/tel"><button class="btn2">手机号查单</button></router-link>
		</div>
		<div class="money">
			<div class="title1">
				<span class="bgimg"></span>
				<span >钱包</span>
			</div>
			<p>
				<span>礼品卡</span>
				<i>丨</i>
				<span>现金</span>
				<i>丨</i>
				<span>返现</span>
			</p>
		</div>
		
		<div class="bgimg2">
			<ul class="bgul">
				<li v-for="(v,i) in list"> 
					<p>
						<i></i>
						<span>{{v.des1}}</span>
					</p>
					<p><span>{{v.des2}}</span></p>
				</li>
			</ul>
		</div>
		<div class="bgc"></div>
		<div class="contentcon">
			<ul>
				<li v-for="(v,i) in list1">
					<div class="adf1">{{v.title}}</div>
					<div class="adf2">
						<span>{{v.des}}</span> 
						<span class="iconfont icon-xiangyou2"></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="bgc"></div>
		<div class="contentcon">
			<ul>
				<li v-for="(v,i) in list2">
					<div class="adf1">{{v.title}}</div>
					<div class="adf2">
						<span>{{v.des}}</span> 
						<span class="iconfont icon-xiangyou2"></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="bgc"></div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				list1:[],
				list2:[]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			this.$http.get('./data/my.json')
			.then((response)=>{
				this.list=response.data.list;
				this.list1=response.data.list1;
				this.list1=response.data.list1;
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			});
		
	}
	}
</script>

<style>
</style>
<style scoped>
	
	.header1{
		width: 100%;
		background: url(../assets/img/photo_myctrip@2x_6.22.jpg) no-repeat;
		background-size:cover;	
	}
	.hea-con{
		height: 8vh;
		position: relative;
	}
	.hea-con span:nth-of-type(1){
		width: 20px;
		height: 20px;
		background: url(../assets/img/un_home_mobile_7.4@2x.png) no-repeat;
		display: block;
		background-position: 0px -21px;
		background-size: 45px auto;
		position: absolute;
		left: 5%;
		top: 20%;
	}
	
	.hea-con span:nth-of-type(2){
		width: 30px;
		height: 22px;
		background: url(../assets/img/un_home_mobile_7.4@2x.png) no-repeat;
		display: block;
		background-position: -22px -90px;
		background-size: 45px auto;
		position: absolute;
		top: 20%;
		right: 2%;
	}
		.header1>p{
		    line-height: 44px;
    		font-family: "Microsoft Yahei";
    		color: white;
		    font-size: 18px;
		    margin-bottom: 10px;
		}
		.header1 button{
			    line-height: 34px;
		        width: 30%;
		        text-align: center;
   				font-size: 15px;
			    border-radius: 50px;
			    border: 1px solid transparent;
		        background-color: #ff9a14;
		        color: white;
		        margin-bottom: 20px;
		}
		.header1 .btn2{
			background: rgba(255,255,255,0.15);
		    border: 1px solid rgba(255,255,255,0.5);
		    margin-left: 8%;
		}
		.money{
			width: 90%;
			margin: 0 auto;
			text-align: left;
			margin-top: 10px;
		}
		.bgimg{
			background: url(../assets/img/un_home_mobile_7.4@2x.png)  no-repeat;
			width: 22px;
			height: 21px;
			display: inline-block;
			background-position: 1px -41px;
			background-size: 45px auto;
			margin-right: 5px;
			position: relative;
			top: 2px;
		}
		.money>p{
			margin-left: 10%;
			font-size: 13px;
   			 color: #999;
   			 margin-top: 5px;
		}
		.money>p i{
			margin: 0 1%;
			color: #e5e5e5;
			font-style:normal ;
		}
		.bgimg2{
			width: 100%;
			margin: 0 auto;
			margin-top: 25px;
		}
			
		.bgul li{
			width: 33.3%;
			box-sizing: border-box;
		}
		.bgul li p i{
			background: url(../assets/img/un_home_mobile_7.4@2x.png)  no-repeat;
			width: 22px;
			height: 18px;
			display: inline-block;
			background-position: 1px -61px;
			background-size: 45px auto;
			position: relative;
			top: 2px;
		}
		.bgul li:nth-of-type(2)  p i{
			background-position: 1px -113px;
		}
		.bgul li:nth-of-type(2){
			border-left: 1px solid #e5e5e5;
			border-right: 1px solid #e5e5e5;
		}
		.bgul li:nth-of-type(3)  p i{
			background-position: -19px -154px;
		}
		.bgul li p:nth-of-type(2){
			margin-top: 5px;
			    font-size: 13px;
   				 color: #999;
   				 margin-bottom: 15px;
		}
		.bgc{
			width: 100%;
			height: 10px;
			background-color: #e5e5e5;
		}
		.contentcon{
			width: 95%;
			margin: 0 auto;
			text-align: end;
			
		}
		.contentcon ul li{
			width: 100%;
			margin: 10px 0px;
		}
		.adf1{
			text-align: left;
			float: left;
			width: 50%;
			padding-left: 5%;
			box-sizing: border-box;
		}
		.adf2{
			float: right;
			font-size: 12px;
		    color: #999;
	        font-weight: 400;
		}
</style>