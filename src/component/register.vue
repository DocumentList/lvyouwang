<template >
	<main>
		<div class="header">
			<span class="iconfont icon-xiangzuo3" @click="back"></span>
			<p>注册 <span> 1/3</span></p>
		</div>
		<div class="content">
			<p>输入手机号</p>
		</div>
		
		<div  class="conTopC-right">
			<p> <i>中国大陆 86</i> <span class="iconfont icon-xiangyou"></span></p>
			<input type="text" placeholder="常用手机号" />
		</div>
		<div class="btn">
			<button>下一步，验证手机号</button>
		</div>
		<div class="footer">
			<p>
				注册即代表您同意我们的 <span>服务协议</span> 和 <span>隐私政策</span>
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
		height: 5vh;
		position: relative;
	}
	.header>span{
		position: absolute;
		left: 1%;
		top: 15%;
		font-size: 23px;
		color: #099FDE;
	}
	.header p{
		line-height:5vh ;
		color: #999; ;
	}
	.content{
		width: 100%;
		height: 20vh;
	}
	.content{
		width: 100%;
		line-height: 20vh;
		font-size: 25px;
		color: #333;
	}
	.conTopC-right{
		width: 85%;
		text-align: left;
		margin: 0 auto;
		margin-top: 10px;
	}
	.conTopC-right p {
		line-height: 49px;
	}
	.conTopC-right p i{
		font-style: normal;
		font-size: 16px;
		color: black;
	}
	.conTopC-right p  span{
		float: right;
		font-weight: bold;
		color: #ccc;
		margin-top: 2px;
	}
	.conTopC-right input{
		width: 100%;
		line-height: 24px;
		border: none;
		height: 49px;
	}
	input::-webkit-input-placeholder {
       font-size: 16px;
       outline: none;
    }
    input{
    	outline: none;
    }
	.btn{
		width: 85%;
		margin: 10% auto;
	}
	.btn button{
		background-color: #ff9a14;
		color: #fff;
		border: 0 none;
		border-radius: 5px;
		line-height: 44px;
		width: 100%;
		font-size: 17px;
	}
	.footer{
		width: 100%;
	}
	.footer p{
		color: #999;
		font-size: 13px;
	}
	.footer p span{
		color: #099fde;
	}
</style>