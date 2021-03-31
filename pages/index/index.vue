<template>
	<view>
		<!--
		用户进入学习：
		step1：展示单词  翻译和3个相关错误翻译让用户选择
		step2：后台记录用户选择结果，展示单词翻译、音标、读音、例句、图标
		接口
		1、根据用户推荐未学习和学习错误的单词和相关错误翻译。
		2、学习记录接口，兼具插入和更新功能。
		3、单词详情接口。展示单词翻译、音标、读音、例句、图标
		-->
		<div id="bookShell" >
			<div v-for="item in bookList">
				<navigator :url="item.bookType">
				<book :bookFace="item.bookPicture" :bookName="item.bookName" :bookStatus="item.unstudyWords" ></book>
				</navigator>
			</div>
		</div>
	</view>
</template>

<script>
	import book from "../../components/book/book.vue"
	export default {
		data() {
			return {
				bookList:[
				
				]
			}
		},
		onShow(){
			console.log(1);
		this.init();
		},
		methods: {
			navigateToStudy:function(){
				uni.navigateTo({
					url:"../study/study"
				})
			},
			init:function(){
			if(this.BaseProperties.isLogin==false){
				uni.navigateTo({
					url:"../login/login"
					
				})
			}
				uni.showLoading({
					title:"加载中..."
				})
				let that=this;
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiBookChat,
					data:{"cid":this.BaseProperties.header.cid},
					header:this.BaseProperties.header,
					method:"POST",
					success:res=>{
						uni.hideLoading();
						console.log("书架请求成功：",JSON.stringify(res))
						if(res.statusCode===200){
							let data =  res.data.data;
							for(var i=0;i<data.length;i++){
								data[i].bookType="../study/study?testType="+data[i].bookType;
								data[i].bookPicture=that.BaseProperties.staticFilePath+that.BaseProperties.apiFileRead+data[i].bookPicture;
							}
							console.log("数据处理完毕",JSON.stringify(data))
							that.bookList=data;
						}
					},
					fail:res=>{
						uni.hideLoading();
					},
				})
			}
		},
		components:{book}
	}
</script>

<style>
#bookShell{
	margin:10px ;
	display: flex;
	flex-wrap: wrap;
}
</style>
