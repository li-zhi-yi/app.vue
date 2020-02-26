<template>
        <personal-header class="p-header">
            <i class="iconfont icon-back" slot="left" @click=goBack></i>
            <div slot="center">我的</div>
            <img src="../../assets/img/icon-test_1.png" alt="photo" slot="right">
        </personal-header>
</template>
<style lang="scss">
    .p-header{
        width: 100%;
        height:50px;
        overflow:hidden;
            img{
                width: 30px;
            }
    }
</style>
<script>
import PersonalHeader from '../../components/Heaer';
    export default{
        components:{PersonalHeader},
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>