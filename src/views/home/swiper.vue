<template>
      <!-- swiper -->
    <loading v-if="!sliders.length"></loading>
      <swiper :options="swiperOption" v-else>
        <swiper-slide v-for="(item,index) in sliders" :key="index" >
         <router-link to='/category' >
           <img :src="item.picUrl" alt="" class="swiper">
         </router-link>         
        </swiper-slide>
      </swiper>
</template>
<style lang="scss">
.swiper{
  width: 100%;
  height:170px;
}
</style>
<script>
    import Loading from '../../components/loading';
  export default {
      components:{Loading},
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        sliders:[]
      }
    },
    created(){
      this.$http.get('http://www.imooc.com/api/home/slider',{
        timeout:10000
      })
      .then(res=>{
        if(res.data.code==0){
          this.sliders=res.data.slider
        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }
</script>