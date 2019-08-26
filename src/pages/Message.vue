<template>
  <div class="body">
<div class="message-box">
<span class="iconfont icon-left header-icon"></span><div class="header">消息</div>
<div class="message-img-box">
<div class="message-img-left"><img src="http://www.feizl.com/upload2007/2015_03/15033111134865.jpg" alt=""></div>
<div class="message-img-right">联盟客服</div>
</div>
<div class="message-img-box">
<div class="message-img-left"><img src="http://www.feizl.com/upload2007/2015_03/15033111134865.jpg" alt=""></div>
<div class="message-img-right">官方公告</div>
<div class="shuzitubixo">39</div>
</div>
<div class="message-img-box">
<div class="message-img-left"><img src="http://www.feizl.com/upload2007/2015_03/15033111134865.jpg" alt=""></div>
<div class="message-img-right">即时消息</div>
</div>
<div class="message-img-box">
<div class="message-img-left"><img src="http://www.feizl.com/upload2007/2015_03/15033111134865.jpg" alt=""></div>
<div class="message-img-right">盟友公告</div>
</div>
<div class="message-img-box">
<div class="message-img-left"><img src="http://www.feizl.com/upload2007/2015_03/15033111134865.jpg" alt=""></div>
<div class="message-img-right">意向客户</div>
</div>
<div class="message-img-box">
<div class="message-img-left"><img src="http://www.feizl.com/upload2007/2015_03/15033111134865.jpg" alt=""></div>
<div class="message-img-right">商户申请机具</div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Message',
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
  height: 1*5rem;
  width: 100%;
 text-align: center;
  line-height: 1*5rem;
  font-size: 0.3*5rem;
 color:rgb(225, 252, 254);
 background:-webkit-linear-gradient(left,rgb(83, 174, 247) 0%,rgb(67, 125, 250) 100%);
 margin-bottom: 1rem;
}
.header-icon{
    position: absolute;
    top:1.4rem;
    left:1rem;
    font-size: 2rem;
    color:rgb(144, 214, 236)
}

.message-img-box{
display: flex;
height:5rem ;
padding:0.9rem 0;
}
.message-img-left{
width: 4.5rem;
height: 4.5rem;
border-radius: 50%;
margin: 0 2rem;
}
.message-img-left>img{
width: 100%;
height: 100%;
border-radius: 50%;
}
.message-img-right{
border-bottom: 1px solid #eeeeee66;
flex:1;
height:4.8rem;
line-height: 4rem;
font-size: 1.5rem;
font-weight: 550;
}
.shuzitubixo{
    position: absolute;
    left: 14rem;
    top:13.8rem;
    background-color: rgb(255, 89, 17);
    width: 2.5rem;
    height: 2rem;
    border-radius: 2rem;
    text-align: center;
    color: rgb(254, 240, 232);
    line-height: 2rem;
}
</style>
