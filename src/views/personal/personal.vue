<template>
    <div class="me">
<!--        头部-->
        <personal-header></personal-header>
        <!-- 头部昵称与背景 -->
        <div class="userinfo">
            <div class="avatar">
                <img src="../../assets/images/avatar.png" alt="">
            </div>
            <div class="nickname">{{name}}</div>
        </div>
        <!-- 我的订单 -->
        <div class="menu">
            <div class="menu_title">
                <div class="menu_title_me">我的订单</div>
                <div class="menu_title_all">全部订单</div>
            </div>
            <div class="menu_content">
                <div class="menu_content_item">
                    <img class="menu_content_item_icon" src="../../assets/images/meicon1.png" alt="">
                    <span class="menu_content_item_text">待收货</span>
                </div>
                <div class="menu_content_item">
                    <img class="menu_content_item_icon" src="../../assets/images/meicon2.png" alt="">
                    <span class="menu_content_item_text">待收货</span>
                </div>
                <div class="menu_content_item">
                    <img class="menu_content_item_icon" src="../../assets/images/meicon3.png" alt="">
                    <span class="menu_content_item_text">待收货</span>
                </div>
                <div class="menu_content_item">
                    <img class="menu_content_item_icon" src="../../assets/images/meicon4.png" alt="">
                    <span class="menu_content_item_text">待收货</span>
                </div>
            </div>
        </div>
        <!-- 我的收藏 -->
        <div class="favor">
            <div class="title">我的收藏</div>
            <i class="iconfont icon-back"></i>
        </div>
        <!-- 浏览历史 -->
        <div class="favor">
            <div class="title">浏览历史</div>
            <i class="iconfont icon-back"></i>
        </div>
        <!-- 优惠券 -->
        <div class="favor">
            <div class="title">优惠券</div>
            <i class="iconfont icon-back"></i>
        </div>
        <!-- 在线客服 -->
        <div class="favor">
            <div class="title">在线客服</div>
            <span class="iconfont">
                <i class="iconfont icon-back"></i>
            </span>

        </div>
    </div>
</template>
<style lang="scss">
    .me {
         //头部昵称与背景
        .userinfo {
            width: 100%;
            height: 170px;
            background: url(../../assets/images/me_bg.png) no-repeat;
            background-size: 100% 100%;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           .avatar {
               text-align:center;
               img {
                   display: block;
                   width: 71px;
                   height: 71px;
                   border-radius: 50%;
                   box-shadow: 0 0 20px #29000000;
               }
           }
           .nickname {
               margin-top: 5px;
               font-size: 16px;
               color: #fff;
            }
        }
        // 我的订单
        .menu {
            .menu_title {
                box-sizing: border-box;
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 16px;
                border-bottom: 1px solid #eee;
                .menu_title_all {
                    color: #ababab;
                    font-size:16px;
                    .iconfont {
                        font-size:14px;
                    }
                }
            }
            .menu_content {
                box-sizing: border-box;
                padding: 5px ;
                display: flex;
                flex-direction: row;
                text-align:center;
                justify-content: space-evenly;
                border-bottom: 1px solid #eee;
                .menu_content_item {
                    display:flex;
                    flex-direction: column;
                    text-align:center;
                    .menu_content_item_icon {
                        display:block;
                        margin-left:20%;
                        width: 60%;
                    }
                    .menu_content_item_text {
                        font-size: 14px;
                    }
                }
            }
        }
        // 我的收藏*/
        .favor {
            box-sizing: border-box;
            padding: 0.266667rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 16px;
            border-bottom: 1px solid #eee;
        }
        // 浏览历史*/
        // 优惠券*/
        // 在线客服*/
    }
</style>
<script>
import PersonalHeader from './header'
export default {
    components:{PersonalHeader},
    data(){
        return {
            name:'hello world'
        }
    }
}
</script>