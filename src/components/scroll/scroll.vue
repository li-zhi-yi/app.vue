<template>
    <swiper :options="swiperOption" ref="swiper">
<!--        下拉-->
        <div class="scroll-pull-down" v-if="pullDown">
            <scroll-loading :text="pullDownText" inline ref="pullDownLoading"></scroll-loading>
        </div>
        <swiper-slide>
            <slot></slot>
        </swiper-slide>
<!--        上拉-->
        <div class="scroll-pull-down" v-if="pullDown">
            <scroll-loading :text="pullUpText" inline ref="pullUpLoading"></scroll-loading>
        </div>
        <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>
<script>
    import {swiper,swiperSlide} from  'vue-awesome-swiper';
    import ScrollLoading from '../loading';
    import {
        PULL_DOWN_HEIGHT,
        PULL_DOWN_TEXT_INIT,
        PULL_DOWN_TEXT_START,
        PULL_DOWN_TEXT_ING,
        PULL_DOWN_TEXT_END,
        PULL_UP_HEIGHT,
        PULL_UP_TEXT_INIT,
        PULL_UP_TEXT_START,
        PULL_UP_TEXT_ING,
        PULL_UP_TEXT_END
    } from './config';

    export default{
        components:{ScrollLoading,swiper,swiperSlide},
        props: {
            scrollbar: {
                type: Boolean,
                default: true
            },
            data: {
                type: [Array, Object]
            },
            pullDown: {
                type: Boolean,
                default: false
            },
            pullUp: {
                type: Boolean,
                default: false
            }
        },
        // data() {
        //   return { // 下拉参数设置
        //     pulling: false,
        //     pullDownText: PULL_DOWN_TEXT_INIT,
        //     pullUpText: PULL_DOWN_TEXT_INIT,//没有
        //     swiperOption: {
        //       direction: 'vertical',
        //       slidesPerView: 'auto',
        //       freeMode: true,
        //       setWrapperSize: true,
        //       scrollbar: {
        //         el: this.scrollbar ? '.swiper-scrollbar' : null,
        //         hide: true
        //       },
        //       on: {
        //         sliderMove: this.scroll,
        //         touchEnd: this.touchEnd,
        //         // transitionEnd: this.scrollEnd
        //       }
        //     }
        //   };
        // },


    }
</script>