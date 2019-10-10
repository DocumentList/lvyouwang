<template>
	<main>
		<div class="banner">
			<div class="header">
				<div class="heaCon">
					<span class="inp1">上海</span>
					<input type="text" placeholder="目的地 景点 酒店  餐馆 游记..." />
					<span class="iconfont icon-sousuo inp2"></span>
					<span class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui inp3"></span>
				</div>
				<span class="iconfont icon-xiangzuo4 first" @click="back"></span>
				<router-link to="/"><span class="iconfont icon-zhuye two"></span></router-link>
			</div>
			
			
			<div class="ban-con">
				<div class="ban-top">
					<p>上海 <span>Shanghai</span></p>
				</div>
				<div class="ban-bottom">
					<p><img src="../assets/img/02.png" alt="" />
						<span>晴 21-28°C ></span>
						<span>116894张照片 ></span>
					</p>
				</div>
			</div>
		</div>
		<div class="tab-cen">
			<ul>
				<li v-for="(v,i) in tab"  class="img-des">
					<img :src="v.imgUrl"/>
					<p>{{v.des}}</p>
				</li>
			</ul>
			
		</div>
		<div class="sever">
			<div class="sevCen">
				<p>{{title}}</p>
				<p>{{des}}</p>
				<ul>
					<li v-for="(v,i) in sever1" class="sev-bian">
						{{v.speak}}
					</li>
				</ul>
			</div>
			<p>查看全部攻略</p>
		</div>
		
		<div class="hot">
			<p>当地热门</p>
			<ul class="ul-li1">
				<li v-for="(v,i) in hotOne" class="hotOne" @click="change(i,$event)" v-bind:class="{one:num==i}">
					<p>{{v.hotDes}}</p>
				</li>
			</ul>
			<div class="test"> 
				<ul class="ul-li2"  v-for="(v,i) in hotTwo" v-show="i==num">
					<li v-for="(v,index) in v.listOne" class="hotTwo" >
						<img :src="v.imgUrl" alt="" />
						<p class="hotP1">{{v.hotDes}}</p>
						<p class="hotP2">{{v.cent}}</p>
					</li>
					<span class="iconfont icon-xiangzuo5"></span>
					<p>查看更多</p>
				</ul>
			</div>
		</div>
		
		<div class="hotEat ">
			<p>必吃特色菜</p>
			<div class="test">
			<ul class="ul-li2">
				<li v-for="(v,i) in eat" class="hotTwo" >
					<img :src="v.imgUrl"/>
					<p class="hotP1">{{v.eat}}</p>
				</li>
				<span class="iconfont icon-xiangzuo5"></span>
				<p>查看更多</p>
			</ul>
			</div>
		</div>
		
		<div class="stay">
			<div class="stayCen">
				<p>推荐住宿区域</p>
				<div v-for="(v,i) in stay" class="stayOne"> 
					<p class="area">{{v.area}}</p>
					<p class="num">{{v.num}}</p>
					<p class="percen">{{v.percen}}</p>
				</div>
			</div>
			<p>查看全部酒店</p>
		</div>
		
		<div class="hotPath">
			<p>热门路线</p>
			<div class="bordera">
			 <div class="hotPathCen" v-for="(v,i) in hotPathList">
			 	
			 	<div class="hotPleft">
			 		<img :src="v.imgUrl" alt="" />
			 		<p>{{v.dress}}</p>
			 	</div>
			 	
			 	<div class="hotPright">
			 		<p class="hotPone">{{v.des}}</p>
			 		<p class="hotPtwo">{{v.zuan}}</p>
			 		<p class="hotPthere"><span>{{v.number1}} </span> <span>{{v.price}}</span></p>
			 	</div>
			 </div>	
			 </div>
			 <p class="hotPathAll">查看全部热门路线</p>
		</div>
		<div class="location1">
			<p>当地问答</p>
			<div class="bordera">
				<div class="locaCen" v-for="(v,i) in location1">
					<p class="loacaCenOne"><span></span>{{v.des}}</p>
					<p class="loacaCentwo"><span></span>{{v.desOne}}</p>
				</div>
			</div>
			<p class="loacaWhy">查看全部问答</p>
		</div>
		
		<div class="hotTrave">
			<p class="commonality1">热门游记</p>
			<div class="hotTraCen" v-for="(v,i) in hotTraCen">
				<div class="hotTraLeft">
					<p class="hotTraOne">{{v.des}}</p>
					<p class="hotTraTwo">{{v.linki}}</p>
					<p class="hotTraThere"><span class="iconfont icon-yanjing"></span>
						{{v.nummer2}} 
						<span class="iconfont icon-xiaoxi1"></span>{{v.num2}}</p>
				</div>
				<div class="hotTraRight">
					<img :src="v.imgUrl"/>
				</div>
			</div>
			<p class="commonality2">查看全部游记</p>
		</div>
		
		<div class="glodenTra">
			<p class="commonality1">经典行程</p>
			<div class="bordera">
				<div class="glodenTraCen" v-for="(v,i) in glodenTra">
				<div class="glogenLeft">
					<p class="gldenOne">{{v.des}}</p>
					<span class="fsad">{{v.glodenDes1}}</span>
					<span>{{v.glodenDes}}</span>
					<p class="glodenTwo">{{v.num}}</p>
				</div>
				<div class="glodenRight">
					<img :src="v.imgUrl"/>
				</div>
			</div>
			</div>
			<p class="commonality2">查看全部行程</p>
		</div>
		
		<div class="goSuper">
			<p class="commonality1">出行超市</p>
			<div class="firstOne">
				<ul class="firstUl"> 
					<li v-for="(v,i) in goSuper" class="firstLi">
						<div class="borderOne">
							<div class="soSupCent">
								<div class="imgLeft">
									<img :src="v.imgUrl" alt="" />
								</div>
								<div class="spanRight">
									<p class="goSuperP1">{{v.trav}}</p>
									<p class="goSuperP2">{{v.des}}</p>
								</div>
							</div>
						</div>
						
					</li>
				</ul>
			</div>
		</div>
		
		<div class="footer">
			<p class="commonality1">看了此目的地的人还看了</p>
			<div class="widthing">
				<div class="look1" v-for="(v,i) in look1">
					<img :src="v.imgUrl"/>
					<p class="look-p">{{v.dress}}</p>
				</div>
			</div>
			
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
				title:"旅游攻略",
				des:"上海，被称为“东方的巴黎”，东西方文化在此融汇交织，造就了洋气的海派风情。它是曾经的“十里洋场”老上海，也是如今日新月异的繁华“魔都”。",
				list:[],
				look1:[],
				goSuper:[],
				glodenTra:[],
				location1:[],
				hotPathList:[],
				eat:[],
				stay:[],
				hotOne:[],
				hotTwo:[],
				hotTraCen:[],
				tab:[],
				sever1:[]
			}
		},
			methods:{
					change(i,a){
						this.num= i;
					},
					test(i){
						console.log(this.hotTwo[0][1].cent)
					},
					back(){
						this.$router.go(-1)
					}
			},
			mounted(){
			this.$http.get('./data/strategy.json')
			.then((response)=>{
				this.list=response.data.list;
				this.look1=response.data.look1;
				this.goSuper=response.data.goSuper;
				this.glodenTra=response.data.glodenTra;
				this.hotTraCen=response.data.hotTraCen;
				this.location1=response.data.location1;
				this.hotPathList=response.data.hotPathList;
				this.eat=response.data.eat;
				this.stay=response.data.stay;
				this.hotOne=response.data.hotOne;
				this.hotTwo=response.data.hotTwo;
				this.tab=response.data.tab;
				this.sever1=response.data.sever1;
				
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			});
	}
		}
</script>

<style scoped>
	main{
		background-color: #f0f3f6;
	}
	.demo ul li{
		display: block;
	}
	input{
		outline: none;
	}
	.ul-li1 .one{
		background: #4CB7F9;
		color: white;
		border:1px solid transparent;
	}
	.header{
		width: 100%;
		position: absolute;
		height: 7vh;
		z-index: 20;
	}
	.heaCon{
		width: 75%;
		margin: 0 auto;
		text-align: left;
		line-height: 34px;
		background-color: white;
		margin-top: 5px;
		position: relative;
		border-radius:5px ;
		
	}
	.first{
		position: absolute;
		top: 30%;
		left: 4%;
		color: white;
	}
	.two{
		position: absolute;
		top: 20%;
		right: 4%;
		color: white;
		font-size: 22px;
		
	}
	.inp1{
		margin-left:3%;
		margin-right: 7%;
		color: black;
	}
	.inp3{
		position: absolute;
		left: 15%;
		top: 5%;
		font-size: 12px;
		color: #868686;
	}
	.inp2{
		position: absolute;
		left: 26%;
		top: 5%;
		font-size:20px ;
	}
	.heaCon input{
		line-height: 20px;
		padding-left: 12%;
		width: 63%;
		border: none;
		border-left: 1px solid #a3a8ab;
		
	}
	.banner{
		height: 28vh;
		background: url(../assets/img/100e0h0000008rp39A12F_C_750_375.jpg) no-repeat;
		background-size: contain;
		position: relative;
		
		
	}
	.ban-con{
		width: 90%;
		border: 1px solid transparent;
		text-align: left;
		margin: 0 auto;
	}
	.ban-top{
		margin-top:16vh;
		font-size: 28px;
		color: white;
	}
	.ban-top p>span{
		font-size: 14px;
	}
	.ban-bottom img{
		height: 24px;
		position: relative;
		top: 5px;
		margin-right: 5px;
	}
	.tab-cen{
		
		background-color: white;
	}
	.ban-bottom{
		
		color: white;
		font-size: 14px;
		font-family: 'PingFangSC-Medium';
	}
	.img-des{
		margin-top: 2.5vh;
		width: 25%;
	}
	.img-des img{
		width: 45%;
	}
	.img-des p{
		color: black;
		font-size: 14px;
		margin-bottom: 1vh;
	}
	.sever{
		width: 100%;
		margin-top: 1.5vh;
		background-color: white;
	}
	.sevCen{
		width: 95%;
		margin: 0 auto;
		border-bottom:1px solid #f5f5f5;
		overflow: hidden;
	}
	.sevCen p:nth-of-type(1){
		font-family: 'PingFangSC-Medium';
		font-size: 17px;
		color:black;
		line-height: 8vh;
	}
	.sevCen p:nth-of-type(2){
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 15px;
		line-height: 23px;
		color: black;
		text-align: left;
		margin-bottom: 2vh;
	}
	.sev-bian{
		float: left;
		font-size: 13px;
		display: inline-block;
		white-space: nowrap;
		height: 34px;
		line-height: 34px;
		background: #f5f5f5;
		border-radius: 2px;
		padding: 0 2%;
		margin-right: 3%;
		margin-bottom: 3%;
		color: black;
	}
	.sever>p{
		line-height: 47px;
		color: #0099f7;
		font-size: 16px;
	}
	.hot{
		margin-top: 1.5vh;
		background-color: white;
		width: 100%;
	}
	.hot>p{
		line-height: 5vh;
		font-family: 'PingFangSC-Medium';
		font-size: 17px;
		color: black;
	}
	.hotOne{
		width: 21%;
		box-sizing: border-box;
		padding:1% 1% ;
		margin-right: 2%;
		border: 1px solid #d7d7d7;
		border-radius: 4px;
		color: #666;
		font-size: 14px;
		margin-top: 1vh;
		margin-bottom: 1vh;
	}
	.test{
		width: 95%;
		overflow: scroll;
		
		     		
	}
	.ul-li2{
		width: 164vw;
		/*transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);*/
		transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
		transition-duration: 0ms;
		transform: translate(0px) translateZ(0px);
		overflow: hidden;
		margin-left: 3vw;
	}
	::-webkit-scrollbar{
		width: 0px;
	}
	.ul-li2 li{
		width: 31vw;
		float: left;
		
	}
	.hotTwo img{
		width: 29vw;
		height: 13vh;
	}
	.ul-li2>span{
		line-height:12vh ;
		width: 5vw;
		float: left;
		display: block;
	}
	.ul-li2>p{
		line-height:2.5vh ;
		margin-top: 1vh;
		width: 4vw;
		float: left;
		font-size: 14px;
	}
	.hotP1{
		text-align: left;
		font-size: 14px;
		color: black;
	    margin-left: 1vw;
	}
	.hotP2{
		text-align: left;
		font-size: 12px;
		color: #0099f7;
	   margin-left: 1vw;
	}
	.stay{
		margin-top: 1.5vh;
		background-color: white;
		width: 100%;
		
	}
	.stayCen{
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
		border-bottom: 1px solid #f5f5f5;
	}
	.stayCen>p{
		margin-top: 2vh;
		margin-bottom: 2vh;
		color: black;
	}
	.stayOne{
		float: left;
		width: 30.3%;
		margin-right: 3%;
		color: white;
		height: 13vh;
		margin-bottom: 2vh;
	}
	.stayCen div:nth-of-type(1){
		background: url(../../data/img/15701060291.jpg) no-repeat;
		background-size: cover;
	}
	.stayCen div:nth-of-type(2){
		background: url(../../data/img/1570106053.jpg) no-repeat;
		background-size:cover;
	}
	.stayCen div:nth-of-type(3){
		background: url(../../data/img/15701060811.jpg) no-repeat;
		background-size: cover;
	}
	.area{
		font-family: 'PingFangSC-Medium';
		line-height: 20px;
		font-size: 14px;
		margin-top: 2vh;
	}
	.num{
		font-family: 'PingFangSC-Regular';
		font-size: 11px;
		line-height: 15px;
		margin-bottom: 1vh;
	}
	.percen{
		background: rgba(255,255,255,0.7);
		height: 20px;
		line-height: 20px;
		color: #222;
		font-size: 11px;
		width: 80%;
		margin: 0 auto;
	}
	.stay>p{
		height: 47px;
		line-height: 47px;
		color: #0099f7;
		text-align: center;
		font-size: 15px;
	}
	.hotEat{
		width: 100%;
		margin-top: 1.5vh;
		background-color: white;
	}
	.hotEat>p{
		line-height: 10vh;
		font-family: 'PingFangSC-Medium';
		font-size: 17px;
		color: black;
	}
	.hotPath{
		width: 100%;
		margin-top: 1.5vh;
		background-color: white;
	}
	.hotPath>p{
		line-height: 10vh;
		font-family: 'PingFangSC-Medium';
		font-size: 17px;
		color: black;
	}
	.hotPathCen{
		width: 100%;
		
		overflow: hidden;
		margin-bottom: 2vh;
		
	}
	.hotPleft{
		float: left;
		width: 30%;
		position: relative;
		margin-right: 3%;
	}
	.hotPleft img{
		width: 100%;
	}
	.hotPleft>p{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 3;
		width: 100%;
		height: 18px;
		line-height: 18px;
		font-size: 11px;
		color: #fff;
		text-align: center;
		background: rgba(0,0,0,0.6);
	}
	.hotPright{
		float: left;
		width: 67%;
		
	}
	.hotPone{
		flex-direction: row;
		font-size: 16px;
		line-height: 20px;
		color: #222222;
		font-family: 'PingFangSC-Medium';
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-align: left;
		color: black;
		
	}
	.hotPtwo{
		text-align: left;
		width: 10%;
		border: 1px solid #ff922d;
		color: #ff922d;
		font-size: 11px;
		margin-top: 5px;
		margin-bottom: 1vh;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
	}
	.hotPthere{
		overflow: hidden;
	}
	.hotPthere span:nth-of-type(1){
		float: left;
		font-size: 12px;
		font-family: 'PingFangSC-Regular';
		color: #666666;
	}
	.hotPthere span:nth-of-type(2){
		float: right;
		font-size: 20px;
		line-height: 20px;
		color: #ff6912;
	}
	.bordera{
		border-bottom:1px solid  #f5f5f5;
		width: 90%;
		margin: 0 auto;
	}
	.hotPath .hotPathAll{
		line-height: 7vh;
		color: #0099f7;
		text-align: center;
		font-size: 15px;
	}
	.location1{
		width: 100%;
		margin-top: 1.5vh;
		background-color: white;
	}
	.location1>p:nth-of-type(1){
		line-height: 7vh;
	    font-family: 'PingFangSC-Medium';
	    font-size: 17px;
	    color: black;
	}
	.locaCen{
		width: 100%;
		margin: 0 auto;
		margin-bottom: 1.5vh;
	}
	.locaCen .loacaCenOne{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 15px;
		color: #222;
		line-height: 23px;
	}
	.loacaCenOne>span{
		background: url(../assets/img/place_sp.png) no-repeat;
		display: inline-block;
		width: 18px;
		height: 20px;
		background-size: 215px;
		background-position: -197px 5px;
		margin-right: 2vw;
	}
	 .locaCen .loacaCentwo{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 15px;
		color: #222;
		line-height: 23px;
		
	}
	.loacaCentwo>span{
		background: url(../assets/img/place_sp.png) no-repeat;
		display: inline-block;
		width: 18px;
		height: 20px;
		background-size: 215px;
		background-position: -180px 5px;
		margin-right: 2vw;
	}
	.loacaWhy{
		height: 47px;
		line-height: 47px;
		color: #0099f7;
		text-align: center;
		font-size: 15px;
	}
	.hotTrave{
		margin-top: 1.5vh;
		background-color: white;
	}
	.hotTraCen{
		width: 90%;
		border-bottom:1px solid  #f5f5f5;
		margin: 0 auto;
		text-align: left;
		overflow: hidden;
		margin-bottom: 2vh;
	}
	.hotTraLeft{
		float: left;
		width: 60%;
		margin-right: 3%;
		height: 22vh;
		
	}
	.hotTraRight{
		float: left;
		width: 36%;
	}
	.hotTraRight img{
		width: 100%;
		height: 19vh;
		margin-bottom: 1vh;
		
	}
	.commonality1{
	    line-height: 10vh;
	    font-family: 'PingFangSC-Medium';
	    font-size: 17px;
	    color: black;
	}
	.commonality2{
	    height: 47px;
	    line-height: 47px;
	    color: #0099f7;
	    text-align: center;
	    font-size: 15px;
	}
	.hotTraOne{
		line-height: 23px;
		font-size: 17px;
		color: #222;
		font-family: 'PingFangSC-Medium';
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.hotTraTwo{
		font-size: 13px;
		color: #666;
		line-height: 19px;
		overflow: hidden;
		margin-top: 1vh;
		margin-bottom: 2vh;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.hotTraThere{
		line-height: 20px;
		font-size: 11px;
		color: #a3a8ab;
		margin-bottom: 1vh;
	}
	.icon-yanjing{
		color: #e1e2e8;
		font-size: 12px;
		padding: 0 2px;
		margin-right: 2px;
	}
	.icon-xiaoxi1{
		color: #e1e2e8;
		font-size: 12px;
		padding: 0 2px;
		margin-right: 2px;
	}
	.glodenTra{
		margin-top: 1.5vh;
		background-color: white;
	}
	.glodenTraCen{
	 	width: 100%;
		margin: 0 auto;
		text-align: left;
		overflow: hidden;
		margin-bottom: 2vh;
	}
	.glogenLeft{
		float: left;
		width: 60%;
		margin-right: 4%;
	}
	.glodenRight{
		float: left;
		width: 35%;
	}
	.glodenRight img{
		width: 100%;
	}
	.gldenOne{
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		overflow: hidden;
	    line-height: 23px;
	    font-family: 'PingFangSC-Medium';
	    font-size: 17px;
	    color: black;
	    margin-bottom: 1vh;
	}
	.glogenLeft span{
		border: 1px solid #4cb7f9;
		border-radius: 4px;
		transform: scale(0.5,0.5);
		font-size: 12px;
		color: #4cb7f9;
		padding: 0px 2px ;
		
	

	}
	.bordera div:nth-of-type(1) .glogenLeft .fsad{
		border: none;
	}
	.glodenTwo{
			margin-top: 1vh;
		font-size: 11px;
		line-height: 15px;
		color: #a3a8ab;
	}
	.goSuper{
		margin-top: 1.5vh;
		background-color: white;
	}
	.firstOne{
		width: 90%;
		margin: 0 auto;
	}
	.firstLi{
		border: 1px solid #e5e5e5;
		border-bottom: transparent;
		margin-right: 2%;
		width: 30.3%;
		margin-bottom: 1vh;
		overflow: hidden;
		height: 10vh;
	}
	.soSupCent{
		width: 93%;
		margin: 0 auto;
		text-align: left;
		margin-top: 2.5vh;
	}
	.imgLeft{
		float: left;
		width: 30%;
		margin-right: 3%;
	}
	.imgLeft img{
		width: 100%;
	}
	.spanRight{
		float: left;
		width: 67%;
	}
	.goSuperP1{
		font-size: 14px;
		color: #222;
		line-height: 20px;
	}
	.goSuperP2{
		color: #a3a8ab;
		font-size: 11px;
		line-height: 15px
	}
	.footer{
		margin-top:1.5vh ;
		background-color: white;
		overflow: hidden;
		margin-bottom: 2vh;
		
	}
	.look1{
		width: 31%;
		margin-right: 2%;
		float: left;
		position: relative;
	}
	.widthing{
		width: 93%;
		margin: 0 auto;
	}
	.look1 img{
		width: 100%;
	}
	.look-p{
		position: absolute;
		bottom: 1vh;
		left: 2vw;
		color: white;
	}
</style>
