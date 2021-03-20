<template>
	<view>
		<view>
		    <uni-calendar 
		    :insert="true"
		    :lunar="true" 
		    @change="change"
			:selected="recordLine"
		     />
		</view>
		<view v-if="button.disabled" class="button-absolute">
				<button class="button" @click="setRecord()" style="vertical-align:middle"><span>点击签到 </span></button>
		</view>
		<view v-else class="">
			
		</view>
	</view>
</template>

<script>
	/*
	接口一：签到历史
	接口二：签到
	接口三：当天学习记录
	*/
	export default {
		data() {
			return {
				button:{
					text:"已签到",
					disabled:true
				},
				recordLine:[
					]
			};
		},
		onShow() {
			if(this.recordLine.length==0){
				//@todo 获取打卡记录；
				this.getServerData("");
			}
			else{
				this.hasRecord();
			}
		},
		methods:{
			getServerData:function(request){
				let that=this;
				uni.showLoading({
					title:"正在加载数据..."
				})
				if(request==null||request==undefined||request==""||!request instanceof Date.class){
						request=new Date();
				}
				console.log(this.BaseProperties.header);
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiGetUserRecord,
					header:this.BaseProperties.header,
					method:"POST",
					data:{
							"cid": this.BaseProperties.header.cid,
							"month": request.getMonth()+1,
							"year": request.getUTCFullYear()
						},
					complete:(res)=>{
						let response=res.data;
						if(response.code==200){
							that.recordLine=response.data;
							that.hasRecord();
							uni.hideLoading();
						}else{
							uni.hideLoading();
							uni.showToast({
								title:"网络错误",
							},2000)
						}
					}
				})
			},
			hasRecord:function(){
				var date = new Date();
				var year=date.getUTCFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				var toDay=year+"-"+(month<10?"0"+month:month)+"-"+(day<10?"0"+day:day);
				console.log(toDay)
				for(var i=0;i<this.recordLine.length;i++){
					console.log(this.recordLine[i].date==toDay)
					if(this.recordLine[i].date==toDay){
						
						this.button.disabled=false;	
						return toDay;
					}
				}
				this.button.disabled=true;
				return toDay;
			},
			setRecord:function(){
				var toDay=this.hasRecord();
				let that=this;
				if(this.button.disabled){
					uni.showLoading({
						title:"提交中..."
					})
					uni.request({
						url:this.BaseProperties.baseUrl+this.BaseProperties.apiMakeUserRecord,
						header:this.BaseProperties.header,
						method:"POST",
						data:{
							"cid": this.BaseProperties.header.cid,
							"date": toDay,
						},
						complete: (res) => {
							let response=res.data;
							if(response.code==200){
								that.recordLine.push({
									date: toDay,
									info: '已签到'
								})
								that.button.disabled=false;
								that.change({fulldate:toDay})
								uni.hideLoading();
							}else{
								uni.hideLoading();
								uni.showToast({
									title:response.message,
								},2000)
							}
						}
					})
					
		
				}
			},
			change:async function(res){
				console.log(res)
			}
		}
	}
</script>

<style>
.button-absolute{
	 padding-top:15vh ;
	 height: 15vh;
	 align-items: center;
}
.button{
	background-color: #000000;
	color: #fff;
}

</style>
