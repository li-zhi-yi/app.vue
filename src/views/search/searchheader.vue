<template>
    <div class="search">
        <search-header>
            <i class="iconfont icon-back" slot="left" @click=goBack></i>
            <search-box slot="center"  @See="getSearch" v-model="text" :text="text"></search-box>
        </search-header>
    </div>
</template>
<style></style>
<script>
import SearchHeader from '../../components/Heaer';
import SearchBox from './searchbox';
export default {
    components:{SearchHeader,SearchBox},
    data(){
        return {
            show:false,
            text:''
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        changeShow(){
            console.log(111);
            this.show=!this.show;
        },
        getSearch(value){
            console.log(value);
            this.text=value;
        }
    }

}
</script>