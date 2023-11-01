<template>
    <div>
        <div class="top-menu">
            <top-menu />
        </div>
        <div class="central-display">
            <el-container class="layout-container">
                <el-aside width="200px" style="background-color: #1d2025;">
                    <el-scrollbar>
                        <el-menu :default-openeds="['2']" :default-active="activeIndex" @select="handleSelect">
                            <el-menu-item index="report">
                                <template #title>
                                    <el-icon>
                                        <document />
                                    </el-icon>
                                    威胁报告
                                </template>
                            </el-menu-item>

                            <el-sub-menu index="threat-knowledge-base">
                                <template #title>
                                    <el-icon>
                                        <collection />
                                    </el-icon>威胁知识库
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="virus-family-lib"><el-icon>
                                            <CaretRight />
                                        </el-icon>病毒家族库</el-menu-item>
                                    <el-menu-item index="apt-organize-lib"><el-icon>
                                            <CaretRight />
                                        </el-icon>APT组织库</el-menu-item>
                                </el-menu-item-group>
                            </el-sub-menu>
                            <el-menu-item index="security-information">
                                <template #title>
                                    <el-icon>
                                        <edit-pen />
                                    </el-icon>安全资讯
                                </template>
                            </el-menu-item>

                            <el-menu-item index="intelligence-sandbox">
                                <template #title>
                                    <el-icon>
                                        <message-box />
                                    </el-icon>情报沙箱
                                </template>
                            </el-menu-item>

                            <el-menu-item index="6">
                                <template #title>
                                    <el-icon>
                                        <office-building />
                                    </el-icon>情报公司
                                </template>
                            </el-menu-item>

                        </el-menu>
                    </el-scrollbar>
                </el-aside>

                <el-container>
                    <el-header style="font-size: 12px">
                        <div class="toolbar">
                            <span>{{ $route.meta.title }}</span>
                        </div>
                    </el-header>

                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TopMenu from '@common/TopMenu/TopMenu.vue'

import { ref, getCurrentInstance } from 'vue'
import { Document, MessageBox, Collection, EditPen, OfficeBuilding, Star, CaretRight } from '@element-plus/icons-vue'
import { ElContainer, ElAside, ElSubMenu, ElScrollbar, ElMenuItem, ElIcon, ElMenuItemGroup, ElMenu, ElHeader, ElMain, ElTable, ElTableColumn } from 'element-plus'

const activeIndex: string = "1"
const { proxy }: any = getCurrentInstance()
const handleSelect = (key: string, keyPath: string[]) => {
    console.log('key:', key, '|| keyPath:', keyPath)
    const router: any = proxy.$router
    router.push({
        name: key
    })
}

</script>

<style scoped lang="scss">
.top-menu {
    height: $top-menu-height;
    width: 100%;
}

.central-display {
    height: calc(100vh - $top-menu-height);
    position: fixed;
    width: 100%;
}

.layout-container {
    height: 100%;

    .el-header {
        position: relative;
        background-color: $common-bgc-dark;
    }

    .el-menu {
        border-right: none;

        .el-menu-item,
        :deep(.el-sub-menu__title) {
            color: $font-color-light;

            &:hover {
                background-color: lighten($common-bgc-dark, 10);
                color: lighten($font-color-light, 10);
            }
        }

        :deep(.is-active) {
            color: $font-hover-color !important;
            ;
        }

        &,
        &>* {
            background: $common-bgc-dark;
        }

    }

    .el-main {
        padding: 0;
        width: 100%;
        padding: 1rem;
        // & > * {
        //     border-radius: 5%;
        // }
    }

    .toolbar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        right: 20px;
        font-size: 1rem;
        color: $font-hover-color;
    }
}
</style>