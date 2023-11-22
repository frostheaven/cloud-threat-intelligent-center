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
            <!-- <template v-for="(item, index) in [...Array.from({ length: 4 }).keys()]"> -->
            <template v-for="(item, index) in aptItemArr">
               <li class="allItems-every clearfix">
                  <div class="item-body-container">
                     <!-- 图标 -->
                     <div class="item-left-wrapper item-wrapper">
                        <div class="item-logo">
                           <img :src=item.imgSrc
                              class="img-fluid" alt="..." />
                        </div>
                        <!-- <div class="check-btn btn-box">
                           <button>立即购买</button>
                        </div> -->
                     </div>

                     <div class="item-right-wrapper item-wrapper">
                        <div class="item-title">
                           <div class="item-name item-piece" @click="getTargetDetail">
                              {{ item.name }}<br />
                              <span>{{ item.id }}</span>
                           </div>
                        </div>
                        <div class="item-content">
                           <div class="item-description item-piece">
                              {{ item.intro.slice(0, 50) }}...
                           </div>
                        </div>
                     </div>
                  </div>
               
                  <div class="item-foot-container">
                     <div class="item-foot-wrapper item-wrapper">
                        <div class="item-content">
                           <div class="item-suspected-source item-piece">
                              疑似来源：<span>{{ item.place }}</span>
                           </div>
                           <div class="item-report-time item-piece">
                              披露时间：<span>{{ item.time }}</span>
                           </div>
                           <div class="item-latest-report item-piece">
                              最新报告：<span>{{ item.report }}</span>
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
const aptItemArr = ref([
   {
      name: '海莲花',
      id: 'APT-Q-31',
      intro: '海莲花组织是由奇安信最早披露并命名的一个APT组织，其自2012年4月起，该组织针对中国政府、科研院所、海事机构、海域建设、航运企业等相关重要领域展开了有组织、有计划、有针对性的长时间不间断攻击。 国外网络安全公司FireEye将海莲花组织命名为APT32，称其针对多个行业的私营企业、外国政府、持不同政见者和记者实施攻击，其还广泛使用失陷的网站来攻击受害者。 海莲花组织除了攻击中国目标，还对柬埔寨、菲律宾、越南等东南亚国家目标实施攻击活动，其拥有一套功能完备的恶意代码，并结合商业工具实施攻击。 2014年2月以后，海莲花组织进入攻击活跃期，并于2014年5月发动了最大规模的一轮鱼叉攻击，大量受害者因打开带毒的邮件附件而感染特种木马。一直至今该组织针对中国境内的攻击活动依然存在。',
      place: '越南',
      time: '2012年',
      report: '《APT组织海莲花内网渗透手法详情披露》',
      imgSrc: 'https://ti.qianxin.com/microapps/apt-ti/apt-logos/hailianhua.svg'
   },
   {
      name: '摩诃草',
      id: 'APT-Q-36',
      intro: '摩诃草最早由国外安全厂商Norman披露并命名为Hangover，而其于2015年12月起的第二次相关的攻击行动被国外安全厂商Cymmetria披露为Patchwork，2016年8月其他厂商后续披露了摩诃草组织的详细报告。国内其他安全厂商通常也称其为“白象”。 该组织最早攻击活动可以追溯到2009年11月，从2015年开始更加活跃，其主要针对Windows系统进行攻击，同时也会针对Android、Mac OS系统进行攻击。 从2009年至今该组织针对不同国家和领域至少发动了3次攻击行动和1次疑似攻击行动，期间使用了大量漏洞，其中至少包括一次 0day 漏洞攻击。 该组织后续也被发现和Confucius、蔓灵花的APT组织可能存在一些联系。',
      place: '印度',
      time: '2009年',
      report: '《白象组织BADNEWS新型样本分析》',
      imgSrc: '	https://ti.qianxin.com/microapps/apt-ti/apt-logos/mokecao.png'
   },
   {
      name: '蔓灵花',
      id: 'APT-Q-37',
      intro: 'BITTER最早由国外安全厂商Forcepoint在2016年命名，该组织至少从2013年11月以来就开始活跃。最开始使用鱼叉钓鱼网络电子邮件，并通过Office漏洞CVE-21012-0158进行RAT的落地执行。主要目标针对于巴基斯坦的政府部门。 2016年11月，奇虎360公司在国内捕获到蔓灵花样本，受影响单位主要是涉及政府、电力和工业相关单位。 2018年11月，奇安信威胁情报中心在2018年12月首次发现该组织使用CVE-2017-12824 InPage漏洞，目标针对乌尔都语使用者，并与Confucius和摩诃草存在关联。 2021年3月，安恒捕获到蔓灵花组织在针对国内的攻击活动中使用Windows内核提权0Day漏洞CVE-2021-1732。 1. 主要使用鱼叉攻击，投放漏洞文档，或伪装成图片的SFX文件。 2. 其使用free DDNS托管其C2域名，注册邮箱为gmail，并且伪装成United Kingdom or Great Britain的地址。 3. 部分样本带有带有不受信任的数字签名 4. CC通信报文带有头部标记BITTER1234 5. 使用Windows和Android的木马',
      place: '南亚',
      time: '2013年',
      report: '《蔓灵花组织投向国产办公软件的目光与winrar漏洞之触》',
      imgSrc: 'https://ti.qianxin.com/microapps/apt-ti/apt-logos/manlinghua.png'
   },
   {
      name: '肚脑虫',
      id: 'APT-Q-38',
      intro: '2017年6月，奇安信威胁情报中心红雨滴团队发现未知APT组织针对巴基斯坦的定向攻击活动，相关攻击攻击活动最早可追溯至2016年4月。 2018年3月，国外安全团队ASERT继续披露了该组织新的恶意代码框架yty，并将该组织命名为Donot，音译为"肚脑虫"。 肚脑虫组织主要针对巴基斯坦等南亚地区国家的政府机构进行攻击，以窃取敏感信息为主。 该组织具有Windows与Android双平台攻击能力，主要通过携带Office漏洞或者恶意宏文档的鱼叉邮件和安卓APK进行恶意代码的传播。 从2017年首次公开披露至今，肚脑虫组织一直处于活跃状态，不断开展针对巴基斯坦等南亚地区国家的攻击活动。',
      place: '印度',
      time: '2016年',
      report: '《APT-C-35（肚脑虫）组织在移动端采用新的投递方式分析》',
      imgSrc: 'https://ti.qianxin.com/microapps/apt-ti/apt-logos/dunaochong.svg'
   },

])


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
