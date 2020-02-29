<template>
    <transition name="search">
        <div class="search">
            <search-header class="search-header" ></search-header>
            <div class="g-content-container">
                <search-hot ></search-hot>
                <search-history
                        ref="history"
                        v-show="!search"
                >
                </search-history>
            </div>
        </div>
    </transition>
</template>
<style lang="scss">
    .search-enter-active,
    .search-leave-active {
        transition: all 0.3s;
    }

    .search-enter,
    .search-leave-to {
        transform: translate3d(100%, 0, 0);
    }
    .search-header {
        background: #FFFFFF;
    }
    .search-enter-active,
    .search-leave-active {
        transition: all 0.3s;
    }

    .search-enter,
    .search-leave-to {
        transform: translate3d(100%, 0, 0);
    }
</style>
<script>
    import SearchHeader from './searchheader'
    import SearchHot from './hot'
    import SearchHistory from './history'
    export default {
        components: {SearchHeader,SearchHot,SearchHistory},
        data() {
            return {
                search: ''
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.search = false
            }
        }
    }
</script>