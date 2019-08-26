<template>
<div class="body">
  <div class="header-box">
    <div class="header">联盟</div>
  <span class="iconfont icon-duihua"></span>
  <div class="user-box">
    <div class="user-left"><img src="http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg" alt="头像"></div>
    <div class="user-right">
      <div class="user-right-left">
        <p class="username">赵东阳</p>
        <p class="userlv">富裕宝</p>
      </div>
       <div class="user-right-right">
         <span class="user-right-right-icon iconfont icon-danxuankong"></span><span class="user-right-right-icon">已实名</span>
       </div>
    </div>
    </div>
</div>
<div class="mine-tabs">
  <div class="tabs-box" v-for="(item,index) in 7" :key="index">
    <div class="left-text-mine"><span class="iconfont icon-thin-_notebook_p iconfont-left-margin"></span>任务集市</div>
    <div class="right-text-mine"><span class="iconfont icon-right"></span></div>
  </div>
</div>



    <Tabbar></Tabbar>

</div>

</template>

<script>
 import Tabbar from "../components/tabbar/tabbar";
export default {
 
  name: 'User',
  data () {
    return {
}
  },
    components:{
    Tabbar
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
 .body{
  margin-bottom: 5rem;
}
.header-box{ 
  background:-webkit-linear-gradient(left,rgb(83, 174, 247) 0%,rgb(67, 125, 250) 100%);
}
.header{
  height: 0.9*5rem;
  width: 100%;
 text-align: center;
  line-height: 0.9*5rem;
  font-size: 0.3*5rem;
 color:rgb(225, 252, 254);
}
.icon-duihua{
  position: absolute;
  top:0.2*5rem;
  right: 0.2*5rem;
 color:rgb(225, 252, 254);
    font-size: 0.4*5rem;
}
.user-box{
width: 100%;
height: 1.6*5rem;
display: flex;
margin-top: 0.2*5rem;
}
.user-left{
width: 1*5rem;
height: 1*5rem;
border-radius:50%;
margin-left: 0.5rem; 
}
.user-left>img{
  width: 100%;
  height: 100%;
  border-radius:50%; 
}
.user-right{
display: flex;
flex:1;
justify-content: space-between;
}
.username{
  font-size: 0.4*5rem;
 color:rgb(225, 252, 254);
    margin-left:0.2*5rem; 
}
.userlv{
   font-size: 0.2*5rem;
    color:rgb(225, 252, 254);
      margin-left:0.2*5rem; 
      display: block;
      background-color: rgb(67, 139, 223);
      text-align: center;
    margin-top:0.1*5rem; 
 border-radius: 0.5*5rem;
 height: 0.3*5rem;
 line-height:  0.3*5rem;
 width: 1.2*5rem;
}
.user-right-right-icon{
   font-size: 0.2*5rem;
     color:rgb(225, 252, 254);
   
   position: absolute;
   top:1.2*5rem;
   right: 0.3*5rem;
}
.tabs-box{
display: flex;
justify-content: space-between;
// background-color: red;
height: 5.4rem;
align-content: center;
line-height: 5.4rem;
}
.left-text-mine{
font-size: 1.5rem;
color: rgb(111, 111, 111);
}
.right-text-mine{

}
.iconfont-left-margin{
  margin:0 1.5rem; 
  font-size: 1.5rem;
  color:rgb(150, 167, 208);
}
.icon-right{
  margin-right: 1rem;
  font-size: 1.5rem;
  color:rgb(218, 218, 218)
}
</style>
