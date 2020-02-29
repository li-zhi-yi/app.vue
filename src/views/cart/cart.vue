<template>
    <div class="cart">
        <cart-header>
            <div slot="center" class="cart-center">购物车</div>
        </cart-header>
        <div class="cart-container">
            <div class="enpty" v-if="!num">
                <img src="./购物车空.png" alt="">
                <p>购物车空空如也,快去购物吧!</p>
            </div>
            <div>
                <img :src="img" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .cart{
        width: 100%;
        height: 100%;
        padding-bottom: 50px;
        background-color:#666666;
        &-center{
            text-align:center;
            line-height: 50px;
            border-bottom:2px solid gray;
        }
        &-container{
            width: 100%;
            .enpty{
                img{
                    width: 100%;
                    height:240px ;
                }
                p{
                    font-size: 20px;
                    font-weight: bold;
                    color:lightgoldenrodyellow;
                    text-align:center;
                }
            }
        }
    }
</style>
<script>
    import CartHeader from '../../components/Heaer'
    export default{
        components:{CartHeader},
        computed:{
            num(){
                return this.$store.state.num;
            },
            img(){
                return this.$store.state.img;
            }
        }
    }
</script>