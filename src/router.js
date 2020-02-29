import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes=[
  {
    path:'/home',
    component:()=>import('./views/home/home'),
    children:[{
      name: 'home-product',
      path: 'product/:id',
      component: () => import('./views/product/product')
    }]
  },
  {
    path:'/category',
    component:()=>import('./views/category/category')
  },
  {
    path:'/search',
    name:'search',
    component:()=>import('./views/search/search')
  },
  {
    path:'/cart',
    component:()=>import('./views/cart/cart')
  },
  {
    path:'/personal',
    component:()=>import('./views/personal/personal')
  },
  {
    path:'/',
    redirect:()=>import('./views/home/home')
  }
];
export default new Router({
  routes
});
