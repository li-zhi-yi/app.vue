<template>
    <div class="loading" :class="{'loading-inline':inline}">
        <span class="loading-indicator">
               <slot> <img src="../assets/img/loading.gif" alt="loading"></slot>
        </span>
        <span v-text="text" v-if="text"></span>
    </div>
</template>
<style lang="scss">
    .loading{
        width: 100%;
        height: 100%;
        overflow:hidden;
        display: flex;
        flex-direction: column;
        text-align:center;
        align-items:center;
        .loading-inline{
            flex-direction:row;
        }
        .loading-indicator ~ .loading-text{
            margin-left:6px;
            margin-top:0;
        }
    }
</style>
<script>
    export default{
        props:{
            indicator:{
                type:String,
                default:'on',
                validator(value){
                    return ['on','off'].indexOf(value)>-1;
                }
            },
            inline:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                text:'加载中....'
            }
        },
        watch:{
            setText(text){
                this.loadingText=text;
            }
        }
    }
</script>