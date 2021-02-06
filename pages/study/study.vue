<template>
	<view style="margin-left: 10px;margin-right: 10px;">
		<div style="font-size: 30px;color: #000000;">{{currentWord.word}}</div>
		<div id="optionBox">
			<div style="margin: 35rpx 0;" v-for="(item,index) in currentWord.option">
				<myOption :optionText="item.translate" :isCorrect="item.isCorrect"></myOption>
			</div>
		</div>
	</view>
</template>

<script>
	import myOption from "../../components/myOption.vue";
	export default {
		data() {
			return {
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
						explain:["v. 预言，预知，预卜；做预报；断言"],
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
	
		},
		components:{myOption}
	}
</script>

<style>
#optionBox{
	margin-top: 40vh;
	padding: 0 10vw;
}
</style>
