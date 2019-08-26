<template>
  <div class="body">
<div  class="merchants-box">
    <span class="iconfont icon-left header-icon"></span><div class="header"> 商户扩展</div>
      <form action="" :model="form">
     <div class="merchants-form">
        <div class="merchants-form-left">联系方式</div>
         <div class="merchants-form-right">
             <input type="text" placeholder="商户联系手机" v-model="form.phone">
         </div>
     </div>
     <div class="merchants-form">
        <div class="merchants-form-left">商户名称</div>
         <div class="merchants-form-right">
             <input type="text" placeholder="商户名称" v-model="form.name">
         </div>
     </div>
     <div class="merchants-form">
        <div class="merchants-form-left">SN</div>
         <div class="merchants-form-right">
             <input type="text" placeholder="机具序列号" v-model="form.sn">
         </div>
         <div class="discern">自动识别</div>
     </div>
     <div class="merchants-form">
        <div class="merchants-form-left">选择厂家</div>
         <div class="merchants-form-right">
             <input type="text" placeholder="请选择机具厂商" v-model="form.changjia">
         </div>
     </div>
       <button type="primary" @click="onSubmit" class="primary">提交</button>
            </form>    
</div>
  </div>
</template>

<script>
export default {
  name: 'Merchants',
  data () {
    return {
    form:{
    phone:'',
    name: '',
    sn: '',
    changjia: ''
    }
    }
  },
  methods: {
      onSubmit(){
           console.log(this.form);
      }
  },
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
.merchants-form{
    display: flex;

height: 4.4rem;
background-color: #fff;
border-bottom:1px solid #cccccc77;
}
.merchants-form-left{
    width: 6rem;
    text-align: center;
    font-size: 1.4rem;
    line-height: 4rem;
    padding:0 1rem;
}
.merchants-form-right{
flex: 1;

}
.merchants-form-right>input{
 height: 3.8rem;
  line-height: 3.8rem;
 font-size: 1.4rem;
width: 100%;
border: none;
border-style: none;
border:1px solid rgba(1,1,1,0)
}
.primary{
    width: 28rem;
    height: 4rem;
    background-color: rgb(70, 188, 236);
margin-left: 1.5rem;
margin-top: 2rem;
border-radius:0.5rem;
font-size: 1.5rem;
color:rgb(205, 234, 238)
}
.discern{
    position: absolute;
    font-size: 1.1rem;
    color:rgb(146, 186, 201);
    right: 1rem;
    top:16.5rem;
}
.header-icon{
    position: absolute;
    top:1.4rem;
    left:1rem;
    font-size: 2rem;
    color:rgb(144, 214, 236)
}
input{outline:none;}
button{outline:none;}
</style>
