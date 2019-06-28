<template lang="html">
  <div class="resource">
    <div class="content flex-box">
      <div class="multiple">
        <div class="head-title">
          <p class="title">{{resources.subTitle}}</p>
          <p class="sub-title">截至{{time}}</p>
        </div>
        <div class="multiple-content">
          <p class="degradation-rate flex-box"><span>去化率：</span><span>{{accMul(resources.salePercent, 100)}}%</span></p>
          <div class="ball">
            <p>{{resources.stockNum | thousandFilter}}</p>
            <p>库存量</p>
            <div class="ball-bg" :style="{height: vw(190), width: vw(190)}">
              <svg class="waterBallOne" ref="waterBallOne" :style="{height: svgHeight.one + 'px'}">
                <path fill="rgba(33, 150, 243, 0.4)"></path>
                <path fill="rgba(33, 150, 243, 0.6)"></path>
              </svg>
            </div>
          </div>
          <p class="ratio flex-box"><span>存销率：</span><span>{{accMul(resources.rate, 100)}}%</span></p>
        </div>
      </div>
      <div class="new flex-box">
        <div class="new-left">
          <p>{{newResources.subTitle}}</p>
          <p class="flex-box"><span>去化率：</span><span>{{accMul(newResources.salePercent, 100)}}%</span></p>
        </div>
        <div class="new-right flex-box">
          <div class="">
            <p>{{newResources.stockNum | thousandFilter}}</p>
            <p>库存量</p>
          </div>
          <div class="water-box">
            <div class="ball-bg" :style="{height: vw(110), width: vw(110)}">
              <svg class="waterBallTwo" ref="waterBallTwo" :style="{height: svgHeight.two + 'px'}">
                <path fill="rgba(33, 150, 243, 0.4)"></path>
                <path fill="rgba(33, 150, 243, 0.6)"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="old flex-box">
        <div class="old-left">
          <p>{{oldStock.subTitle}}</p>
          <p class="flex-box"><span>去化率：</span><span>{{accMul(oldStock.salePercent, 100)}}%</span></p>
          <p>其中-低效率库存</p>
          <p>{{oldStock.poorStock | thousandFilter}}</p>
        </div>
        <div class="new-right flex-box">
          <div class="">
            <p>{{oldStock.stockNum | thousandFilter}}</p>
            <p>库存量</p>
          </div>
          <div class="water-box">
            <div class="ball-bg" :style="{height: vw(110), width: vw(110)}">
              <svg class="waterBallThree" ref="waterBallThree" :style="{height: svgHeight.three + 'px'}">
                <path fill="rgba(33, 150, 243, 0.4)"></path>
                <path fill="rgba(33, 150, 243, 0.6)"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number
  },
  data () {
    return {
      time: '2019.10.09',
      svgHeight: {
        one: 190,
        two: 110,
        three: 110
      },
      resources: {
        subTitle: '综合可用资源',
        salePercent: 0.54, // 去化率
        stockNum: 125156234, // 库存量
        rate: 0.03 // 存销比
      },
      /* 新增资源 */
      newResources: {
        subTitle: '新增资源',
        stockNum: 89123124, // 库存量
        salePercent: 0.1251 // 去化率
      },
      /* 往年库存 */
      oldStock: {
        subTitle: '往年库存',
        salePercent: 0.512, // 去化率
        stockNum: 155762, // 库存量
        poorStock: 12312313 // 低效率库存
      }
    }
  },
  mounted () {
    this.svgHeight = {
      one: this.getWaveHeight('One', this.resources.salePercent),
      two: this.getWaveHeight('Two', this.newResources.salePercent),
      three: this.getWaveHeight('Three', this.oldStock.salePercent)
    }
    this.startWave('waterBallOne', this.svgHeight.one, this.getWaveWidth('One'))
    this.startWave('waterBallTwo', this.svgHeight.two, this.getWaveWidth('Two'))
    this.startWave('waterBallThree', this.svgHeight.three, this.getWaveWidth('Three'))
  },
  methods: {
    accMul (arg1, arg2) {
      let m = 0
      let s1 = arg1.toString()
      let s2 = arg2.toString()
      try {
        m += s1.split('.')[1].length
      } catch (e) {}
      try {
        m += s2.split('.')[1].length
      } catch (e) {}
      return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
    },
    getWaveHeight (ref, percent) {
      let height = this.$refs[`waterBall${ref}`].clientHeight || 0
      return height * percent
    },
    getWaveWidth (ref) {
      return this.$refs[`waterBall${ref}`].clientWidth || 0
    },
    vw (px) {
      return px / 1920 * 100 + 'vw'
    },
    vh (px) {
      return px / 1080 * 100 + 'vh'
    },
    startWave (id, svgHeight, svgWidth) {
      let waveData = [[], []]
      let area = this.$d3.area().y0(svgHeight).curve(this.$d3.curveBasis) // curve会进行平滑处理
      let svgPaths = []
      let max = 200 // 控制速度
      for (let i = 0; i < max; i++) {
        let r = i / max * 2
        waveData[0].push(r) // 波浪一
        waveData[1].push(r + 1) // 波浪二（+1代表偏移π）
      }
      let d = svgWidth / (waveData[0].length - 1)
      svgPaths.push(this.$d3.selectAll(`.${id} path:first-child`))
      svgPaths.push(this.$d3.selectAll(`.${id} path:last-child`))

      function areaGenerator ({ data, index }) {
        let waveHeight = 0.1
        let areaData = []
        if (index) {
          areaData = data.map(function (y, i) {
            return [i * d, svgHeight * (1 - ((waveHeight + 0.1) * Math.sin(y * Math.PI) + 2) / 3)] // +2将范围[-1,1]转成[1,3]
          })
        } else {
          areaData = data.map(function (y, i) {
            return [(data.length - i) * d, svgHeight * (1 - (waveHeight * Math.sin(y * Math.PI) + 2) / 3)] // +2将范围[-1,1]转成[1,3]
          })
        }
        return function () {
          return area(areaData)
        }
      }

      function renderWave () {
        svgPaths.forEach(function (svgPath, i) {
          svgPath.attr('d', areaGenerator({ data: waveData[i], index: i }))
          waveData[i] = getNextData(waveData[i])
        })
        requestAnimationFrame(renderWave)
      }

      function getNextData (data) {
        let r = data.slice(1)
        r.push(data[0])
        return r
      }
      requestAnimationFrame(renderWave)
    }
  }
}
</script>

<style lang="scss" scoped>
.ball-bg {
  width: vw(190);
  height: vw(190);
  z-index: -1;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/templates/inventory_resource_template/ball_bg.png");
  background-size: 100% 100%;
  border-radius: 50%;
  overflow: hidden;
  svg {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    path {
      width: 100%;
      z-index: 1;
    }
  }
}
.resource {
  width: 100%;
  height: 100%;
  font-weight: normal;
  text-align: left;
  background: rgba(50, 110, 255, 0.06);
  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    padding: 0 vw(24);
    .multiple {
      padding: vh(20) 0;
      width: 100%;
      .head-title {
        text-align: left;
        font-family: PingFangSC-Medium;
        .title {
          font-size: vw(20);
          line-height: vh(28);
          color: #6CD9FF;
          letter-spacing: 0;
        }
        .sub-title {
          font-size: vw(12);
          color: #5B99B9;
          line-height: vh(16);
          letter-spacing: 2px;
        }
      }
      .multiple-content {
        margin-top: vh(12);
        .degradation-rate, .ratio {
          text-align: center;
          justify-content: center;
          align-items: center;
          span {
            display: inline-block;
          }
          span:nth-child(1) {
            font-family: PingFangSC-Medium;
            font-size: vw(18);
            line-height: vh(18);
            color: #FFFFFF;
            letter-spacing: 1.5px;
          }
          span:nth-child(2) {
            font-family: PangMenZhengDao;
            font-size: vw(36);
            line-height: vh(38);
            color: #03F2F4;
            letter-spacing: 2px;
            text-shadow: 0 0 8px #00C8FF;
          }
        }
        .ratio {
          span:nth-child(2) {
            font-size: vw(26);
            line-height: vh(28);
          }
          margin-top: vh(20);
        }
        .ball {
          width: vw(190);
          height: vw(190);
          margin: vh(19) auto;
          text-align: center;
          position: relative;
          z-index: 9;
          box-shadow: 0 0 10px #00C8FF inset;
          border-radius: 50%;
          p:nth-child(1) {
            font-family: PangMenZhengDao;
            font-size: vw(24);
            color: #03F2F4;
            letter-spacing: 1.26px;
            text-align: center;
            text-shadow: 0 0 8px #00C8FF;
            padding: vh(83) 0 vh(9);
          }
          p:nth-child(2) {
            font-family: PingFangSC-Regular;
            font-size: vw(14);
            color: #CCEEFF;
            letter-spacing: 0;
            text-align: center;
            text-shadow: 0 0 10px #00C8FF;
          }
        }
      }
    }
    .new {
      width: 100%;
      height: vh(170);
      box-sizing: border-box;
      border-bottom: 1px solid rgba(74, 144, 226, 0.2);
      border-top: 1px solid rgba(74, 144, 226, 0.2);
      align-items: center;
      justify-content: space-between;
    }
    .old {
      width: 100%;
      height: vh(195);
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
    }
    .new-left, .old-left {
      width: 50%;
      p {
        width: 100%;
      }
      p:before {
        content: '';
        width: vw(16);
        height: vw(16);
        display: inline-block;
        background-color: #00FFFF;
        margin-right: vw(10);
      }
      p:not(:first-child):before {
        background-color: inherit;
      }
      p:nth-child(1) {
        font-family: PingFang-SC-Regular;
        font-size: vw(20);
        line-height: vh(28);
        color: #5B99B9;
        letter-spacing: 0;
        margin-bottom: vh(30);
      }
      p:nth-child(2) {
        align-items: center;
        span {
          display: inline-block;
        }
        span:first-child {
          font-family: PingFangSC-Medium;
          font-size: vw(18);
          line-height: vh(24);
          color: #FFFFFF;
          letter-spacing: 1.5px;
        }
        span:last-child {
          font-family: PangMenZhengDao;
          font-size: vw(24);
          line-height: vh(24);
          color: #03F2F4;
          letter-spacing: 1.26px;
          text-align: center;
          text-shadow: 0 0 8px #00C8FF;
        }
      }
      p:nth-child(3) {
        font-family: PingFangSC-Regular;
        font-size: vw(18);
        line-height: vh(25);
        color: #5793B2;
        letter-spacing: 0;
        margin: vh(15) 0 vh(5);
      }
      p:nth-child(4) {
        font-family: PangMenZhengDao;
        font-size: vw(22);
        line-height: vh(24);
        color: #04DDE1;
        letter-spacing: 1.57px;
      }
    }
    .new-right, .old-right {
      width: 50%;
      height: calc(100% - #{vh(10)});
      box-sizing: border-box;
      margin-top: vh(10);
      background-repeat: no-repeat;
      background-position: center;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 9;
      .water-box {
        position: absolute;
        width: vw(110);
        height: vw(110);
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 5px #00C8FF inset;
      }
      p:first-child {
        font-family: PangMenZhengDao;
        font-size: vw(20);
        line-height: vh(24);
        color: #03F2F4;
        letter-spacing: 1.05px;
        text-align: center;
        text-shadow: 0 0 8px #00C8FF;
        margin-bottom: vh(3);
      }
      p:last-child {
        font-family: PingFangSC-Regular;
        font-size: vw(14);
        line-height: vh(20);
        color: #CCEEFF;
        letter-spacing: 0.56px;
        text-align: center;
      }
    }
  }
}
</style>
