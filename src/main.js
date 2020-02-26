import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入并安装axios
import axios from 'axios';
Vue.prototype.$http=axios;


//引入字体图标
import './assets/fonts/icons.scss'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */);

//引入并安装jsonp
import $jsonp from 'vue-jsonp';
Vue.use($jsonp);

import './registerServiceWorker'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
