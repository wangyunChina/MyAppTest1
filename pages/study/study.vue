<template>
	<view style="margin-left: 10px;margin-right: 10px;">
		<div style="font-size: 30px;color: #000000;">{{currentWord.word}}</div>
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
			<div id="webDetail">
					<div>网络释义</div>
					<div v-for="(item,index) in currentWord.detail.webDetail">
						<span>{{item.key}}:</span>
						<span v-for="(value) in item.value">
							{{value}}
						</span>
					</div>
			</div>
			<div id="sentence">
				<div>经典例句</div>
				<div v-for="(item) in currentWord.detail.exampleSentence">
					<div>
						<span>{{item.englishExample}}</span>
						<span>————{{item.translate}}</span>
					</div>
					<div style="text-align:right;">{{item.comeFrom}}</div>
				</div>
			</div>
			<div id="chart">
				<div>数据统计</div>
				<jpCharts v-if="list!=null&&list.length>0" :list="list" :Y="Charts.Y" :X="Charts.X" :keyId="Charts.keyId" :width="Charts.width" :bgColor="Charts.bgColor" :height="Charts.height" :canClick="Charts.canClick" :x_width="Charts.x_width" :items="items" :proportion="Charts.proportion" :checkedColor="Charts.checkedColor" :scrollLeft="100"></jpCharts>
			</div>
			<div id="buttons">
				<div style="margin-left:5vw;width: 30vw;text-align: center;font-size: 15px;padding: 15px;">上一个</div><div v-on:click="nextWordFunc" style="margin-right:5vw;width: 60vw;text-align: center;font-size: 25px;">下一个</div>
			</div>
		</div>
		<div v-show="!selectRight" id="optionBox">
			<div style="margin: 35rpx 0;" v-for="(item,index) in currentWord.option">
				<myOption v-show="!selectRight" :optionText="item.mean" @input="setScore" :isCorrect="item.correct"></myOption>
			</div>
		</div>
	</view>
</template>

<script>
	import myOption from "../../components/myOption.vue";
	import jpCharts from '../../components/jp-charts/index.vue';
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
				 bgColor: '#fff',
				 scrollLeft: 0
				 },
				 list: [],
				 items: {
				 keyw: '03',
				 value: 110
				 },
				selectRight:false,
				bookType:0,
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
			  console.log(res.errMsg);
			  console.log(res.errCode);
			});
		},
		nextWordFunc:async function(){
			if(this.nextWord.length>0){
			this.histroyWord.push(this.currentWord)		
			}
			  this.nextWords(this.bookType)
			
			this.lineChart();
			
		
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
								that.currentWord.detail.explain=response.translation.basic.explain;
								that.currentWord.detail.webDetail=response.translation.web;
								that.currentWord.detail.exampleSentence=response.example;	
								console.log(this.currentWord)
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
				this.currentWord.detail.explain=response.translation.basic.explain;
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
		components:{myOption,jpCharts}
	}
</script>

<style>
#optionBox{
	margin-top: 40vh;
	padding: 0 10vw;
}
#yinbiao{
	display: flex;
	flex-direction: row;
	margin: 5px 5px;
}
.yinbiao_item {
	display: flex;
	flex-direction: row;
	margin: 0 5px;
}
.yinbiao_item span{
	font-style: italic;
	margin: 0 5px;
}
.yinbiao_item image{
	width: 5vw;
	height: 4vh;
}
#translate{
	font-size: 16px;
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
}
#chart{
	margin-bottom: 20vh;
}
</style>
