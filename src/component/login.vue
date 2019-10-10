<template>
	<main>
		<div class="header">
			<span class="iconfont icon-xiangzuo3" @click="back"></span>
			<router-link to="/register" class="spn2"><span id="spn3">注册</span></router-link>
		</div>
		<div class="content1">
			<p>携程账号登录</p>
		</div>
		<div class="ipn">
			<input type="text" placeholder="国内手机号/用户名/邮箱/卡号" /><br>
			<input type="text" placeholder="登录密码" />
			<p>找回密码</p>
		</div>
		<div class="btn2">
			<button>登录</button>
			<p class="p1">手机快捷登录</p>
			<p class="p2">境外手机登录</p>
		</div>
		<div class="mid">
			<div>
				<p class="pone">
				<span class="one"></span>
				</p>
			</div>
			<div>
				<p class="ptwo">
				<span class="two"></span>
				</p>
			</div>
			<div>
				<p class="pthere">
				<span class="there"></span>
				</p>
			</div>
		</div>
		<div class="footer">
			<p>
				登录即代表您同意我们的
				<a href="">服务协议</a>和
				<a href="">隐私政策</a>
				
			</p>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		overflow: hidden;
	}
	.header span:nth-of-type(1){
		float: left;
		font-size: 23px;
		margin: 3% 2.5%;
	}
	.spn2{
		float: right;
		color: #099fde;
		margin: 3% 1%;
	}
	#spn3{
		display: inline-block;
		font-size: 16px;
		width: 40px;
	}
	.content1{
		width: 100%;
		border: 1px solid transparent;
	}
	.content1 p{
		color: #333;
		font-size: 25px;
		margin:10% auto;
	}
	.ipn{
		width: 90%;
		margin: 7% auto;
		position: relative;
	}
	.ipn input{
		width: 100%;
		height: 55px;
		border: none;
		border-bottom: 1px solid #BCBCBC;
		font-size: 16px;
	}
	.ipn>p{
		position: absolute;
		right: 3%;
		bottom: 16%;
		color: #099FDE;
		font-size: 13px
	}
	.btn2{
		width: 90%;
		margin: 0 auto;
	}
	.btn2 button{
		width: 100%;
		background-color: #ff9a14;
		border: 1px solid transparent;
		color: white;
		border-radius: 4px;
		font-size: 17px;
		line-height: 40px;
		margin-bottom: 5%;
	}
	.p1{
		float: left;
	}
	.p2{
		float: right;
	}
	.mid{
		width: 100%;
		margin-top:180px;
		overflow: hidden;
	}
	.mid div{
		float: left;
		width: 33.3%;
	}
	.mid span{
		display: inline-block;
		width: 45px;
		height: 36px;
		background: url(../assets/img/un_other_login@2x_v6.22.png) no-repeat;
		background-size: 41px auto;
		position: relative;
		top: 6px;
	}
	.mid div >p{
		width: 55px;
		height: 55px;
		margin: 0 auto;
		border-radius: 50%;
	}
	.mid .pone{
		border: 1px solid rgba(87,196,94,0.6);
	}
	.mid .ptwo{
		border: 1px solid  rgba(98,121,231,0.6);
	}
	.mid .pthere{
		border:1px solid   rgba(247,105,104,0.6);
	}
	 .mid .one{
		background-position:1px -32px ;
		
	}
	 .mid .two{
		background-position:1px -71px ;
		
	}
	 .mid .there{
		background-position: 3px -106px;
		
	}
	.footer{
		width: 100%;
		margin-top:20px ;
	}
	.footer p{
		margin-top: 10px;
		font-size: 12px;
		color: #999;
	}
	.footer p a{
		color: #099fde;
		text-decoration: none;
	}
</style>