
<template>
    <div class="title-container">
        <div class="return-btn" @click="returnAPTOrg">
            <el-icon>
                <ArrowLeftBold />
            </el-icon>
            <span>返回</span>
        </div>
        <el-divider direction="vertical" />
        <div class="title">
            APT组织：海莲花
            <span class="apt-id">
                APT-Q-31
            </span>
        </div>
    </div>
    <div class="apt-detail-form">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0" title="team-overview">团伙概况</el-menu-item>
            <el-menu-item index="1" title="team-description">团队描述</el-menu-item>
            <el-menu-item index="2" title="technique">技战法</el-menu-item>
            <el-menu-item index="3" title="apt-intelligence">APT情报</el-menu-item>
        </el-menu>
        <div class="detail-container">
            <div class="detail-content team-overview" v-if="activeIndex == '0'">
                <div class="overview-columns">
                    <div class="single-column">
                        团伙名称
                        <div class="detail">海莲花</div>
                    </div>
                    <div class="single-column">
                        攻击者类型
                        <div class="detail">国家背景组织</div>
                    </div>
                    <div class="single-column">
                        技术能力
                        <div class="detail">中</div>
                    </div>
                    <div class="single-column">
                        疑似来源
                        <div class="detail">越南</div>
                    </div>
                    <div class="single-column">
                        最早活动时间
                        <div class="detail">2012年</div>
                    </div>
                    <div class="single-column">
                        影响行业
                        <div class="detail">政府、科研院所、海事机构、海域建设、航运企业</div>
                    </div>
                    <div class="single-column">
                        别名
                        <div class="detail">OceanLotus, APT32, Cobalt Kitty, APT-C-00, SeaLotus, Canvas</div>
                    </div>
                </div>
            </div>
            <div class="detail-content team-description" v-if="activeIndex == '1'">
                团队描述
            </div>
            <div class="detail-content technique" v-if="activeIndex == '2'">
                技战法
            </div>
            <div class="detail-content apt-intelligence" v-if="activeIndex == '3'">
                APT情报
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { ElIcon, ElDivider, ElMenu, ElMenuItem } from 'element-plus'
const showAPTDetail = inject('showAPTDetail')
const returnAPTOrg = () => {
    showAPTDetail.value = true
}
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
    activeIndex.value = key
    // console.log('activeIndex', activeIndex)
}

</script>

<style scoped lang="scss">
.title-container {
    width: 100%;
    height: 3rem;
    display: flex;
    box-sizing: border-box;
    padding: 0.6rem 1rem;
    background-color: darken($common-bgc-dark, 10);
    color: darken($font-color-light, 10);
    font-size: 0.9rem;

    &>* {
        display: flex;
        height: 100%;
        align-items: center;
        text-align: center;
    }

    .return-btn:hover {
        color: $font-hover-color;
        transition: 0.2s linear;
        cursor: pointer;
    }

    .title {
        span {
            margin: 0 1rem;
        }
    }

}

.apt-detail-form {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;

    .el-menu {
        background-color: transparent;
        color: $font-color-light;

        :deep(.is-active) {
            color: $font-color-light !important;
            background-color: transparent !important;

            &:hover {
                color: $font-hover-color !important;
            }

            &:focus {
                color: $font-hover-color !important;
                background-color: transparent;
            }
        }

        .el-menu-item {
            font-size: 1rem;
        }

        .el-menu-item,
        .el-sub-menu {
            width: 12%;
            color: $font-color-light;

            &:hover {
                color: $font-hover-color;
                background-color: transparent;
            }
        }
    }

    .detail-container {
        padding: 2rem;
        color: darken($font-color-light, 10);

        .detail-content {
            width: 100%;

            .overview-columns {
                width: 100%;
                display: flex;
                flex-direction: column;

                .single-column {
                    margin: 1.5rem 0;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                    .detail {
                        position: absolute;
                        margin-left: 20%;
                        color: $font-color-light;
                        font-weight: 600;
                        width: calc(45vw);
                    }
                }
            }
        }
    }
}</style>
