<template>
    <div class="recommend">
        <h3 class="recommend-title">热卖推荐</h3>
        <ul class="recommend-list">
            <router-link 
            class="recommend-item" v-for="(item,index) in recommends" :key="index" :to="{name: 'home-product',
             params: {
             id: item.baseinfo.itemId,
             name:item.name.shortName,
             img:item.baseinfo.picUrlNew,
             price:item.price.origPrice,
             actPrice:item.price.actPrice,
             soldCount:item.remind.soldCount
            }}" tag='li'>
                 <p class="recommend-name">
                        {{item.name.shortName}}
                </p>
                <div class="recommend-pic">
                    <img class="recommend-img" :src="item.baseinfo.picUrlNew" alt="">
                </div>
                    <div class="recommend-div">
                        <div class="recommend-origPrice">
                        <del>¥{{item.price.origPrice}}</del>
                    </div>
                    <div class="recommend-info">
                        <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
                        <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
                    </div>
                    </div>
            </router-link>
        </ul>
    </div>

</template>
<style lang="scss">
    .recommend{
        width: 100%;
        box-sizing:border-box;
        &-title{
            line-height:24px;
        }
        &-list{
            list-style-type: none;
            padding-left:0;
            width: 100%;
            .recommend-item{
                width: 100%;
                display:flex;
                flex-direction: column;
                .recommend-img{
                    width: 100%;
                    height: 360px;
                }
                .recommend-name{
                    color:yellowgreen;
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                }
                .recommend-origPrice{
                    display:inline-block;
                    color:pink;
                    font-size: 14px;
                }
                .recommend-info{
                    float:right;
                    color:red;
                    font-size: 16px;
                }
            }
        }
    }
</style>
<script>
    export default{
        props:['news'],
        data(){
            return{
                recommends:[],
                curPage:1,
                totalPage:1
            }
        },
        created(){
        this.jsp().then((data)=>{
            if(data){
                    // console.log(this.recommends.concat(data.itemList));
                    this.curPage++;
                    this.totalPage=data.totalPage;
                    this.recommends=this.recommends.concat(data.itemList)
                    // this.$emit('')
                }
        }).catch(err=>{console.log(err)})

    },
    methods:{
        //封装jsonp
        jsp(baseUrl='https://ju.taobao.com/',method='json/tg/ajaxGetItemsV2.json',page=1,psize=20){
                let data={
                    page,
                    psize,
                    type: 0,
                    frontCatId:''
                };
                if(this.curPage>this.totalPage){
                    return console.log('没有更多了');
                }
            // baseUrl就是服务器地址
            let url=`${baseUrl}${method}?`;
            //jsonp请求参数和get方法类似,都是params的方法拼接
            for(let item in data){
                url+=`&${item}=${data[item]}`;
            }
            return  this.$jsonp(url);
                },
            },
    watch:{
        recommends(recommends){
            this.news(recommends)
        }
    }
}
</script>
