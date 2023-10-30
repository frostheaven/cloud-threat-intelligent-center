<template>
   <div class="search-bar">
      <el-input v-model="searchInput" placeholder="输入关键字进行标题和内容搜索">
         <template #append>
            <el-button :icon="Search">Search</el-button>
         </template>
      </el-input>
   </div>
   <div class="card-group">
      <el-card 
      :body-style="{ padding: '0px' }"
      v-for="item in [...Array.from({length: 6}).keys()]">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 10px">
          <span>Threats</span>
          <div class="bottom">
            <span>Here are some descriptions of different threats.</span>
          </div>
        </div>
      </el-card>
   </div>
</template>

<script setup lang="ts">
   import { ref } from 'vue';
   import { Search } from '@element-plus/icons-vue'
   import { ElInput, ElButton, ElCard } from 'element-plus'
   const searchInput = ref('')

</script>

<style scoped lang="scss">
   .search-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      background-color: darken($common-bgc-dark, 10);
      .el-input {
         width: 80%;
         height: 2.5rem;
         .el-button:hover {
            background-color: $font-hover-color ;
            color: $font-color-light;
            transition-duration: 0.3s;
         }
      }
   }
   .card-group {
      padding: 2rem;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .el-card {
         width: 25%;
         padding: 2rem;
         margin: 0.5rem;
         border-radius: 3%;
         .image {
            width: 100%;
            display: block;
         }
         .bottom {
            margin-top: 13px;
            // line-height: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
         }
         .button {
            padding: 0;
            min-height: auto;
         }
      }
      
   }
</style>
