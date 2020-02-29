<template>
    <div class="hot">
        <h4 class="hot-title">热门搜索</h4>
        <div class="loading-container" v-if="!hots.length">
            <hot-loading ></hot-loading>
        </div>
        <ul class="hot-list" v-else>
            <li class="hot-item"
            v-for="(item,index) in hots"
                :key="index"
                @click="$_search_selectItem(item)"
            >{{item}}</li>
        </ul>
    </div>
</template>
<style lang="scss">
    .hot {
        padding-left: 10px;
        background-color: #fff;
        border-bottom: 1px solid #f0f2f5;
        margin-bottom: 10px;
        &-title {
            height: 34px;
            margin:0 ;
            line-height: 34px;
            font-size: 14px;
            font-weight: bold;
        }

        &-list {
            list-style:none;
            margin:0;
            display: flex;
            flex-wrap: wrap;
            padding-left:0;
        }

        &-item {
            padding: 8px;
            background-color: #f0f2f5;
            border-radius: 4px;
            margin: 0 18px 10px 0;
            color: #686868;
        }
    }

    .loading-container {
        padding: 10px 0;
    }
</style>
<script>
    import HotLoading from '../../components/loading';
    import {searchMixin} from './mixins';
    import $http from 'axios';
    export default{
    components:{HotLoading}, mixins: [searchMixin],
        data(){
        return {
            hots:[]
            }
        },
    created(){
        this.getSearchHotKeyword();
    },
        methods:{
        //获取热门搜索数据
        getSearchHotKeyword(){
            return $http.get('http://www.imooc.com/api/search/hot',
                {
                    timeout:10000
                }).then(res=>{
                    // console.log(res.data.hotKeyWord.def);
                    if(res.data.hotKeyWord){
                        console.log(res.data.hotKeyWord.def);
                        //success
                        return this.hots=res.data.hotKeyWord.def;

                    }
                throw new Error('没有成功获取到数据！');
            }).catch(err=>{
                if(err){
                    console.log(err)
                }
            })
        },
            //获取搜索结果数据 --jsonp
            getSearchResult(){
                const url='https://suggest.taobao.com/sug';
                const params = {
                    q: keyword,
                    code: 'utf-8',
                    area: 'c2c',
                    nick: '',
                    sid: null
                };
                const jsonpOptions = {
                    param: 'callback',
                    timeout: 10000
                };
                return $jsonp(url,params,jsonpOptions).then(res=>{
                    console.log(res);
                    if(res.result){
                        console.log(res);
                        return res.result;
                    }
                    throw new Error('没有成功获取到数据')
                }).catch(res=>{
                    if(err){}
                    console.log(err);
                }).then(res=>{
                    return new Promise(resolve=>{
                        setTimeout(()=>{
                            resolve(res);
                        },1000)
                    })
                })
            }
        }

    }
</script>