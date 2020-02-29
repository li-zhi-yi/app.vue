<template>
    <div class="home">
     <home-header class="home-header">
      <i class="iconfont icon-scan" slot="left"></i>
         <home-search slot="center" @click.native='routerTo' class="home-search"></home-search>
      <router-link slot="right" to='/personal' >
        <img src="../../assets/img/小房子.png" class="home-right" alt="photo">
      </router-link>
    </home-header>
    <div class="container" >
       <home-scroll/>
        <home-swiper ></home-swiper>
        <home-nav ></home-nav>
        <home-recommend :news='information' ></home-recommend>
    </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
.home{
    position: relative;
    width: 100%;
    height:100%;
    padding-bottom:50px;
    .home-header{
    width: 100%;
    height: 50px;
    position: absolute;
    left:0;
    top:0;
    display: flex;
    align-items:center;
    z-index:1002;
    img{
        width: 30px;
        margin-top:10px;
    }
}
.container{
    width: 100%;
    padding:0 0 50px 0;
    height:100%;
    overflow-y:scroll;
}
}
.home-search{
    background-color:transparent;;
}
</style>
<script>
import HomeHeader from '../../components/Heaer';
import HomeSwiper from './swiper';
import HomeNav from './nva';
import HomeRecommend from './recommend';
import HomeLoading from '../../components/loading';
import HomeScroll from '../../components/scroll/scroll';
import HomeSearch from '../search/searchbox'
export default {
    components:{HomeHeader,HomeSwiper,HomeNav,HomeRecommend,HomeLoading,HomeScroll,HomeSearch},
    data(){
        return {
            recommends:'',
            show:''
        }
    },
    created(){
        this.show=true;
    },
    methods:{
        routerTo(){
            this.$router.push({name:'search'})
        },
        information(e){
            this.recommends=e;
            // console.log(e)
        }
    }
}
</script>