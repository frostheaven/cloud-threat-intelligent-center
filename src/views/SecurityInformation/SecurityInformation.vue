<template>
  <div class="SecurityInformation">
    <h1>安全新闻 &#920 安全预警</h1>
    <h3>让您收获最前沿的安全新闻掌握最新的安全动态</h3>
    <div class="news">
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
      <SecurityNews></SecurityNews>
    </div>


  </div>
</template>
<script lang='ts' setup>
import SecurityNews from '@common/SecurityNews/index.vue'



</script>
<style scoped lang="scss">
.SecurityInformation {
  h1 {
    text-align: center;
    font-size: 50px;
    color: rgb(239, 229, 229);
  }

  h3 {
    text-align: center;

    color: rgb(248, 238, 238);
  }

  .news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }


}
</style>