<!--
 * @Author: yushuang
 * @email: sunnyu@deloitte.com.cn
 * @Date: 2019-06-26 10:45:07
 * @LastEditors: yushuang
 * @LastEditTime: 2019-06-28 13:17:10
 * @Description: SLA绩效统计
 -->

<template>
  <div class="data-board-wrap">
    <div class="data-board-top clearfix">
      <span class="title">SLA绩效统计</span>
      <span class="time">{{getNowFormatDate}}</span>
    </div>
    <div class="data-board-main">
      <div class="data-board-bell">
        <router-link to="/hr/order-timeout">
          <span class="text">超时工单</span>
          <span class="amout">20</span>
        </router-link>
      </div>
      <div class="data-board-content-box">
        <div class="data-board-content">
          <div class="text">处理中工单 <i class="amout">132</i></div>
          <div class="data-board-chart" ref="customizedPie">
            <!-- 饼图1 -->
          </div>

          <div class="data-board-list-box">
            <div class="title">工作处理效率</div>
            <div class="data-board-list">
              <div class="data-board-item">
                <p class="item-tit">工作时间利用率</p>
                <ul class="data-board-progress ">
                  <li class="progress week">
                    <div class="desc">
                      <p class="common-txt week">本周</p>
                      <p class="percentage">80%</p>
                    </div>
                    <div class="bar">
                      <p class="scale j_transverse-bar" data-percent="80"><!-- 进度条 --></p>
                    </div>
                  </li>
                  <li class="progress month">
                    <div class="desc">
                      <p class="common-txt month">本月</p>
                      <p class="percentage">90%</p>
                    </div>
                    <div class="bar">
                      <p class="scale j_transverse-bar" data-percent="90"><!-- 进度条 --></p>
                    </div>
                  </li>
                  <li class="progress history">
                    <div class="desc">
                      <p class="common-txt history">历史</p>
                      <p class="percentage">94%</p>
                    </div>
                    <div class="bar">
                      <p class="scale j_transverse-bar" data-percent="94" ><!-- 进度条 --></p>
                    </div>
                  </li>
                </ul>
                <p class="item-tips">累计工作时间总数（小时）</p>
                <p class="item-amount">232，232，33.09</p>
              </div>
              <div class="data-board-item">
                <p class="item-tit">工单超时率</p>
                <div class="data-board-info clearfix">
                  <span class="content">
                    <p class="common-txt week">本周</p>
                    <p class="percent red"><em class="em">20</em>%</p>
                  </span>
                  <span class="content">
                    <p class="common-txt month">本月</p>
                    <p class="percent"><em class="em">30</em>%</p>
                  </span>
                  <span class="content">
                    <p class="common-txt history">历史</p>
                    <p class="percent" style="margin-top: 25px;">40%</p>
                  </span>
                </div>
                <img class="item-pic" src="../../assets/images/graph.png">
              </div>
              <div class="data-board-item">
                <p class="item-tit">任务超时率</p>
                <div class="data-board-info clearfix">
                  <span class="content">
                    <p class="common-txt week">本周</p>
                    <p class="percent green"><em class="em">8</em>%</p>
                  </span>
                  <span class="content">
                    <p class="common-txt month">本月</p>
                    <p class="percent"><em class="em">5</em>%</p>
                  </span>
                  <span class="content">
                    <p class="common-txt history">历史</p>
                    <p class="percent" style="margin-top: 25px;">2%</p>
                  </span>
                </div>
                <img class="item-pic" src="../../assets/images/graph1.png">
              </div>
            </div>
          </div>
        </div>
        <div class="data-board-content">
          <div class="text">挂起工单 <i class="amout">80</i></div>
          <div class="data-board-chart pie" ref="doughnutPie">
            <!-- 饼图2 -->
          </div>

          <div class="data-board-list-box">
            <div class="title quality">工作处理质量</div>
            <div class="data-board-list">
              <div class="data-board-item quality">
                <p class="item-tit">工单处理满意度</p>
                <div class="data-board-quality">
                  <p class="common-txt week">本周</p>
                  <p class="common-txt month">本月</p>
                  <p class="common-txt history">历史</p>
                </div>
                <div class="handle-list">

                  <div class="donut">
                    <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg" class="donut__svg">
                      <circle class="donut__svg__scrim" r="25" cy="45" cx="45" stroke-dasharray="5,5" stroke-width="1" stroke="#949aa6" fill="none"/>
                      <circle id="donut-graph0" data-radius="25" data-percent="90" class="j_circle-bar" r="25" cy="45" cx="45" stroke-width="8" stroke="url(#purple0)" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
                      <defs>
                        <linearGradient id="purple0" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%"   stop-color="#D1C3E9"/>
                          <stop offset="100%" stop-color="#D1C3E9"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div class="donut__title">90<span class="donut__spic">%</span></div>
                  </div>

                  <div class="donut">
                    <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg" class="donut__svg">
                      <circle class="donut__svg__scrim" r="30" cy="45" cx="45" stroke-dasharray="5,5" stroke-width="1" stroke="#949aa6" fill="none"/>
                      <circle id="donut-graph1" data-radius="30" data-percent="85" class="j_circle-bar" r="30" cy="45" cx="45" stroke-width="8" stroke="url(#purple1)" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
                      <defs>
                        <linearGradient id="purple1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%"   stop-color="#9475CD"/>
                          <stop offset="100%" stop-color="#9475CD"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div class="donut__title">85<span class="donut__spic">%</span></div>
                  </div>

                  <div class="donut">
                    <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg" class="donut__svg">
                      <circle class="donut__svg__scrim" r="35" cy="45" cx="45" stroke-dasharray="5,5" stroke-width="1" stroke="#949aa6" fill="none"/>
                      <circle id="donut-graph2" data-radius="35" data-percent="88" class="j_circle-bar" r="35" cy="45" cx="45" stroke-width="8" stroke="url(#purple2)" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
                      <defs>
                        <linearGradient id="purple2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%"   stop-color="#5824FC"/>
                          <stop offset="100%" stop-color="#5824FC"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div class="donut__title">88<span class="donut__spic">%</span></div>
                  </div>

                </div>
              </div>
              <div class="data-board-item quality">
                <p class="item-tit">发薪准确率</p>
                <div class="data-board-quality">
                  <p class="common-txt week">本周</p>
                  <p class="common-txt month">本月</p>
                  <p class="common-txt history">历史</p>
                </div>
                <ul class="salary-list clearfix">
                  <li class="salary-item">
                    <p class="salary-percent">80%</p>
                    <div class="salary-bar">
                      <div class="salary-scale week j_vertical-bar" data-percent="80"><!-- 进度条 --></div>
                      <img class="salary-pic j_vertical-bar-pic" data-percent="80" src="../../assets/images/icon-ellipse1.png">
                    </div>
                  </li>
                  <li class="salary-item">
                    <p class="salary-percent">90%</p>
                    <div class="salary-bar">
                      <div class="salary-scale month j_vertical-bar" data-percent="90"><!-- 进度条 --></div>
                      <img class="salary-pic j_vertical-bar-pic" data-percent="90" src="../../assets/images/icon-ellipse2.png">
                    </div>
                  </li>
                  <li class="salary-item">
                    <p class="salary-percent">94%</p>
                    <div class="salary-bar">
                      <div class="salary-scale history j_vertical-bar" data-percent="94"><!-- 进度条 --></div>
                      <img class="salary-pic j_vertical-bar-pic" data-percent="94" src="../../assets/images/icon-ellipse3.png">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
export default {
  data() {
    return {
    }
  },
  mounted() {
    // 两个echarts图
    let customizedPie = echarts.init(this.$refs.customizedPie)
    let doughnutPie = echarts.init(this.$refs.doughnutPie)
    customizedPie.setOption({
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series : [
        {
            name:'处理中工单',
            type:'pie',
            radius : '55%',
            center: ['53%', '70%'],
            data:[
              {value:270, name:'证明申请'},
              {value:310, name:'调岗申请'},
              {value:320, name:'离职申请'},
              {value:350, name:'入职申请'},
              {value:400, name:'咨询申请'}
            ],
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#8796b0'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#5d5d5d'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: { 
                normal: {
                    // 设置扇形的阴影
                    shadowBlur: 30,
                    shadowColor: 'rgba(0,0,0,0.50)', 
                    shadowOffsetX: 5,
                    shadowOffsetY: 5
                }
            },
            color: ['#9178cc', '#d2c3ea', '#d2c3ea', '#d2c3ea', '#5724fb'],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
      ]
    })
    doughnutPie.setOption({
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          right: 30,
          top: 30,
          itemWidth: 26,
          itemHeight: 10,
          data:['入职申请','离职申请','证明申请','咨询申请','调岗申请'],
          textStyle: {
            color: '#8796B0',
            fontSize: 12
          }
      },
      color: ['#1d3679', '#1e4878', '#357baf', '#4ba8e3', '#9dcfcc'],
      graphic: [{ //环形图中间添加文字
        type: 'text',
        left: 'center',
        top: '58%',
        left: '46%',
        style: {
            text: '挂起工单',
            textAlign: 'center',
            fill: '#8796B0',
            fontSize: 16,
            fontFamily: "Microsoft YaHei"
        }
      }],
      series: [
          {
              name:'挂起工单',
              type:'pie',
              radius: ['50%', '70%'],
              center: ['53%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  }
              },
              data:[
                  {value:335, name:'入职申请'},
                  {value:310, name:'离职申请'},
                  {value:234, name:'证明申请'},
                  {value:155, name:'咨询申请'},
                  {value:1250, name:'调岗申请'}
              ]
          }
      ]
    })

    // 横向条形进度条
    window.$('.j_transverse-bar').each(function () {
      window.$(this).animate({
        width: window.$(this).data('percent') + '%'
      }, 'slow', 'linear')
    })
    // 竖向条形进度条
    window.$('.j_vertical-bar').each(function () {
      window.$(this).animate({
        height: window.$(this).data('percent') + '%'
      }, 'slow', 'linear')
    })
    window.$('.j_vertical-bar-pic').each(function () {
      window.$(this).animate({
        bottom: (window.$(this).data('percent') - 12) + '%'
      }, 'slow', 'linear')
    })
    // 圆形进度条
    window.$('.j_circle-bar').each(function () {
      window.$(this).animate({
        strokeDashoffset: percentageData( window.$(this).data('radius'), window.$(this).data('percent') )
      }, 'slow', 'linear')
    })
    // 计算圆形进度条的stroke-dashoffset
    function percentageData(radius, percent) {
      let $circumference = (3.14159 * (2 * radius))
      let $stroke_percentage = $circumference - ((percent / 100) * $circumference)
      return $stroke_percentage
    }
  },
  computed: {
    // 获取当前时间
    getNowFormatDate() {
      let date = new Date()
      let strMonth = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1
      let strDate = date.getDate()<10? "0" + date.getDate():date.getDate()
      let strMinutes = date.getMinutes()<10? "0" + date.getMinutes():date.getMinutes()
      let currentdate = date.getFullYear() + '年'  + strMonth  + '月'  + strDate + '日'
          + " "  + date.getHours()  + ":"  + strMinutes
          + (date.getHours() >= 12 ? "PM" : "AM")
      return currentdate
    }
  }
}

</script>
<style lang="scss" scoped>
.grid-content {
  width: 100%;
  height: 100%;
}
.el-col-24 {
  height: 100%;
}

.data-board-wrap {
  width: 100%;
  height: 100%;
  background-color: #0d1d35; // 加背景颜色防止网络过慢图片没加载出来的空白
  background: url('../../assets/images/background.png') 0 0 no-repeat; // 背景蓝不是纯色和渐变的
  background-size: 100% 100%;
}
.data-board-top {
  width: auto;
  height: 40px;
  line-height: 40px;
  background: rgba(247,247,247,0.06);
  padding: 0 50px;
  color: #00a3e0;
  font-size: 18px;
  .time {
    float: right;
    font-size: 12px;
  }
}
.data-board-main {
  position: relative;
  width: 100%;
  height: calc(100% - 45px);
}
.data-board-bell {
  width: 232px;
  height: 62px;
  line-height: 62px;
  background: linear-gradient(top,#0d213a,#1f304a);
  position: relative;
  top: 20px;
  left: 50px;
  z-index: 2;
  .text {
    font-size: 14px;
    color: #8796B0;
    display: inline-block;
    &::before {
      content: '';
      display: inline-block;
      width: 22px;
      height: 24px;
      margin-left: 20px;
      margin-right: 14px;
      vertical-align: middle;
      background: url('../../assets/images/icon-bell.png') 0 0 no-repeat;
    }
  }
  .amout {
    font-size: 30px;
    color: #e57373;
    margin-left: 40px;
    display: inline-block;
    vertical-align: middle;
  }
}
.data-board-content-box {
  height: calc(100% - 87px);
  margin-top: -20px;
}
.data-board-content {
  width: 100%;
  height: 50%;
  margin-bottom: 25px;
  overflow: hidden;
  .text {
    position: absolute;
    font-size: 14px;
    color: #8796B0;
    margin-left: 75px;
    margin-top: 75px;
    display: inline-block;
  }
  .amout {
    font-size: 24px;
    color: #8796B0;
    margin-right: 10px;
  }
}
.data-board-chart {
  width: 32%;
  height: 100%;
  margin-right: 2%;
  vertical-align: top;
  display: inline-block;
  &.pie {
    height: 80%;
    margin-top: 40px;
  }
}
.data-board-list-box {
  width: calc(65% - 65px);
  height: 100%;
  margin-right: 65px;
  vertical-align: top;
  display: inline-block;
  .title {
    font-size: 16px;
    color: #8796B0;
    text-align: center;
    height: 25px;
    line-height: 25px;
    margin-bottom: 12px;
    &::before {
      position: relative;
      top: -3px;
      content: '';
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 14px;
      vertical-align: middle;
      background: url('../../assets/images/icon-clock.png') 0 0 no-repeat;
      
    }
    &.quality {
      &::before {
        width: 28px;
        background: url('../../assets/images/icon-masonry.png') 0 0 no-repeat;
      }
    }
  }
}
.data-board-quality {
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
  .common-txt {
    margin-bottom: 15px;
  }
}
.salary-list {
  display: inline-block;
  vertical-align: top;
  margin-left: 15%;
}
.salary-item {
  float: left;
  margin-left: 50px;
}
.salary-percent {
  font-size: 14px;
  color: #AFBDD1;
  left: -7px;
  margin-bottom: 16px;
}
.salary-bar {
  width: 10px;
  height: 200px;
  background-color: #000;
  border-radius: 2px;
  position: relative;
}
.salary-scale {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 10px;
  border-radius: 2px;
  height: 0;
  transform: all 400ms;
  &.week {
    background-color: #D1C3E9;
  }
  &.month {
    background-color: #9475CD;
  }
  &.history {
    background-color: #5824FC;
  }
}
.salary-pic {
  position: absolute;
  left: -8px;
  bottom: 0;
}
.data-board-list {
  width: 100%;
  height: calc(100% - 37px);
}
.data-board-item {
  width: 32.7%;
  height: 100%;
  display: inline-block;
  margin-right: 4px;
  background:rgba(43,54,72,0.60);
  padding: 35px;
  vertical-align: top;
  position: relative;
  .item-tit {
    font-size: 14px;
    color: #8796B0;
    margin-bottom: 30px;
  }
  .item-tips {
    font-size: 14px;
    color: #626F86;
    margin-bottom: 5px;
  }
  .item-amount {
    font-size: 26px;
    color: #8796B0;
  }
  .item-pic {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  &.quality {
    width: 49.2%;
    margin-right: 4px;
  }
}
.data-board-progress {
  margin-left: 12px;
  margin-bottom: 30px;
  .progress {
    margin-bottom: 15px;
    &.week {
      .scale {
        background: #D1C3E9;
      }
    }
    &.month {
      .scale {
        background: #9475CD;
      }
    }
    &.history {
      .scale {
        background: #5824FC;
      }
    }
  }
  .desc {
    display: inline-block;
  }
  .percentage {
    font-size: 14px;
    color: #AFBDD1;
    text-indent: 16px;
  }
  .bar {
    display: inline-block;
    vertical-align: text-top;
    width: 60%;
    height: 10px;
    background: #000;
    border-radius: 2px;
    margin-left: 35px;
    position: relative;
    .scale {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      background: #D1C3E9;
      border-radius: 2px;
      width: 0;
    }
  }
}
.common-txt {
  font-size: 12px;
  color: #626F86;
  &::before {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    margin-right: 8px;
    background: #D1C3E9;
    border-radius: 2px;
  }
  &.week {
    &::before {
      background: #D1C3E9;
    }
  }
  &.month {
    &::before {
      background: #9475CD;
    }
  }
  &.history {
    &::before {
      background: #5824FC;
    }
  }
}
.data-board-info {
  margin-left: 5px;
  .content {
    float: left;
    margin-right: 30px;
  }
  .percent {
    font-size: 14px;
    color: #AFBDD1;
    margin-top: 10px;
    margin-left: 10px;
    .em {
      font-size: 28px;
    }
    &.red, &.green {
      &:after {
        content: '';
        display: block;
        width: 16px;
        height: 8px;
        margin-top: 5px;
      }
    }
    &.red {
      color: #E57373;
      &:after {
        background: url('../../assets/images/icon-up.png') 0 0 no-repeat;
      }
    }
    &.green {
      color: #81C784;
      &:after {
        background: url('../../assets/images/icon-down.png') 0 0 no-repeat;
      }
    }
  }
}

/* 圆环进度条 */
.handle-list {
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 90px;
  height: 270px;
  padding-top: 10px;
  .donut {
    position: relative;
    width: 90px;
    height: 90px;
  }
  .donut__svg {
    transform: rotate(-90deg);
  }
  .donut__title {
    text-align: center;
    width: 32px;
    height: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    font-size: 16px;
    color: #626F86;
  }

  #donut-graph0 {
    stroke-dasharray: 157.0795;
    stroke-dashoffset: 157.0795;
  }

  #donut-graph1 {
    stroke-dasharray: 188.4954;
    stroke-dashoffset: 188.4954;
  }

  #donut-graph2 {
    stroke-dasharray: 219.9113;
    stroke-dashoffset: 219.9113;
  }
}

</style>
