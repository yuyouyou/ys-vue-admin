<template>
    <div class="fin-line">
        <i class="border-top"></i>
        <i class="border-bottom"></i>
        <ul class="module-title">
            <li class="title-row">
                <span>{{moduleTitle}}趋势图</span>
                <span>2019.05</span>
            </li>
            <li  class="title-unit">单位:万元</li>
        </ul>
        <chart class="module-chart" :options="options" autoresize :style="{ height: (height - 70) + 'px', width: width + 'px' }"></chart>
    </div>
</template>

<script>
export default {
  props: {
    id: Number,
    width: Number,
    height: Number,
    title: String,
    subTitle: String,
    unit: String,
    data: Object,
    componentIndex: Number,
    focus: Boolean,
    templateData: Object
  },
  data () {
    const vm = this
    return {
      currentMonth: '',
      moduleTitle: '营业收入',
      realWidth: 1019,
      monthX: [{ value: '1月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '2月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '3月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '4月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '5月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '6月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '7月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '8月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '9月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '10月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '11月', textStyle: { fontSize: 12, color: '#467A8C' } },
        { value: '12月', textStyle: { fontSize: 12, color: '#467A8C' } }
      ],
      currentX: '',
      options: {
        color: ['#02FFE8', '#2A78F4', '#5A3D7C'],
        legend: {
          top: 18,
          right: '4%',
          icon: 'path://M9.17070571,9 L1,9 C0.44771525,9 6.76353751e-17,8.55228475 0,8 C-6.76353751e-17,7.44771525 0.44771525,7 1,7 L9.17070571,7 C9.58254212,5.83480763 10.6937812,5 12,5 C13.3062188,5 14.4174579,5.83480763 14.8292943,7 L23,7 C23.5522847,7 24,7.44771525 24,8 C24,8.55228475 23.5522847,9 23,9 L14.8292943,9 C14.4174579,10.1651924 13.3062188,11 12,11 C10.6937812,11 9.58254212,10.1651924 9.17070571,9 Z',
          textStyle: {
            color: '#01BDFC',
            fontSize: 12
          },
          itemGap: 20,
          data: ['实际+预计', '分解预算', '同期']
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
              opacity: 0.6,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(50,110,255, .1)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(50,110,255, 1)' // 100% 处的颜色
                }],
                global: false
              }
            }
          },
          extraCssText: 'background:rgba(0,0,0,0)',
          formatter: function (params) {
            // 获取当前横坐标
            vm.currentX = params[0].axisValueLabel
            let cur = Number(vm.currentX.substr(0, 1))
            let monthActualData = '--'
            let monthPlanData = '--'
            let yearPlanData = '--'
            let monthDone = '--'
            let budget
            let lastYearData
            let dom = '<div class="pop-chartTip-2">'
            dom += '<h3>' + params[0].name + '</h3><ul>'
            for (let i in params) {
              if (params[i].seriesName === '实际+预计') {
                if (params[i].seriesIndex === 0) {
                  monthActualData = vm.thousand(params[i].value) 
                } else {
                  monthPlanData = monthPlanData !== '--' ? monthPlanData : vm.thousand(params[i].value) 
                }
              } else if (params[i].seriesName === '分解预算') {
                budget = vm.thousand(params[i].value) 
              } else if (params[i].seriesName === '同期') {
                lastYearData = vm.thousand(params[i].value) 
              } else if (params[i].seriesName === '年度预算完成率') {
                yearPlanData = vm.thousand(params[i].value)
              } else if (params[i].seriesName === '月完成率') {
                monthDone = vm.thousand(params[i].value) 
              } else if (params[i].seriesName === '本月计划' && cur < vm.currentMonth) {
                monthPlanData = vm.thousand(params[i].value) 
              }
            }
            dom += '<li><span class="list-key">本月实际:</span><strong>' + monthActualData + '</strong></li>' +
                    '<li><span class="list-key">年度预算完成率:</span><span class="list-val">' + yearPlanData + '%</span></li>' + 
                    '<li><span class="list-key">本月计划:</span><span class="list-val">' + monthPlanData + '</span></li>' +
                    '<li><span class="list-key">月完成率:</span><span class="list-val">' + monthDone + '%</span></li>' +
                    '<li><span class="list-key">分解预算:</span><span class="list-val">' + budget + '</span></li>' +
                    '<li><span class="list-key">上年同期:</span><span class="list-val">' + lastYearData + '</span></li>' +
                    '</ul></div>'
            return dom
          }
        },
        grid: {
          left: '11%',
          right: '5%'
        },
        xAxis: {
          show: true,
          type: 'category',
          boundaryGap: false,
          minInterval: 1,
          axisLine: {
            show: true,
            symbol: 'none',
            lineStyle: {
              color: '#467A8C'
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
              color: '#467A8C',
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
              color: '#467A8C'
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
              color: '#467A8C',
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#467A8C',
              type: 'dashed'
            }
          },
          data: []
        },
        series: [
          {
            type: 'line',
            name: '实际+预计',
            symbol: 'emptyCircle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              width: 3
            },
            smooth: true,
            data: [424028, 416460, 462161, 529124, 521542, null, null, null, null]
          },
          {
            type: 'line',
            name: '分解预算',
            symbol: 'emptyCircle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              width: 3
            },
            smooth: true,
            data: [608607, 562262, 573015, 620956, 578737, null, null, null, null, null, null, null]
          },
          {
            type: 'line',
            name: '同期',
            symbol: 'emptyCircle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              width: 3
            },
            smooth: true,
            data: [359295, 426381, 367825, 371289, 448863, 500138, 397565, 414885, 339288, 417478, 348474, 523200]
          },
          {
            type: 'line',
            name: '年度预算完成率',
            symbol: 'emptyCircle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              width: 0
            },
            smooth: true,
            data: [6, 12, 18.7, 26.3, 33.8, null, null, null, null, null, null, null]
          },
          {
            type: 'line',
            name: '月完成率',
            symbol: 'emptyCircle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              width: 0
            },
            smooth: true,
            data: [70.5, 64.5, 79.7, 79.3, 84.4, null, null, null, null, null, null, null]
          },
          {
            type: 'line',
            name: '本月计划',
            symbol: 'emptyCircle',
            symbolSize: 4,
            showSymbol: false,
            lineStyle: {
              width: 0
            },
            smooth: true,
            data: [70.5, 64.5, 79.7, 79.3, 84.4, null, null, null, null, null, null, null]
          }
        ]
      }
    }
  },
  watch: {
    'currentX': function (newVal, oldVal) {
      this.options.xAxis.data.forEach(element => {
        element.textStyle.fontSize = 12
        element.textStyle.color = '#467A8C'
      })
      this.options.xAxis.data.forEach(element => {
        if (element.value === newVal) {
          element.textStyle.fontSize = 16
          element.textStyle.color = '#FFFFFF'
        }
      })
    }
  },
  computed: {
    type () {
      return this.moduleTitle === '营业收入' ? 'revenue' : 'profit'
    },
    config () {
      return this.templateData && this.templateData.config
    },
    componentData () {
      return this.templateData && this.templateData.data
    }
  },
  mounted () {
    this.$event.$on('pie-got-clicked', this.getPieClick)
    this.options.xAxis.data = this.monthX
    if (typeof this.componentData !== 'undefined') {
      let len = this.componentData[`enterprise_${this.type}`]['actual'].length
      let dataIndex = len / 2
      this.currentMonth = this.componentData[`enterprise_${this.type}`]['actual'].slice(dataIndex).filter(item => item !== null).length
      this.assembleData()
    }
  },
  methods: {
    assembleData () {
      if (typeof this.componentData === 'undefined') { return false }
      let len = this.componentData[`enterprise_${this.type}`]['actual'].length
      let dataIndex = len / 2
      this.options.series[0].data = this.componentData[`enterprise_${this.type}`]['actual'].slice(dataIndex) // 实际
      this.options.series[1].data = this.componentData[`enterprise_${this.type}`]['decomposition_budget'].slice(dataIndex) // 分解预算
      this.options.series[2].data = this.componentData[`enterprise_${this.type}`]['actual'].slice(0, dataIndex) // 同期
      this.options.series[3].data = this.componentData[`enterprise_${this.type}`]['annual_budget_completion_rate'].slice(dataIndex) // 年度预算完成率
      this.options.series[4].data = this.componentData[`enterprise_${this.type}`]['expectation_completion_rate'].slice(dataIndex) // 月完成率
      this.options.series[5].data = this.componentData[`enterprise_${this.type}`]['expectation'].slice(dataIndex) // 本月计划
      let expectation = this.$_.cloneDeep(this.options.series[5].data)
      for (let i = 0; i < this.options.series[0].data.filter(item => item !== null).length; i++) {
        expectation[i] = null
      }
      expectation[this.options.series[0].data.filter(item => item !== null).length - 1] = this.options.series[0].data.filter(item => item !== null)[this.options.series[0].data.filter(item => item !== null).length - 1]
      this.options.series.push({
        name: '实际+预计',
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              color: '#057C7B',
              type: 'dotted'
            }
          }
        },
        data: expectation
      })
    },
    getPieClick (msg) {
      this.moduleTitle = msg.title === '月利润总额' ? '利润总额' : '营业收入' 
      // 先清空上一次的预计值虚线
      let i = this.options.series.length - 1
      this.options.series[i].data = []
      this.assembleData()
    },
    responsive (value) {
      return this.width * (value / this.realWidth) + 'px'
    },
    thousand (value) {
      if (value) {
        let hasd = value.toString().split('.')
        let val = ''
        val = hasd[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        if (hasd.length === 2) {
          val = val + '.' + hasd[1]
        }
        return val
      } else if (value === 0) {
        return value
      } else {
        return '--'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$vw_base: 1920; 
@function vw($px) {
  @return ($px / $vw_base) * 100vw;
}
.fin-line{
    display: flex;
    flex-direction: column;
    background: rgba(50,110,255,0.06);
    box-sizing: border-box;
    position: relative;
    .border{position:absolute;padding:10px;border-style: solid;border-image:linear-gradient(to right,rgba(33,103,255,0.8),rgba(35,183,203,0.4)) 1 10;}
    .row1{border-width: 2px 0 0 2px;top:-2px;left:-2px;}
    .row2{border-width: 2px 2px 0 0;top:-2px;right:-2px;}
    .col1{border-width: 0 0 2px 2px;bottom:-2px;left:-2px;}
    .col2{border-width: 0 2px 2px 0;bottom:-2px;right:-2px;}

    .module-title{
        display: flex;
        align-items: center;
        padding: 20px 40px 0 20px;
        justify-content: space-between;
        .title-row{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-weight: normal;
            :nth-child(1){
                font-family: PingFangSC-Medium;
                font-size: vw(20);
                color: #6CD9FF;
                letter-spacing: 0;
                line-height: 28px;
            }
            :nth-child(2){
                opacity: 0.7;
                font-family: PingFangSC-Medium;
                font-size: vw(12);
                letter-spacing: 0.48px;
                color: #6CD9FF;
            }
        }
        .title-unit{
            opacity: 0.6;
            font-family: PingFangSC-Regular;
            font-size: vw(12);
            letter-spacing: 0.48px;
            color: #FFFFFF;
            position: absolute;
            top: 28px;
            right: 40px;
        }
    }
    .module-chart{
        // margin-top: 10px;
        flex: 1;
        width: 100% !important;
        // background-image: linear-gradient(90deg, rgba(105,255,175,0.04) 0%, rgba(105,255,175,0.04) 8%, rgba(48,158,230,0.1) 95%, rgba(40,145,237,0.00) 100%);;
    }
}
</style>