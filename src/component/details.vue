<template>
	<main>
		<div class="banner">
				<mt-swipe :auto="4000" class ="lj" >
					  <mt-swipe-item  v-for="(v,i) in banner">
					  	<img :src="v.imgUrl"/> 
					  	<div class="fsad">
					  		{{i+1}}
					  	</div>
					 </mt-swipe-item>
				</mt-swipe>
				<div class="banFooter">
					<p class="banLeft">上海出发·携程自营</p>
					<p class="banRight">编号：1018794843</p>
				</div>
				<div class="imgPosion">
					<p class="imgPosOne"><img src="../../data/img/tour11.png" alt="" /> <span></span> /8</p>
				</div>
			<span class="iconfont icon-xiangzuo4 iconOne" @click="back"></span>
		</div>
		<div class="banDes">
			<div class="banDesCon">
				<p class="bandesP1">
					<i>￥</i>1949<span>/人起</span> 
					<img src="../assets/img/tour07.png" alt="" />
					<span>1202人出游</span>
				</p>
				<p class="bandesP2">已优惠￥50</p>
				<h2>新加坡5日自由行</h2>
				<p class="bandesP3">【10/16新航特价|早鸟惊喜·提前30天预订立减50元/单】直飞特惠航班可选·仅含往返机票|加购签证拒签有保障</p>
				<div class="banDesDiv">
					<p class="banDesLeft">特卖<span class="iconfont icon-xiangyou2 icom"></span></p>
					<p class="banDesRight">预售</p>
				</div>
			</div>
		</div>
		<div class="discounts">
			<div class="discountsCon">
				<div class="discounTop">
					<span class="disSpan1">优惠</span>
					<p class="disPoner"><span>已享</span>提前30天预订，每单立减50元</p>
					<span class="iconfont icon-xiangyou disSpan2"></span>
				</div>
				<div class="discounBottom">
					<p><span class="disBgc1"></span><span class="disBgc2"></span>拒签全退 <span class="disBgc3"></span> 买贵退差价</p>
					<p>详细<span class="iconfont icon-xiangyou disIcon"></span></p>
				</div>
			</div>
		</div>
		
		<div class="selected">
			<img src="../assets/img/first.jpg" alt="" />
		</div>
		
		<div class="grade">
			<div class="gradeCon">
				<div class="graTop">
					<p class="graTLeft"><img src="../assets/img/tour01.png" alt="" /> 评分4.4/5 <span>1202人出游</span></p>
					<p class="graTRight">
						查看全部 
						<span class="iconfont icon-xiangyou graIcon"></span>
					</p>
				</div>
				<div class="graMid">
					<div class="graMLeft">
						<span class="graOne">旅行交通</span>
						<div class="pnI1"><i></i>
							
						</div>
						<span class="graTwo">4.6</span>
					</div>
					<div class="graMRight">
						<span class="graOne">附加产品</span>
						<p class="pnI2"><i></i></p>
						<span class="graTwo">4.2</span>
					</div>
				</div>
				<div class="graBottom">
					<p class="graBLift">202****069&nbsp;&nbsp;&nbsp;朋友出游</p>
					<p class="graBRight">2019-09-23</p>
				</div>
				<p class="graLastP">机票几个还是挺实惠的。一起买的套票也不错，使用简单。</p>
			</div>
		</div>
		
		<div class="dataS">
			<div class="dataCon">
				<div class="dataConTop">
					<img src="../assets/img/tour04.png" alt="" />
					<span>上海出发</span>
				</div>
				<div class="dataConBottom" >
					<ul class="dataUl">
						<li v-for="(v,i) in dataS" class="dataLi">
							<p>{{v.more}}</p>
							<p class="dataPone">{{v.dataOne}}</p>
							<p class="dataPtwo">{{v.price}}</p>
							<p>{{v.ban}}</p>
							
						</li>
					</ul>
				</div>
				
			</div>
		</div>
		<div class="heaDes">
			<ul class="heaDesUl">
				<li>产品特色</li>
				<li>费用说明</li>
				<li>预定须知</li>
			</ul>
		</div>
		
		<div class="managerRecom">
			<div class="manRecomCon">
				<div class="manRecPone">
					<p>产品经理推荐</p>
				</div>
				
				<div class=" manRecUl">
					<ul class="ulOne">
						<li v-for="(v,i) in managerRecom">
							<p class="mangerPone">{{v.des}}</p>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
		
		<div class="feesDes">
			<div class="feesDesCon">
				<div class="manRecPone">
					<p>费用说明</p>
				</div>
				<p class="feiyong">费用包含</p>
				<div class="pcent">
					<p class="mangerPone">自由行产品费用，按您实际选择的资源报价，详见“选择资源页—明细”。</p>
				</div>
				
			</div>
		</div>
		
		<div class="visa">
			<div class="visaCon">
				<div class="visaTop">
					<p class="visaTone">签证</p>
					<p class="visaTtwo"><span class="iconfont icon-xiangyou visaIcon"></span></p>
				</div>
				<div class="reserve">
					<p class="reserveOne">预定须知及安全提示</p>
					<p class="reserveTwo"><span class="iconfont icon-xiangyou visaIcon"></span></p>
				</div>
			</div>
		</div>
		
		<div class="xiec">
			<div class="reserve">
					<p class="reserveOne"><img src="../assets/img/do_icon.png"/>携程自营</p>
					<p class="reserveTwo">可查看经营许可证<span class="iconfont icon-xiangyou visaIcon"></span></p>
			</div>
		</div>
		
		<div class="moreProduct">
			<div class="moreProCen">
				<p class="morePraPone">更多产品推荐</p>
				<ul class="morePraUl">
					<li v-for="(v,i) in moreProduct">
						<img :src="v.imgUrl" alt="" />
						<p class="moreProTwo">{{v.des}}</p>
						<p class="moreProThere"><span>￥</span>{{v.price}}<i>起</i></p>
					</li>
				</ul>
			</div>
		</div>
		<div class="custom">
			<div class="customCon">
				<div class="customImg">
					<span></span>
				</div>
				<div class="customMid">
					<p class="customPone">定制旅行</p>
					<p class="customPtwo">想要行程更灵活？独立成团欢乐旅行找旅行定制师来搞定！</p>
				</div>
				<div class="customRight">
					<p class="customPthere">立即定制</p>
				</div>
			</div>
		</div>
		
		<div class="kong">
			
		</div>
		<div class="footer">
			<div class="footerCon">
				<div class="footerLeft">
					<p><span class="iconfont icon-xin2 footerIcon"></span></p>
					<p>收藏</p>
				</div>
				<div class="footerMid">
					<p><span class="iconfont icon-002dianhua footerIcon"></span></p>
					<p>电话咨询</p>
				</div>
				<div class="footerRight">
					<router-link to="/reservations"><button>立即预定</button></router-link>
				</div>
			</div>
		</div>

	
	</main>
</template>

<script>
	export default{
		data(){
			return{
				moreProduct:[],
				managerRecom:[],
				dataS:[],
				banner:[]
				
			}
		},
		mounted(){
			this.$http.get('./data/details.json')
				.then((response)=>{
					this.moreProduct=response.data.moreProduct;
					this.managerRecom=response.data.managerRecom;
					this.dataS=response.data.dataS;
					this.banner=response.data.banner;
				})
				.catch(function (error) {
				console.log(error);
				})
				.then(function () {
				});
			
			$(".dataLi p:empty").hide();
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
		
		
	}
</script>

<style>
			.lj{
			position: relative;
			overflow: hidden;
			}
			.lj img{
				width: 100%;
				height: 204px;
			}
			.lj .mint-swipe-items-wrap{
				padding-bottom: 54.76%;
			}
			.lj .mint-swipe-indicators{
				display: none;
			}
			.fsad{
					position: absolute;
					z-index: 20;
					color: white;
					bottom: 5.1vh;
					right: 10vw;
					font-size: 15px;
				}
			.banner{
				position: relative;
			}
			.banner .banFooter{
				position: absolute;
				bottom: 1vh;
				left: 3.5vw;
				z-index: 20;
				width: 90%;
				margin: 0 auto;
				
			}
			.banFooter{
				overflow: hidden;
			    line-height: 24px;
			    color: #fff;
			    font-size: 12px;
				
			}
			.banLeft{
				float: left;
			}
			.banRight{
				float: right;
			}
			.imgPosion{
			    background: rgba(0,0,0,0.4);
			    position: absolute;
				z-index: 10;
				color: white;
				bottom: 5vh;
				right: 4.5vw;
				padding: 1px 3px;
				border-radius: 5px;
				font-size: 14px;
				width: 13vw;
			}
			.imgPosion img{
				 width: 12px;
   				 height: 10px;
   				 margin-right: 2.5vw;
			   	 
			   	 
			}
			.iconOne{
				position: absolute;
				top: 1vh;
				left: 5vw;
				display: block;
			    width: 32px;
				height: 32px;
				border-radius:50% ;
				background: rgba(0,0,0,0.4);
			   	color: white;
			   	line-height: 32px;
			   	font-size: 21px;
			   	padding-right: 2px;
				
			}
			/*.imgPosOne{
				position: absolute;
				z-index: 10;
				color: red;
				bottom: 4vh;
				right: 4.5vw;
			}*/
</style>

<style scoped>
	main{
		background-color: #f7f7f7;
	}
	.banDes{
		border: 1px solid transparent;
		width: 100%;
		background-color: white;
	}
	.banDesCon{
		width: 93%;
		margin: 1vh auto;
		text-align: left;
	}
	.bandesP1{
		color:#ff6913; 
	    font-size: 25px;
	}
	.bandesP1>i{
		font-style: normal;
		font-size: 12px;
		color:#ff6913;
	}
	.bandesP1>span{
		font-size: 12px;
	    color: #999;
	    margin-left: 1px;
	    
	}
	.bandesP1 img{
	    width: 11px;
		height: 11px;
		margin-left: -4px;
	}
	.bandesP2{
		font-size: 12px;
		color: #ff6913;
		margin-top: -3px;
	}
	.banDesCon h2{
		font-size: 18px;
	    color: #333;
	    font-weight: 700;
	    margin-top: 5px;
	    margin-bottom: 2px;
	}
	.bandesP3{
		font-size: 14px;
		color: black;
	}
	.banDesDiv{
		margin-top: 2vh;
		margin-bottom: 2vh;
		overflow: hidden;
		font-size: 12px;
	}
	.banDesLeft{
		float: left;
		color: #ff4646;
		margin-right: 5px;
    	border: 1px solid rgba(255,70,70,0.3);
    	border-radius: 2px;
    	padding:0px 1px;
	}
	.banDesRight{
		float: left;
		border: 1px solid rgba(102,102,102,.3);
	    color: #666;
	    border-radius: 2px;
	    padding: 0px 1px;
	}
	.icom{
		font-size: 12px;
		transform: scale(0.5);
	}
	.discounts{
		margin-top: 1.2vh;
		width: 100%;
		background-color: white;
		border: 1px solid transparent;
	}
	.discountsCon{
		width: 95%;
		margin: 0 auto;
	}
	.discounTop{
		margin-top: 1vh;
		overflow: hidden;
		position: relative;
		margin-bottom: 4vh;
	}
	.disSpan1{
		float: left;
	    color: #999;
    	font-size: 13px;
	}
	.disPoner{
	    font-size: 14px;
   		color: #222;
   		width: 80%;
   		margin: 0 auto;
	}
	.disPoner span{
	    border:1px solid rgba(13,186,13,.3);
		display: inline-block;
		margin-right: 2px;
		font-size: 12px;
		border-radius:2px ;
		color: green;
		transform: scale(0.9);
	}
	.discounTop .disSpan2{
		position: absolute;
		right: 0vw;
		top: 0.3vh;
		font-size: 12px;
	}
	.discounBottom{
		width: 100%;
		margin: 0 auto;
		text-align: left;
		overflow: hidden;
		margin-bottom: 2vh;
	}
	.discounBottom p:nth-of-type(1){
		float: left;
		font-size: 12px;
	}
	.discounBottom p:nth-of-type(2){
		float: right;
		font-size: 12px;
		position: relative;
		top: 5px;
		color: #999;
	}
	.disIcon{
		margin-left: 10px;
		font-size: 12px;
	}
	.disBgc1{
		background: url(../assets/img/m_six_slogo.png);
		display: inline-block;
		width: 53px;
		height: 20px;
		background-size: 180px auto;
		background-position: -127px 0px;
		position: relative;
		top: 2px;
	}
	.disBgc2,.disBgc3{
		background: url(../assets/img/m_six_slogo.png);
		display: inline-block;
		width: 15px;
		height: 15px;
		background-size: 180px auto;
		background-position: -110px -16px;
		position: relative;
		top: 2px;
		margin-left: 0.5vw;
	}
	.selected{
		width: 100%;
		margin-top: 1vh;
	}
	.selected img{
		width: 100%;
	}
	.grade{
		width: 100%;
		margin-top:0.5vh ;
		border: 1px solid transparent;
		background-color: white;
	}
	.gradeCon{
		margin: 0 auto;
		width: 93%;
		text-align: left;
	}
	.graTop{
		overflow: hidden;
		margin:2vh 0px ;
	}
	.graTLeft{
		float: left;
	    font-size: 15px;
   		 color: black;
	}
	.graTLeft img{
		width: 14px;
   		 height: 15px;
   		 position: relative;
   		 top: 2px;
   		 margin-right: 2px;
	}
	.graTLeft span{
	    font-size: 12px;
    	color: #999;
	}
	.graIcon{
		font-size: 12px;
		color: #E1E2E8;
		margin-left: 5px;
	}
	.graTRight{
		float: right;
	    font-size: 12px;
    	color: #19a0f0;
	}
	.graMid{
		margin: 0 auto;
		width: 100%;
		text-align: left;
		overflow: hidden;
		margin-bottom: 2vh;
	}
	.graMLeft{
		float: left;
		width: 48%;
		margin-right: 2%;
	}
	.graMRight{
		float: left;
		width: 48%;
		margin-left: 2%;
	}
	.pnI1{
		width: 45%;
		height: 4px;
		background: #f2f2f2;
		position: relative;
		float: left;
		top: 7px;
		border-radius: 2px;
	}
	.pnI1 i{
		display: inline-block;
		width: 92%;
		height: 4px;
	    background: #bbb;
	    position: absolute;
	    top: 0px;
	    left: 0px;
	    border-radius: 2px;
	}
	.pnI2{
		width: 45%;
		height: 4px;
		background: #f2f2f2;
		position: relative;
		float: left;
		top: 7px;
		border-radius: 2px;
	}
	.pnI2 i{
		display: inline-block;
		width: 80%;
		height: 4px;
	    background: #bbb;
	    position: absolute;
	    top: 0px;
	    left: 0px;
	    border-radius: 2px;
	}
	.graOne{
		float: left;
	    color: #999;
	    font-size: 12px;
	    margin-right: 4%;
	}
	.graTwo{
		float: right;
		font-size: 12px;
		color: black;
		margin: 1%;
	}
	.graBottom{
		width: 100%;
		overflow: hidden;
		font-size:12px;
		color: black;
		margin-bottom: 1vh;
	}
	.graBLift{
		float: left;
	}
	.graBRight{
		float: right;
	}
	.graLastP{
		font-size: 13px;
		color: black;
		text-align: left;
		margin-bottom: 2.5vh;
	}
	.dataS{
		margin-top: 1vh;
		background-image: linear-gradient(0deg,#fff 55%,#d7dce4 100%);
		border: 1px solid transparent;
	}
	.dataCon{
		margin: 0 auto;
		width: 94%;
		background: url(../assets/img/cloud.png) no-repeat;
	}
	.dataConTop{
		text-align: left;
		margin-top: 1.5vh;
	}
	.dataConTop img{
		width: 12px;
		height: 15px;
		position: relative;
		top: 2px;
	}
	.dataConTop span{
		font-size: 13px;
		color: black;
	}
	.dataConBottom{
		margin-top: 1.5vh;
	}
	.dataUl{
		margin-bottom: 1vh;
	}
	.dataLi{
		width: 18%;
		margin: 1%;
	    border: rgba(239,239,244,.6) 1px solid;
	    box-sizing: border-box;
	   line-height: 3vh;
	   border-radius: 5px;
	}
	.dataLi p{
		font-size: 12px;
		color: #19a0f0;
	}
	.dataLi .dataPone{
		color: black;
	}
	.dataLi .dataPtwo{
	    color: #ff6913;
	}
	.heaDes{
		margin-top:1vh ;
		background-color: white;
		border: 1px solid transparent;
		width: 100%;
	}
	.heaDesUl{
		width: 100%;
		    line-height: 43px;
		    border-bottom: 1px solid #E1E2E8;
	   /* box-shadow: 0 -1px 0 #ececec, 0 1px 0 #ececec;*/
	}
	.heaDesUl li{
		width:32%;
	    color: #666;
   		font-size: 14px;
	}
	.managerRecom{
		width: 100%;
		background-color: white;
		border: 1px solid transparent;
	}
	.manRecomCon{
		margin: 0 auto;
		width: 90%;
		margin-bottom: 8vh;
		
	}
	.manRecPone p{
		 font-size: 20px;
    	 font-weight: 500;
      	 line-height: 11vh;
	}
	.manRecUl{
		width: 80%;
		text-align: left;
		margin: 0 auto;
		font-size: 14px;
	    color: #666;
	    position: relative;
	    margin-bottom: 4vh;
	}
	.ulOne::before{
		content: '';
   		 height: 16px;
   		 width: 20px;
	  	 position: absolute;
		background-position: -140px -2px;
        background-image: url(../assets/img/m_detail.png);
	 	 background-repeat: no-repeat;
    	background-size: 200px auto;
    	left: -15%;
    	top: -2vh;
	}
	.ulOne::after{
	content: '';
	 height: 16px;
	 width: 20px;
  	 position: absolute;
	background-position: -140px -2px;
    background-image: url(../assets/img/m_detail.png);
 	 background-repeat: no-repeat;
	background-size: 200px auto;
    transform: rotate(180deg);
    top: 60px;
	}
	.mangerPone::before{
		   content: '';
		    background: #666;
		    float: left;
		    height: 4px;
		    width: 4px;
		    border-radius: 50%;
	        margin: 8px 0 0 -12px;
	}
	.feesDes{
		margin-top: 1vh;
		background-color: white;
		padding-bottom: 3vh;
	}
	.feesDesCon{
		width: 90%;
		margin: 0 auto;
	
	}
	.pcent{
		width: 90%;
		margin: 0 auto;
		font-size: 14px;
		text-align:left ;
		
	}
	.feiyong{
		font-size: 16px;
		color: black;
		text-align: left;
		margin-bottom: 1vh;
	}
	.visa{
		background-color: white;
		margin-top: 1.5vh;
		border: 1px solid transparent;
	}
	.visaCon{
		text-align: left;
	}
	.manRecPone{
	    line-height: 44px;
	    overflow: hidden;
	    
	}
	.visaTop{
		line-height: 44px;
		overflow: hidden;
		border-bottom: 1px solid #E5E5E5;
		
	}
	.visaTone{
		float: left;
		margin-left: 5%;
	    color: #333;
	    font-size: 13px;
	}
	.visaTtwo{
		float: right;
	}
	.reserve{
	    line-height: 44px;
	    overflow: hidden;
	    background-color: white;
	}
	.reserveOne{
		margin-left: 5%;
		float: left;
		color: #333;
	    font-size: 15px;
	}
	.reserveOne img{
	    width: 16px;
    	height: 16px;
    	margin-right: 5px;
    	position: relative;
    	top: 3px;
	}
	.reserveTwo{
		float: right;
		color: #ccc;
		font-size: 12px;
	}
	.visaIcon{
		color: #ccc;
		font-size: 12px;
		margin-right: 5px;
		margin-left: 10px;
	}
	.custom{
		margin-top:1.5vh ;
		background-color: white;
	}
	.customCon{
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		padding: 2vh 0;
	}
	.customImg{
		float: left;
		width: 17%;
		margin-right:5vw;
		margin-left: 5px;
	}
	.customImg span{
		display: inline-block;
		height: 52px;
  		width: 52px;
		background: url(../assets/img/m_six_slogo.png) no-repeat;
		background-position:3px 3px ;
		background-size: 193px auto;
	}
	.customMid{
		float: left;
		width: 55%;
		text-align: left;
	}
	.customRight{
		float: right;
		width: 18%;
	}
	.customPone{
	    color: #ff6913;
	    font-size: 16px;
	    
	}
	.customPtwo{
		color: #666;
   		 font-size: 12px;
	}
	.customPthere{
		font-size: 12px;
		color: #333;
	    border: 1px solid rgba(102,102,102,.3);
	    position: relative;
	    top: 3.2vh;
	    border-radius: 4px;
	}
	.xiec{
		margin-top: 1.5vh;
	}
	.moreProduct{
		background-color: white;
		margin:1.5vh  0 ;
		border: 1px solid transparent;
	    padding: 5px 15px 15px;
	    box-sizing: border-box;
	}
	/*.moreProCen{
		width: ;
	}*/
	.morePraPone{
	    font-size: 19px;
   		line-height: 24px;
        font-weight: 500;
        margin-top: 2.5vh;
        margin-bottom: 3.5vh;
	}
	.morePraUl li{
		width: 48%;
		margin: 1%;
		
	}
	.morePraUl li img{
		width: 100%;
		border-radius: 5px;
	}
	.moreProTwo{
	    font-size: 14px;
    	font-weight: 400;
    	line-height: 17px;
    	overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
        -webkit-box-orient: vertical;
   		 -webkit-line-clamp: 2;
   		 text-align: left;
	}
	.moreProThere{
		text-align: left;
		color: #ff6913;
    	font-size: 16px;
    	margin-top: 1vh;
    	margin-bottom: 1vh;
	}
	.moreProThere span{
		font-size: 12px;
	}
	.moreProThere i{
		font-size: 12px;
		color: #999;
		font-style: normal;
		margin-left: 4px;
	}
	.footer{
		margin-top: 1.5vh;
		background-color: white;
		border: 1px solid transparent;
	    padding: 5px 4px 2px;
	    position: fixed;
	    z-index: 40;
	    bottom: 0;
	    width: 100%;
	}
	.footerCon{
		overflow: hidden;
	}
	.footerLeft{
		float: left;
		width: 15%;
		font-size: 12px;
	}
	.footerMid{
		float: left;
		width: 20%;
		margin-right: 2%;
		font-size: 12px;
	}
	.footerRight{
		float: left;
		width: 59%;
	}
	.footerRight button{
		width: 100%;
	    background: #ff6913;
	    color: white;
	    font-size: 12px;
	    border: none;
        line-height: 35px;
        border-radius: 3px;
	}
	.footerIcon{
		font-size: 21px;
	}
	.kong{
		border: 1px solid transparent;
		margin-top: 15vh;
	}
</style>