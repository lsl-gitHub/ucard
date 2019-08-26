<template>
  <div class="body">
<div class="reward_query-box" >
    <span class="iconfont icon-left header-icon"></span><div class="header">奖励查询</div>
  <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
 <el-tab-pane>
    <span slot="label">进行中</span>
     <!-- <div class="reward_query-title"><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="reward_query-title-text">鑫荣耀消暑包</span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span></div>
  
  <div class='reward_query-conten-box'>
      <div class="reward_query-conten" v-for="(item,index) in 4" :key="index">
          <p class="reward_query-p1">0</p>
          <p class="reward_query-p2">今日新增(元)</p>
          <span class="iconfont icon-right icon-left99"></span>
      </div>
  </div>
  <div>
      <div class="reward_query-title"><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="reward_query-title-text">鑫荣耀</span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span></div>
  </div>
  <div class='reward_query-conten-box'>
      <div class="reward_query-conten" v-for="(item,index) in 4" :key="index">
          <p class="reward_query-p1">0</p>
          <p class="reward_query-p2">今日新增(元)</p>
          <span class="iconfont icon-right icon-left99"></span>
      </div>
  </div>
  <div>
      <div class="reward_query-title"><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="reward_query-title-text">鑫征程</span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span></div>
  </div>
  <div class='reward_query-conten-box'>
      <div class="reward_query-conten" v-for="(item,index) in 4" :key="index">
          <p class="reward_query-p1">0</p>
          <p class="reward_query-p2">今日新增(元)</p>
          <span class="iconfont icon-right icon-left99"></span>
      </div>
  </div> -->
  134
  </el-tab-pane>
<el-tab-pane label="已结束"><div>
      <div class="reward_query-title"><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="reward_query-title-text">鑫荣耀消暑包</span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span></div>
  </div>
  <div class='reward_query-conten-box'>
      <div class="reward_query-conten" v-for="(item,index) in 4" :key="index">
          <p class="reward_query-p1">0</p>
          <p class="reward_query-p2">今日新增(元)</p>
          <span class="iconfont icon-right icon-left99"></span>
      </div>
  </div>
  <div>
      <div class="reward_query-title"><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="reward_query-title-text">鑫荣耀</span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span></div>
  </div>
  <div class='reward_query-conten-box'>
      <div class="reward_query-conten" v-for="(item,index) in 4" :key="index">
          <p class="reward_query-p1">0</p>
          <p class="reward_query-p2">今日新增(元)</p>
          <span class="iconfont icon-right icon-left99"></span>
      </div>
  </div>
  <div>
      <div class="reward_query-title"><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="reward_query-title-text">鑫征程</span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span><span class="iconfont icon-dot-1"></span></div>
  </div>
  <div class='reward_query-conten-box'>
      <div class="reward_query-conten" v-for="(item,index) in 4" :key="index">
          <p class="reward_query-p1">0</p>
          <p class="reward_query-p2">今日新增(元)</p>
          <span class="iconfont icon-right icon-left99"></span>
      </div>
  </div>
  </el-tab-pane>
  
  </el-tabs>
</div>
  </div>
</template>

<script>
export default {
  name: 'Reward_query',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.body{
     position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    background-color: rgb(244, 244, 244);
}
.header{
  height: 0.7*5rem;
  width: 100%;
 text-align: center;
  line-height: 0.7*5rem;
  font-size: 0.3*5rem;
   color:black;
 background:rgb(254, 254, 254);
 margin-bottom: 1rem;

}
.header-icon{
    position: absolute;
    top:0.8rem;
    left:1rem;
    font-size: 2rem;
    color:black;
}

.reward_query-title{
    background-color: rgb(254, 254, 254);
    width: 100%;
    height: 4rem;
    // padding:0 20rem;
    text-align: center;
    line-height: 4rem;
    font-size: 1.6rem;
       color:rgb(101, 175, 248);
       border-bottom:1px solid rgb(237, 237, 237);
}
.icon-dot-1{
    color:rgb(101, 175, 248);
padding:0.1rem;
    margin: -6px;
    // padding:-10px;
}
.reward_query-title-text{
    padding:0 1rem;
}
.icon-dot-1:nth-child(1){
color:rgba(101, 175, 248,0.4);
}
.icon-dot-1:nth-child(2){
color:rgba(101, 175, 248,0.7);
}
.icon-dot-1:nth-child(8){
color:rgba(101, 175, 248,0.7);
}
.icon-dot-1:nth-child(9){
color:rgba(101, 175, 248,0.4);
}
.reward_query-conten-box{
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(254, 254, 254);
    position: relative;
    margin-bottom: 1rem;
}
.reward_query-conten{
    width: 38%;
    height: 5rem;
    background-color: rgb(254, 254, 254);
    margin-left: 2rem;
     margin-top: 0.2rem;
      margin-bottom: 0.8rem;
      padding-top:1rem;
      line-height: 2.5rem;
}
.reward_query-p1{
    font-size: 2rem;
}
.reward_query-p2{
 font-size: 1rem;
 color:rgb(175, 175, 175);
}
.icon-left99{
    position: absolute;
    top:5.5rem;
    right: 1.4rem;
    font-size: 1.7rem;
     color:rgba(175, 175, 175,0.4);
}
</style>
