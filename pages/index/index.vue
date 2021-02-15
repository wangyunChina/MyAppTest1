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
		<div id="bookShell">
		<navigator url="../study/study?testType=1"><book bookFace="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=164125324,684919824&fm=26&gp=0.jpg" bookName="大学英语四级" bookStatus="20" ></book></navigator>
		<book bookFace="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=164125324,684919824&fm=26&gp=0.jpg" bookName="大学英语四级" bookStatus="20"></book>
		<book bookFace="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=164125324,684919824&fm=26&gp=0.jpg" bookName="大学英语四级" bookStatus="20"></book>
		<book bookFace="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=164125324,684919824&fm=26&gp=0.jpg" bookName="大学英语四级" bookStatus="20"></book>
		</div>
	</view>
</template>

<script>
	import book from "../../components/book/book.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navigateToStudy:function(){
				uni.navigateTo({
					url:"../study/study"
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
