<template>
    <div class="bar-chart">
        <ul class="module-title">
            <li class="title-row">
                <span>柱状趋势图</span>
                <span>2019.05</span>
            </li>
            <li class="title-unit">单位:</li>
        </ul>
        <chart class="module-chart" :options="options" autoresize :style="{ height: (height - 70) + 'px', width: width + 'px' }"></chart>
    </div>
</template>

<script>
import echarts from 'vue-echarts'
export default {
  props: {
    width: Number,
    height: Number
    // title: String,
    // subTitle: String,
    // unit: String
  },
  data () {
    const vm = this
    return {
      monthX: [{ value: '1月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '2月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '3月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '4月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '5月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '6月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '7月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '8月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '9月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '10月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '11月', textStyle: { fontSize: 12, color: '#5B99B9' } },
        { value: '12月', textStyle: { fontSize: 12, color: '#5B99B9' } }
      ],
      currentX: '',
      options: {
        legend: {
          top: 18,
          left: '73%',
          //   icon: 'path://M9.17070571,9 L1,9 C0.44771525,9 6.76353751e-17,8.55228475 0,8 C-6.76353751e-17,7.44771525 0.44771525,7 1,7 L9.17070571,7 C9.58254212,5.83480763 10.6937812,5 12,5 C13.3062188,5 14.4174579,5.83480763 14.8292943,7 L23,7 C23.5522847,7 24,7.44771525 24,8 C24,8.55228475 23.5522847,9 23,9 L14.8292943,9 C14.4174579,10.1651924 13.3062188,11 12,11 C10.6937812,11 9.58254212,10.1651924 9.17070571,9 Z',
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 20,
          textStyle: {
            color: '#01BDFC',
            fontSize: 12
          },
          data: ['2018', '2019']
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          confine: true,
          position: function (point, params, dom, rect, size) {
            return [point[0], '20%']
          },
          axisPointer: {
            show: true,
            type: 'shadow',
            margin: 11,
            shadowStyle: {
              opacity: 0.3,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(50,110,255, 0)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(0,170,255, 1)' // 100% 处的颜色
                }],
                global: false
              }
            }
          },
          extraCssText: 'background:rgba(0,0,0,0)',
          formatter: function (params) {
            // 获取当前横坐标
            vm.currentX = params[0].axisValueLabel
            let dom = '<div class="pop-chartTip-2">'
            dom += '<h3>' + '月累计:' + '</h3><ul>'
            dom += '<li><span>2018</span><strong>' + params[0].value + '</strong></li>' +
                    '<li><span>2019</span><strong>' + params[1].value + '</strong></li>' +
                    '</ul></div>'
            return dom
          }
        },
        grid: {
        },
        xAxis: {
          show: true,
          boundaryGap: true,
          minInterval: 1,
          axisLine: {
            show: true,
            symbol: 'none',
            lineStyle: {
              color: '#5B99B9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            rotate: 0,
            margin: 10.5,
            textStyle: {
              color: '#5B99B9',
              fontSize: 12
            },
            align: 'center'
          },
          splitLine: {
            show: false
          },
          data: []
        },
        yAxis: {
          show: true,
          type: 'value',
          boundaryGap: false,
          scale: false,
          minInterval: 1,
          axisLine: {
            show: true,
            symbol: 'none',
            lineStyle: {
              color: '#5B99B9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 0,
            margin: 16,
            align: 'right',
            textStyle: {
              color: '#5B99B9',
              fontSize: 12
            }
          },
          splitLine: {
            show: false
          },
          data: []
        },
        series: [
          {
            type: 'bar',
            name: '2018',
            itemStyle: {
              color: 'transparent',
              borderColor: '#58FCFB',
              borderWidth: 2,
              barBorderRadius: [1, 1, 0, 0]
            },
            barGap: '3%',
            barCategoryGap: '40%',
            smooth: true,
            data: [1.8, 3.7, 7.1, 5, 3, 3.9, 6.1, 7.2, 5.8, 5.2, 6.1, 4.8]
          },
          {
            type: 'bar',
            name: '2019',
            itemStyle: {
              normal: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                  offset: 0,
                  color: '#00A7FF'
                }, {
                  offset: 1,
                  color: '#00FFC1'
                }]),
                barBorderRadius: [1, 1, 0, 0]
              }
            },
            smooth: true,
            data: [2, 2.8, 6.6, 4.9, 4.5, 5.2, 5.1, 8.8, 4.8, 6.9, null, null]
          } 
        ]
      }
    }
  },
  watch: {
    'currentX': function (newVal, oldVal) {
      this.options.xAxis.data.forEach(element => {
        element.textStyle.fontSize = 12
        element.textStyle.color = '#5B99B9'
      })
      this.options.xAxis.data.forEach(element => {
        if (element.value === newVal) {
          element.textStyle.fontSize = 16
          element.textStyle.color = '#FFFFFF'
        }
      })
    }
  },
  mounted () {
    this.options.xAxis.data = this.monthX
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$vw_base: 1920; 
$vh_base: 1080;
@function vw($px) {
  @return ($px / $vw_base) * 100vw * 1.2;
}
@function vh($px) {
  @return ($px / $vw_base) * 100vh * 2.5;
}
.bar-chart{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;

    .module-title{
        display: flex;
        align-items: center;
        padding: vh(24) vw(40) 0 vw(24);
        justify-content: space-between;
        .title-row{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-weight: normal;
            :nth-child(1){
                font-family: 'PingFangSC-Medium';
                font-size: vw(20);
                color: #6CD9FF;
                letter-spacing: 0;
                line-height: 28px;
            }
            :nth-child(2){
                opacity: 0.7;
                font-family: 'PingFangSC-Medium';
                font-size: vw(12);
                letter-spacing: 0.48px;
                color: #6CD9FF;
            }
        }
        .title-unit{
            opacity: 0.6;
            font-family: 'PingFangSC-Regular';
            font-size: vw(12);
            letter-spacing: 0.48px;
            color: #FFFFFF;
            position: absolute;
            top: vh(28);
            right: vw(40);
        }
    }
    .module-chart{
        flex: 1;
        width: 100% !important;
    }
}
</style>