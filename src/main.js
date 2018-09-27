// 入口文件


// 引入模板
import app from './App.vue'

// 引入包
import Vue from 'Vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入 mint-ui
import Mui from 'mint-ui'
import './lib/mui/css/mui.min.css'

// 引入路由js
import router from './router.js'


var vm = new Vue({
	el:'#app',
	render:c => c(app),
	router
})