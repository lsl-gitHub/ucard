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

<div class="icon-box">
<div class="icon-box-list" v-for="(item, index) in iconList" :key="index">
  <p class="iconfont icon-danxuankong icon-box-icon" :class="item.icon"></p>
  <p class="icon-box-name">{{item.name}}</p>
</div>
</div>

<div class="mengyou-box" v-for="(item, index) in 3" :key="index">
 <div class="img-box"><img src="../assets/1.png" alt=""></div>
<div class="mengyou-text-box"> 
 <p class="mengyou-box-text">本月盟友扩展商户交易额(元)</p>
  <p class="mengyou-box-price">1.924.333.43</p>
  </div>
  <div class="mengyou-text-bottom-box">
    <div  class="mengyou-text-bottom-box-left">
      <p class="mengyou-text-bottom-box-price">0</p>
      <p class="mengyou-text-bottom-box-text">今日新增盟友(人)</p>
    </div>
    <span class="link"></span>
    <div  class="mengyou-text-bottom-box-right">
 <p class="mengyou-text-bottom-box-price">0</p>
      <p class="mengyou-text-bottom-box-text">今日新增盟友(人)</p>
    </div>
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
    iconList:[
{icon:'icon-adduser',
name:'邀请盟友'},
{icon:'icon-tongxunlu',
name:'通讯录'},
{icon:'icon-stores',
name:'商户扩展'},
{icon:'icon-thin-_notebook_p',
name:'商户明细'},
{icon:'icon-suyaniconchanpinleibufenzuodaohangbufen87',
name:'机具管理'},
{icon:'icon-mendianguanli',
name:'商户管理'},
    ]
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
.icon-danxuankong{
  top:1.25*5rem;
     right: 1*5rem;
}
.icon-box{
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  width: 100%;
  height: 3.1*5rem;
  border-bottom:0.29*5rem solid rgb(246, 246, 246)
}
.icon-box-list{
  /* background-color: blue; */
  width: 25%;
 
text-align: center;
padding-top: 0.2*5rem;
}
.icon-box-icon{
  font-size: 0.5*5rem;
  color:rgb(69, 137, 244)
}
.icon-box-name{
  font-size: 0.2*5rem;
  
}
.mengyou-box{
  background-color: #fff;
height: 2.7*5rem;
width: 100%;
border-bottom:0.29*5rem solid rgb(246, 246, 246);
position: relative;
}
.mengyou-box-text{
    font-size: 0.2*5rem;
    color:rgb(203, 203, 203)
}
.mengyou-box-price{
   font-size: 0.5*5rem;
   color:rgb(222, 111, 58)
}
.mengyou-text-box{
  width: 100%;
  text-align: center;
  padding-top: 0.5*5rem;
}  
.mengyou-text-bottom-box{
  display: flex;
  justify-content: center;
    padding-top: 0.5*5rem;
}
.mengyou-text-bottom-box-price{
  font-size: 0.3*5rem;
  text-align: center;
}
.mengyou-text-bottom-box-text{
  font-size: 0.2*5rem;
  text-align: center;
  color:rgb(203, 203, 203)
}
.link::after{
  position: absolute;
  top:1.8*5rem;
     content: '|';
    font-size: 0.5*5rem;
  
     color:rgba(203, 203, 203,0.2)
}
.mengyou-text-bottom-box-left{
margin: 0 0.3*5rem;
}
.mengyou-text-bottom-box-right{
margin: 0 0.3*5rem;
}
.img-box{
  position: absolute;
  top:0;
  left:0.1*5rem;
}

</style>
