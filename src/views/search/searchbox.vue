<template>
    <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" class="search-box" placeholder="请输入搜索内容">
    </div>
</template>
<style lang="scss">
.search{
    display:flex;
    align-items:center;
    width: 100%;
    height:50px;
    padding:0 7px;
    background-color: #fff;
    border-radius:50%;
}
.iconfont{
    color:#ccc;
    font-size: 18px;
    font-weight: bold;
}
.search-box{
    flex: 1;
    background: none;
    margin: 0 6px;
    color: #666;
    box-shadow:none;
    outline:none;
    line-height: 1.5;
    border-radius: 10px;
    border:1px solid black;
}
</style>
<script>
    // export default{
    //     data(){
    //         return {
    //             msg:'',
    //             recommends:[]
    //         }
    //     },
    //     created(){
    //         this.jsp().then((data)=>{
    //             if(data){
    //                 console.log(data);
    //                 // console.log(this.recommends.concat(data.itemList));
    //                 this.curPage++;
    //                 this.totalPage=data.totalPage;
    //                 this.recommends=this.recommends.concat(data.itemList);
    //                 console.log(this.recommends)
    //                 // this.$emit('')
    //             }
    //         }).catch(err=>{console.log(err)})
    // },
    //     methods: {
    //         searchValue() {
    //             let  result={...this.recommends};
    //             this.msg = this.$refs.input.value;
    //             // console.log(result);
    //             // let  arr=result.filter((item)=>{
    //             //     console.log(item);
    //             //     return item.name.indexOf(this.msg)>-1;
    //             // })
    //             // console.log(this.msg)
    //         },
    //         //封装jsonp
    //         jsp(baseUrl = 'https://ju.taobao.com/', method = 'json/tg/ajaxGetItemsV2.json', page = 1, psize = 20) {
    //             let data = {
    //                 page,
    //                 psize,
    //                 type: 0,
    //                 frontCatId: ''
    //             };
    //             if (this.curPage > this.totalPage) {
    //                 return console.log('没有更多了');
    //             }
    //             // baseUrl就是服务器地址
    //             let url = `${baseUrl}${method}?`;
    //             //jsonp请求参数和get方法类似,都是params的方法拼接
    //             for (let item in data) {
    //                 url += `&${item}=${data[item]}`;
    //             }
    //             return this.$jsonp(url);
    //         }
    //     },
    //     watch:{
    //         msg(value){
    //             this.sendMsg(value)
    //         }
    //     }
    // }
</script>