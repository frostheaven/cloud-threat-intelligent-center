<template>
    <div class="search-container">
        <div class="input-container">
            <el-input v-model="searchInput" class="w-50 m-2" size="large" placeholder="Please Input" :prefix-icon="Search" />
        </div>
        <div class="form-container">
            <div class="single-form"
            v-for="(name, index) in tableName">
                <el-table
                :data="tableForm[index]"
                height="250"
                >
                    <el-table-column prop="info" :label="name" />
                    <el-table-column prop="number" />
                </el-table>
            </div>
            
        </div>
    </div>
    <div class="report-container">
        <div class="deep-report-container">
            <div class="report-tile">
                深度报告
            </div>
        </div>
        <div class="hot-point-report-container">
            <div class="hot-point-title">
                热点报告
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElInput, ElTable, ElTableColumn } from 'element-plus'
const searchInput = ref('')
interface tableInfo {
    info: string
    number: string
}

const tableForm_attackOrg: tableInfo[] = [
    {
        info: 'Lazarus',
        number: '8',
    },
    {
        info: 'Fancy Bear',
        number: '4',
    },
    {
        info: 'Lucky mouse',
        number: '3'
    }
]
const tableForm_virus: tableInfo[] = [
    {
        info: 'Mirai',
        number: '6',
    },
    {
        info: 'Emotet',
        number: '5'
    }
]
const tableForm_date: tableInfo[] = [
    {
        info: '三个月',
        number: '5',
    },
    {
        info: '半年',
        number: '54'
    }
]
const tableForm_type: tableInfo[] = [
    {
        info: '报告',
        number: '121',
    },
    {
        info: '情报',
        number: '61'
    }
]
const tableForm_tag: tableInfo[] = [
    {
        info: '热点事件',
        number: '155',
    },
    {
        info: '勒索',
        number: '9'
    }
]
const tableName = ref(['攻击组织', '病毒家族', '发布日期', '报告类型', '标签'])
const tableForm = ref([tableForm_attackOrg, tableForm_virus, tableForm_date, tableForm_type, tableForm_tag])
</script>
  
<style scoped lang="scss">
.search-container {
    padding: 0.5rem;
    background-color: darken($common-bgc-dark, 20);

    .input-container {
        padding: 0.5rem 1rem;

        .el-input :deep(.el-input__wrapper) {
            background-color: $common-bgc-dark;
        }
    }
    .form-container {
        padding: 0.5rem 1rem;
        display: flex;
        .single-form {
            width: 20%;
            border: 1px solid darken($font-color-light, 20);
        }
    }
}
.report-container {
    display: flex;
    .deep-report-container {
        width: 70%;
        padding: 0.5rem;
        margin-right: 1rem;
        background-color: darken($common-bgc-dark, 15);
    }
    .hot-point-report-container {
        padding: 0.5rem;
        background-color: darken($common-bgc-dark, 15);
        width: calc(35%);
    }
}

.el-table {
  --el-table-tr-bg-color: $common-bgc-dark;
}
</style>
