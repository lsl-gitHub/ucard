<template>

  <div class="tabbar_fixed">
    <div class="tabbar_box">
      <img src="../../assets/images/tabbar/微信图片_20190821190626.png" alt="">
      <div @click="handleToAdmin">首页</div>
    </div>
    <div class="tabbar_box">
      <img src="../../assets/images/tabbar/微信图片_20190821190617.png" alt="">
      <div @click="handleToLeague">联盟</div>
    </div>
    <div class="tabbar_box">
      <img src="../../assets/images/tabbar/微信图片_20190821190547.png" alt="">
      <div @click="handleToHarvest">收益</div>
    </div>
    <div class="tabbar_box">
      <img src="../../assets/images/tabbar/微信图片_20190821190607.png" alt="">
      <div @click="handleToUser">我的</div>
    </div>
  </div>

</template>


<script>
export default {
  name: "tabbar",

  data() {
    return {};
  },

  methods: {
    handleToAdmin() {
      this.$router.push("/admin");
    },
    handleToLeague() {
      this.$router.push("/user");
    },
    handleToHarvest() {
      this.$router.push("/income");
    },
    handleToUser() {
      this.$router.push("/mine");
    }
  }
};
</script>

<style lang="scss" scoped>
.tabbar_fixed {
  width: 100%;
  height: 16vw;
  // line-height: 20vw;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .tabbar_box {
    img {
      width: 5vw;
      margin-top: 2vw;
    }
    div {
      margin-top: 1vw;
    }
  }
}
</style>

