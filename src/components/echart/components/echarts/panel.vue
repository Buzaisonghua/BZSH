<template>
    <el-row :gutter="40" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('users')" @mouseenter="enterUsersCol()" @mouseleave="leaveCol()">
                <div class="card-panel-icon-wrapper" :style="usersIconBackground">
                    <span class="el-icon-suitcase" :style="usersIconColor"></span>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        users News
                    </div>
                    <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('messages')" @mouseenter="enterMessagesCol()" @mouseleave="leaveCol()">
                <div class="card-panel-icon-wrapper" :style="messagesIconBackground">
                    <span class="el-icon-chat-dot-round" :style="messagesIconColor"></span>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        Messages
                    </div>
                    <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('shopping')"  @mouseenter="enterShoppingCol()" @mouseleave="leaveCol()">
                <div class="card-panel-icon-wrapper" :style="shoppingIconBackground">
                    <span class="el-icon-shopping-cart-2" :style="shoppingIconColor"></span>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        shopping
                    </div>
                    <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel" @click="handleSetLineChartData('sugar')"  @mouseenter="enterSugarCol()" @mouseleave="leaveCol()">
                <div class="card-panel-icon-wrapper" :style="sugarIconBackground">
                    <span class="el-icon-sugar" :style="sugarIconColor"></span>
                </div>
                <div class="card-panel-description">
                    <div class="card-panel-text">
                        sugar Number
                    </div>
                    <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data () {
    return {
      usersIconColor: {
        color: '#6AC6C5'
      },
      messagesIconColor: {
        color: '#DF5C6D'
      },
      shoppingIconColor: {
        color: '#56A3F0'
      },
      sugarIconColor: {
        color: '#61BCA4'
      },
      usersIconBackground: {
        background: ''
      },
      messagesIconBackground: {
        background: ''
      },
      shoppingIconBackground: {
        background: ''
      },
      sugarIconBackground: {
        background: ''
      },
      usersTransform: {
        boxShadow: ''
      },
      messagesTransform: {
        boxShadow: ''
      },
      shoppingTransform: {
        boxShadow: ''
      },
      sugarTransform: {
        boxShadow: ''
      },
      axisDate: ''
    }
  },
  methods: {
    childUsers () {
      this.$emit('byAxisData', this.axisDate)
    },
    enterUsersCol () {
      this.usersIconBackground.background = '#6AC6C5'
      this.usersTransform.boxShadow = '3px 3px 3px #6AC6C5'
      this.usersIconColor.color = '#fff'
    },
    enterMessagesCol () {
      this.messagesIconBackground.background = '#DF5C6D'
      this.messagesTransform.boxShadow = '3px 3px 3px #66FFCC'
      this.messagesIconColor.color = '#fff'
    },
    enterShoppingCol () {
      this.shoppingIconBackground.background = '#56A3F0'
      this.shoppingTransform.boxShadow = '3px 3px 3px #CCFFFF'
      this.shoppingIconColor.color = '#fff'
    },
    enterSugarCol () {
      this.sugarIconBackground.background = '#61BCA4'
      this.sugarTransform.boxShadow = '3px 3px 3px #FFCCCC'
      this.sugarIconColor.color = '#fff'
    },
    leaveCol () {
      this.usersIconBackground.background = ''
      this.messagesIconBackground.background = ''
      this.shoppingIconBackground.background = ''
      this.sugarIconBackground.background = ''
      this.usersTransform.boxShadow = ''
      this.messagesTransform.boxShadow = ''
      this.shoppingTransform.boxShadow = ''
      this.sugarTransform.boxShadow = ''
      this.usersIconColor.color = '#6AC6C5'
      this.messagesIconColor.color = '#DF5C6D'
      this.shoppingIconColor.color = '#56A3F0'
      this.sugarIconColor.color = '#61BCA4'
    },
    handleSetLineChartData (type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
    .panel-group {
        margin-top: 18px;

        .card-panel-col {
            margin-bottom: 32px;
        }

        .card-panel {
            height: 108px;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #666;
            background: #fff;
            box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
            border-color: rgba(0, 0, 0, .05);

            .icon-people {
                color: #40c9c6;
            }

            .icon-message {
                color: #36a3f7;
            }

            .icon-money {
                color: #f4516c;
            }

            .icon-shopping {
                color: #34bfa3
            }

            .card-panel-icon-wrapper {
                font-size: 40px;
                margin-left: 15px;
                padding: 10px;
                transition: all 0.38s ease-out;
                border-radius: 6px;
            }

            .card-panel-icon {
                float: left;
                font-size: 48px;
            }

            .card-panel-description {
                float: right;
                font-weight: bold;
                margin: 26px;
                margin-left: 0px;

                .card-panel-text {
                    line-height: 18px;
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 16px;
                    margin-bottom: 12px;
                }

                .card-panel-num {
                    font-size: 20px;
                }
            }
        }
    }

    @media (max-width:550px) {
        .card-panel-description {
            display: none;
        }

        .card-panel-icon-wrapper {
            float: none !important;
            width: 100%;
            height: 100%;
            margin: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;

            .svg-icon {
                display: block;
                margin: 14px auto !important;
                float: none !important;
            }
        }
    }
</style>
