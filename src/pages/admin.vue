
<template>
  <div class="admin_container">
    <!-- 头部开始 -->
    <div class="admin_header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 系统首页 -->
        <el-tab-pane label="系统首页" name="first">
          <!-- 标题部分 -->
          <div class="admin_title">
            <el-carousel height="30px">
              <el-carousel-item v-for="item in 4" :key="item">
                <div>奥术大师多撒大所</div>
              </el-carousel-item>
            </el-carousel>
          </div>

          <!-- 轮播图开始 -->
          <div class="admin_swiper">
            <el-carousel trigger="click" height="200px" indicator-position="none">
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>

          <!-- 导航栏部分开始 -->
          <div class="admin_nav">
            <div class="admin_nav1">
              <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
              <div>商户拓展</div>
            </div>
            <div class="admin_nav1">
              <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
              <div>二维码商户</div>
            </div>
            <div class="admin_nav1">
              <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
              <div>我的收益</div>
            </div>
            <div class="admin_nav1">
              <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
              <div>机具物料</div>
            </div>
            <div class="admin_nav1">
              <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
              <div>我的后台</div>
            </div>
          </div>

          <!-- 本月业绩 -->

          <div class="admin_month">
            <div class="admin_performance">
              <div class="performance_title">
                <span>本月业绩</span>
              </div>

              <div class="performance_content">
                <div class="conten_box">
                  <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
                  <div class="conten_box2">
                    <div class="conten_box3">当前交易额</div>
                    <div class="conten_box4">
                      <span>￥</span>
                      <span>50</span>
                    </div>
                  </div>
                </div>

                <div class="conten_box">
                  <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
                  <div class="conten_box2">
                    <div class="conten_box3">当前交易额</div>
                    <div class="conten_box4">
                      <span>￥</span>
                      <span>50</span>
                    </div>
                  </div>
                </div>

                <div class="conten_box">
                  <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
                  <div class="conten_box2">
                    <div class="conten_box3">当前交易额</div>
                    <div class="conten_box4">
                      <span>￥</span>
                      <span>50</span>
                    </div>
                  </div>
                </div>

                <div class="conten_box">
                  <img src="https://www.vipyl.com/user/webimg/201792/20179211254712.jpg" alt="">
                  <div class="conten_box2">
                    <div class="conten_box3">当前交易额</div>
                    <div class="conten_box4">
                      <span>￥</span>
                      <span>50</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- 底部 -->
          <div class="admin_bottom">
            <hr class="admin_bottom1" />
            <div class="admin_bottom2">到底了</div>
            <hr class="admin_bottom3" />
          </div>

        </el-tab-pane>

        <!-- 奖励查询 -->
        <el-tab-pane label="奖励查询" name="second">
          <el-tabs v-model="boxName">
            <el-tab-pane label="进行中" name="first">
              <!-- 首发礼包 -->
              <div class="award_query">
                <div class="award_title">首发礼包</div>
                <div class="award_content">
                  <!-- 左边盒子 -->
                  <div class="content_left">
                    <div class="content_up">
                      <div>0</div>
                      <div>今日新增用(户)</div>
                    </div>
                    <div class="content_down">
                      <div>0</div>
                      <div>待返奖励金额(元)</div>
                    </div>
                  </div>
                  <!-- 中间盒子 -->
                  <div class="content_center">
                    <div class="content_up2">
                      <div>0</div>
                      <div>累计新增用户数(户)</div>
                    </div>
                    <div class="content_down2">
                      <div>0</div>
                      <div>已返奖励金额(元)</div>
                    </div>
                  </div>

                  <!-- 右边盒子 -->
                  <div class="content_right">
                    <div> > </div>
                  </div>


                </div>
              </div>

              <!-- 冲刺礼包 -->
              <div class="award_query">
                <div class="award_title">冲刺礼包</div>
                <div class="award_content">
                  <!-- 左边盒子 -->
                  <div class="content_left">
                    <div class="content_up">
                      <div>0</div>
                      <div>今日新增用(户)</div>
                    </div>
                    <div class="content_down">
                      <div>0</div>
                      <div>待返奖励金额(元)</div>
                    </div>
                  </div>
                  <!-- 中间盒子 -->
                  <div class="content_center">
                    <div class="content_up2">
                      <div>0</div>
                      <div>累计新增用户数(户)</div>
                    </div>
                    <div class="content_down2">
                      <div>0</div>
                      <div>已返奖励金额(元)</div>
                    </div>
                  </div>

                  <!-- 右边盒子 -->
                  <div class="content_right">
                    <div> > </div>
                  </div>


                </div>
              </div>

              <!-- 远航礼包 -->
              <div class="award_query">
                <div class="award_title">首发礼包</div>
                <div class="award_content">
                  <!-- 左边盒子 -->
                  <div class="content_left">
                    <div class="content_up">
                      <div>0</div>
                      <div>今日新增用(户)</div>
                    </div>
                    <div class="content_down">
                      <div>0</div>
                      <div>待返奖励金额(元)</div>
                    </div>
                  </div>
                  <!-- 中间盒子 -->
                  <div class="content_center">
                    <div class="content_up2">
                      <div>0</div>
                      <div>累计新增用户数(户)</div>
                    </div>
                    <div class="content_down2">
                      <div>0</div>
                      <div>已返奖励金额(元)</div>
                    </div>
                  </div>

                  <!-- 右边盒子 -->
                  <div class="content_right">
                    <div> > </div>
                  </div>


                </div>
              </div>

            </el-tab-pane>

            <el-tab-pane label="已结束" tab-position="right" name="second">
              已结束
            </el-tab-pane>
          </el-tabs>

        </el-tab-pane>
        <!-- 联盟中心 -->
        <el-tab-pane label="联盟中心" name="third">联盟中心</el-tab-pane>
      </el-tabs>

    </div>


    <Tabbar></Tabbar>
    <!-- <router-view></router-view> -->
  </div>

</template>

<style lang="scss" scoped>

.admin_header {
  .admin_swiper {
    img {
      width: 90%;
      height: 200px;
    }
  }
  .admin_nav {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    .admin_nav1 {
      img {
        width: 50px;
        height: 50px;
      }
      div {
        font-size: 15px;
      }
    }
  }

  .admin_month {
    width: 100%;
    background-color: #f4f4f4;
    border-radius: 2vw;
    .admin_performance {
      margin-top: 10vw;
      .performance_title {
        text-align: left;
        color: #61a7ff;
        width: 100%;
        height: 10vw;
        line-height: 10vw;
        border-bottom: 1px solid #bdc4ce;
        span {
          margin-left: 3vw;
        }
      }
      .performance_content {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 6vw;
        .conten_box {
          width: 50%;
          height: 22vw;
          img {
            width: 15vw;
            vertical-align: middle;
          }
          .conten_box2 {
            display: inline-block;
            vertical-align: middle;
            .conten_box3 {
              font-size: 15px;
              .conten_box4 {
                .conten_box5 {
                }
              }
            }
          }
        }
      }
    }
  }

  .admin_bottom {
    margin-top: 15vw;
    margin-bottom: 20vw;
    display: flex;
    .admin_bottom1 {
      height: 1px;
      width: 40vw;
      background-color: #9b9b9c;
      border: none;
      border-top: 1px;
    }
    .admin_bottom2 {
      font-size: 3vw;
      color: #9b9b9c;
    }
    .admin_bottom3 {
      height: 1px;
      width: 40vw;
      background-color: #9b9b9c;
      border: none;
      border-top: 1px;
    }
  }

  .award_query{
    background-color: #f1f1f1;
    margin-bottom: 4vw;
    .award_title{
      color: #5196f0;
      width: 100vw;
      height: 12vw;
      line-height: 12vw;
      border-bottom: 2px solid #fff;
      font-size: 5vw;
    }

    .award_content{
      width: 100%;
      height: 50vw;
      display: flex;
      justify-content: space-around;
      margin-top: 5vw;
      .content_left{
        
        .content_up{
          height: 50%;
          div:nth-child(1){
            font-size: 25px;
            color: black;
            font-weight: bold;
          }
          div:nth-child(2){
            font-size: 12px;
            color: #b3b3b3;
            margin-top: 5px;
          }
        }
        .content_down{
          height: 50%;
          div:nth-child(1){
            font-size: 25px;
            color: black;
            font-weight: bold;
          }
          div:nth-child(2){
            font-size: 12px;
            color: #b3b3b3;
            margin-top: 5px;
          }
        }
      }

      .content_center{

          .content_up2{
            height: 50%; 
            div:nth-child(1){
            font-size: 25px;
            color: black;
            font-weight: bold;
          }
          div:nth-child(2){
            font-size: 12px;
            color: #b3b3b3;
            margin-top: 5px;
          }           
          }
          .content_down2{
            height: 50%; 
            div:nth-child(1){
            font-size: 25px;
            color: black;
            font-weight: bold;
          }
          div:nth-child(2){
            font-size: 12px;
            color: #b3b3b3;
            margin-top: 5px;
          }           
          }
      }

      .content_right{
        font-size: 8vw;
        color: #b3b3b3;
        font-weight: 100;
        line-height: 50vw;
      }

    }
  }
























}
</style>





<script>

import Tabbar from "../components/tabbar/tabbar";

export default {
  name: "admin",
  data() {
    return {
      activeName: "first",
      boxName:"first"
    };
  },

  components:{
    Tabbar
  },


  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
};
</script>