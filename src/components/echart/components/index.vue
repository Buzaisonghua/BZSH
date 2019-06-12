<template>
    <div class="echartsComponents">
        <EchartsPanelgroup @handleSetLineChartData="handleSetLineChartData"  />
        <el-row class="el-line-chart">
            <EchartsLineChart :chart-data="axisData" />
        </el-row>
        <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="12">
                <div class="pie-bar-chart el-line-chart">
                    <EchartsPieChart />
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="12">
                <div class="pie-bar-chart el-line-chart">
                    <EchartsBarChart />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import EchartsPanelgroup from './echarts/panel'
import EchartsLineChart from './echarts/lineChart'
import EchartsPieChart from './echarts/pieChart'
import EchartsBarChart from './echarts/barChart'

const lineChartData = {
  users: {
    yAxisData: [100, 120, 161, 134, 105, 160, 165],
    name: 'users',
    borderColor: '#6AC6C5'
  },
  messages: {
    yAxisData: [200, 192, 120, 144, 160, 130, 140],
    name: 'messages',
    borderColor: '#DF5C6D'
  },
  shopping: {
    yAxisData: [80, 100, 121, 104, 105, 90, 100],
    name: 'shopping',
    borderColor: '#56A3F0'
  },
  sugar: {
    yAxisData: [130, 140, 141, 142, 145, 150, 160],
    name: 'sugar',
    borderColor: '#61BCA4'

  }
}

export default {
  components: {
    EchartsPanelgroup,
    EchartsLineChart,
    EchartsPieChart,
    EchartsBarChart
  },
  data () {
    return {
      axisData: lineChartData.users
    }
  },
  methods: {
    handleSetLineChartData (type) {
      this.axisData = lineChartData[type]
    }
  }
}
</script>
<style lang="scss">
    .echartsComponents{
        .el-line-chart{
            margin-top: 32px;
            box-shadow: 3px 3px 3px 3px #cccccc;
        }
        .pie-bar-chart{
            padding: 16px 16px 0px;
        }
    }
</style>
