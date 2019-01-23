import Vue from 'vue';
import VueRouter from 'vue-router';
//以上是官方的元件

// import Home from '@/components/HelloWorld';
import Login from '@/components/pages/login';
import Dashboard from '@/components/dashboard';
import Products from '@/components/pages/products';
//以上自訂的分頁元件

Vue.use(VueRouter);
//輸入這段啟用它

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'login',   //如果用戶再網址端輸入沒有的存在的頁面，會直接導入登入頁
        },
        // {
        //     name:'HelloWorld',
        //     path:'/index',
        //     component:Home,
        //     meta: { requiresAuth: true },
        // },
        {
            name:'login',
            path:'/login',
            component:Login,
        },
        {
            name:'admin',
            path:'/admin',
            component:Dashboard,
            children:[
                {
                    name:'products',
                    path:'products',
                    component:Products,
                    meta: { requiresAuth: true },                    
                },
            ],
        },
    ]
  });