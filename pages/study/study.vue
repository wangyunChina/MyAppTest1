<template>
	<view style="margin-left: 10px;margin-right: 10px;">
		<block v-if="currentWord.word==''">
			<loading :loadModal="currentWord.word==''"></loading>
		</block>
		<block v-else>
		<div style="font-size: 30px;color: #8A6DE9;"><h2>{{currentWord.word}}</h2></div>
		<div v-show="selectRight==true" id="detatil">
			<div id="yinbiao">
				<div class="yinbiao_item" v-show="currentWord.detail.usPhonetic!=''&&currentWord.detail.usPhonetic!=null">
					<span>美国</span><span>[{{currentWord.detail.usPhonetic}}]</span><image src="../../static/voice.png" :data-voice="currentWord.detail.usSpeech" @click="play"></image>
				</div>
				<div class="yinbiao_item" v-show="currentWord.detail.ukPhonetic!=''&&currentWord.detail.ukPhonetic!=null" >
					<span>英国</span><span>[{{currentWord.detail.ukPhonetic}}]</span><image src="../../static/voice.png" :data-voice="currentWord.detail.ukSpeech" @click="play"></image>
				</div>
			</div>
			<div id="translate" v-for="(item,index) in currentWord.detail.explain">{{item}}
			</div>
			<HR align=center width="100%" color=#987cb9 SIZE=3 style="margin: 8px 0;"></HR>
			<div id="webDetail">
					<h3>网络释义</h3>
					<div v-for="(item,index) in currentWord.detail.webDetail">
						<span style="color: #8A6DE9;font-size: 18px;">{{item.key}}:</span>
						<span v-for="(value) in item.value" style="font-size: 15px;">
							{{value}}; 
						</span>
					</div>
			</div>
			<HR align=center width="100%" color=#987cb9 SIZE=3 style="margin: 8px 0;"></HR>
			<div id="sentence">
				<h3>经典例句</h3>
				<div v-for="(item) in currentWord.detail.exampleSentence">
					<div>
						<span style="font-size: 15px;">{{item.englishExample}}</span><br>
						<span>————{{item.translate}}</span>
					</div>
					<div style="text-align:right;">{{item.comeFrom}}</div>
				</div>
			</div>
			<div id="chart" v-if="list!=null&&list.length>0">
			<HR align=center width="100%" color=#987cb9 SIZE=3 style="margin: 8px 0;"></HR>
				<h3>数据统计</h3>
				<jpCharts v-if="list!=null&&list.length>0" :list="list" :Y="Charts.Y" :X="Charts.X" :keyId="Charts.keyId" :width="Charts.width" :bgColor="Charts.bgColor" :height="Charts.height" :canClick="Charts.canClick" :x_width="Charts.x_width" :items="items" :proportion="Charts.proportion" :checkedColor="Charts.checkedColor" :scrollLeft="100"></jpCharts>
			</div>
			<div style="height:20vh ;">
				
			</div>
			<div id="buttons">
				<div style="margin-left:5vw;width: 30vw;text-align: center;font-size: 15px;padding: 15px;" v-on:click="preWord" >上一个</div><div v-on:click="nextWordFunc" style="margin-right:5vw;width: 60vw;justify-content: center;text-align: center;display:flex;flex-direction:row;font-size: 25px;align-items: center;"><div>下一个</div><image src="../../static/next.png" style="width: 27px;margin-left: 8px;height: 27px;"></image></div>
			</div>
		</div>
		<div v-show="!selectRight" id="optionBox">
			<div style="margin: 35rpx 0;" v-for="(item,index) in currentWord.option">
				<myOption v-show="!selectRight" :optionText="item.mean" @input="setScore" :isCorrect="item.correct"></myOption>
			</div>
		</div>
		</block>
	</view>
</template>

<script>
	import myOption from "../../components/myOption.vue";
	import jpCharts from '../../components/jp-charts/index.vue';
	import loading from '../../components/ming1027-loading/loading.vue'
	export default {
		onLoad(request) {
			console.log(request)
			this.bookType=request.testType
			this.nextWordFunc();
		},
		data() {
			return {
				Charts: { //y轴配置 value在list中的键 showY是否一直显示数据 size字大小 units文字后缀
				 Y: {
				 value: 'count',
				 showY: true,
				 size: 20,
				 units: '次'
				 },
				 X: {
				 value: 'testTime',
				 showX: true,
				 size: 20,
				 units: ''
				 },
				 keyId: 'keyw',
				 list: [],
				 items: {},
				 width: 750,
				 height: 530,
				 x_width: 180,
				 proportion: 30, //宽度占比
				 showZ: false, //是否显示线条
				 checkedColor: '#007aff',
				 canClick: true, //不可以点击
				 bgColor: '#9198e5',
				 scrollLeft: 0
				 },
				 list: [],
				 items: {
				 keyw: '03',
				 value: 110
				 },
				selectRight:false,
				bookType:0,
				histroyWordStackTop:0,
				histroyWord:[],
				currentWord:{
					score:8,
					word:"",
					selectIndex:"",
					option:[],
					isShowDetail:false,
					detail:{
						usPhonetic:"",
						ukPhonetic:"",
						usSpeech:"",
						ukSpeech:"",
						explain:[],
						webDetail:[],
						exampleSentence:[]
					}
				},
				nextWord:[]
				
			}
		},
		methods: {
		setScore:function(res){
			console.log(res)
			if(res){
				this.selectRight=true
				uni.request({
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiStudyWord,
					method:"POST",
					header:this.BaseProperties.header,
					data:{
						"testType":this.bookType,
						"score":this.currentWord.score,
						"word":this.BaseProperties.header.cid,
						"word":this.currentWord.word
					}})
					this.play({
						currentTarget:{
							dataset:{
								voice:this.currentWord.detail.usSpeech
							}
						}
					})
			}else{
				this.currentWord.score=this.currentWord.score/2;
			}
		},
		play:function(e){
			console.log(e)
			let voice=e.currentTarget.dataset.voice;
			const innerAudioContext = uni.createInnerAudioContext();
			
			innerAudioContext.autoplay = true;
			innerAudioContext.src = voice;
			innerAudioContext.onPlay(() => {
			  console.log('开始播放');
			});
			innerAudioContext.onError((res) => {
			  console.log(res);
			  console.log(res);
			});
		},
		nextWordFunc:async function(){
			
			if(this.nextWord.length>0){
			var newObj = JSON.stringify(this.currentWord)
			
			this.histroyWord.push(JSON.parse(newObj))		
			}
			  this.nextWords(this.bookType)
			
			this.lineChart();
			this.histroyWordStackTop=this.histroyWord.length;
		
		},
		preWord:function(){
			if(this.histroyWord.length>0){
				this.currentWord=this.histroyWord.pop();
			}
		},
		nextWords:function(testType){
		
				let that=this;
				if(this.nextWord.length<3){
				uni.request({
						url:this.BaseProperties.baseUrl+this.BaseProperties.apiNextWords,
						method:"POST",
						header:this.BaseProperties.header,
						data:{
							"testType":testType
						},
						success:(res)=>{
							if(res!=null&&res.statusCode==200){
								for(var item=0;item<res.data.data.words.length;item++){
									that.nextWord.push(res.data.data.words[item])
								}
								var word1=that.nextWord.pop();
								that.currentWord.word=word1.word;
								that.currentWord.option=word1.options;
								that.currentWord.score=8;
								that.selectRight=false;
								let response=word1.detail;
								that.currentWord.detail.usPhonetic=response.translation.basic.usPhonetic;
								that.currentWord.detail.ukPhonetic=response.translation.basic.ukPhonetic;
								that.currentWord.detail.usSpeech=response.translation.basic.usSpeech;
								that.currentWord.detail.ukSpeech=response.translation.basic.ukSpeech;
								that.currentWord.detail.explain=response.translation.basic.explains;
								that.currentWord.detail.webDetail=response.translation.web;
								that.currentWord.detail.exampleSentence=response.example;	
								console.log(this.currentWord)
							}
							
						},fail(res) {
							if(res.statusCode==401)
							{
								uni.navigateTo({
										url:"../login/login"
									})
							}
						}
					})
				}else{
				var word1=this.nextWord.pop();
				this.currentWord.word=word1.word;
				this.currentWord.option=word1.options;
				this.currentWord.score=8;
				this.selectRight=false;
				let response=word1.detail;
				this.currentWord.detail.usPhonetic=response.translation.basic.usPhonetic;
				this.currentWord.detail.ukPhonetic=response.translation.basic.ukPhonetic;
				this.currentWord.detail.usSpeech=response.translation.basic.usSpeech;
				this.currentWord.detail.ukSpeech=response.translation.basic.ukSpeech;
				this.currentWord.detail.explain=response.translation.basic.explains;
				this.currentWord.detail.webDetail=response.translation.web;
				this.currentWord.detail.exampleSentence=response.example;	
				console.log(this.currentWord)		
				}
		
			
		},
		wordDetail: function(){
			if(this.currentWord.word!=null&&this.currentWord.word!=""){
				uni.request({
					method:"GET",
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiWordDetail+"?query="+this.currentWord.word,
					header:this.BaseProperties.header,
					success:res=>{
						let response=res.data.data
						console.log("----------翻译结果------------")
						console.log(response)
						this.currentWord.detail.usPhonetic=response.translation.basic.usPhonetic;
						this.currentWord.detail.ukPhonetic=response.translation.basic.ukPhonetic;
						this.currentWord.detail.usSpeech=response.translation.basic.usSpeech;
						this.currentWord.detail.ukSpeech=response.translation.basic.ukSpeech;
						this.currentWord.detail.explain=response.translation.basic.explain;
						this.currentWord.detail.webDetail=response.translation.web;
						this.currentWord.detail.exampleSentence=response.example;	
					},
					fail(res) {
						if(res.statusCode==401)
						{
							uni.navigateTo({
									url:"../login/login"
								})
						}
					}
				})
			}
		},
		 lineChart: function(){
			if(this.currentWord.word!=null&&this.currentWord.word!=""){
				uni.request({
					method:"GET",
					url:this.BaseProperties.baseUrl+this.BaseProperties.apiWordChart+"?word="+this.currentWord.word+"&type="+this.bookType,
					header:this.BaseProperties.header,
					success:res=>{
						console.log("---------统计图----------")
						let response=res.data;
						console.log(response)
						this.list=response.originalData;
					}
					})
			}
		}
		},
		components:{myOption,jpCharts,loading}
	}
</script>

<style>
#optionBox{
	margin-top: 40vh;
	padding: 0 10vw;
}
#yinbiao{
	
}
.yinbiao_item {
	display: flex;
	flex-direction: row;
}
.yinbiao_item span{
	font-style: italic;
}
.yinbiao_item image{
	width: 5vw;
	height: 4vh;
	margin-left: 5vw;
}
#translate{
	font-size: 16px;
	font-weight: 600;
}
#buttons{
	display: flex;
	flex-direction: row;
	position: fixed;
	z-index: 999;
	top:90vh;
	right: 0;
	height: 10vh;
	width: 100vw;
	background: #fff;
	box-shadow:-3px -3px 4px #ccc;
	align-items: center;
}
.line{
	width: 100vw;
	height: 2vh;
	color: #323233;
}
</style>
