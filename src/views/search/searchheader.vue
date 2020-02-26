<template>
    <div class="search">
        <search-header>
                <i class="iconfont icon-back" slot="left" @click=goBack></i>
                <search-box slot="center"></search-box>
        </search-header>
    </div>
</template>
<script>
import SearchHeader from '../../components/Heaer';
import SearchBox from './searchbox';
export default {
    components:{SearchHeader,SearchBox},
    data(){
        return {

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }

}
</script>