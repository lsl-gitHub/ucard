<template>
  <div class="body" :class="[!footerShow? 'activea': '']">
<div class="cartgroryList-box" >
      <div class="icon-seach-box" >
<span class="iconfont icon-left header-icon"></span><div class="header"><div class="seacch-box">商品详情</div> <span class="iconfont icon-gouwuche"></span></div>
             </div>
             <div class="cartgroryList-content-box11">
             <div class="cartgroryList-content-box"></div>
             <div class="cartgroryList-content-text">
                 <p class="cartgroryList-p1">百富首发礼包</p>
                 <p class="cartgroryList-p2">￥120.00<span>(台)</span></p>
             </div>
             <div class="cartgroryList-p3">产品说明</div>
             </div>
              <form label="内容描述">
            <quillEditor v-model="content"></quillEditor>
        </form>
      
             
             <div>
   
             </div>
             <div class="cartgroryList-footer" v-if="footerShow">
            <div class="cartgroryList-footer-left" >加入清单</div>
             <div  class="cartgroryList-footer-right" @click="subminQue">立即申请</div>
             </div>
               <div class="cartgroryList-footer2" v-if="!footerShow">
                   <!-- <div class="shengqingshuliang"> -->
                         <div class="cartgroryList-footer-left2" >
                <p class="cartgroryList-footer-p1">申请数量</p>
                <p class="cartgroryList-footer-p2">起订量5台，且是5的倍数</p></div>
             <div  class="cartgroryList-footer-right2">
                 <div >
                 <span class="iconfont icon-jian" @click="clickjian"></span></div><div  class="white-space">{{num}}</div><div><span class="iconfont icon-jia" @click="clickjia"></span></div>
                 </div>
                   <!-- </div> -->
          <div class="cartgroryList-footer2-submin">确定</div>
    
             </div>
</div>
    <div class="zhezhaoceng" v-if="!footerShow"></div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'CartgroryList',
  data () {
    return {
    footerShow:true,
    num:5,
    content:null,
    footerlist:[{title:'加入清单'},
    {title:'立即申请'}],
                editorOption:{
                    modules:{
                        toolbar:[
                          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                           ['blockquote', 'code-block']
                        ]
                    }
                }

    }
  },
    components: {
      // 编辑器组件
    quillEditor
  },
   methods:{
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            },
            // 立即申请
            subminQue(){
          this.footerShow=false;
            },
                  clickjia(){
                //点击加
               this.num=this.num+5
            },
            clickjian(){
                //点击减
               if(this.num>=5){
                    this.num=this.num-5
               }
               if(this.num<=5){
                   this.num=5
               }
            }
         
        }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.iconfont{
    color:black;
}
.cartgroryList-box{
    // padding-bottom: 5rem;
}
.body{
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    background-color: #fff;

    // background-color: red;
}
.icon-seach-box{
 height: 5rem;
// background-color: red;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color:white;
background:-webkit-linear-gradient(left,rgb(83, 174, 247) 0%,rgb(67, 125, 250) 100%);
}
input{outline:none;}
button{outline:none;}
.header-icon{
    position: absolute;
top:2rem;
    left:1rem;
    font-size: 1.8rem;

}
// .num-input{
//    width: 100%;
//    height: 97%;
//    border:none;
// }
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
.cartgroryList-content-box{
    // background-color: blue;
    width: 100%;
    height: 21.3rem;
    // background-color: blue;
  

}
.cartgroryList-content-box11{
    // background-color: blue;
    // height: 40rem;
    // width: 100%;
    // background-color: red;
    // position: fixed;
    // top: 0;
    // bottom:-80rem;
}
.cartgroryList-content-text{
border-top:1px solid rgba(134, 134, 134,0.3);
    height: 7.5rem;
}
.cartgroryList-p1{
font-size: 1.35rem;
font-weight: 700;
padding: 1rem 0 1rem 1rem;
}
.cartgroryList-p2{
font-size: 1.35rem;
font-weight: 700;
color:rgb(247, 110, 27);
margin-left: 1.2rem;
>span{
    color: rgb(134, 134, 134);
}
}
.cartgroryList-p3{
    width: 100%;
    height: 3.8rem;
    // background-color: red;
    line-height: 3.8rem;
    text-indent: 1rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color:rgb(134, 134, 134);
    border-top:0.5rem solid rgb(244, 244, 244);
       border-bottom:1px solid rgb(244, 244, 244);

}
.cartgroryList-footer{
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: red;
    height: 3.9rem;
    width: 100%;
    border-top:2px solid black; 
    z-index: 999;
     background-color:rgb(254, 254, 254);
}
.cartgroryList-footer-left{

 width: 50%;
  height: 100%;
  line-height: 3.9rem;
  text-align: center;
   font-size: 1.3rem;
   color:rgb(124, 124, 124)
}
.cartgroryList-footer-right{
 background-color: rgb(247, 105, 19);
  width: 50%;
  height: 100%;
line-height: 3.9rem;
 text-align: center;
 font-size: 1.3rem;
    color:rgb(254, 237, 230)
}
.cartgroryList-footer2{
    display: flex;
    position: fixed;
    bottom: 0;
      z-index: 999;
    // background-color: red;
    height: 12.5rem;
    width: 100%;
    // border-top:2px solid black; 
    margin-top:2rem; 
     background-color:rgb(254, 254, 254);
}
.cartgroryList-footer-left2{
//  background-color:rgb(254, 254, 254);
 width: 50%;
font-size: 1.3rem;
   color:rgb(124, 124, 124);
   padding-top:2em;
      padding-left:1.5rem;
}
.cartgroryList-footer-right2{
//  background-color: rgb(254, 254, 254);
  width: 50%;
text-align: center;
 font-size: 1.3rem;
    color:rgb(254, 237, 230);
   padding-top:2.5rem;
}
.cartgroryList-footer-right2>div{
    //   background-color: blue;
        display: inline-block;
        width: 4rem;
        height: 3.5rem;
        line-height: 3.5rem;
}
.cartgroryList-footer-right2>div:nth-child(2){
   color:black;
   font-size: 1.4rem;
    width: 5rem;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
}
.cartgroryList-footer-right2>div:nth-child(odd){
 border: 1px solid black;

}
.cartgroryList-footer-p1{
font-size: 1.4rem;
color:black;
}
.cartgroryList-footer-p2{
font-size: 1rem;
color:rgb(233, 116, 100)
}
.cartgroryList-footer2-submin{
    width: 100%;
    height: 4rem;
    background-color: rgb(247, 105, 19);
    position: absolute;
    bottom: 0;
    line-height: 4rem;
    text-align: center;
    color: rgb(254, 246, 241);
    font-size: 1.4rem;
    z-index: 99;
}
.zhezhaoceng{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(2, 2, 8,0.8);
}
.activea{
    position: fixed;
}
</style>
