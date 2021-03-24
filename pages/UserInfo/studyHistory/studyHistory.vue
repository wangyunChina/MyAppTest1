<template>
	<view>
		<view v-if="hasTop" class="date1 posi-fix">
			{{studyHistory[currentTopIndex].date}}
		</view>
		<view class="container"  v-for="(item,index) in studyHistory">
			<view class="date" :data-index="index">
				{{item.date}}
			</view>
			
			<block v-for="(item1,index1) in item.studyHistory">
				<view class="word">
					<text>{{item1.word}}</text><view style="margin-left: 16px;font-size: 18px;overflow: hidden;text-overflow: ellipsis;">{{item1.mean}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultDays:7,
				tags:[{day:7,msg:"近七天"},{day:15,msg:"近十五天"},{day:30,msg:"近一个月"},{day:90,msg:"近三个月"}],
				currentTopIndex:-1,
				hasTop:false,
				studyHistory:[
						]
				
			}
		},
		methods: {
			onReady(){
				this.getServerData(defaultDays,0,0)
			},
			getServerData(userSelectdays,searchMode,userStartDay){
				let that=this;
				uni.showLoading()
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiUserStudyHistory,
					method:"POST",
					header:this.BaseProperties.header,
					data:{
						mode:searchMode,
						days:userSelectdays,
						startDay:userStartDay,
						cid:this.BaseProperties.header.cid,
					},
					complete:res=>{
						uni.hideLoading();
						if(res.data.code==200){
							if(searchMode==0){
								that.studyHistory=res.data.data;
							}else{
								for(var i=0;i<res.data.data.length;i++){
								that.studyHistory.push(res.data.data[i])
								}
							}
						}else{
							uni.showToast({
								title:"网络异常"
							},2000)
						}
					}
				})
			},
			onReachBottom(res){
				console.log(123)
				this.getServerData(3,1,this.defaultDays)
			},
			onPageScroll(res){
				let that=this;
			    var query = uni.createSelectorQuery().in(this);
				console.log(res)
				query.selectAll(".date").boundingClientRect(
				data => {  
					for(var i=0;i<data.length&&i+1<data.length;i++){
						if(data[i].top<0&&data[i+1].top>=0){
							that.currentTopIndex=i;
							console.log(that.currentTopIndex)
						}
						if(data[0].top>=0){
							that.hasTop=false;
						}
						if(data[i].top<0){
							that.hasTop=true;
						}
					}
				        }).exec();
			}
		}
	}
</script>

<style>
page{
	background-color: #fff;
}
.container{
	margin: 0px 10px 0px 10px;
	background: #FFFFFF;
}
.date{
	font-size: 22px;
	width: 100%;
	font-weight: 800;
	background: #fff;
}
.date1{
	font-size: 22px;
	width: 100%;
	font-weight: 800;
	background: #fff;
}
.posi-fix{
	position: fixed;
	top:44px;
	left: 10px;
}
.word{
	display: flex;
	flex-direction: row;
	overflow-x: hidden;
	height: 5vh;
	font-size: 18px;
	padding: 12px 0 12px 0;
	border-bottom: 1px #CCCCCC solid;
}
</style>
