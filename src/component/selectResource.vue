<template>
	<main>
		<div class="header">
			<span class="iconfont icon-xiangzuo3 heaIcon"></span>
			<div class="heaCon">
				<p class="heaPone">选择资源</p>
				<p class="heaPtwo">
					<span>{{this.$store.state.num1}}</span>成人
					<span>{{this.$store.state.num2}}</span>儿童
					<span>{{this.$store.state.num3}}</span>婴儿 /10-24
				</p>
			</div>
		</div>
		<div class="kong">
			
		</div>
		<div class="flyTick">
			<div  class="flyTickCon">
						<div class="tuipiao">
							<div class="tuipiaoOne">机票</div>
							<div class="tuipaoTwo">
								<p class="piaoPone">
									退改签及购票说明
								</p>
								<button>立即确认</button>
							</div>
						</div>
						<div class="flyOne">
							<div class="flyTop">
								<p class="flyTickPone">
									10-24 新加坡航空SQ831 77W(大)经济舱 <span>详情</span>
								</p>
								<p class="flyTickPTne">
									5h20m <span>仅剩6张</span>
								</p>
							</div>
							<div class="flyMid">
								<div class="flyMidLeft1">
									<div class="MidLeft">
										<p class="fsaPone">14:30</p>
										<p class="fsaPtwo">浦东国际机场T2</p>
									</div>
									
									<div class="flyMidLeft">
										<p>
											<i class="one"></i> 
											<span class="teo"></span>
											<em class="there"></em> 
											<span class="four">中转</span>
										</p>
										<p><span class="fs">上海</span> <span class="fd">新加坡</span></p>
									</div>
									
									<div class="MidRight">
										<p class="miRight">19:50</p>
										<p class="miRight1">沾益机场T3</p>
									</div>
								</div>
							</div>
						</div>
						<div class="flyMidFooter">
							<p class="midFoo">新加坡停留55m<span>换航站楼</span></p>		
						</div>
				</div>
				
				
				<div  class="flyTickCon">
						<div class="flyOne">
							<div class="flyTop" id="flyTop">
								<p class="flyTickPone">
									10-24 新加坡航空SQ831 787(大)经济舱 <span>详情</span>
								</p>
								<p class="flyTickPTne">
									5h20m <span>仅剩6张</span>
								</p>
							</div>
							<div class="flyMid">
								<div class="flyMidLeft1">
									<div class="MidLeft">
										<p class="fsaPone">20.45</p>
										<p class="fsaPtwo">浦东国际机场T2</p>
									</div>
									
									<div class="flyMidLeft">
										<p>
											<span class="four">中转</span>
											<i class="one"></i> 
											<span class="teo"></span>
											<em class="there"></em> 
											
										</p>
										<p><span class="fs">新加坡</span> <span class="fd">马累</span></p>
									</div>
									
									<div class="MidRight">
										<p class="miRight">22:10</p>
										<p class="miRight1">易卜拉欣纳西尔</p>
									</div>
								</div>
							</div>
						</div>
				</div>
		</div>
		<div class="nav">
			<p class="navPone">产品信息可能存在变动</p>
			<p class="navPtwo">请确认以上资源后再填写</p>
		</div>
	
		<div class="jiesong">
				<p class="jiePone">接送机</p>
			 <div class="jieCon" v-for="(v,i) in jieCon">
			 	<p class="jieCone"><span></span> <i>{{v.song}}</i> {{v.des}}</p>
			 	<p class="jieCtwo">￥{{v.price}}	<span>起</span></p>
			 </div>
		</div>
		<div class="qianZ">
			<div class="qianCon">
				<p class="qianPone">签证</p>
				<div class="qianFoot">
					<p class="qianFLeft">马尔代夫落地签，您可到达该国后办理</p>
					<p class="qianfRight">落地签须知</p>
				</div>
				
				<div class="qianJia">
					<p class="peoPtwo">
						<span class="iconfont icon-jian peoInco" @click="sub3()"></span>
						<span>{{this.$store.state.num4}}</span>
						<span class="iconfont icon-jia1 peoInco1" @click="add3()"></span>
					</p>
					<p class="suibian"><i>￥</i><span>300</span> <em>/人</em></p>
				</div>
			</div>
		</div>
		
		<div class="baoxian">
			<div class="firssa">
				<p class="baoxianPone">保险</p>
				<p class="baoPtwo">
					<span class="iconfont icon-icon-test baoPthere"></span>
					80%的游客购买了保险，为自己的出行增添保障；若放弃 购买，请自行承担风险。
				</p>
			</div>
		
		</div>
		
		<div class="nonfds">
			旅游险
		</div>
		<div class="pinan">
			<div class="pinanCon">
				<div class="pinOne">
					<p class="pinanPone">
						<span @click="pinPrice()" :class="{pinSpnone:okTwo}"></span>
						平安携程境外马尔代夫专属保险 尊贵型
					</p>
					<p class="pinanPtwo"><i>￥</i><span>242</span> <span>x1份</span></p>
				</div>
				<p class="pinanPthere">高额保障|50万意外|40万医疗</p>
			</div>
		</div>
		
		<div class="nonfds">
			取消险
		</div>
		<div class="pinan">
			<div class="pinanCon">
				<div class="pinOne">
					<p class="pinanPone1">
						<span @click="addPrice()" :class="{pinSpnone:okOne}"></span>
						平安携程无理由旅行取消险 计划二 尊贵型
					</p>
					<p class="pinanPtwo1"><i>￥</i><span>48</span> <span>x1份</span></p>
				</div>
				<p class="pinanPthere">最高可赔付100%订单损失|最高赔付2000元</p>
			</div>
		</div>
		
		<div class="konga">
			
		</div>
		<div class="footer">
			<div class="footerLeft">
				<p class="footPone"> <span>￥</span><i>{{showPrice}}</i> <em>明细</em></p>
			</div>
			<div class="footerRight">
				<p class="footRPone">下一步：</p>
				<p class="footPtwo">选择附加产品</p>
			</div>
		</div>
	</main>
	
</template>

<script>
	export	default{
		data(){
			return{
				num:0,
				num1:0,
				okOne:false,
				okTwo:false,
				jieCon:[
						{
							song:"上海送机",
							des:"送我到浦东国际机场T2",
							price:"75"
						},
						{
							song:"上海接机",
							des:"来浦东国际机场T2接我",
							price:"76"
						},
				]
			}
		},
		methods:{
			add3(){
      				this.$store.commit('add3',1)
	      			},
	      	sub3(){
      				this.$store.commit('sub3')
	      		 },
	      	addPrice(){
	      		if(this.num==48){
	      			this.num=0;
	      		}else{
	      			this.num=48;
	      		}
	      		this.okOne =! this.okOne;
	      	},
	      	pinPrice(){
	      		if(this.num1==242){
	      			this.num1=0;
	      		}else{
	      			this.num1=242;
	      		}
	      		this.okTwo =! this.okTwo;
	      	}
		},
		computed:{
				showPrice(){
					return this.$store.state.num4*300+this.num+this.num1
				}
		}
		
	}
	
</script>

<style scoped>
	.pinSpnone{
		display: inline-block;
		background: url(../../data/img/m_icon.png) no-repeat;
		background-position:-17px -52px ;
		background-size: 209px auto;
	}
	.konga{
		height: 1.5vh;
		margin-bottom: 7vh;
	}
	.footRPone{
		font-size: 16px;
	}
	.footPtwo{
		font-size: 12px;
	}
	.footPone{
	    font-size: 18px;
   		line-height: 21px;
	    font-weight: 500;
        color: #ff7d13;
    	vertical-align: middle;
	}
	.footPone span{
		font-size: 12px;
	}
	.footPone i{
		font-style: normal;
	}
	.footPone em{
	    font-size: 12px;
   		color: #19A0F0;
		font-style: normal;
	}
	.footerLeft{
		width: 50%;
		float: left;
		margin-top: 2%;
	}
	.footerRight{
		width: 45%;
		float: right;
		background-color: #ff7d13;
		color: white;
		border-radius: 5px;
	}
	.footer{
	    background: #f9f9f9;
	    height: 7vh;
	    box-sizing: border-box;
	    padding: 5px 6px;
	    position: fixed;
	    bottom: 0px;
	    width: 100%;
	    box-sizing: border-box;
	    overflow: hidden;
	}
	.suibian em{
		font-size: 12px;
		color: #999;
		font-style: normal;
	}
	.suibian i{
		font-size: 12px;
		font-style: normal;
	}
	.suibian{
		color: #ff6913;
	}
	.suibian{
		float: right;
	}
	.qianJia{
		overflow: hidden;
		margin-top:1vh ;
	}
	.peoInco1{
	    color: #19a0f0;
    	margin-left: -5px;
	}
	.peoInco{
		color: #ddd;
   		margin-right: -4px;
	}
	.peoPtwo{
		float: left;
	}
	.peoPtwo span{
		    border: 1px solid #ddd;
		    width: 28px;
		    height: 28px;
		    line-height: 28px;
		    display: inline-block;
	}
	.pinanPtwo{
		float: right;
		text-align: left;
		text-align: right;
		width: 30%;
		line-height: 25px;
		color: #ff6913;
	}
	.pinanPtwo1{
		float: right;
		text-align: left;
		text-align: right;
		width: 30%;
		line-height: 25px;
		color: #ff6913;
	}
	.pinanPthere{
		margin-top: 5px;
		 color: #666;
	}
	.pinanPtwo i{
		font-style: normal;
		font-size: 12px;
	}
	.pinanPtwo1 i{
		font-style: normal;
		font-size: 12px;
	}
	.pinanPtwo span:nth-of-type(2){
	    color: #666;
	    font-size: 12px;
	}
	.pinanPtwo1 span:nth-of-type(2){
	    color: #666;
	    font-size: 12px;
	}
	.pinanPone span{
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 4px;
	    border: 1px solid #ccc;
	    position: relative;
	    top: 3px;
	    margin-right: 5px;
	}
	.pinanPone{
		float: left;
		text-align: left;
		width: 70%;
		line-height: 25px;
	}
		.pinanPone1 span{
		display: inline-block;
		width: 18px;
		height: 18px;
		border-radius: 4px;
	    border: 1px solid #ccc;
	    position: relative;
	    top: 3px;
	    margin-right: 5px;
	}
	.pinanPone1{
		float: left;
		text-align: left;
		width: 70%;
		line-height: 25px;
	}
	.pinOne{
		overflow: hidden;
	
	}
	.pinan{
		padding: 15px 15px;
		background-color: white;
		width: 94%;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.nonfds{
		    line-height: 30px;
    		color: #666;
    		padding: 0px 15px;
    		text-align: left;
    		
    		
	}
	.baoPtwo{
		    color: #ff6913;
		    font-size: 12px;
   			line-height: 16px;
   			text-align: left;
	}
	.baoxianPone{
		 font-size: 16px;
		    font-weight: bold;
		    text-align: left;
		    color: black;
		    margin-bottom: 1vh;
	}
	.baoxian{
		width: 94%;
		background-color: white;
		margin: 0 auto;
		border-radius: 5px;
		padding: 15px 15px;
		box-sizing: border-box;
		overflow: hidden;
		margin-top:1.5vh ;
	}
	.qianFoot{
		overflow: hidden;
		
	}
	.qianfRight{
		float: right;
		width: 30%;
		text-align: right;
	    font-size: 15px;
    	color: #19A0F0;
	}
	.qianFLeft{
		float: left;
		width: 70%;
		text-align: left;
		font-weight: 400;
	}
	.qianPone{
		    font-size: 16px;
		    font-weight: bold;
		    text-align: left;
		    color: black;
		    margin-bottom: 1vh;
	}
	.qianZ{
		width: 94%;
		background-color: white;
		margin: 0 auto;
		border-radius: 5px;
		padding: 15px 15px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.jieCtwo{
		color: #ff6913;
   		 font-weight: 500;
	}
	.jieCtwo span{
		    color: #666;
	}
	.jieCon{
		overflow: hidden;
		line-height: 8vh;
	}
	.jieCone{
		float: left;
		font-size: 16px;
	}
	.jieCone i{
		    border: 1px solid #ccc;
	        border-radius: 3px;
            font-size: 12px;
            color: #666;
            font-style: normal;
            position: relative;
            padding: 1px;
            top: -1px;
	}
	.jieCone span{
		display: inline-block;
		border: 1px solid #ccc;
	    height: 18px;
  	 	 width: 18px;
   		 border-radius: 3px;
   		 position: relative;
   		 top: 4px;
	}
	.jieCtwo{
		float: right;
	}
	.jiePone{
		font-size: 16px;
   		 font-weight: bold;
   		 text-align: left;
   		 color: black;
   		 margin-bottom: 1vh;
   		 
	}
	.jiesong{
		width: 94%;
		margin: 0 auto;
		background-color: white;
		border-radius: 5px;
		padding: 15px 15px;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 1.5vh;
	}
	.nav{
		margin-top:2.5vh ;
		margin-bottom: 2vh;
	}
	.navPone{
		color: #666;
   		font-size: 12px;
   	 	line-height: 15px;
	}
	.navPtwo{
		color: #ff6913;
	    font-size: 16px;
    	line-height: 20px;
	}
	.midFoo{
		text-align: center;
		font-size: 12px;
		color: #999;
	}
	#flyTop{
		margin-top: 0;
	}
	.midFoo span{
	    color: #19a0f0;
	    padding: 0 5px;
	}
	.midFoo::before{
		
	}
	.flyMidFooter{
		margin-top: 5px;
	}
	.four{
		    color: #999;
		    font-size: 12px;
		    margin-left: 4px;
	}
	.fs{
		font-size: 12px;
		float: left;
		margin-left: 5px;
	}
	.fd{
		font-size: 12px;
		float: right;
		margin-right: 5px;
	}
	.teo{
		    
		    height: 1px;
		    background-color: #66ccef;
		    width: 50%;
		    display: inline-block;
		    position: relative;
		    top: -5px;
	}
	.teo::before{
		    content: "";
		    width: 4px;
		    height: 4px;
		    position: absolute;
		    top: -3px;
		    border-radius: 50%;
		    border:1px solid  #1ea0db;
		    left: -4px;
	}
	.teo::after{
			    content: "";
			    border-top: #66ccef 1px solid;
			    border-left: #66ccef 1px solid;
			    background: #fff;
			    border-radius: 50%;
			    width: 5px;
			    height: 5px;
		        position: absolute;
		        right: -5px;
		        top: -4px;
	}
	.miRight{
		color: #3e4d5b;
	    font-size: 22px;
	    font-weight: 500;
	     text-align: right;
	}
	.fsaPtwo{
		color: #999;
	    font-size: 14px;
	}
	.miRight1{
		color: #999;
	    font-size: 14px;
	    text-align: right;
	}
	.fsaPone{
		color: #3e4d5b;
	    font-size: 22px;
	    font-weight: 500;
	}
	.MidLeft{
		float: left;
		width: 33.3%;
	}
	.flyMidLeft{
		float: left;
		width: 33.3%;
		text-align: right;
		margin-top: 5px;
	}
	.MidRight{
		float: right;
		width: 33.3%;
	}
	.flyMidLeft1{
		overflow: hidden;
		margin-top: 1vh;
	}
	.flyTop{
		overflow: hidden;
		width: 100%;
		margin-top: 3.5vh;
	}
	.flyTickPone{
		float: left;
		font-size: 12px;
	}
	.flyTickPTne{
		font-size: 13px;
		text-align: right;
	}
	.flyTickPTne span{
		color: #fd5454;
	}
	.flyTickPone{
		width: 63%;
		font-size: 13px;
	}
	.flyTickPone span{
		color: #19a0f0;
	}
	main{
		background-color: #f0f3f6;
	}
	.tuipiaoOne{
		float: left;
		font-size: 16px;
  		font-weight: bold;
  		color: black;
	}
	.piaoPone{
		 color: #19a0f0;
		 font-size: 14px;
	}
	.tuipaoTwo{
		float: right;
	}
	.tuipaoTwo button{
		    border: 1px solid #666;
		    color: #666;
		   background-color: white;
		   border-radius: 3px;
		   float:right;
		   font-size: 12px;
		   margin-top: 2px;
	}
	.kong{
		height: 8.5vh;
	}
	.flyTick{
		    width: 92%;
		    box-sizing: border-box;
		    background-color: white;
		    margin: 0 auto;
		    border: 1px solid transparent;
		    border-radius: 6px;
	}
	.flyTickCon{
		text-align: left;
	    padding: 12px 15px;
	}
	.tuipiao{
		overflow: hidden;
	}
	.header{
		width: 100%;
		position: fixed;
		height: 7vh;
		background-color: white;
	}
	.heaIcon{
		position: absolute;
		left: 1vh;
		top: 1.5vh;
		font-size: 24px;
	}
	.heaPone{
	    line-height: 25px;
        font-size: 16px;
        color: black;
	}
	.heaPtwo{
		font-size: 13px;
		
	}
</style>