<template>
    <div class="tabbar">
           <router-link :to='item.path' tag="div" v-for="(item,index) in list" :key="index">
           <div class="item">
                <i :class="item.class" ></i>
                <span >{{item.name}}</span>
            </div>
           </router-link>
    </div>
</template>
<style lang="scss">
    .router-link-active{
        i{
            color:red;
        }
        span{
            color:red;
            font-weight:bold;
        }
    }
    .tabbar{
        width: 100%;
        height: 50px;
        display:flex;
        align-items:center;
        justify-content: space-evenly;
        text-align:center;
    .item{
        display: flex;
        flex-direction: column;
        color:black;
        align-items:center;
        font-size: 18px;
    }
    }
    .red{
        color:red;
    }
</style>
<script>
export default {
    data(){
        return{
            activeClass:'',
            list:[
                {
                    class:'iconfont icon-home',
                    name:'首页',
                    path:'/home',
                    id:0
                },
                 {
                    class:'iconfont icon-category',
                    name:'分类页',
                    path:'/category',
                    id:1
                },
                 {
                    class:'iconfont icon-cart',
                    name:'购物车',
                    path:'/cart',
                    id:2
                },
                 {
                    class:'iconfont icon-personal',
                    name:'个人中心',
                    path:'/personal',
                    id:3
                }
            ]
        }
    },
    created(){
        // this.init()
    },
    methods:{
        // init(){
        //     this.activeClass=this.list[0].id;
        //     // this.$refs.active.addClass('Tabactives');
        // },
        // getActive(index){
        //     console.log(this.$refs.myI)
        //         this.activeClass=this.list[index].id;
        //         // this.$refs.myI.classList.add('red')
        // }
    }
}
</script>