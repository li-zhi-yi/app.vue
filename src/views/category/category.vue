<template>
    <div class="category">
        <category-header class="category-header" @click.native="categorysearch">
            <img src="./img/放大镜.png" slot="right" class="right">
        </category-header>
        <div class="category-container" >
            <div class="category-container-left">
                <category-ul :send-msg="receiveMsg"></category-ul>
            </div>
            <div class="category-container-right">
                 <category-aside :curId="curId"></category-aside>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.category{
    width: 100%;
    height:617px;
    overflow:hidden;
    &-header{
        background-color:red;
        .right{
            width: 20px;
        }
    }
    .category-container{
        width: 100%;
        height:567px;
        display: flex;
        flex-direction: row;
        overflow:hidden;
        &-left{
            width: 120px;
            overflow-x:hidden;
            overflow-y:auto;
            border-right:4px solid gray;
        }
        &-right{
            flex:1;
        }
    }
}

</style>
<script>
import CategoryHeader from '../../components/Heaer';
import CategoryUl from './ul';
import CategoryAside from './aside'
export default {
    components:{CategoryHeader,CategoryUl,CategoryAside},
    data(){
        return{
            curId: ''
        }
    },
    methods:{
        receiveMsg(id){
            this.curId=id;
            console.log(id)
        },
        categorysearch(){
            this.$router.push('/search')
        }
    }
}
</script>