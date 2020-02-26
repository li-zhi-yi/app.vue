<template>
  <div id="app">
      <router-view/>
    <div class="footer">
      <tab></tab>
    </div>
  </div>
</template>

<style lang="scss">
HTML,body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
 #app{
   width: 100%;
   height: 100%;
   position:relative;
    overflow: hidden;
    .header{
    width: 100%;
    height:100%;
    padding-bottom:50px;
  }
  .footer{
    position: absolute;
    width: 100%;
    height: 50px;
    bottom:0;
    background:#fff;
  }
 }
}
</style>
<script>
  import Tab from './components/Tabbar';
  export default{
    components:{Tab}
  }
</script>
