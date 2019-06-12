<template>
    <div id="line-chart" :style="{height: height, width: width}" ></div>
</template>

<script>
import echarts from 'echarts'
import resize from './resize'
export default{
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  watch: {
    chartData: {
      deep: true,
      handler (val) {
        this.setOptions(val)
      }
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById('line-chart'))
      this.setOptions(this.chartData)
    },
    setOptions ({ yAxisData, name, borderColor } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          },
          lineStyle: {
            color: 'red'
          }
        },
        grid: {
          left: 26,
          right: 26,
          bottom: 26,
          top: 40,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: name,
            smooth: false,
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: borderColor,
                lineStyle: {
                  color: borderColor,
                  width: 5
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: yAxisData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }]
      })
    }
  }
}
</script>
<style lang="scss">
    .line-chart{
        background: #61BCA4;
    }
</style>
