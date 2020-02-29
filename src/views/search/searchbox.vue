<template>
    <div class="search">
        <i class="iconfont icon-search search-left"></i>
        <input type="text"
               class="search-box"
               :placeholder="placeholder"
               @input="getvalue"
               v-model="text"
               ref="input"
        />
        <i class="iconfont icon-close search-right" v-if="text" @click="clearText"></i>
    </div>
</template>
<style lang="scss">
.search{
    width: 100%;
    height:50px;
    padding:0 7px;
    border-radius:50%;
    position:relative;
}
.search-left{
    position: absolute;
    left:5px;
}
.search-right{
    position: absolute;
    right:20px;
}
.iconfont{
    color:#ccc;
    font-size: 18px;
    font-weight: bold;
}
.search-box{
    width: 80%;
    position:absolute;
    left:0;
    margin:25px 0;
    top:-16px;
    background: transparent;
    padding-left:20px;
    height: 25px;
    color: #666;
    box-shadow:none;
    outline:none;
    line-height: 1.5;
    border-radius: 10px;
    border:1px solid black;
}
</style>
<script>
    import {debounce} from '../../assets/JS/util';
    import {searchMixin} from './mixins';
    import $jsonp from 'jsonp'
    export default {
        props:{
            placeholder:{
                type:String,
                default:'开学季有礼,好货五折起'
            }
        },
        mixins: [searchMixin],
        data(){
            return {
                show:false,
                text:''
            }
        },
        methods:{
            getvalue(){
                debounce(this.getSearchResult(),100)
                // console.log(this.text);
            },
            clearText(){
                this.text=''
            },
            //获取搜索结果数据 --jsonp
            getSearchResult(keyword){
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
        },
       watch:{
           getvalue(value){
                this.$emit('See',this.text);
            }
       }
    }
</script>