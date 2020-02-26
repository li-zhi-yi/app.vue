<template>
    <div class="nav">
        <ul>
                <router-link :to='item.linkUrl' tag="li" v-for="(item,index) in items" :key="index" >
                <img :src="item.picUrl" alt="">
                <span>{{item.text}}</span>
                </router-link>
        </ul>
    </div>
</template>
<style lang="scss">
.nav{
        ul{
        width: 100%;
        height: 150px;
        display:flex;
        list-style:none;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items:center;
        text-align: center;
        padding-left:0;
        li{
            width:75px;
            height:75px;
            display:flex;
            align-items:center;
            text-align: center;
            flex-direction: column;
            flex-wrap: wrap;
            img{
                width: 45px;
            }
            span{
                font-size: 14px;
                font-weight: bold;
                font-family: serif;
            }
        }
    }
}
</style>
<script>
    export default{
        data(){
            return {
                items:[
    {
linkUrl: '/category',
picUrl: require('./img/nav-item-1.png'),
text: '拍卖'
},
{
linkUrl: '/category',
picUrl: require('./img/nav-item-2.png'),
text: '拍卖'
},
{
linkUrl: '/category',
picUrl: require('./img/nav-item-3.png'),
text: '拍卖'
},
{
linkUrl:'/category',
picUrl: require('./img/nav-item-4.png'),
text: '拍卖'
},
{
linkUrl: '/category',
picUrl: require('./img/nav-item-5.png'),
text: '拍卖'
},
{
linkUrl:'/category',
picUrl: require('./img/nav-item-6.png'),
text: '拍卖'
},
{
linkUrl:'/category',
picUrl: require('./img/nav-item-7.png'),
text: '拍卖'
},
{
linkUrl: '/category',
picUrl: require('./img/nav-item-8.png'),
text: '拍卖'
},
{
linkUrl: '/category',
picUrl: require('./img/nav-item-9.png'),
text: '拍卖'
},
{
linkUrl: '/category',
picUrl: require('./img/nav-item-10.png'),
text: '拍卖'
}
   ]
            }
        },
        created(){

        },
        methods:{

        }
    }
</script>