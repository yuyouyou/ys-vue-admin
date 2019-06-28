<template>
    <div class="pie-ringchart">
        <ul class="module-title">
            <li class="title-row">
                <span>{{title}}签约额</span>
                <span>{{subTitle}}2019.05</span>
            </li>
            <li class="title-unit">单位:{{unit}}</li>
        </ul>
        <chart class="piechart" :options="options" autoresize :style="{ height: (height + 10) + 'px', width: width + 'px' }"></chart>
    </div>
</template>

<script>
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
      options: {
        // graphic: [{
        //   type: 'text',
        //   left: '59%',
        //   top: '35%',
        //   style: {
        //     text: 'XXX类',
        //     fill: '#CCEEFF',
        //     font: 'normal 12px PingFangSC-Regular',
        //     shadowColor: '#00C8FF',
        //     shadowBlur: 10
        //   }
        // }],
        color: ['#3DCC9C', '#00CEAC', '#00FFFF', '#00AAFF', '#0055FF'],
        legend: {
          show: true,
          orient: 'vertical',
          itemGap: 16,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#5B99B9',
            fontSize: 14
          },
          data: ['多层', '高层', '小高层', '超高层', '别墅'],
          top: '5%',
          left: '15%',
          selectedMode: false
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: function (param) {
            vm.options.series[0].data.forEach(element => {
              element.label.normal.show = false
            })
            vm.options.series[0].data[param.dataIndex].label.normal.show = true
          }
        },
        series: [
          {
            name: '住宅类',
            type: 'pie',
            center: ['65%', '30%'],
            radius: ['40%', '47%'],
            legendHoverLink: true,
            hoverAnimation: true,
            label: {
              normal: {
                position: 'center',
                fontSize: 26,
                color: '#04DDE1',
                fontFamily: 'PangMenZhengDao',
                textShadowColor: '#00C8FF',
                textShadowBlur: 8
              }
            },
            data: [
              {
                value: 30.5,
                name: '多层',
                label: {
                  normal: {
                    show: true,
                    formatter: '{c}'
                  }
                }
              },
              {
                value: 40.5,
                name: '高层',
                label: {
                  normal: {
                    show: false,
                    formatter: '{c}'
                  }
                }
              },
              {
                value: 20.5,
                name: '小高层',
                label: {
                  normal: {
                    show: false,
                    formatter: '{c}'
                  }
                }
              },
              {
                value: 15.5,
                name: '超高层',
                label: {
                  normal: {
                    show: false,
                    formatter: '{c}'
                  }
                }
              },
              {
                value: 10.5,
                name: '别墅',
                label: {
                  normal: {
                    show: false,
                    formatter: '{c}'
                  }
                }
              }
            ]
          }]
      }
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    activeTab (index) {
      this.currentIndex = index
    }
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
.pie-ringchart{
    display: flex;
    flex-direction: column;

    .module-title{
        display: flex;
        align-items: center;
        padding: vh(20) vw(60) vh(0) vw(50);
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
                line-height: 28px;
                letter-spacing: 0;
            }
            :nth-child(2){
                font-family: PingFangSC-Medium;
                font-size: vw(12);
                color: #5B99B9;
                letter-spacing: 2px;
            }
        }
        .title-unit{
            font-family: PingFangSC-Regular;
            font-weight: normal;
            font-size: vw(12);
            color: #CCEEFF;
            letter-spacing: 0.48px;
            position: absolute;
            top: vh(30);
            right: vw(60);
        }
    }
    .piechart{
        // width: 100%;
        flex: 1;
    }
 
}
</style>