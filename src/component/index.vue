<template>
	<main>
		<div class="header">
			<div class="heaLeft">
				
				<router-link to="/search">
					<input type="text" placeholder="搜索:目的地/酒店/景点/航班号" />
					<span></span>
				</router-link>
				
			</div>
			<router-link to="/my">
				<div class="heaRight">
					<span class="heaRightIConOne"></span>
					<p>我 的</p>
				</div>
			</router-link>
			
		</div>	
		
		<mt-swipe :auto="4000" class ="lj" >
		  <mt-swipe-item  v-for="(v,i) in banner"><img :src="v.imgUrl"/>
		  </mt-swipe-item>
		</mt-swipe>
		
		<div class="seveis">
			<ul class="one-o">
				
				
					<li class="one">
						<router-link to="/strategy" >
							<span></span>
							<p>攻略·景点</p>
						</router-link>	
					</li>
					
					<li class="one">
						<span></span>
						<p>门票·玩乐</p>
					</li>
					
					<li class="one">
						<span></span>
						<p>美食林</p>
					</li>
					
					<li class="one">
						<span></span>
						<p>周边游</p>
					</li>
					
					<li class="one">
						<span></span>
						<p>一日游</p>
					</li>
				</ul>
		</div>
		<div class="box">
			
			<div class="boxTop">
				<ul>
					<li >
						<p>酒店</p>
					</li>
					<li >
						<p>名宿·客栈</p>
					</li>
					<li >
						<p>机票·火车票+船票</p>
					</li>
				</ul>
			</div>
			
	   	 <div class="boxMid">
				<ul>
					<li v-for="(v,i) in list">
						<p>{{v.title}}</p>
					</li>
					
				</ul>
			</div>
			
			<div class="boxFooter">
				<ul>
					<li v-for="(v,i) in list1">
						<p>{{v.title}}</p>
					</li>
					
				</ul>
			</div>
		</div>
		
		<ul class="one-o1">
			<li v-for="(v,i) in list2" class="one1">
				<span></span>
				<p>{{v.title}}</p>
			</li>
		</ul>
		
		<div class="headLine">
			<div class="heaLineLeft">
				<span></span>
			</div>
			<router-link to="/evenMore">
				<div class="heaLineRight">
					<span>更多</span>
				</div>
			</router-link>
		</div>
		
		<div class="centent">
			<div v-for="(v,i) in centent"   class="cenLeft">
				<img :src="v.imgUrl"/>
				<p>{{v.des}}</p>
				<p>{{v.price}}</p>
				<span></span>
			</div>
			
			<div class="cenRight">
				<div class="cenRiTop">
					<div class="cenRiTopLeft">
						<p>	千款特价</p>
						<p>走过路过不错过</p>
					</div>
					<div class="cenRiTopRight"> 
						<img src="data/img/pic-tmh-02.png" alt="" />
					</div>
				</div>
				
				<div class="cenRiBottom">
					<div class="cenRiBotmLeft" v-for="(v,i) in cenRibotmLeft">
						<p>{{v.des}}</p>
						<p>{{v.desTwo}}</p>
						<img :src="v.imgUrl"/>
					</div>
					<div class="cenRiBotmRight" v-for="(v,i) in cenRiBotmRight">
						<p>{{v.des}}</p>
						<p>{{v.desTwo}}</p>
						<img :src="v.imgUrl"/>
					</div>
				</div>
			</div>
		</div>
		
		<div class="headLine2">
			<div class="heaLineLeft2">
				<span></span>
				<img src="../assets/img/icon-gg@2x.png"/>
			</div>
			<div class="heaLineRight2">
				<span>获得更多福利</span>
			</div>
		</div>
		
		<div class="imgs">
			<ul class="imgs-ul1">
				<li v-for="(v,i) in imgs1">
					<img :src="v.imgUrl">
				</li>
			</ul>
			
			<ul class="imgs-ul2">
				<li v-for="(v,i) in imgs2">
					<img :src="v.imgUrl"/>
				</li>
			</ul>
		</div>
		<div class="footer">
			<ul class="footUl">
				<li v-for="(v,i) in fooList">
					<span></span>
					<p>{{v.des}}</p>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				banner:'',
				 list:[],
				 list1:[],
				 list2:[],
				 imgs1:[],
				 imgs2:[],
				 fooList:[],
				 centent:[],
				 cenRibotmLeft:[],
				 cenRiBotmRight:[]
			}
		},
		mounted(){
			//默认去项目根路径寻找
			this.$http.get('./data/index.json')
			.then((response)=>{
			console.log(response.data);
			this.banner=response.data.banner1
			this.list=response.data.list
			this.list1=response.data.list1
			this.list2=response.data.list2
			this.imgs1=response.data.imgss
			this.imgs2=response.data.imgss1
			this.fooList=response.data.fooList
			this.centent=response.data.centent
			this.cenRibotmLeft=response.data.cenRibotmLeft
			this.cenRiBotmRight=response.data.cenRiBotmRight
			})
			.catch(function (error) {
			console.log(error);
			})
			.then(function () {
			}); 
			$(window).scroll(function(){
				var h= $(window).scrollTop();
				if(h>50){
					$(".header").css("background-color","white")
					$(".heaLeft input").css("background-color","#ececed")
					$(".heaRight p").css("color","#222")
					$(".heaRight>span").addClass("heaRightICon")
					$(".heaRight>span").removeClass("heaRightIConOne")
					
				}else if(h<50){
					$(".header").css("background-color","")
					$(".heaLeft input").css("background-color","")
					$(".heaRight p").css("color","")
					$(".heaRight>span").addClass("heaRightIConOne")
					$(".heaRight>span").removeClass("heaRightICon")
				}
				
			})
		},
		
	}
</script>
<style>
	a{
		text-decoration: none;
	}
	.lj{
		position: relative;
		overflow: hidden;
		
	}
	.lj img{
		width: 100%;
		height: 180px;
	}
	.lj .mint-swipe-items-wrap{
		padding-bottom: 47.76%;
	}
	 .lj .mint-swipe-indicators{
		left: 72%;
		bottom: 13%;
		transform: translateX(0deg);
		-webkit-transform: translateX(0%); 
	}
	
	  .lj  .mint-swipe-indicators .is-active{
		border-radius: 5px;
		width: 25px;
	    background: rgb(255, 255, 255);
	    opacity: 1;
	}
	
</style>


<style scoped>
	.conPosition{
		
		background-color:white;
		opacity: 1;
	}
	.header{
		width: 100%;
		background-color: rgba(0,0,0,0);
		height:40px ;
		padding-top:10px ;
		padding-left: 10px;
		position: fixed;
		z-index: 10;
	}
	.heaLeft{
		float: left;
		width: 80%;
	}
	.heaLeft input{
		width: 92%;
		border-radius: 15px;
		border-right-color: #fff;
		height: 28px;
		line-height: 24px;
		font-size: .94rem;
		border: none;
		padding-left: 35px;
		position: relative;
	}
	.heaLeft span{
		background: url("../assets/img/home-common-sprite2x@v7.15.png") no-repeat;
		width: 35px;
		height: 28px;
		position: absolute;
		background-size: 24px auto;
		left: 18px;
		top: 15px;
	}
	.heaRightICon{
		background: url("../assets/img/home-common-sprite2x@v7.15.png") no-repeat;
		width: 35px;
		height: 28px;
		position: absolute;
		background-size: 24px auto;
		top: 15px;
		background-position:7px -77px ;
	}
	.heaRight{
		float: left;
		width: 10%;
		margin-left: 20px;
	}
	.heaRightIConOne{
		background: url("../assets/img/home-common-sprite2x@v7.15.png") no-repeat;
		width: 35px;
		height: 28px;
		position: absolute;
		background-size: 21px auto;
		background-position: 7px -35px;
		display: block;
		margin-top: -4px;
	}
	.heaRight .heaRightICon{
		background: url("../assets/img/home-common-sprite2x@v7.15.png") no-repeat;
		width: 35px;
		height: 28px;
		position: absolute;
		background-size: 24px auto;
		right: 20px;
		top: -2px;
		background-position:7px -84px ;
	}
	.heaRight p{
		font-size: .75rem;
		line-height: 1;
		margin-top: 20px;
		color:white;
	}
	.seveis{
		width: 95%;
		margin: 0 auto;
	}
	.one-o{
	overflow: hidden;
	 display: flex;
	 flex-wrap: wrap;
	 border-radius: 10px;
	 box-sizing: border-box;
	 background-color: white;
	 position: relative;
	 top: -20px;
	 	 
	}
	.one{
            width: 18%;
            margin: 0 1%;
	}
	.one span{
			background: url("../assets/img/home-fivemain-sprite2x@v7.15.png")  no-repeat;
			display: block;
			width: 100%;
			height: 40px;
		    background-size: 40px auto;
			position: relative;
	}
	.one p{
		    font-size: .63rem;
		    color: #222;
		    line-height: 1;
	}
	.one:nth-of-type(1) span{
			background-position: 10px 0px;
	}
	
	.one:nth-of-type(2) span{
			background-position: 10px -40px;
	}
	
	.one:nth-of-type(3) span{
			background-position: 10px -80px;
	}
	.one:nth-of-type(4) span{
			background-position: 10px -120px;
	}
	.one:nth-of-type(5) span{
			background-position: 10px -160px;
	}
	.box{
		width: 95%;
		margin: 0 auto;
	}
	.boxTop{
		background: linear-gradient(to right,#fa5956 ,#fb8650 40%,#ffd252);
		border-top-left-radius: 8px;
    	border-top-right-radius: 8px;
    	font-size: 14px;
   		line-height: 56.38px;
   		color: white;
   		border-bottom:1px solid white ;
	}
	.boxTop ul li:nth-of-type(1){
		background: url("../assets/img/grid-nav-items-hotel@v7.15.png") no-repeat;
		width: 29.8%;
		height: 56.38px;
		background-size: 73px auto;
		border-right: 1px solid white;
		background-position: 30px 25px;
		border-top-left-radius: 8px;
		text-align: left;
		padding-left: 10px;
		box-sizing: border-box;
	}
	
	.boxTop ul li:nth-of-type(2){
		background: url("../assets/img/grid-nav-items-minsu@v7.15.png") no-repeat;
	   
		width: 20%;
		height: 56.38px;
		background-size: 37px auto;
		border-right: 1px solid white;
		background-position: 0px 37px;
	}
	.boxTop ul li:nth-of-type(3){
	    background: linear-gradient(to right,#ffbc49,#ffd252);
		background-image: url("../assets/img/grid-nav-items-jhj@v7.15.png");
		background-repeat: no-repeat;
		width: 44%;
		height: 56.38px;
		background-size: 86px auto;
		color: #a05416;
		background-position: right bottom;
		background-position: 70px 20px;
	}
	.boxMid{
		background: linear-gradient(to right,#4b8fed,#53bced);
    	font-size: 14px;
   		line-height: 56.38px;
   		color: white;
   		border-bottom:1px solid white ;
	}
	.boxMid ul li:nth-of-type(1){
		background: url("../assets/img/grid-nav-items-flight@v7.15.png") no-repeat;
		width: 29%;
		height: 56.38px;
		background-size: 79px auto;
		border-right: 1px solid white;
		background-position: 25px 25px;
		border-top-left-radius: 8px;
		text-align: left;
		padding-left: 10px;
		box-sizing: border-box;
	}
	
	.boxMid ul li:nth-of-type(2){
		background: url("../assets/img/grid-nav-items-train.png") no-repeat;
	   
		width: 21%;
		height: 56.38px;
		background-size: 37px auto;
		border-right: 1px solid white;
		background-position: 0px 37px;
	}
	.boxMid ul li:nth-of-type(3){
		background-repeat: no-repeat;
		width: 23%;
		height: 56.38px;
		background-size: 86px auto;
		color: white;
		background-position: right bottom;
		border-right: 1px solid white;
	}
	.boxMid ul li:nth-of-type(4){
		background-repeat: no-repeat;
		width: 21%;
		height: 56.38px;
		background-size: 86px auto;
		color: white;
		background-position: right bottom;
		background-position: 70px 20px;
	}
	
	.boxFooter{
		background: linear-gradient(to right,#34c2aa,#6cd557);
    	font-size: 14px;
   		line-height: 56.38px;
   		color: white;
   		border-bottom:1px solid white ;
   		border-bottom-left-radius: 8px;
    	border-bottom-right-radius: 8px;
	}
	.boxFooter ul li:nth-of-type(1){
		background: url("../assets/img/grid-nav-items-travel@v7.15.png") no-repeat;
		width: 29%;
		height: 56.38px;
		background-size: 94px auto;
		border-right: 1px solid white;
		background-position: 13px 10px;
		text-align: left;
		padding-left: 10px;
		box-sizing: border-box;
	}
	
	.boxFooter ul li:nth-of-type(2){
		background: url("../assets/img/grid-nav-items-dingzhi@v7.15.png") no-repeat;
		width: 21%;
		height: 56.38px;
		background-size: 37px auto;
		border-right: 1px solid white;
		background-position: 0px 37px;
	}
	.boxFooter ul li:nth-of-type(3){
		background-repeat: no-repeat;
		width: 23%;
		height: 56.38px;
		background-size: 86px auto;
		color: white;
		background-position: right bottom;
		border-right: 1px solid white;
	}
	.boxFooter ul li:nth-of-type(4){
		background-repeat: no-repeat;
		width: 21%;
		height: 56.38px;
		background-size: 86px auto;
		color: white;
		background-position: right bottom;
		background-position: 70px 20px;
	}
	
	.one-o1{
	overflow: hidden;
	 display: flex;
	 flex-wrap: wrap;
	 margin-top: 10px;
	}
	.one1{
		   
		   /* align-items: center;
	        justify-content: center;*/
           /* flex-direction: column;*/
            width: 18%;
            margin: 0 1%;
	}
	.one1 span{
			background: url("../assets/img/icon1.png")  no-repeat;
			display: block;
			width: 100%;
			height: 28px;
		    background-size: 28px auto;
		    font-size: .63rem;
			position: relative;
	}
	.one1 p{
		    font-size: .63rem;
		    color: #222;
		    line-height: 1;
	}
	.one1:nth-of-type(1) span{
			background-position: 14px 0px;
	}
	
	.one1:nth-of-type(2) span{
			background-position: 14px -28px;
	}
	
	.one1:nth-of-type(3) span{
			background-position: 14px -56px;
	}
	.one1:nth-of-type(4) span{
			background-position: 14px -84px;
	}
	.one1:nth-of-type(5) span{
			background-position: 14px -112px;
	}
	
	.one1:nth-of-type(6) span{
			background-position: 14px -139px;
	}
	.one1:nth-of-type(7) span{
			background-position: 14px -168px;
	}
	.one1:nth-of-type(8) span{
			background-position: 14px -196px;
	}
	.one1:nth-of-type(9) span{
			background-position: 14px -224px;
	}
	.one1:nth-of-type(10) span{
			background-position: 14px -252px;
	}
	.headLine{
		width: 98%;
		height: 30px;
		margin-top: 20px;
		overflow: hidden;
		position: relative;
	}
	.heaLineLeft{
		float: left;
	}
	.heaLineLeft  span{
		background: url("../assets/img/un_home_text.png") no-repeat;
		width: 79px;
		height: 15px;
		background-size: 79px auto;
		display: inline-block;
		position: absolute;
		left: 7px;
		top: 6px;
	}
	.heaLineRight{
		background: linear-gradient(to right,#ff4e63,#ff6cc9);
		float: right;
		margin-right: 5px;
	    border-radius: .63rem;
   		font-size: .75rem;
   		line-height: 20px;
   		width: 15%;
   		margin-top: 5px;
   		color: white;
	}
	.heaLineRight span:after{
	    content: '';
	    position: absolute;
	    top: 9px;
	    right: 3%;
	    width: 7px;
	    height: 7px;
	    border: 2px solid #fff;
	    border-width: 0 2px 2px 0;
	    transform: rotate(-45deg);
	}
	.centent{
		width: 98%;
		margin: 0 auto;
		margin-top: 10px;
		overflow: hidden;
		
	}
	.cenLeft{
		float: left;
		width: 48%;
		margin: 0 1px;
	}
	.cenLeft img{
		width: 100%;
		height: 117px;
	}
	.cenLeft p:nth-of-type(1){
		font-size: .88rem;
		text-align: left;
	    color: #000;
	}
	.cenLeft p:nth-of-type(2){
		    color: #ff495e;
		    font-size: 1.13rem;
		    line-height: 1;
		    font-weight: 400;
		    text-align: left;
		    margin-top: 5px;
	}
	.cenRight{
		float: right;
		width: 48%;
		margin: 0 1px;
		
	}
	.cenRiTop{
		width: 100%;
		height: 70px;
		
	}
	.cenRiTopLeft{
		float: left;
		width: 60%;
	}
	.cenRiTopLeft p:nth-of-type(1){
	    color: #fd3a51;
        font-weight: 700;
	    font-size: .88rem;
	    letter-spacing: .06em;
	    text-align: left;
	    margin-top: 18px;
	}
	.cenRiTopLeft p:nth-of-type(2){
	    text-align: left;
	    color: #444;
	    font-size: .75rem;
	}
	.cenRiTopRight{
		float: left;
		width: 35%;
	}
	.cenRiTopRight img{
		width: 90%;
		height: 90%;
	}
	.cenRiBotmLeft{
		width: 48%;
		margin-right: 2%;
		float: left;
	}
	.cenRiBotmRight{
		width: 48%;
		margin-right: 2%;
		float: left;
	}
	.cenRiBotmLeft p:nth-of-type(1){
		font-weight: 700;
	    font-size: .88rem;
	    letter-spacing: .06em;
        color: #6aabff;
	}
	
	.cenRiBotmLeft p:nth-of-type(2){
		color: #444;
	  	font-size: .75rem;
	}
	.cenRiBotmRight p:nth-of-type(1){
	    color: #53ca72;
	  	font-weight: 700;
	    font-size: .88rem;
	    letter-spacing: .06em;
	}
	.cenRiBotmRight p:nth-of-type(2){
		color: #444;
	  	font-size: .75rem;
	}
	.cenRiBotmLeft img{
		width: 80%;
		height: 80%;
	}
	.cenRiBotmRight img{
		width: 80%;
		height: 80%;
	}
	.headLine2{
		width: 98%;
		overflow: hidden;
		margin-top: 40px;
	}
	.heaLineLeft2{
		float: left;
	}
	.heaLineLeft2 span{
		background: url(../assets/img/un_home_text.png) no-repeat;
		width: 91px;
		height: 35px;
		background-size: 88px auto;
		display: inline-block;
		background-position: 0 -16px;
		margin-left:10px;
		
	}
	.heaLineLeft2 img{
		width: 43px;
		height: 17px;
		position: relative;
		top: -14px;
	}
	.heaLineRight2{
		float: right;
	}
	
	.heaLineRight2{
	background: linear-gradient(to right,#ff4e63,#ff6cc9);
	float: right;
	margin-right: 5px;
    border-radius: .63rem;
	font-size: .75rem;
	line-height: 22px;
	width: 30%;
	margin-top: 5px;
	color: white;
	position: relative;
	padding-right: 1%;
	}
	.heaLineRight2 span::after{
        content: '';
	    position: absolute;
	    width: 7px;
	    height: 7px;
	    border: 2px solid #fff;
	    border-width: 0 2px 2px 0;
	    transform: rotate(-45deg);
	    right: 8%;
	    top: 6px;
	}
	.imgs{
		width: 98%;
		margin: 0 auto;
		overflow: hidden;
	}
	.imgs-ul1 li{
		float: left;
		width: 50%;
	}
	.imgs-ul1 li img{
		width: 100%;
	}
	
	.imgs-ul2 li{
		float: left;
		width: 50%;
	}
	.imgs-ul2 li img{
		width: 100%;
	}
	.footer{
		margin-top: 30px;
	}
	.footUl{
		width: 100%;
	}
	.footUl li{
		width: 33%;
	}
	.footUl li span{
		width: 40px;
		height: 27px;
		background: url(../assets/img/un_ico_home_v620.png) no-repeat;
		display: inline-block;
		background-size: 120px auto;
	}
	.footUl li:nth-of-type(1) span{
		background-position: -64px -169px;
		
	}
	.footUl li:nth-of-type(2) span{
		background-position: -60px -196px;
	}
	.footUl li:nth-of-type(3) span{
		background-position: -60px -350px;
	}
	.footUl li p{
		font-size: 12px;
	}
</style>