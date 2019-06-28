<template>
  <div class="work-board-wrap">
    <div class="title">
      工单数据统计
      <span>
        {{getNowFormatDate}}
      </span>
    </div>
    <div class="work-board-content">
      <div class="filter-box add-border">
        <img :src="require('../../assets/images/icon-data1.png')">
        <h3>数据总览</h3>
        <div class="adaptive"></div>
        <span class="time-range">
          <i>月</i>
          <i>周</i>
          <i class="active">日</i>
        </span>
      </div>
      <div class="work-board-tips">
        <ul class="list clearfix">
          <li class="item">
            已接收工单<em>2689</em>
          </li>
          <li class="item">
            已完成工单<em>2689</em>
          </li>
          <li class="item">
            处理中工单<em>2689</em>
          </li>
        </ul>
      </div>
      <div id="chartPie"></div>
    </div>
    <div class="work-board-content">
      <div class="filter-box">
        <img :src="require('../../assets/images/icon-data2.png')">
        <h3>数据细分</h3>
      </div>
      <ul class="work-board-list clearfix">
        <li class="work-board-item">
          <h4 class="work-board-tit">
            工单趋势图
          </h4>
          <span class="time-range">
            <i>月</i>
            <i>周</i>
            <i class="active">日</i>
          </span>
          <div class="work-board-chart-box">
            <div id="chartLine" style="width:100%; height:100%;"></div>
          </div>
        </li>
        <li class="work-board-item">
          <h4 class="work-board-tit">
            工作组处理工单统计
          </h4>
          <span class="time-range">
            <i>月</i>
            <i>周</i>
            <i class="active">日</i>
          </span>
          <div class="work-board-chart-box height">
            <div id="chartColumn" style="width:100%; height:100%"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
export default {
  data() {
    return {
      startTime: '2019/01/02',
      endTime: '2019/01/02',
      type: '工作组1'
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawchartPie()
      this.drawChartLine()
      this.drawChartColumn()
    })
  },
  methods: {
    drawchartPie() {
      var colorList = function(params) {
        let colorList = ['#5824FC', '#9475CD', '#E0BEEE', '#EA7A94', '#4B97F5']
        return colorList[params.dataIndex]
      }
      this.chartLine = echarts.init(document.getElementById('chartPie'));
      this.chartLine.setOption({
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              top: '45',
              left: '70',
              itemGap: 12,
              itemWidth: 26,
              itemHeight: 10,
              textStyle: {
                color: '#8796B0'
              },
              data:['离职工单','入职工单','咨询工单','证明申请','调岗申请']
          },
          calculable : true,
          grid: {
            bottom: 0
          },
          series : [
              {
                  name:'已接收工单',
                  type:'pie',
                  radius : [20, 65],
                  center : ['25%', '65%'],
                  roseType : 'radius',
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
                          color: colorList
                      }
                  },
                  data:[
                      {value:17, name:'离职工单'},
                      {value:30, name:'入职工单'},
                      {value:18, name:'咨询工单'},
                      {value:25, name:'证明申请'},
                      {value:100, name:'调岗申请'}
                  ]
              },
              {
                  name:'已完成工单',
                  type:'pie',
                  radius : [20, 65],
                  center : ['50%', '65%'],
                  roseType : 'area',
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
                          color: colorList
                      }
                  },
                  data:[
                      {value:20, name:'离职工单'},
                      {value:15, name:'入职工单'},
                      {value:5, name:'咨询工单'},
                      {value:10, name:'证明申请'},
                      {value:20, name:'调岗申请'}
                  ]
              },
              {
                  name:'处理中工单',
                  type:'pie',
                  radius : [20, 65],
                  center : ['75%', '65%'],
                  roseType : 'area',
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
                          color: colorList
                      }
                  },
                  data:[
                      {value:5, name:'离职工单'},
                      {value:10, name:'入职工单'},
                      {value:30, name:'咨询工单'},
                      {value:25, name:'证明申请'},
                      {value:20, name:'调岗申请'}
                  ]
              }
          ]
      });
    },
    drawChartLine() {
      let myChart = echarts.init(document.getElementById('chartLine'))
      let option = {
      /* title: {
          text: '工单趋势图',
          x: 'center',
          textStyle: {
              color: '#8796B0',
              fontSize: 14
          }
      }, */
      tooltip: {
          trigger: 'axis'
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show: false,
          tooltip: {
              axisPointer: {
                  lineStyle: {
                      type: 'dashed',
                      color: '#8796B0',
                      width: 2
                  }
              }
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
          //设置网格线颜色
          splitLine: {
              show: false,
              lineStyle:{
                  color: ['#3E495B'],
                  width: 1,
                  type: 'solid'
              }
      　　},
          //设置轴线的属性
          axisLine:{
              lineStyle:{
                  color:'#3E495B',
                  width:1
              }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#626F86'
            }
          }
      },
      yAxis: {
          type: 'value',
          boundaryGap: false,
          min: 0,
          max: 80,
          splitNumber: 10,
          //设置网格线颜色
          splitLine: {
              show: true,
              lineStyle:{
                  color: ['#3E495B'],
                  width: 1,
                  type: 'solid'
              }
      　　},
          //设置轴线的属性
          axisLine:{
              show: false,
              lineStyle:{
                  color:'#3E495B',
                  width:1
              }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#626F86'
            }
          }
      },
      legend: {
          x : 'center',
          y : 'top',
          padding: 25,
          itemGap: 25,
          textStyle: {
              color: '#8796B0',
              fontSize: 12
          },
          itemWidth: 26,
          itemHeight: 2,
          data:['咨询申请','证明申请','离职申请','入职申请','调岗申请']
      },
      series: [
          {
              name:'咨询申请',
              type:'line',
              data: [20, 34, 7, 46, 40, 50, 55, 80, 60],
              itemStyle: {
                  color: '#5824FC'
              },
              lineStyle: {
                  width: 1
              },
              symbolSize: 0,
              areaStyle: {
                  color: 'rgba(88, 36, 252, 0.2)'
              }
          },
          {
              name:'证明申请',
              type:'line',
              data: [11, 32, 45, 36, 56, 61, 70, 60, 40],
              itemStyle: {
                  color: '#F7A25B'
              },
              lineStyle: {
                  width: 1
              },
              symbolSize: 0,
              areaStyle: {
                  color: 'rgba(247, 162, 91, 0.2)'
              }
          },
          {
              name:'离职申请',
              type:'line',
              data: [14, 43, 32, 12, 35, 56, 67, 78, 54],
              itemStyle: {
                  color: '#40959F'
              },
              lineStyle: {
                  width: 1
              },
              symbolSize: 0,
              areaStyle: {
                  color: 'rgba(64, 149, 159, 0.2)'
              }
          },
          {
              name:'入职申请',
              type:'line',
              data: [13, 33, 25, 36, 46, 36, 20, 40, 40],
              itemStyle: {
                  color: '#2E95EC'
              },
              lineStyle: {
                  width: 1
              },
              symbolSize: 0,
              areaStyle: {
                  color: 'rgba(46, 149, 236, 0.2)'
              }
          },
          {
              name:'调岗申请',
              type:'line',
              data: [43, 38, 56, 24, 38, 56, 32, 52, 33],
              itemStyle: {
                  color: '#7CB5EC'
              },
              lineStyle: {
                  width: 1
              },
              symbolSize: 0,
              areaStyle: {
                  color: 'rgba(124, 181, 236, 0.2)'
              }
          }
      ],
      textStyle: {
          color: '#8796B0'
      }
      }
      myChart.setOption(option)
    },
    drawChartColumn() {
      this.chartLine = echarts.init(document.getElementById('chartColumn'));
      this.chartLine.setOption({
          /* title: {
              text: '工作组处理工单统计',
              x: 'center',
              textStyle: {
                  color: '#8796B0',
                  fontSize: 14
              }
          }, */
          legend: {
              x : 'center',
              y : 'top',
              padding: 25,
              itemGap: 25,
              textStyle: {
                  color: '#8796B0',
                  fontSize: 12
              },
              itemWidth: 26,
              itemHeight: 10,
              data:['处理总单数','按时处理数','超时处理数']
          },
          dataset: {
              source: [
                  ['product', '处理总单数', '按时处理数', '超时处理数'],
                  ['处理人1', 75, 48, 30],
                  ['处理人2', 55, 18, 21],
                  ['处理人3', 48, 34, 25],
                  ['处理人4', 42, 27, 23],
                  ['处理人5', 44, 18, 10]
              ]
          },
          xAxis: {
              type: 'category',
              //设置网格线颜色
              splitLine: {
                  show: false,
                  lineStyle:{
                      color: ['#3E495B'],
                      width: 1,
                      type: 'solid'
                  }
          　　},
              //设置轴线的属性
              axisLine:{
                lineStyle:{
                  color:'#3E495B',
                  width:1
                }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#626F86'
                }
              }
          },
          yAxis: {
              type: 'value',
              boundaryGap: false,
              min: 0,
              max: 80,
              splitNumber: 4,
              //设置网格线颜色
              splitLine: {
                  show: true,
                  lineStyle:{
                      color: ['#3E495B'],
                      width: 1,
                      type: 'solid'
                  }
          　　},
              //设置轴线的属性
              axisLine:{
                  show: false,
                  lineStyle:{
                      color:'#3E495B',
                      width:1
                  }
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#626F86'
                }
              }
          },
          series: [
              {
                  type: 'bar',
                  itemStyle: {
                      color: '#499AF3'
                  },
                  barWidth: 10
              },
              {
                  type: 'bar',
                  itemStyle: {
                      color: '#5FBADB'
                  },
                  barWidth: 10
              },
              {
                  type: 'bar',
                  itemStyle: {
                      color: '#EFA389'
                  },
                  barWidth: 10
              }
          ]
      });
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
<style lang="scss">
.grid-content {
  width: 100%;
  height: 100%;
}
.el-col-24 {
  height: 100%;
}
.work-board-wrap {
  width: 100%;
  height: 100%;
  background-color: #0d1d35; // 加背景颜色防止网络过慢图片没加载出来的空白
  background: rgb(13, 29, 53) url('../../assets/images/bg-img.png') no-repeat;
  background-size: 100% 100%;
  .title{
    width: 100%;
    height: 40px;
    background: rgba(247,247,247,0.06);
    font-size: 18px;
    color: #00a3e0;
    font-weight: 560;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    span{
      font-size: 12px;
      font-weight: normal;
    }
  }
  .filter-box{
    width: calc(100% -100px);
    height: 50px;
    margin: 0 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    &.add-border{
      border-bottom: 1px solid #1E3654;
    }
    &>img{
      width: 24px;
      height: 24px;
    }
    &>h3{
      font-size: 16px;
      color: #8796B0;
      line-height: 1;
      margin-left: 12px;
      display: inline-block; // for ie
      width: auto;
    }
    .adaptive{
      width: auto; // for ie
      flex-grow: 1;
      flex-basis: 0%;
    }
    .choose-time{
      width: auto;
      height: 100%;
      margin-right: 84px;
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 1;
      color: #8796B0;
      span{
        display: inline-block; // for ie
        margin-right: 6px;
      }
      i{
        display: inline-block;
        margin: 0 12px;
      }
      /deep/ .el-date-editor.el-input{
        width: 150px;
        .el-input__inner{
          padding-left: 12px;
          background-color: #2B3648;
          border: 1px solid #4D5766;
          color: #6D86A1;
          height: 30px;
          line-height: 30px;
        }
        .el-input__prefix{
          width: 13px;
          right: 10px;
          left: auto;
          i{
            width: 13px;
            line-height: 30px;
            &::before{
              content: "";
              width: 13px;
              height: 9px;
              display: inline-block;
              background: url('../../assets/images/arrow.png') no-repeat;
              background-size: contain;
            }
          }
        }
        .el-input__suffix{
          width: 13px;
          right: 24px;
          left: auto;
          i{
            width: auto;
            color: #6D86A1;
            line-height: 30px;
          }
        }
      }
    }
  }
}
#chartPie{
  width: calc(100% - 100px);
  height: calc(100% - 50px);
  margin: 0 50px;
}
.work-board-content {
  width: 100%;
  height: calc(44% - 22px);
  position: relative;
  &:last-child {
    height: calc(56% - 28px);
  }
  .time-range{
    width: auto;
    height: 30px;
    display: flex;
    align-items: center;
    background: #080817;
    border-radius: 4px;
    i{
      display: inline-block;
      width: 34px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      color: #8796b0;
      box-sizing: border-box;
      &.active{
        background: #2B3648;
        border: 1px solid #4D5766;
        border-radius: 4px;
      }
    }
  }
}
.work-board-tips {
  position: absolute;
  top: 90px;
  width: 100%;
  .list {
    width: 90%;
    margin-left: 10%
  }
  .item {
    float: left;
    font-size: 16px;
    color: #626F86;
    margin-left: 15%;
    em {
      font-size: 20px;
      margin-left: 12px;
    }
  }
}
.work-board-list {
  width: calc(100% - 100px);
  height: calc(100% - 75px);
  margin: 0 50px;
}
.work-board-item {
  float: left;
  width:calc(50% - 5px);
  height: 100%;
  margin-right: 2px;
  background: rgba(43, 54, 72, 0.6);
  position: relative;
  .time-range{
    position: absolute;
    top: 20px;
    right: 15px;
  }
  /deep/ .el-select {
    width: 94px;
    height: 30px;
    position: absolute;
    top: 20px;
    left: 15px;
  .el-input__inner{
    padding-left: 12px;
    background-color: #2B3648;
    border: 1px solid #4D5766;
    color: #6D86A1;
    height: 30px;
    line-height: 30px;
  }
  .el-input__prefix{
    width: 13px;
    right: 10px;
    left: auto;
    i{
      width: 13px;
      line-height: 30px;
      &::before{
        content: "";
        width: 13px;
        height: 9px;
        display: inline-block;
        background: url('../../assets/images/arrow.png') no-repeat;
        background-size: contain;
      }
    }
  }
  .el-input__suffix{
    width: 13px;
    right: 12px;
    left: auto;
    i{
      width: auto;
      color: #6D86A1;
      line-height: 30px;
    }
  }
  }
}
.work-board-chart-box {
  width: 90%;
  height: 80%;
  margin: 0 auto;
  &.height {
    height: 90%
  }
}
.work-board-tit {
  font-size: 14px;
  color: #8796B0;
  margin-top: 25px;
  margin-bottom: 8px;
  text-align: center;
}
</style>
