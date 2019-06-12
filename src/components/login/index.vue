<template>
    <div class="login">
        <div class="box">
            <el-form :model="loginForm" ref="longinForm" :rules="loginRules" class="longinForm">
                <div class="title-container">
                    <h3 class="title">Login Form</h3>
                </div>
                <el-form-item  prop="username">
                    <span class="svg">
                        <span class="el-icon-s-custom"></span>
                    </span>
                    <el-input
                            type="text"
                            v-model="loginForm.username"
                            autocomplete="on"
                            placeholder="Username"
                    ></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <span class="svg">
                        <span class="el-icon-unlock"></span>
                    </span>
                    <el-input
                            :type="typepassword"
                            v-model="loginForm.password"
                            autocomplete="on"
                            placeholder="Password"
                    >123</el-input>
                    <span @click="showpwd" class="svgS">
                        <span :class ="typepassword === 'password'?'el-icon-view':'el-icon-thumb'"></span>
                    </span>
                </el-form-item>
                <el-button type="primary" @click="headleLogin()">Login</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { setCookies } from '@/utils/cookie'

export default {
  data () {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (value.length > 7) {
        callback(new Error('用户名不长于七位'))
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6 || value.length > 18) {
        callback(new Error('密码为6到18位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePassword, trigger: 'blur' }
        ]
      },
      typepassword: 'password',
      users: '',
      userNameArr: [],
      passWordArr: []
    }
  },
  methods: {
    showpwd () {
      if (this.typepassword === 'password') {
        this.typepassword = 'text'
      } else {
        this.typepassword = 'password'
      }
    },
    headleLogin () {
      for (let i = 0; i < this.users.length; i++) {
        this.userNameArr.push(this.users[i].username)
        this.passWordArr.push(this.users[i].password)
      }
      if (this.userNameArr.indexOf(this.loginForm.username) === -1) {
        alert('没有此账号')
      } else {
        if (this.loginForm.password === this.passWordArr[this.userNameArr.indexOf(this.loginForm.username)]) {
          setCookies('username', this.loginForm.username)
          setCookies('isNav', 'true')
          this.$store.commit('changeLogin')
          this.$router.push({path: '/'})
        } else {
          alert('密码错误')
        }
      }
    }
  },
  beforeCreate () {
    this.axios.get('http://localhost:8080/static/users.json').then((response) => {
      this.users = response.data.users
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
    .login{
        width: 100%;
        height: 100%;
        min-hright: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .box{
            width: 40%;
            min-width: 349px;
            .title-container{
                h3{
                    text-align: center;
                    font-size: 24px;
                }
            }
            .el-form-item__content{
                border:1px solid #cccccc;
                border-radius: 5px;
                .svg{
                    display: inline-block;
                    width: 14px;
                    padding-left:10px ;
                }
                .svgS{
                    display: inline-block;
                    width: 14px;
                    padding-right: 10px;
                    float: right;
                }
                .el-input{
                    width: 80%;
                    input{
                        border:none;
                    }
                }
            }
            .el-button{
                width: 100%;
                border: none;
                background: mediumseagreen;
            }
        }
    }
</style>
