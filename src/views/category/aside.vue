<template>
    <div class="aside">
        <div class="main-content">
                <div class="pic" v-if="content.banner">
                    <router-link :to="{path:'/home/product'}" tag='img' :src="content.banner.picUrl" alt="" class="pic-img">
                    </router-link>
                </div>
                <div 
                class="section" 
                v-for="(section,index) in content.data" 
                :key="index">
                    <h4 class="section-title">{{section.name}}</h4>
                    <ul class="section-list">
                        <li class="section-item" v-for="(item,i) in section.itemList" :key="i">
                            <a href="" class="section-link">
                                <p class="section-pic" v-if="item.picUrl">
                                    <img :src="item.picUrl" alt="" class="section-img">
                                </p>
                                <p class="section-name">{{item.name}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</template>
<style lang="scss">
 .aside{
    position:relative;
    height: 100%;
    overflow-y:auto;
    overflow-x:hidden
  }
  li{
      list-style:none;
    }
  .loading-wrapper{
    width:50%;
    padding:30px 0;
    background-color: #fff;
    border-radius:4px;
  }
  .main-content{
  padding:10px;
  }
  .pic{
    margin-bottom:12px;
    &-img{
       width: 100%;
    }
    &-link{
      display:block;
    }
  }
    .section{
      margin-bottom:12px;
      &:last-child{
        margin-bottom:0;
      }

      &-title{
        height: 28px;
        color:#080808;
        font-weight: bold;
      }

      &-item{
        width: (100%3)px;
      }
      &-link{
        display:block;
        text-decoration: none;
      }
      &-pic{
        position:relative;
        width: 80%;
        padding-bottom:80%;
        margin:0 auto;
      }

      &-img{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
      }

      &-name{
        height: 36px;
        line-height:36px;
        text-align:center;
        //文字超出省略
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
    .section-list{
      padding-left:0;
      display:flex;
      flex-wrap: wrap;
      .section-item{
        width: 33%;
      }
    }
    .g-backtop-container{
      bottom:10px;
    }
</style>
<script>
export default {
    props: {
      curId: {
        type: String,
        default: ''
      }
    },
    data(){
        return {
            content:[]
        }
    }
    ,
    created(){
        // this.get()
    },
    methods:{
        //axios请求
    //    get(curId){
    //        return this.$http.get(`http://www.imooc.com/api/category/content/${curId}`,
    //         {timeout:10000})
    //     } 
    },
    watch:{
        curId(curId){
            this.$http.get(`http://www.imooc.com/api/category/content/${curId}`,
            {timeout:10000}).then(res=>{
                // console.log(res.data.content);
                if(res.data.code==0 && res.data.content!==''){
                    this.content=res.data.content
                }else{
                    console.log('数据找不到了')
                }
            })
        }
    }
}
</script>