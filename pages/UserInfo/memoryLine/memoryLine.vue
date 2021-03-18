<template>
	<view>
		<view v-if="Area!=null">
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
		<view v-if="Pie!=null">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">学习足迹</view>
				<view v-if="Pie.series==null">你还没有足迹，快点儿去学习吧！</view>
			</view>
			<view v-if="Pie.series!=null" class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasPie')"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie($event,'canvasPie')"></canvas>
				<!--#endif-->
				
			</view>
		</view>
		<view v-if="Gauge1.series!=null">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">{{Gauge1.series[0].name}}</view>
			</view>
			<view class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasGauge1" id="canvasGauge" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasGauge1" id="canvasGauge" class="charts"></canvas>
				<!--#endif-->
			</view>
		</view>
		<view v-if="Gauge2.series!=null">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">{{Gauge2.series[0].name}}</view>
			</view>
			<view class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasGauge2" id="canvasGauge" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasGauge2" id="canvasGauge" class="charts"></canvas>
				<!--#endif-->
			</view>
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
				Area : null,
				Pie:null,
				Gauge1: {
						categories: [{
							value: 0.2,
							color: "#1890ff"
						}, {
							value: 0.8,
							color: "#2fc25b"
						}, {
							value: 1,
							color: "#f04864"
						}],
						series: null
					},
				Gauge2: {
						categories: [{
							value: 0.2,
							color: "#f04864"
						}, {
							value: 0.8,
							color: "#1890ff"
						}, {
							value: 1,
							color: "#2fc25b"
						}],
						series: null
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
	
		onReady(){
			this.getServerData()
		},
		methods: {
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				let that=this;
				uni.request({
					url: this.BaseProperties.baseUrl+this.BaseProperties.apiUserChart,
					data: {
						cid:"8T1YWDEV202102041900214518",
						days:7
						},
					method:"POST",
					header:this.BaseProperties.header,
					success: function(res) {
						console.log(res.data)
						that.fillData(res.data);
					},
					fail: () => {
						that.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data){
				this.Area=data.data.areaData;
				this.Pie=data.data.pieData;
				this.Gauge1.series=data.data.studySuccessArcBarData.series;
				this.Gauge2.series=data.data.reviewSuccessArcBarData.series;
				console.log(this.Pie)
				this.Area!=null?this.showArea("canvasArea",this.Area):0;
				this.Pie!=undefined?this.showPie("canvasPie", this.Pie):0;
				this.Gauge2.series!=null?this.showGauge("canvasGauge2",this.Gauge2):0;
				this.Gauge1.series!=null?this.showGauge("canvasGauge1",this.Gauge1):0;
			},
			showPie(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			showGauge(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize: 11,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.categories[1].color,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge: {
							type: 'default',
							width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							splitLine: {
								fixRadius: 0,
								splitNumber: 10,
								width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
								color: '#FFFFFF',
								childNumber: 5,
								childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio, //仪表盘背景的宽度
							},
							pointer: {
								width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
								color: 'auto'
							}
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
				});
			},
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
				touchPie(e,id) {
				  canvasObj[id].showToolTip(e, {
				      format: function(item) {
				          return item.name + ':' + item.data
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
