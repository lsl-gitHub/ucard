<template>
  <div class="body">
<div class="cartgroryList-box">
<div class="cartgroryList-list" v-for="(iten,index) in 6" :key="index">
<div>
<div class="img-box">  <img src="http://pics.sc.chinaz.com/files/pic/pic9/201908/hpic1342.jpg" alt=""></div>
<div class="img-text"><p>白羊座—天宇冲刺礼包</p>
<p class="img-pirce">￥ 120.00</p></div>

</div>
</div>
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
<style scoped>
.body{
   
}
.cartgroryList-box{
   
    background-color: rgb(243, 243, 243);
  display: flex;
  flex-wrap: wrap;

  height: 47rem;
  width: 100%;
}
.cartgroryList-list{
background-color: #fff;
width: 49%;
margin-top: 1rem;
}
.cartgroryList-list:nth-child(even){
/* background-color: black */
/* border-left: 1px solid #ccc; */
margin-left: 0.5rem;
}
.cartgroryList-list:nth-child(odd){
/* background-color: yellow; */
/* border-right: 1px solid #ccc; */
}
.img-box{
  width: 100%;
  height: 16rem;
  margin-bottom: 2rem;
display: flex;
justify-content: center;
}
.img-box>img{
  width: 97%;
  height: 97%;
    /* padding: 1rem; */
}
.img-text{
  margin-left:1rem; 
}
.img-pirce{
  font-size: 1.2rem;
  color:rgb(251, 147, 95);
  margin-top: 0.5rem;
}
</style>
