<template >
	<main>
		<div class="header">
			<div class="heaCon">
				<span class="iconfont icon-xiangzuo3 first" @click="back"></span>
				<p class="second"><span class="iconfont icon-zuobiao secondOne"></span>上海站</p>
				<span class="iconfont icon-icon-- third " ></span>
				<input type="text" placeholder="目的地/关键字" />
			</div>
		</div>
		<div class="tab">
			<div class="test">
				<ul>
					<li v-for="(v,i) in tab" class="tab-li">
						<img :src="v.imgUrl" alt="" />
						<p class="tab-p">{{v.title}}</p>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="content">
			<div class="conCentent">
				<div class="conLeft">
					<img src="../assets/img/icon10.png"  />
					<span class="miao">特价秒杀</span>
					<span class="dataQ">10月8日15:00开抢</span>
				</div>
				<p class="tit_right" >
					<i>抢购中</i>
					<span id="h" ></span>
					<em>:</em>
					<span id="m" ></span>
			        <em>:</em>
			  		<span id="s" ></span>
				</p>
			</div>
		</div>
		<div class="conList">
				<div class="conLCon">
					<ul class="qianUl">
						<li v-for="(v,i) in qiaList" class="qianLi">
							<div class="cententOne">
								<img :src="v.imgUrl" alt="" />
								 <p class="qianP1">{{v.des}}</p>
								 <p class="prices"><span>￥</span>{{v.price}} <span>起</span></p>
								 <router-link to="/details">
								 	<p class="kuai">马上抢<span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu- firstIcon"></span></p>
								 </router-link>
								 <p class="postion"><span>自由行</span> <i>上海出发</i></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		<div class="handpick">
				<div class="tabTitle">
					<div class="ttLeft">
						<img src="../assets/img/icon2.png"/>
						<span>性价比精选</span>
					</div>
					<div class="ttRight">
						<span>全部</span>
						<span class="iconfont icon-xiangyou1"></span>
					</div>
				</div>
				<div class="nav" id="nav" >
			      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">精选爆款</mt-button>
			      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">优选推荐</mt-button>
			      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">国内特惠</mt-button>
			      <mt-button size="small" @click.native.prevent="active = 'tab-container4'">特价海岛</mt-button>
			    </div>
			    
			    <div class="page-tab-container " id="tabT">
			      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
			        <mt-tab-container-item id="tab-container1">
			        	<!-- cell组件 -->
			          <mt-cell v-for="(v,i) in faddish" >
			          	<div class="faddish">
			          		<div class="over">
				          		<div class="fadLeft">
				          			<img :src="v.imgUrl" alt="" />
				          			<p class="postion">
				          			<span>{{v.fly}}</span>
				          			<u>{{v.genTuan}}</u>
				          			<i>上海出发</i>
				          			</p>
				          			
				          		</div>
				          		<div class="fadRight">
				          			<p class="fadPone">{{v.des}}</p>
				          			<div class="conOne">
				          				<p class="priOne"><span>￥</span>{{v.price}} <i>起</i></p>
				          				<p class="numOne"><span class="iconfont icon-xin2"></span>{{v.number3}}</p>
				          			</div>
				          		</div>
			          		</div>
			          		<p class="fadFooter"><span>惠</span>{{v.desTe}}</p>
			          	</div>
			          	
			          </mt-cell>
			        </mt-tab-container-item>
			        <mt-tab-container-item id="tab-container2">
			        	<!-- cell组件 -->
			            <mt-cell v-for="(v,i) in optimization" title="">
			          	<div class="faddish">
			          		<div class="over">
				          		<div class="fadLeft">
				          			<img :src="v.imgUrl" alt="" />
				          			<p class="postion">
				          			<span>{{v.fly}}</span>
				          			<u>{{v.genTuan}}</u>
				          			<i>上海出发</i>
				          			</p>
				          			
				          		</div>
				          		<div class="fadRight">
				          			<p class="fadPone">{{v.des}}</p>
				          			<div class="conOne">
				          				<p class="priOne"><span>￥</span>{{v.price}} <i>起</i></p>
				          				<p class="numOne"><span class="iconfont icon-xin2"></span>{{v.number3}}</p>
				          			</div>
				          		</div>
			          		</div>
			          		
			          		<p class="fadFooter"><span>惠</span>{{v.desTe}}</p>
			          	</div>
			          	</mt-cell>
			        </mt-tab-container-item>
			        <mt-tab-container-item id="tab-container3">
			        	<!-- cell组件 -->
			           <mt-cell v-for="(v,i) in odds" title="">
			          	<div class="faddish">
			          		<div class="over">
				          		<div class="fadLeft">
				          			<img :src="v.imgUrl" alt="" />
				          			<p class="postion">
				          			<span>{{v.fly}}</span>
				          			<u>{{v.genTuan}}</u>
				          			<i>上海出发</i>
				          			</p>
				          			
				          		</div>
				          		<div class="fadRight">
				          			<p class="fadPone">{{v.des}}</p>
				          			<div class="conOne">
				          				<p class="priOne"><span>￥</span>{{v.price}} <i>起</i></p>
				          				<p class="numOne"><span class="iconfont icon-xin2"></span>{{v.number3}}</p>
				          			</div>
				          		</div>
			          		</div>
			          		<p class="fadFooter"><span>惠</span>{{v.desTe}}</p>
			          	</div>
			          	</mt-cell>
			        </mt-tab-container-item>
			        <mt-tab-container-item id="tab-container4">
			        	<!-- cell组件 -->
			            <mt-cell v-for="(v,i) in island" title="">
			          	<div class="faddish">
			          		<div class="over">
				          		<div class="fadLeft">
				          			<img :src="v.imgUrl" alt="" />
				          			<p class="postion">
				          			<span>{{v.fly}}</span>
				          			<u>{{v.genTuan}}</u>
				          			<i>上海出发</i>
				          			</p>
				          			
				          		</div>
				          		<div class="fadRight">
				          			<p class="fadPone">{{v.des}}</p>
				          			<div class="conOne">
				          				<p class="priOne"><span>￥</span>{{v.price}} <i>起</i></p>
				          				<p class="numOne"><span class="iconfont icon-xin2"></span>{{v.number3}}</p>
				          			</div>
				          		</div>
			          		</div>
			          		<p class="fadFooter"><span>惠</span>{{v.desTe}}</p>
			          	</div>
			          	</mt-cell>
			        </mt-tab-container-item>
			      </mt-tab-container>
			    </div>
		</div>
		
		<div class="hotDress">
			<div class="footerCon">
				<div class="ttLeft">
					<img src="../assets/img/icon3.png"/>
					<span>热门目的地</span>
				</div>
			</div>
			
			<div class="ulLi">
				<ul class="hotDreUl">
					<li v-for="(v,i) in hotDress">
						<b>{{v.qinzi}}</b>
						<span>{{v.dress}}</span>
					</li>
				</ul>
				
			</div>
		</div>
		
		<div class="specialSale">
			<div class="saleCon">
				<img src="../../data/img/tmtj_510x330.jpg"/>
				<img src="../../data/img/qjcf_510x330.jpg"/>
			</div>
		</div>
		<div class="footer">
			<div class="footerCon">
				<div class="ttLeft">
					<img src="../assets/img/icon4.png"/>
					<span>为您推荐</span>
				</div>
			</div>
			<div class="footerDesCon">
				<div v-for="(v,i) in footerDes" class="footerDes">
				  	<div class="faddish">
		          		<div class="over">
			          		<div class="fadLeft">
			          			<img :src="v.imgUrl" alt="" />
			          			<p class="postion">
			          			<span>{{v.fly}}</span>
			          			<u>{{v.genTuan}}</u>
			          			<i>上海出发</i>
			          			</p>
			          			
			          		</div>
			          		<div class="fadRight">
			          			<p class="fadPone">{{v.des}}</p>
			          			<div class="conOne">
			          				<p class="priOne"><span>￥</span>{{v.price}} <i>起</i></p>
			          				<p class="numOne"><span class="iconfont icon-xin2"></span>{{v.number3}}</p>
			          			</div>
			          		</div>
		          		</div>
		          		<p class="fadFooter"><span>惠</span>{{v.desTe}}</p>
		          	</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	 
	/*import "../assets/js/shijian.js"*/
	export	default{
		
  		name: 'page-tab-container',
		data(){
			return{
				active: 'tab-container1',
				hotDress:[],
				footerDes:[],
				faddish:[],
				optimization:[],
				odds:[],
				island:[],
				qiaList:[],
				tab:[]
			}
		},
		mounted(){
				this.$http.get('./data/evenMore.json')
				.then((response)=>{
					this.hotDress=response.data.hotDress;
					this.list1=response.data.list1;
					this.footerDes=response.data.footerDes;
					this.faddish=response.data.faddish;
					this.optimization=response.data.optimization;
					this.odds=response.data.odds;
					this.island=response.data.island;
					this.qiaList=response.data.qiaList;
					this.tab=response.data.tab;
				})
				.catch(function (error) {
				console.log(error);
				})
				.then(function () {
				});
			function leftTimer(year,month,day,hour,minute,second){
				var newDate = new Date();
				var newDate1 = new Date(year,month-1,day,hour,minute,second);
				var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数 
				var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
				var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
				var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
				var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
				if (seconds<0) {
				    $(".tit_right").css('display', 'none');
				} 
				else{
				    days = fix(days,2); 
				    hours = fix(hours,2); 
				    minutes = fix(minutes,2); 
				    seconds = fix(seconds,2);	
					setTimeout(function(){leftTimer(2019,10,9,15,0,0)},1000);  
					document.getElementById("h").innerHTML=hours;
					document.getElementById("m").innerHTML=minutes;
					document.getElementById("s").innerHTML=seconds;
				}
				function fix(num, length) {
		    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
					}
					
 		}
	//fix函数：将1~9的1位数转换成01~09的格式
		
			leftTimer(2019,10,9,15,0,0);
			
			$(".postion>span:empty").hide()
	 		$(".postion>u:empty").hide()
	 		$(".hotDreUl li>b :empty").hide()
	 		$(".nav> button").click(function(){
	 			$(this).css("color","#448aff").siblings().css("color","")
	 		})
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
		/*beforeUndate(){
			
		}*/
		
		
	}
	
</script>

<style scoped>
	
	main{
		background-color: #f0f3f6;
	}
	.item {
	    display: inline-block;
	  }
	a{
		text-decoration: none;
	}
	/*#tabT .mint-cell  .mint-cell-wrapper{
	    background-image: linear-gradient(180deg, transparent, transparent 50%, transparent 50%);
	  	background-size: 100% 0px;
	    text-align: left;
	}*/
	#tabT{
		margin: 0 auto;
	}
	#nav{
		overflow: hidden;
	}
	 #nav .mint-button{
	 	float: left;
	 	width: 25%;
	 	padding: 0px;
	 }
	.header{
		width: 100%;
		background-color: white;
		position: relative;
		margin-bottom: 0px;
	}
	.first{
		position: absolute;
		left: 3%;
		top: 15%;
		font-size: 24px;
	}
	.second{
		position: absolute;
		left: 13%;
		top: 8%;
		color: #448aff;
		font-size: 14px;
	}
	.second::after{
		content: '';
		content: "";
		position: absolute;
		top: -10%;
		left: 22vw;
		height: 125%;
		border: 1px solid  #999;
		transform: scaleX(.5);
		transform-origin: 0 bottom;
	}
	.secondOne{
		font-size: 20px;
		position: relative;
		top: 2px;
	}
	.third{
		position: absolute;
		left: 38%;
		top: 22%;
	}
	.header input{
		line-height: 30px;
		padding-left: 34%;
		width: 90%;
		margin-left: 8%;
		background: #ddd;
		box-sizing: border-box;
		border: none;
		border-radius: 20px;
	}
	.heaCon{
		width: 95%;
		margin: 1vh auto;
		margin-bottom: 0px;
	}
	.tab{
		background-color: white;
		border: 1px solid transparent;
	}
	.tab .test{
		overflow: scroll;
		width: 100%;
		margin-top: 3vh;
		
	}
	.tab ul{
		width: 210vw;
		overflow: hidden;
		transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
		transition-duration: 0ms;
		transform: translate(0px) translateZ(0px);
	}
	::-webkit-scrollbar{
		width: 0px;
	}
	.tab-li{
		width: 22vw;
		margin: 0.5vh 1%;
	}
	.tab-li img{
		width:13vw;
	}
	.tab-p{
		font-size: 12px;
		color: black;
	}
	.content{
		margin-top: 1.5vh;
		width: 100%;
		background-color: white;
		border: 1px solid transparent;
	}
	.conCentent{
		width: 90%;
		margin: 2vh auto;
		overflow: hidden;
	}
	.conLeft{
		float: left;
	}
	.conLeft img{
		 height: 3.5vh;
   		 width: 6vw;
   		 position: relative;
   		 top: 0.5vh;
	}
	.miao{
	    font-size: 18px;
	    line-height: 18px;
	    color: #ff4646;
	    font-weight: 700;
	    margin: 0 -2px;
	}
	.dataQ{
		color: #999;
	    font-size: 12px;
	    line-height: 12px;
	    vertical-align: middle;
	}
	.tit_right{
		float: right;
		
	}
	.tit_right i{
		font-size: 12px;
		color: black;
		font-style: normal;
		line-height: 6vh;
	}
	.tit_right em{
		    font-size: 12px;
		    color: #666;
		    line-height: 24px;
		    font-weight: 700;
		    margin-top: 2px;
		    font-style: normal;
		    margin: 0px -3px;
	}
	.tit_right span{
		color: white;
	    background-color: #666;
	    border-radius: 2px;
	   	font-size: 11px;
	    line-height: 12px;
	    vertical-align: middle;
	    padding-right: 1px;
	    box-sizing: border-box;
	    transform: scale(0.9);
	    display: inline-block;
	}
	.conList{
		background-color: white;
		margin-top: -0.5vh;
		margin-bottom: 1.5vh;
	}
	.cententOne{
		width: 40vw;
	}
	.postion{
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		font-size:13px ;
		z-index: 1;
	}
	.postion span{
		background-color:  #50a5ff;
	    display: inline-block;
    	padding: 2px 4px 1px 5px;
	}
	.postion span::after{
	        content: "";
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 18px 9px 0 0;
			border-color: #50a5ff transparent transparent transparent;
			position: absolute;
			left:44%;
			top: 0;
	}
	
	.postion i{
	    background: rgba(0,0,0,.5);
	    display: inline-block;
    	padding: 2px 4px 1px 5px;
    	font-style: normal;
    	margin-left: -3px;
	}
	.postion i::after{
		content: "";
	    width: 0;
	    height: 0;
	    border-style: solid;
	    border-width: 18px 8px 0 0;
	    border-color: rgba(0,0,0,.5) transparent transparent transparent;
	    position: absolute;
	    right: -8px;
	    top: 0;
	}
	.conLCon{
		overflow: scroll;
	}
	.qianUl{
		width: 256vw;
	}
	.cententOne img{
		width: 100%;
		height: 15vh;
		
	}
	.qianLi{
		margin: 0 1vw;
		box-shadow: 0 4px 6px 0 rgba(0,0,0,.14);
		border-radius: 5px;
		overflow: hidden;
		position: relative;
	}
	.qianP1{
		font-size: 14px;
	    line-height: 16px;
	    height: 32px;
	    font-weight: 400;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    color: #222;
	    font-family: Arial,"Lucida Grande",Verdana,"Microsoft YaHei",hei;
		text-align: left;
	}
	.prices{
		font-size: 18px;
    	color: #ff4646;
    	text-align: left;
    	padding-left: 2px;
	}
	.prices span{
		font-size: 12px;
	}
	.prices span:nth-of-type(2){
		color: #999;
	}
	.kuai{
		background: #ff4646;
		line-height: 30px;
		font-size: 14px;
    	color: #fff;
    	margin-top: 5px;
	}
	.firstIcon{
		font-size: 15px;
		position: relative;
		top: 1px;
	}
	.handpick{
		background-color: white;
		margin-top: 1.5vh;
		border: 1px solid transparent;
		padding-bottom: 2vh;
	}
	.faddish{
		width: 98%;
		margin: 0 auto;
		margin-top: 1vh;
		overflow: hidden;
		padding-top: 2vh;
	}
	.fadLeft{
		width: 40%;
		float: left;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		margin-right: 2%;
	}
	.fadLeft img{
		width: 100%;
		border-radius: 4px;
		height: 14vh;
	}
	.fadRight{
		width: 58%;
		float: left;
		position: relative;
	}
	.fadPone{
		font-size: 14px;
	    line-height: 17px;
	    max-height: 34px;
	    font-weight: 400;
	    overflow: hidden;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    color: #333;
	    font-family: Arial,"Lucida Grande",Verdana,"Microsoft YaHei",hei;
	    text-align: left;
	    margin-bottom: 6vh;
	}
	.postion u{
	        background-color: #ff716d;
   			 display: inline-block;
    		padding: 2px 4px 2px 5px;
    		box-sizing: border-box;
    		text-decoration: none;
	}
	.postion u::after{
		
	    content: "";
	    width: 0;
	    height: 0;
	    border-style: solid;
	    border-width: 18px 8px 0 0;
	    border-color: #ff716d transparent transparent transparent;
	    position: absolute;
	    left: 44%;
	    top: 0;
	}
	.conOne{
		overflow: hidden;
	}
	.priOne{
		text-align: left;
		float: left;
	    color: #ff6913;
   		font-size: 20px;
	}
	.priOne span{
		color: #ff6913;
		font-size: 12px;
	}
	.priOne i{
		color: #999;
		font-size: 12px;
		font-style: normal;
	}
	.numOne{
		text-align: right;
		float: right;
	    border: 1px solid #ccc;
	    border-radius:10px;
	    padding: 2px;
	    margin-bottom: 3vh;
	    font-size: 12px;
	}
	.numOne span{
		font-size: 13px;
	}
	.fadFooter{
	    line-height: 17px;
   		font-size: 12px;
   		color: #999;
        text-align: left;
         margin-bottom: 1.5vh;
	}
	.fadFooter span{
		padding: 0 2px;
	    color: #fff;
	    background-color: #ff4646;
	    border-radius: 2px;
	    margin-right: 4px;
	   
	}
	.over{
		overflow: hidden;
	}
	.tabTitle{
		width: 90%;
		margin: 0 auto;
		background-color: white;
		overflow: hidden;
		margin-bottom: 2vh;
		margin-top: 1vh;
	}
	.ttLeft{
		float: left;
	}
	.ttLeft img{
    	width: 19px;
    	position: relative;
    	top: 0.5vh;
	}
	.ttLeft span{
		font-weight: 700;
		font-size: 18px;
    	line-height: 18px;
   		 color: #ff4646;
	}
	.ttRight{
		float: right;
	}
	.ttRight span{
	    font-size: 12px;
   	 	color: #999;
	}
	.footer{
		width: 100%;
		background-color: white;
		margin-top:1.5vh ;
		overflow: hidden;
		border: 1px solid transparent;
	}
	.footerCon{
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 1vh;
	}
	.footerDes{
		width: 90%;
		margin: 0 auto;
		border-bottom: 1px solid #E1E2E8;
	}
	.hotDress{
		margin-top: 1.5vh;
		background-color: white;
		width: 100%;
		padding: 1vh 0;
	}
	.ulLi{
		width: 90%;
		margin: 0 auto;
		margin-top: 3vh;
	}
	.ulLi li{
		width: 23%;
		margin: 1vh 1%;
		line-height: 32px;
		background: #f7f7f7;
		border-radius: 15px;
		position: relative;
		color: black;
		font-size: 14px;
	}
	.ulLi li b{
		position: absolute;
		top: -5px;
		right: -10px;
	    background-color: #ff4646;
	    font-size: 12px;
	    transform: scale(0.7);
        border-radius: 13px 13px 13px 0;
        color: white;
        line-height: 15px;
        width: 57px;
        box-sizing: border-box;
	}
	.specialSale{
		margin-top: 1.5vh;
		width: 100%;
		background-color: white;
	}
	.saleCon{
		margin: 0 auto;
		width: 90%;
		overflow: hidden;
	}
	.saleCon img{
		width: 48%;
		margin: 0px 1% ;
		float: left;
	}
</style>