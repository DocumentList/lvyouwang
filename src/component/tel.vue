<template>
	<main>
		<div class="header">
			<span class="iconfont icon-xiangzuo3" @click="back"></span>
			<p>手机号查单</p>
		</div>
		
		<div class="content">
			<div class="conTop">
				<div class="conTopC">
					<div class="conTopC-left">
						<p>国家/地区</p>
						<p>手机号</p>
						<p>验证码</p>
					</div>
					<div  class="conTopC-right">
						<p> <i>中国 86</i> <span class="iconfont icon-xiangyou"></span></p>
						<p> <input type="text" placeholder="请输入订单联系人手机号"/></p>
						<p> <input type="text" placeholder="请输入6位数字" /></p>
						<button>发送验证码</button>
					</div>
				</div>
			<div class="conButtom">
				<button>查询</button>
			</div>	
			</div>
		</div>
		<div class="footer">
			<p>可支持查询最近1年的订单（火车票仅限最近1月）</p>
			<p>提示：未注册携程账号的手机号，查单时将自动注册，且代表您已同意我们的 
				<a href="">服务协议</a> 和 <a href=""> 隐私政策</a></p>
		</div>
	</main>
</template>

<script>
	
	export default {
		
		mounted(){
				$(function(){
					/*$("input").click(function(){
		    		$(this).css("border","none");
		    			})*/
				})
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style >
	input{
		outline: none;
	}
</style>
<style scoped>
	main{
		width: 100vw;
		height: 100vh;
		background-color: #E9EBEE;
	}
	.header{
		width: 100%;
		line-height: 44px;
		overflow: hidden;
		background-color: white;
	}
	.header span{
		float: left;
		line-height: 44px;
		font-size: 25px;
		margin-left:10px ;
	}
	.header p{
		line-height: 44px;
		font-size: 18px;
		box-sizing: border-box;
		color: #333333;
	}
	.content{
		width: 100%;
		background-color: #E9EBEE;
		border: 1px solid transparent;
	}
	.conTop{
		width: 95%;
		margin: 0 auto;
		background-color: white;
		margin-top: 20px;
			}
	.conTop .conTopC{
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
		text-align: left;
		border-bottom: 1px solid #BCBCBC ;
		box-sizing: border-box;
		position: relative;
	}
	.conTopC-left{
		float: left;
		/*margin-right: 15px;*/
		width: 30%;
	}
	.conTopC-right{
		float: left;
		width: 70%;
	}
	.conTopC-left p{
		line-height: 43px;
		font-size: 16px;
		color: #666;
	}
	.conTopC-right p{
		line-height: 43px;
		font-size: 16px;
	}
	.conTopC-right input{
		box-sizing: border-box;
		line-height: 43px;
		border: none;
	}
	.conTopC-right i{
		font-size: 14px;
		font-style: normal;
		color: black;
	}
	.conTopC-right>p>span{
		float: right;
		color: #ccc;
	}
	.conTopC-right button{
		position: absolute;
		right: 1%;
		bottom: 12px;
		background-color: #EFEFEF;
		border: 1px solid #DBDBDB;
		color: #CCC ;
		line-height: 23px;
		width: 26%;
		border-radius: 3px;
	}
	.conButtom {
		width: 95%;
		margin: 15px auto;
	}
	.conButtom button{
		width: 95%;
		line-height: 44px;
		background-color: #ff9a14;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size:16px ;
		margin-bottom: 25px;
	}
	.footer{
		width: 95%;
		margin: 0 auto;
		text-align: left;
	}
	.footer p:nth-of-type(1){
		color: #999;
		font-size: 12px;
	}
	.footer p:nth-of-type(2){
		color: #999;
		font-size: 12px;
		margin-top: 15px;
	}
	.footer p a{
		text-decoration: none;
		color: #099fde;
	}
	
</style>