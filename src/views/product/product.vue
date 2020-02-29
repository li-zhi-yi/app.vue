<template>
    <div class="product">
        <product-header class="product-header">
            <i class="iconfont icon-back" slot="left" @click="routerTo"></i>
            <div slot="center" class="product-center">详情页</div>
            <i class="iconfont icon-cart" slot="right"></i>
        </product-header>
        <div class="product-container">
            <img :src="img" alt="photo" class="product-img">
            <del><span v-text="'¥'+price" class="del"></span></del>
            <div class="product-info">
                <span v-text="'¥'+actPrice"></span>
                <span v-text="'已售'+soldCount+'件'"></span>
            </div>
            <h3 v-text="name" class="title"></h3>
            <ul class="counter">
                <li id="minus"><input type="button" v-on:click="minuser" value="-"/></li>
                <li id="countnum" >{{num}}件</li>
                <li id="plus"><input type="button" v-on:click="adder" value="+"/></li>
                <li><button @click="submitValue">加入购物车</button></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    .product{
        overflow: hidden;
        position:absolute;
        top:0;
        left:0;
        z-index:1004;
        width: 100%;
        height: 100%;
        background-color:#fff;
        &-header{
            background-color:#E12A21;
            .product-center{
                color:white;
                font-size: 18px;
                font-weight: bold;
            }
        }
        .title{
            background-color:#42b983;
            margin:0;
        }
        &-container{
            width: 100%;
            .product-img{
                width: 100%;
                height:360px;
            }
            .del{
                font-size: 20px;
                display: block;
                background-color:#cccccc;
                width: 100%;
                color:red;
            }
            .product-info{
                width: 100%;
                height: 30px;
                display: flex;
                background-color:#EF3568;
                align-items:center;
                justify-content: space-between;
                color:wheat;
            }
        }
        .counter{
            display:flex;
            margin:0;
            list-style: none;
            height: 170px;
            padding-left:0;
            li{
                margin-right:44px;
                width: 40px;
                margin-top:30px;
            }
            li:last-child{
                flex:1;
                height:40px;
                line-height:40px;
                margin:100px 0 0 0;
                button{
                    border:1px solid thistle;
                    background-color:yellow;
                    border-radius:15%;
                    width: 150px;
                    text-align:center;
                    display:inline-block;
                }
            }
        }

    }
</style>
<script>
import ProductHeader from '../../components/Heaer'
    export default{
        components:{ProductHeader},
        data(){
            return {
                name:'',
                img:'',
                price:'',
                actPrice:'',
                soldCount:'',
            }
        },
        computed:{
            num(){
                return this.$store.state.num
            }
        },
        created(){
            this.init()
        },
        methods:{
            routerTo(){
                this.$router.go(-1);
            },
            init(){
                this.name=this.$route.params.name;
                this.img=this.$route.params.img;
                this.price=this.$route.params.price;
                this.actPrice=this.$route.params.actPrice;
                this.soldCount=this.$route.params.soldCount;
            },
            adder(){
                this.$store.commit('add',1)
            },
            minuser(){
                    this.$store.commit('cutDown',-1)
            },
            submitValue(){
                        if(this.$store.state.num>0){
                            this.$router.push({path:'/cart'});
                            this.$store.commit('updatePrice',{actPrice:this.actPrice,img:this.img});
                        }
            }
        }

    }
</script>