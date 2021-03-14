<template>
	<view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">记忆曲线</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasArea')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchIt($event,'canvasArea')"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {
	};
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 30, //x轴单屏数据密度
				sliderMax: 50,
				Area : {
							categories:["2012","2013","2014","2015","2016","2017","2018"],
							series:
							[{
								name:"成交量A",
								data:[100,80,95,150,112,132,20],
								color:"#facc14"
								},
								{name:"成交量B",
								data:[70,40,65,100,44,68,50],
								color:"#2fc25b"
								},
								{name:"成交量C",
								data:[35,20,25,37,4,20,60],
								color:"#1890ff"},
								]
						}
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.cWidth2 = uni.upx2px(700);
			this.cHeight2 = uni.upx2px(1100);
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);
			this.gaugeWidth = uni.upx2px(30);
		},
		onShow(){
			this.showArea("canvasArea",this.Area);
		},
		methods: {
			showArea(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'area',
					fontSize:11,
					padding:[0,15,10,15],
					legend:{
						show:true,
						position:'top',
						float:'center',
						itemGap:30,
						padding:5,
						lineHeight:18,
						margin:0,
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
			boundaryGap:'justify'//两端不留白配置
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						area:{
							type: 'curve',
							opacity:0.2,
							addLine:true,
							width:2
						}
					}
				});
			},
			touchIt(e,id) {
			canvasObj[id].touchLegend(e, {
				animation : false
			});
					canvasObj[id].showToolTip(e, {
						format: function (item, category) {
							if(typeof item.data === 'object'){
								return category + ' ' + item.name + ':' + item.data.value 
							}else{
								return category + ' ' + item.name + ':' + item.data 
							}
						}
					});
				},
		}
	}
</script>

<style>
page {
		background: #F2F2F2;
		width: 750rpx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10rpx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10rpx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10rpx solid #0ea391;
		padding-left: 10rpx;
		font-size: 32rpx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}

	/* 横屏样式 */
	.qiun-charts-rotate {
		width: 700rpx;
		height: 1100rpx;
		background-color: #FFFFFF;
		padding: 25rpx;
	}

	.charts-rotate {
		width: 700rpx;
		height: 1100rpx;
		background-color: #FFFFFF;
	}

	/* 圆弧进度样式 */
	.qiun-charts3 {
		width: 750rpx;
		height: 250rpx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250rpx;
		height: 250rpx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		overflow: hidden;
		padding: 15rpx;
		height: 30rpx;
		line-height: 30rpx;
		margin: 10rpx;
		background: #ff9933;
		font-size: 30rpx;
		border-radius: 8rpx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
</style>
