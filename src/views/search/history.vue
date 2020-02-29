<template>
    <div class="history">
        <h4 class="history-title">搜索历史</h4>
        <transition-group class="g-list" name="list" tag="ul">
            <li class="g-list-item"
            v-for="item in historys" :key="item"
                @click="$_search_selectItem(item)">
             <span class="g-list-text">{{item}}</span>
                <i
                class="iconfont icon-delete"
                @click.stop="removeItem(item)">
                </i>
            </li>
        </transition-group>
        <router-link to="/search" tag="div"
                href="javascript:"
                class="history-btn"
        ><i class="iconfont icon-clear"  @click="clear">清空历史搜索</i></router-link>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">

    .history {
        padding-bottom: 30px;
        background-color: #fff;

        &-title {
            height: 34px;
            margin:0;
            line-height: 34px;
            padding: 0 10px;
            font-size: 14px;
            font-weight: bold;
        }

        &-btn {
          display: flex;
            justify-content: center;
            width: 80%;
            height: 40px;
            background: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin: 0 auto;
            color: #686868;

            .iconfont {
                margin-right: 5px;
            }
        }
    }

    .g-list {
        border-top: 1px solid gray;
        padding-left:0;
        list-style: none;
        border-bottom: 1px solid beige;
        margin-bottom: 20px;
    }

    .list {
        &-enter-active,
        &-leave-active {
            transition: height 0.1s;
        }

        &-enter,
        &-leave-to {
            height: 0;
        }
    }
    .g-list-item{
        background:#F0F2F5;
        padding-left:30px;
    }
    .icon-delete{
        float:right;
        margin-right:40px;
    }
</style>
<script>
    import storage from './storage';
    import {SEARCH_HISTORY_KEYWORD_KEY} from './config';
    import {searchMixin} from './mixins';
    export default {
        data(){
            return {
                historys:[]
            }
        },
        mixins:['searchMixin'],
        created(){
            this.getKeyword();
        },
        methods:{
            update() {
                this.getKeyword();
            },
            getKeyword() {
                this.historys = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []);
            },
            removeItem(item) {
                this.historys = this.historys.filter(val => val !== item);
                storage.set(SEARCH_HISTORY_KEYWORD_KEY, this.historys);
                setTimeout(() => {
                    this.$emit('remove-item', item);
                }, 100);
            },
            clear() {
                console.log(111);
                storage.remove(SEARCH_HISTORY_KEYWORD_KEY);
                this.$router.replace({path:'/search'})
            }
        }
    }
</script>