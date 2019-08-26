<template>

<el-container>
   
        <el-container>
            <el-header style="height:10.1rem; border-bottom:1px solid #ccc">
                <!-- 头部 -->
         <div class="cartgrory-box">
             <div class="icon-seach-box">
<span class="iconfont icon-left header-icon"></span><span class="iconfont icon-search--line header-icon"></span><div class="header"><div class="seacch-box">输入名称或者型号</div> <span class="iconfont icon-gouwuche"></span></div>
             </div>
       <!-- <template slot="title">
              <router-link :to="subItem.path">{{subItem.title}}</router-link>
            </template> -->
            <span class="iconfont icon-icon-up "></span><span class="iconfont  icon-icon_sanjiaoxing"></span>
<div class="tabs"><router-link :to="item.path" v-for="(item,index) in meuns" :key="index" class="router-link"  ><div @click="borderBottom(index)" :class="[idx===index? 'active': '']">{{item.title}}</div ></router-link></div>
  <!-- 匹配到的子组件 -->
  <!-- <div v-for="(item,index) in 99" :key="index">111</div> -->
 
     </div>
 </el-header>
            <el-main>
                <!-- 面包屑 -->
           

                <!-- 匹配到的子组件 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
// 导入固定的组件
// import Cartgrory_list from '@/pages/cartgrory/Cartgrory_list'
// import Cartgrory_jiju from '@/pages/cartgrory/Cartgrory_jiju'
// import Cartgrory_wuliao from '@/pages/cartgrory/Cartgrory_wuliao'
// import Cartgrory_pirce from '@/pages/cartgrory/Cartgrory_pirce'

export default {
  name: 'Cartgrory',
  data () {
    return {
        idx:0,
        meuns: [
              { path: "/cartgrory-odd", title: "全部" },
              { path: "/cartgrory-tools", title: "机具" },
                { path: "/cartgrory-wuliao", title: "物料" },
                  { path: "/category-pirce", title: "价格" }
             ],
    }
  },
  methods: {
      borderBottom(idx){
          console.log(123)
           this.idx=idx
      }
  },
     // 注册组件
    // components: {
    //     Cartgrory_list,
    //     Cartgrory_jiju,
    //     Cartgrory_wuliao,
    //     Cartgrory_pirce
    // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.icon-icon-up{
    position: absolute;
    top:5rem;
    right: 1.5rem;
    color:rgb(180, 180, 180);
    z-index: 999;
}
.icon-icon_sanjiaoxing{
 position: absolute;
    top:5.7rem;
    right: 1.5rem;
        color:rgb(180, 180, 180);
            z-index: 999;
}
// 小三角定位
.cartgrory-box{
    position: relative;
    top: 0;
    // background-color: red;
    width: 100%;
}
.icon-seach-box{
    position: absolute;
  
}
.header{
  height: 0.7*5rem;
  width: 100%;
  line-height: 0.7*5rem;
  font-size: 0.3*5rem;
 color:black;
 background:rgb(254, 254, 254);
 margin-bottom: 1rem;
 }
.header-icon{
    position: absolute;
    top:0.6rem;
    left:-0.5rem;
    font-size: 2rem;
    color:rgba(0,0,0,0.4);
}
.seacch-box{
     position: absolute;
   background-color:  rgb(235, 235, 236);
    width: 22rem;
    height: 3rem;
    line-height: 3rem;
    margin-left:2rem; 
    border-radius: 3rem;
    padding-left: 3rem;
    color:rgba(0,0,0,0.4);
    font-size: 1.15rem;
    top: 1.5rem;
}
.icon-gouwuche{
    position: absolute;
    top:1.2rem;
   right:-29.5rem ;
    font-size: 2rem;
    color:black;
}
.icon-search--line{
    left:2.7rem;
    z-index: 99;
    font-size: 1.5rem;
    top:0.8rem;
}
 .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
    /*指向最外层的container样式*/
  #app > .el-container {
    position:absolute;
    width:100%;
    top:0;
    bottom:0;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .tabs{
      width: 100%;
      position: absolute;
      top:5rem;
    //   background-color: yellow;
      left:-0.2rem;
  }
  .router-link{
      width: 18%;
      height: 5rem;
      display:inline-block;
      text-align: center;
      line-height: 5rem;
      font-size: 1.4rem;
      margin-right: 0.5rem;
    //   background-color: blue;
     color:rgb(169, 169, 169);
     text-decoration:none;
  }
  .router-link:nth-last-child(1){
     margin-left: 5rem;
    //  background-color: red;
  }
  .el-main{
      padding: 0;
  }
  .active{
border-bottom:1px solid rgb(111, 179, 248);
color:rgb(111, 179, 248)
  }

</style>
