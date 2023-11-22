<template>
   <div class="search-bar">
      <el-input v-model="searchInput" placeholder="请输入漏洞的AVD编号或名称以检索到该漏洞">
         <template #append>
            <el-button :icon="Search">Search</el-button>
         </template>
      </el-input>
   </div>
   <div class="form-container">
      <el-table :data="tableData" style="width: 100%">
         <el-table-column prop="id" label="AVD编号" />
         <el-table-column prop="name" label="漏洞名称" />
         <el-table-column prop="type" label="漏洞类型" />
         <el-table-column prop="time" label="披露时间" />
      </el-table>

   </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { ElInput, ElButton, ElTable, ElTableColumn } from 'element-plus'
const searchInput = ref('')
const threatData = reactive({})

const tableData = [
   {
      id: 'hhh',
      name: '漏洞',
      type: '类型',
      time: '2023/11/22'
   },
   
]

onMounted(() => {
   
})




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

.form-container {
   box-sizing: border-box;
   padding: 0.5rem 1rem;
   display: flex;
   justify-content: center;
   .el-table {
      background-color: $common-bgc-dark;
      color: $font-color-light;
      &:deep(.el-table__row) {
         height: 4rem;
         &:hover {
            color: $font-color-dark;
            cursor: pointer;
         }
      }

      &:deep(th.el-table__cell) {
         background-color: $common-bgc-dark;
      }
   }

}

.el-table {
   --el-table-tr-bg-color: $common-bgc-dark;
}
</style>
