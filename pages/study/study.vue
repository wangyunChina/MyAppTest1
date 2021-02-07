<template>
	<view style="margin-left: 10px;margin-right: 10px;">
		<div style="font-size: 30px;color: #000000;">{{currentWord.word}}</div>
		<div v-show="selectRight==true" id="detatil">
			<div id="yinbiao">
				<div class="yinbiao_item" v-show="currentWord.detail.usPhonetic!=''&&currentWord.detail.usPhonetic!=null">
					<span>美国</span><span>[{{currentWord.detail.usPhonetic}}]</span><image src="../../static/voice.png" :data-voice="currentWord.detail.usSpeech" @click="play"></image>
				</div>
				<div class="yinbiao_item" v-show="currentWord.detail.ukPhonetic!=''&&currentWord.detail.ukPhonetic!=null" >
					<span>英国</span><span>[{{currentWord.detail.usPhonetic}}]</span><image src="../../static/voice.png" :data-voice="currentWord.detail.usSpeech" @click="play"></image>
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
				<jpCharts v-if="list.length>0" :list="list" :Y="Charts.Y" :X="Charts.X" :keyId="Charts.keyId" :width="Charts.width" :bgColor="Charts.bgColor" :height="Charts.height" :canClick="Charts.canClick" :x_width="Charts.x_width" :items="items" :proportion="Charts.proportion" :checkedColor="Charts.checkedColor" :scrollLeft="100"></jpCharts>
			</div>
			<div id="buttons">
				<div style="margin-left:5vw;width: 30vw;text-align: center;font-size: 15px;padding: 15px;">上一个</div><div style="margin-right:5vw;width: 60vw;text-align: center;font-size: 25px;">下一个</div>
			</div>
		</div>
		<div v-show="!selectRight" id="optionBox">
			<div style="margin: 35rpx 0;" v-for="(item,index) in currentWord.option">
				<myOption :optionText="item.translate" :isCorrect="item.isCorrect"></myOption>
			</div>
		</div>
	</view>
</template>

<script>
	import myOption from "../../components/myOption.vue";
	import jpCharts from '../../components/jp-charts/index.vue';
	export default {
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
				 list: [{
      "id": 23676,
      "word": "start",
      "count": 5,
      "testType": 1,
      "testTime": "2013年12月"
    },
    {
      "id": 24961,
      "word": "start",
      "count": 2,
      "testType": 1,
      "testTime": "2014年06月"
    },
    {
      "id": 26224,
      "word": "start",
      "count": 3,
      "testType": 1,
      "testTime": "2014年12月"
    },
    {
      "id": 27521,
      "word": "start",
      "count": 7,
      "testType": 1,
      "testTime": "2015年06月"
    },
    {
      "id": 29747,
      "word": "start",
      "count": 2,
      "testType": 1,
      "testTime": "2017年12月"
    },
    {
      "id": 31928,
      "word": "start",
      "count": 1,
      "testType": 1,
      "testTime": "2019年06月"
    }],
				 items: {
				 keyw: '03',
				 value: 110
				 },
				selectRight:true,
				bookType:"四级",
				histroyWord:[],
				currentWord:{
					word:"predict",
					selectIndex:"",
					option:[{translate:"v.预言",isCorrect:true},{translate:"v.飞行",isCorrect:false},{translate:"v.预言",isCorrect:false},{translate:"v.预言",isCorrect:false}],
					isShowDetail:false,
					detail:{
						usPhonetic:"prɪˈdɪkt",
						ukPhonetic:"prɪˈdɪkt",
						usSpeech:"http://openapi.youdao.com/ttsapi?q=predict&langType=en&sign=64F8A2CE7121C73391C764E43BCD0019&salt=1612589725569&voice=6&format=mp3&appKey=05af16dfb0899f79&ttsVoiceStrict=false",
						ukSpeech:"http://openapi.youdao.com/ttsapi?q=predict&langType=en&sign=64F8A2CE7121C73391C764E43BCD0019&salt=1612589725569&voice=5&format=mp3&appKey=05af16dfb0899f79&ttsVoiceStrict=false",
						explain:["v. 预言，预知，预卜；做预报；断言","n. 预告 "],
						webDetail:[{
						value: [
            "预测",
            "预知",
            "预报"
          ],
          key: "predict"
        },
        {
          value: [
            "难以预料",
            "难测"
          ],
          key: "Difficult to predict"
        },
        {
          value: [
            "专家预测",
            "据专家预测"
          ],
          key: "Experts predict"
        }],
						exampleSentence:[
							{
							        englishExample: "1. For example, imagine manually calculating the trajectory of a thrown baseball in order to predict where it lands.",
							        translate: "比如，我们来想像一下我们如何计算飞行中的棒球的轨迹，从而预测出落地的地点。",
							        comeFrom: "-- 来源 -- About Face 3交互设计精髓"
							      },
							      {
							        englishExample: "2. Electromagnetic theory was able to predict the mechanism of the reflection.",
							        translate: "电磁理论能够推算出反射的作用过程。",
							        comeFrom: "-- 来源 -- 英汉 - 辞典例句"
							      }
						],
						lineChartData:[
								[
							      1312,
							      5
							    ],
							    [
							      1406,
							      2
							    ],
							    [
							      1412,
							      3
							    ],
							    [
							      1506,
							      7
							    ],
							    [
							      1712,
							      2
							    ],
							    [
							      1906,
							      1
							    ]
						]
					}
				},
				nextWord:{}
			}
		},
		methods: {
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
</style>
