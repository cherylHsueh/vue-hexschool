// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false


axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);
  if(to.meta.requiresAuth){
    console.log('這裡需要驗證');
    const api = `${process.env.APIPATH}/api/user/check`;
    console.log(process.env.APIPATH,process.env.CUSTOMPATH);
    axios.post(api).then((response) =>{
    console.log(response.data);
    if(response.data.success){ //是登入的狀態時就放行
        // vm.$router.push('/index');
        next();
    }else{
      next({
        path:'/login'
      });
    }
    });     
  }

})


