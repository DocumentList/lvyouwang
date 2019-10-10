<template>
	<main>
		<div class="header">
			<span class="iconfont icon-xiangzuo2" @click="back"></span>
			<span class="iconfont icon-sousuo"></span>
			<input type="text" placeholder="目的地/酒店/景点/航班号" />
			<span class="iconfont icon-error"></span>
			<span class="spn1">搜索</span>
		</div>
		<div class="hot">
			<p>热门搜索</p>
		</div>
		<div class="linum">
			<div v-for="(v,i) in list">
					<p>{{v.des}}</p>
					<span class="iconfont icon-jiantou-copy-copy-copy"></span>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						des:"机票"
					},
					{
						des:"酒店"
					},
					{
						des:"攻略社区"
					},
					{
						des:"门票"
					},
					{
						des:"旅游"
					},
					{
						des:"火车票"
					},
					{
						des:"团购"
					}
				]
			}
		},
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
		height: 40px;
		position: relative;
	    border-bottom: 1px solid #DDD;
		background-color: #e6f0f7;
		text-align: left;
	}
	.icon-xiangzuo2{
		display: inline-block;
		width: 8%;
		line-height: 40px;
		font-size: 25px;
		color: #8A9094;
		margin-left: 2%;
	}
	.icon-sousuo{
		position: absolute;
		top: 12px;
		left: 13%;
		z-index: 10;
		
	}
	.icon-error{
		position: absolute;
		top: 12px;
		left: 80%;
		z-index: 10;
	}
	.header input{
		position: relative;
		top: -4px;
		height: 25px;
		border-radius: 5px;
		width: 67%;
		border: 1px solid transparent;
		padding-left:7% ;
	}
	.spn1{
		color: #099fde;
		font-size: 15px;
		margin-left: 4px;
		margin-right: 10px;
		position: relative;
		top: -1px;
	}
	.hot{
		width: 100%;
		border-bottom: 1px solid #DDD;
	    font-size: 14px;
    	color: #666;
    	text-align: left;
    	line-height: 30px;
	}
	.hot p{
		width: 90%;
		margin: 0 auto;
		margin-top: 6px;
	}
	.linum{
		width: 100%;
	}
	.linum>div{
		width: 100%;
		padding:10px 35px;
		border-bottom: 1px solid #DDD;
		overflow: hidden;
	}
	.linum>div p{
		float: left;
	    color: #000;
	}
	.linum>div span{
		float: right;
		margin-right: 50px;
		font-size: 22px;
		color: #CCC;
	}
	
</style>