<template>
  <div class="body">
<div class="income-box">
    <div class="header">收益</div>
  <span class="iconfont icon-duihua"></span>
  <div class="income-box-text">
      <p class="text-p1">本月预期收益(元)<span class="iconfont icon-yanjing"></span></p>
      <p class="text-p2">0.00<span class="iconfont icon-right text-p2-1"></span></p>
      <p class="text-p3"><span  class="iconfont icon-guanfangbanben text-p3-1"></span>以打败0%的用户</p>
  </div>
  <div class="text-btn">昨日收益浮动0.00元</div>
</div>
<div class="myBill">
    <div><span class="myBill-img"><img src="../assets/income.png" alt=""></span>我的账单</div>
<div><span class="iconfont icon-right myBill-img-icon"></span></div>
</div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/tabbar/tabbar";
export default {
  name: 'Income',
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
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    background-color: rgb(244, 244, 244);
}
.income-box{
 background:-webkit-linear-gradient(left,rgb(83, 174, 247) 0%,rgb(67, 125, 250) 100%);
 position: relative;
    width: 100%;
    height: 20.5rem;
    border-bottom:0.29*5rem solid rgb(246, 246, 246);
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
.income-box-text{
    width: 100%;
    text-align: center;
    margin-top: 1rem;
}
.text-p1{
    font-size: 1.4rem;
    color:rgb(128, 196, 255);
    margin-bottom:0.1rem;
}
.text-p2{
    font-size: 3.5rem;
    color:rgb(248, 247, 251);
    margin-bottom:1rem;
}
.text-p3{
    font-size: 1rem;
    color:rgb(177, 238, 255);
    display: block;
    border:1px solid rgb(177, 238, 255);
    width: 11.5rem;
    transform: translateX(9.5rem);
    height: 1.8rem;
    text-align: center;
    border-radius: 0.9rem;
    line-height: 1.8rem;
}
.text-btn{
background:-webkit-linear-gradient(left,rgb(80, 159, 226) 0%,rgb(66, 118, 228) 100%);
font-size: 1.2rem;
 height: 3.8rem;
   line-height: 3.8rem;
   width: 100%;
       color:rgb(128, 196, 255);
        text-align: center;
        position: absolute;
        bottom:0;
}
.myBill{
display: flex;
justify-content:space-between;
background-color: #fff;
height: 6.7rem;
line-height:  6.7rem;
font-size: 1.5rem;
}
.myBill-img{
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    margin: 0 0.5rem
}
.myBill-img>img{
    width: 100%;
    height: 100%;
}
.myBill-img-icon{
    color:#ccc;
}
.text-p2-1{
position: absolute;
top:9rem;
right: 10rem;
}
.icon-yanjing{
    padding-left: 1rem;
    color:#fff;
}
.icon-guanfangbanben{
    font-size: 1rem;
    color:rgb(243, 246, 249);
    padding-right:0.3rem;
}
</style>
