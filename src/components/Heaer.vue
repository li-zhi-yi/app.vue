<template>
    <div class="mine-navbar">
            <div class="mine-navbar-left" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="mine-navbar-center" v-if="$slots.center" >
            <slot name="center"></slot>
        </div>
        <div class="mine-navbar-right"  v-if="$slots.right">
            <slot name="right"></slot>
        </div>
        <!-- <h1 class="mine-navbar-title" v-if='title'>
            <span class="mine-navbar-text" v-text="title"></span>
        </h1> -->
    </div>
</template>
<style lang="scss">
.mine-navbar{
    width: 100%;
    height: 50px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    line-height:50px;
    &-left{
        padding-left:10px;
            ~ .mine-navbar-right{
            position:static;
        }
    }
    &-center{
        flex:1;
        margin:0 10px;
        text-align:center;
         ~ .mine-navbar-right{
            position:static;
        }
    }
    &-right{
        position:absolute;
        right:10px;
        display:flex;
        align-items:center;
        justify-content: center;
        margin-right:10px;
    }
}
</style>