<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0">云端威胁情报中心</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">首页</el-menu-item>
        <!-- <el-sub-menu index="2">
        <template #title>产品服务</template>
        <el-menu-item index="2-1">API查询</el-menu-item>
        <el-menu-item index="2-2">恶意IP检测</el-menu-item>
        <el-menu-item index="2-3">域名检测</el-menu-item>
        </el-sub-menu> -->
        <el-menu-item index="3">关于我们</el-menu-item>
        <el-menu-item index="4" style="vertical-align: center;">
            <div class="user-avatar">
                <div>
                    <el-avatar :icon="UserFilled" />
                </div>
            </div>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { UserFilled } from '@element-plus/icons-vue'
    import { ElMenu, ElMenuItem, ElSubMenu, ElAvatar } from 'element-plus'

    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style scoped lang="scss">
.el-menu {
    background-color: $common-bgc-primary;
    color: $font-color-light;
    :deep(.is-active) {
        color: $font-color-light!important;
        background-color: lighten($common-bgc-primary, 5);
        &:hover {
            color: $font-hover-color !important;
        }
        &:focus {
            color: $font-hover-color !important;
            background-color: lighten($common-bgc-primary, 10);
        }
    }
    .el-menu-item{
        font-size: 1rem;
        height: $top-menu-height;
        display: flex;
        align-items: center;
        & div {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
    .el-menu-item, .el-sub-menu {
        width: 12%;
        color: $font-color-light;
        &:hover {
            color:$font-hover-color;
            background-color: lighten($common-bgc-primary, 5);
        }
    }
}

.flex-grow {
    flex-grow: 1;
}

.user-avatar {
  display: flex;
  text-align: center;
  justify-content: center;
  div {
    flex: 1;
    text-align: center;
    justify-content: center;
    &:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }
  }
}
</style>
