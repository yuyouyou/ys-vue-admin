<template>
    <section class="chart-container">
        <div id="chartPie1" style="width:100%; height:400px;"></div>
        <el-row>
            <el-col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartColumn: null,
                chartBar: null,
                chartLine: null,
                chartPie: null,
                chartPie1: null
            }
        },

        methods: {
            drawColumnChart() {
                let myChart = echarts.init(document.getElementById('chartColumn'))
                let option = {
                title: {
                    text: '工单趋势图',
                    x: 'center',
                    textStyle: {
                        color: '#8796B0',
                        fontSize: 14
                    }
                },
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
                            color: ['#8796B0'],
                            width: 1,
                            type: 'solid'
                        }
                　　},
                    //设置轴线的属性
                    axisLine:{
                        lineStyle:{
                            color:'#8796B0',
                            width:1
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
                            color: ['#8796B0'],
                            width: 1,
                            type: 'solid'
                        }
                　　},
                    //设置轴线的属性
                    axisLine:{
                        show: false,
                        lineStyle:{
                            color:'#8796B0',
                            width:1
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
                            width: 3
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
                            width: 3
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
                            width: 3
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
                            width: 3
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
                            width: 3
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
            drawLineChart() {
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                this.chartLine.setOption({
                    title: {
                        text: '工作组处理工单统计',
                        x: 'center',
                        textStyle: {
                            color: '#8796B0',
                            fontSize: 14
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
                        itemHeight: 10,
                        data:['处理总单数','按时处理数','超时处理数']
                    },
                    tooltip: {},
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
                                color: ['#8796B0'],
                                width: 1,
                                type: 'solid'
                            }
                    　　},
                        //设置轴线的属性
                        axisLine:{
                            lineStyle:{
                                color:'#8796B0',
                                width:1
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
                                color: ['#8796B0'],
                                width: 1,
                                type: 'solid'
                            }
                    　　},
                        //设置轴线的属性
                        axisLine:{
                            show: false,
                            lineStyle:{
                                color:'#8796B0',
                                width:1
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
            },
            drawchartPie1() {
                this.chartLine = echarts.init(document.getElementById('chartPie1'));
                this.chartLine.setOption({
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        x : 'left',
                        y : 'top',
                        data:['离职工单','入职工单','咨询工单','证明申请','调岗申请']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'已接收工单',
                            type:'pie',
                            radius : [20, 110],
                            center : ['25%', '50%'],
                            roseType : 'radius',
                            data:[
                                {value:10, name:'离职工单'},
                                {value:5, name:'入职工单'},
                                {value:15, name:'咨询工单'},
                                {value:25, name:'证明申请'},
                                {value:20, name:'调岗申请'}
                            ]
                        },
                        {
                            name:'已完成工单',
                            type:'pie',
                            radius : [30, 110],
                            center : ['45%', '50%'],
                            roseType : 'area',
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
                            radius : [30, 110],
                            center : ['75%', '50%'],
                            roseType : 'area',
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
            drawBarChart() {
                this.chartBar = echarts.init(document.getElementById('chartBar'));
                this.chartBar.setOption({
                    title: {
                        text: 'Bar Chart',
                        subtext: '数据来自网络'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['2011年', '2012年']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230]
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807]
                        }
                    ]
                });
            },
            drawPieChart() {
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: 'Pie Chart',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 335, name: '直接访问' },
                                { value: 310, name: '邮件营销' },
                                { value: 234, name: '联盟广告' },
                                { value: 135, name: '视频广告' },
                                { value: 1548, name: '搜索引擎' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawColumnChart()
                this.drawBarChart()
                this.drawLineChart()
                this.drawPieChart()
                this.drawchartPie1()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    /*.chart div {
        height: 400px;
        float: left;
    }*/

    .el-col {
        padding: 30px 20px;
    }
</style>
