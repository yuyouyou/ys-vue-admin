<template>
  <div class="module-container" :class="{'is-active': focus}" @click='handleClick(componentTitle)' :style="{minHeight: height + 'px', height: '100%'}">
    <div class="module-text-box">
      <div class="text-box-top">
        <p class="module-title">{{componentTitle}}</p>
        <span class="module-subtitle">{{subTitle}}</span>
        <span class="module-unit">单位:{{config && config['units'][0]}}</span>
      </div>
      <div class="text-box-bottom">
        <p class="text-box-number">{{revenue | thousandFilter}}</p>
        <div class="text-box-rate">
          <p>
            同比<span class="icon-arrow" :class="{'icon-arrow-up': yoy > 0,'icon-arrow-down': yoy < 0,}">{{yoy}}%</span>
          </p>
          <p>
            环比<span class="icon-arrow" :class="{'icon-arrow-up': mom > 0,'icon-arrow-down': mom < 0,}">{{mom}}%</span>
          </p>
        </div>
      </div>
    </div>
    <chart :options="options" autoresize :style="{ height: responsive(222), width: responsive(222), minHeight:responsive(222) }"></chart>
  </div>
</template>
<script>
export default {
  name: 'fin-report-pie',
  props: {
    id: Number,
    width: Number,
    height: Number,
    data: Object,
    componentIndex: Number,
    focus: Boolean,
    templateData: Object
  },
  data () {
    return {
      realWidth: 358,
      subTitle: '2019.05',
      revenue: '521,542.4',
      mom: 16.1, // 环比
      yoy: -1.4, // 同比
      options: {
        graphic: [{
          type: 'text',
          left: 'center',
          top: '60%',
          style: {
            text: '月完成率',
            fill: '#fff',
            font: 'normal 14px  PingFangSC-Regular',
            shadowColor: 'rgba(99,235,255,0.41)',
            shadowBlur: 12,
            shadowOffsetY: 10
          }
        }],
        series: [{
          name: '刻度',
          type: 'gauge',
          radius: '90%',
          startAngle: 0,
          endAngle: 359.99,
          splitNumber: 100,
          hoverAnimation: false,
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            length: '10%',
            lineStyle: {
              width: 2,
              color: '#090E1D'
            }
          },
          axisLabel: {
            show: false
          },
          pointer: {
            show: true
          },
          axisLine: {
            lineStyle: {
              opacity: 0
            }
          },
          detail: {
            show: false
          }
        },
        {
          name: 'pie',
          type: 'pie',
          radius: ['81%', '90%'],
          silent: true,
          clockwise: true,
          startAngle: 90,
          z: 0,
          zlevel: 0,
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: '32.0',
            name: '月完成率',
            label: {
              normal: {
                formatter: function (param) {
                  return param.data.value + '%'
                },
                fontSize: 32,
                color: '#03F2F4',
                fontFamily: 'PangMenZhengDao',
                textShadowColor: 'rgba(99,235,255,0.41)',
                textShadowBlur: 12
              }
            },
            itemStyle: {
              normal: {
                color: {
                  x: 1,
                  y: 1,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#346CC6' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#43ECF2' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            }
          },
          {
            value: 68,
            name: '',
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#6D6D6D',
                opacity: 0.23
              }
            }
          }]
        }]
      }
    }
  },
  computed: {
    componentTitle () {
      let title = ''
      if (this.config) {
        title = this.componentIndex === 0 ? this.config['titles'][0] : this.config['titles'][1]
      }
      return title
    },
    type () {
      return this.componentTitle === '月营业收入' ? 'revenue' : 'profit'
    },
    config () {
      return this.templateData && this.templateData.config
    },
    componentData () {
      return this.templateData && this.templateData.data
    },
    currentMonth () {
      let len = this.componentData[`enterprise_${this.type}`]['actual'].length
      let dataIndex = len / 2
      return this.componentData[`enterprise_${this.type}`]['actual'].slice(dataIndex).filter(item => item !== null).length
    }
  },
  watch: {
    'componentData': function (val, oldVal) {
      if (val) {
        this.assembleData()
      }
    }
  },
  mounted () {
    if (this.componentData !== null && typeof this.componentData !== 'undefined') {
      // let len = this.componentData[`enterprise_${this.type}`]['actual'].length
      // let dataIndex = len / 2
      // this.currentMonth = this.componentData[`enterprise_${this.type}`]['actual'].slice(dataIndex).filter(item => item !== null).length
      this.assembleData()
    }
  },
  methods: {
    assembleData () {
      if (typeof this.componentData === 'undefined') return false
      let dataIndex = this.calcDataIndex(this.title)
      this.options.series[1].data[0].value = this.componentData[`enterprise_${this.type}`]['expectation_completion_rate'][dataIndex]
      this.options.series[1].data[1].value = this.options.series[1].data[0].value > 100 ? 0 : 100 - this.options.series[1].data[0].value
      this.revenue = this.componentData[`enterprise_${this.type}`]['actual'][dataIndex]
      this.mom = this.componentData[`enterprise_${this.type}`]['year_ratio_increase'][dataIndex]
      this.yoy = this.componentData[`enterprise_${this.type}`]['month_ratio_increase'][dataIndex]
    },
    handleClick (msg) {
      let type = msg === '月营业收入' ? 'revenue' : 'profit'
      this.$event.$emit('pie-got-clicked', { title: msg, type: type, index: this.componentIndex })
    },
    responsive (value) {
      return this.width * (value / this.realWidth) + 'px'
    },
    calcDataIndex (title) {
      let len = this.componentData[`enterprise_${this.type}`]['actual'].length - 2
      let index = len - this.currentMonth - 1
      return index
    }
  }
}
</script>
<style lang="scss" scoped>
.module-container{
  box-sizing: border-box;
  padding: 20px 16px;
  //background: url('../../../../assets/images/tab_unsel.png') no-repeat;
  background-size: 100% 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  opacity: 0.5;
  position: relative;
  font-weight: normal;
  .module-text-box{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .text-box-top{
      text-align: left;
      // position: relative;
      margin-bottom: 20px;
      .module-title{
        margin: 0;
        font-family:  'PingFangSC-Medium';
        font-size: vw(20);
        color: #6CD9FF;
        letter-spacing: 0;
        line-height: 1;
      }
      .module-subtitle{
        opacity: 0.7;
        font-family: 'PingFangSC-Medium';
        font-size: vw(12);
        color: rgba(108,217,255,.77);
        letter-spacing: 2px;
      }
      .module-unit{
        position: absolute;
        top: 28px;
        right: 28px;
        opacity: 0.6;
        font-family: 'PingFangSC-Regular';
        font-size: vw(12);
        color: #FFFFFF;
        letter-spacing: 0.48px;
      }
    }
    .text-box-bottom{
      .text-box-number{
        font-family: 'PangMenZhengDao';
        font-size: vw(38);
        color: #27C7FF;
        letter-spacing: 0;
        text-align: center;
        text-shadow: 0 2px 4px rgba(99,235,255,0.14);
        line-height: 1;
      }
      .text-box-rate{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        p{
          opacity: 0.8;
          font-family: 'PingFangSC-Regular';
          font-size: vw(14);
          color: #27C7FF;
          letter-spacing: 1.34px;
          span{
            display: inline-block;
            margin-left: 4px;
            opacity: 1;
            font-family: 'PingFangSC-Regular';
            font-size: vw(14);
            color: #FFFFFF;
            letter-spacing: 0.6px;
          }
        }
      }
    }
  }
  .echarts{
    margin: 0 auto;
  }
}
.is-active{
    //background: url('../../../../assets/images/tab_sel.png') no-repeat;
    background-size: 100% 100%;
    opacity: 1;
  }
</style>