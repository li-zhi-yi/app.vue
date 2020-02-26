<template>
    <ul class="ul">
        <li v-for="(item,index) in categoryNames" :key="index" @click=getActive(index)
        :class="item.id==curId?'active':''"
        >
            {{item.name}}
        </li>
    </ul>
</template>
<style lang="scss">
    .ul{
        width: 100%;
        list-style:none;
        padding-left:0;
        text-align:center;
        padding-top:0;
        background-color: #EEEEEE;
        overflow:hidden;
        li{
            width: 100%;
            height:30px;
            line-height:30px;
        }
    }
    .active{
        border-left:2px solid red;
        color:red;
        background-color:#FFFFFF;
    }
</style>
<script>
import {categoryNames} from './config'
export default {
    props:['sendMsg'],
    data(){
        return {
            curId:''
        }
    },
    created () {
         this.init();
    },
    methods:{
       init(){
           this.categoryNames=categoryNames;
           this.curId=this.categoryNames[0].id
       },
       getActive(index){
           this.curId=this.categoryNames[index].id;
       }
    },
    watch:{
        curId(msg){
            this.sendMsg(msg)
        }
    }
}
</script>