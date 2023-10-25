<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="source" label="情报源" />
      <el-table-column prop="firtime" label="首发时间" />
      <el-table-column prop="updatetime" label="更新时间" />
      <el-table-column prop="labels" label="标签" />
      <el-table-column prop="trueth" label="是否有效" />
      <el-table-column prop="weight" label="权重" />
    </el-table>

  </div>
</template>
<script lang='ts' setup>
import { ElTable, ElTableColumn } from 'element-plus'
const tableData = [
  {
    source: '2016-05-03',
    firtime: 'Tom',
    updatetime: 'No. 189, Grove St, Los Angeles',
    labels: 'adasd',
    trueth: 'ad',
    weight: 'asd'
  },
  {
    source: '2016-05-03',
    firtime: 'Tom',
    updatetime: 'No. 189, Grove St, Los Angeles',
    labels: 'adasd',
    trueth: 'ad',
    weight: 'asd'
  },
  {
    source: '2016-05-03',
    firtime: 'Tom',
    updatetime: 'No. 189, Grove St, Los Angeles',
    labels: 'adasd',
    trueth: 'ad',
    weight: 'asd'
  },
  {
    source: '2016-05-03',
    firtime: 'Tom',
    updatetime: 'No. 189, Grove St, Los Angeles',
    labels: 'adasd',
    trueth: 'ad',
    weight: 'asd'
  },
]

</script>
<style scoped lang="scss"></style>