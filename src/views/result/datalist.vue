<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="情报信息" name="first">
        <Mssage></Mssage>
      </el-tab-pane>
      <el-tab-pane label="静态信息" name="second">
        <Staticmssage></Staticmssage>
      </el-tab-pane>
      <el-tab-pane label="行为信息" name="third">
        <Behavemssage></Behavemssage>
      </el-tab-pane>
      <el-tab-pane label="关联分析" disabled name="fourth">Task</el-tab-pane>
    </el-tabs>

  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { ElCard, ElTabs, ElTabPane } from 'element-plus';
import Mssage from './mssage.vue'
import Staticmssage from './staticmssage.vue'
import Behavemssage from './behavemssage.vue'

let activeName = ref<string>('first')
</script>
<style scoped lang="scss"></style>