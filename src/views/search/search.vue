<template>
    <div class="search">
            <search-header @keyup.enter="e=>this.$store.commit('updateSearch',e)"></search-header>
<!--        <div class="g-content-container">-->
<!--        {{itemList}}-->
<!--    </div>-->
    </div>
</template>
<script>
import SearchHeader from './searchheader'
export default {
    components:{SearchHeader},
    data(){
        return {
            itemList:'1111',
            search:''
        }
    },
    created(){
       this.init()
    },
    methods: {
        init(){
            this.search=false
        },
        receiveMsg(value){
            this.itemList=value;
        }
    }
}
</script>