<template>
  <div class="body">
<div class="pay-box">
      <div class="icon-seach-box" >
<span class="iconfont icon-left header-icon"></span><div class="header"><div class="seacch-box">确认清单</div></div>
             </div>
             <div class="address-box">
               <div class="address-box1">
               <p class="address-p1">广东省深圳市宝安区新沪路宝安中心天虹壹商虹大厦</p>
               <p class="address-p2">赵东阳  1589975 7973</p>
             <div class="address-img"><img src="../../src/assets/cart_border@2x.png" alt=""></div>

             </div>
             <div class="iconfont icon-right address-icon"></div>
             </div>

             <div class="par-libao-box">
               <div class="par-libao-img"><img src="" alt=""></div>
               <div class="par-libao-text">
                 <p class="par-libao-p1">百富首发礼包</p>
                 <p class="par-libao-p2"><span class="icon-money">￥</span>120.00<span> x5</span></p>
               </div>
             </div>

             <div class="pay-coupons-box">
              <div class="coupons-box1">
                <div >优惠卷</div>
                <div class="icon-margin">无可用 <span class="iconfont icon-right"></span></div>
               
                </div>
              <div class="coupons-box2">鑫币 共<span>0</span>鑫币，满<span>1000</span>鑫币可用<span class="iconfont icon-jinggao"></span></div>
             </div>

               <div class="pay-coupons-box">
              <div class="coupons-box1">
                <div >商品总额</div>
                <div class="icon-margin icon-margin1">￥600.00 </div>
               
                </div>
              <div class="coupons-box1">
                <div >运费</div>
                <div class="icon-margin icon-margin2">+￥0.00 </div>
               
                </div>
             </div>
             
             
</div>
    <div class="cartgroryList-footer" >
            <div class="cartgroryList-footer-left" ><span class="cartgroryList-footer-left-icon">￥</span>600.00</div>
             <div  class="cartgroryList-footer-right" @click="subminQue">提交</div>
             </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
    background-color: rgb(243, 243, 243);

    // background-color: red;
}
.icon-seach-box{
 height: 5rem;
 text-align: center;
 display: flex;
align-items: center;
justify-content: center;

// background:-webkit-linear-gradient(left,rgb(83, 174, 247) 0%,rgb(67, 125, 250) 100%);
background-color: rgb(254, 254, 254)
}
// input{outline:none;}
// button{outline:none;}
.header-icon{
    position: absolute;
top:2rem;
    left:1rem;
    font-size: 1.8rem;

}
.seacch-box{
padding-top: 1rem;
//    background-color:  red;

    font-size: 1.3rem;

}
.icon-gouwuche{
    position: absolute;
    top:2rem;
   right:1rem ;
    font-size: 2rem;

}
.address-box1{
    height: 4rem;
    // background-color:red;
margin-top: 1.4rem;
}
.address-box{
  position: relative;
margin-top:1rem; 
  padding:0.5rem;
  background-color: rgb(254, 254, 254);
  height: 7rem;
display: flex;
justify-content: center;
align-content: center;
// background-color: blue;
}
.address-img{
  height: 2px;
  width: 100%;
  // background-color: blue;
  position: absolute;
  bottom: 1rem;
  transform: translateX(-0.5rem)

}
.address-img>img{
  width: 100%;
  height: 100%;

}
.address-p1{
  font-size: 1.35rem;
  font-weight: 600;
  word-break: break-all;
word-wrap: break-word;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
 color:rgb(73, 77, 83)
}
.address-p2{
  font-size: 1.1rem;
  padding-top: 1rem;
  color:rgb(160, 160, 160)
}
.address-icon{
  position: absolute;
  right: 0.8rem;
  top:3.4rem;
    color:rgb(160, 160, 160)
}
.pay-box{
  margin:0 1rem;
}
.par-libao-box{
  margin-top: 1rem;
display: flex;
height: 10.5rem;
background-color: rgb(254, 254, 254)
}
.par-libao-img{
width: 8rem;
height: 8rem;
margin-top: 1.2rem;
margin-left: 1rem;
border:0.5px solid #ccc;
}
.par-libao-img>img{
// padding:1rem;
width: 100%;
height: 100%;
}
.par-libao-text{
flex: 1;
line-height: 4rem;
margin-top: 1rem;
margin-left: 1.5rem;
}
.par-libao-p1{
font-size: 1.4rem;
color:rgb(51, 51, 51);
font-weight: 600;
}
.par-libao-p2{
font-size:1.6rem;
color:rgb(249, 123, 52);
font-weight: 600;

}
.par-libao-p2>span{
 font-size: 1.2rem;
   color: rgb(160, 160, 160);
}
.par-libao-p2 .icon-money{
  color:rgb(249, 123, 52) 
}

// 以下可复制
.pay-coupons-box{
background-color:rgb(254, 254, 254);
height: 8rem;
line-height: 4rem;
font-size: 1.2rem;
margin-top: 1rem;
}
.coupons-box1{
display: flex;
font-size: 1.2rem;
   color: rgb(160, 160, 160);
   justify-content: space-between;
   margin-left: 1rem;
}
.coupons-box2{
  color: rgb(160, 160, 160); 
     margin-left: 1rem;
}
.coupons-box2>span{
  color:black;
}
.icon-margin{
  margin-right: 1rem;
}
.icon-margin1{
  font-size: 1.2rem;
  color: black;
    margin-right: 2rem;
    font-weight: 600;
}
.icon-margin2{
   font-size: 1.2rem;
   color: rgb(254, 103, 53);
     margin-right: 2rem;
     font-weight: 600;
}
.cartgroryList-footer{
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: red;
    height: 3.9rem;
    width: 100%;
    z-index: 999;
    background-color:rgb(254, 254, 254);
}
.cartgroryList-footer-left{

 width: 60%;
  height: 100%;
  line-height: 3.9rem;
font-weight: 600;
   font-size: 1.9rem;
   color:rgb(255, 103, 53);
   padding-left:1rem;
}
.cartgroryList-footer-left-icon{
     font-size: 1.5rem;
}
.cartgroryList-footer-right{
 background-color: rgb(247, 105, 19);
  width: 40%;
  height: 100%;
line-height: 3.9rem;
 text-align: center;
 font-size: 1.3rem;
    color:rgb(254, 237, 230)
}
.coupons-box2 .icon-jinggao{
  margin-left: 0.5rem;
  color:rgb(163, 163, 163)
}
</style>
