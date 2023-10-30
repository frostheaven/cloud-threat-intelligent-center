<template>
   <div class="apt-list" v-if="showAPTDetail">
      <div class="search-bar">
         <el-input v-model="searchInput" placeholder="请输入搜索的APT组织名称">
            <template #append>
               <el-button :icon="Search">Search</el-button>
            </template>
         </el-input>
      </div>
      <div class="card-group">
         <ul class="allItems">
            <template v-for="(item, index) in [...Array.from({ length: 4 }).keys()]">
               <li class="allItems-every clearfix">
                  <div class="item-body-container">
                     <!-- 图标 -->
                     <div class="item-left-wrapper item-wrapper">
                        <div class="item-logo">
                           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              class="img-fluid" alt="..." />
                        </div>
                        <!-- <div class="check-btn btn-box">
                           <button>立即购买</button>
                        </div> -->
                     </div>

                     <div class="item-right-wrapper item-wrapper">
                        <div class="item-title">
                           <div class="item-name item-piece" @click="getTargetDetail">
                              海莲花<br />
                              <span>APT-Q-31</span>
                           </div>
                        </div>
                        <div class="item-content">
                           <div class="item-description item-piece">
                              海莲花组织是由奇安信最早披露并命名的一个APT组织，其自2012年四月起，该组织针对中国政府...
                           </div>
                        </div>
                     </div>
                  </div>
               
                  <div class="item-foot-container">
                     <div class="item-foot-wrapper item-wrapper">
                        <div class="item-content">
                           <div class="item-suspected-source item-piece">
                              疑似来源：<span>越南</span>
                           </div>
                           <div class="item-report-time item-piece">
                              披露时间：<span>2012年</span>
                           </div>
                           <div class="item-latest-report item-piece">
                              最新报告：<span>《APT组织海莲内网渗透手法详...</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </li>
            </template>
         </ul>
      </div>
   </div>
   <div class="apt-detail" v-if="!showAPTDetail">
      <apt-detail />
   </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import aptDetail from './APTDetail.vue'
import { Search } from '@element-plus/icons-vue'
import { ElInput, ElButton, ElCard } from 'element-plus'
const searchInput = ref('')
const showAPTDetail = ref(true)
provide('showAPTDetail', showAPTDetail)
const getTargetDetail = () => {
   showAPTDetail.value = false
}
// const { proxy }: any = getCurrentInstance()



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
      :deep(.el-input__wrapper), :deep(.el-input-group__append){
         box-shadow: none;
         background-color: $common-bgc-dark;
         
      }
     :deep(input) {
         color: $font-color-light;
     }
      .el-button{
         &:hover {
            background-color: lighten($common-bgc-dark, 20) ;
            color: $font-color-light;
            transition-duration: 0.25s;
         }
      }
      
   }
}

.card-group {
   padding: 2rem;
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;

      li {
         list-style: none;
         padding: 1.2rem 0.5rem;
         width: 40%;
         border-radius: 1rem;
         border-bottom: 0.5rem solid $common-bgc-dark;
         background-color: darken($common-bgc-dark, 5);
         // background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('@/assets/image/user-trade/power-buy/card-bg.jpg');
         // box-shadow: -2px 2px 6px $shadow-color;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin: 1% 1%;
         .item-body-container {
            display: flex;
            .item-left-wrapper {
               width: 100%;
               overflow: hidden;
               display: flex;
               flex-direction: column;
               // justify-content: center;
               align-items: center;

               .item-logo {
                  // height: 12rem;
                  // width: 12rem;
                  padding: 0.5rem;
                  text-align: center;

                  img {
                     object-fit: cover;
                     width: 80%;
                     border-radius: 999px;
                  }
               }

            }

            .item-right-wrapper {
               .item-title {
                  .item-piece {
                     cursor: pointer;
                     font-size: 1.5rem;
                     font-weight: 600;
                     color: $font-color-light;
                     padding: 0.1rem 0;
                     background: linear-gradient( to right,#ec695c,#61c454) no-repeat right bottom;
			            background-size: 100% 2px;
                     &:hover {
                        color: $font-hover-color;
                        transition: 0.3s linear;
                     }

                     span {
                        cursor: text;
                        color: darken($font-color-light, 5);
                        // font-weight: 800;
                        font-size: 1rem;
                        letter-spacing: 0.1rem;
                     }
                  }
               }

               .item-content {
                  cursor: pointer;
                  .item-piece {
                     padding: 0.5rem 0;
                     font-weight: 600;
                     color: $font-color-light;

                     span {
                        color: darken($font-color-light, 5);
                        font-weight: 1000;
                        font-size: 0.9rem;
                     }
                  }
               }
            }
         }
        
         .item-foot-container {
            width: 100%;
            box-sizing: border-box;
            padding: 0 2rem;
            .item-foot-wrapper {
               width: 100%;
               .item-piece {
                  cursor: pointer;
                  width: 100%;
                  font-size: 1rem;
                  font-weight: 600;
                  color: $font-color-light;
                  display: flex;
                  align-items: center;
                  margin-bottom: 0.1rem;
                  span {
                     cursor: text;
                     display: inline-block;
                     color: darken($font-color-light, 5);
                     font-weight: 550;
                     max-width: 70%;
                     height: 100%;
                     font-size: 0.8rem;
                     overflow: hidden; 
                     text-overflow: ellipsis; 
                     -o-text-overflow: ellipsis;
                     white-space:nowrap;
                     letter-spacing: 0.1rem;
                     
                  }
                  &:first-child span {
                     box-sizing: border-box;
                     padding: 0.15rem 0.3rem;
                     border: #198c0a 1px solid;
                     border-radius: 0.2rem;
                     background-color: #198c0a;
                     color: darken($font-color-light, 5);
                  }
               }
            }
         }
         
      }
   }
}
</style>
