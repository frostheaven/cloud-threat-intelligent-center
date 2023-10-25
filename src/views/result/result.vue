<template>
  <div class="container">

    <div class="mssagecard">

      <div class="threat_id">
        1fc1bc4d004ab51398070d8e3025fecf8878229cda8befdbc9a2faf592b8d876
        <el-icon>
          <DocumentCopy />
        </el-icon>
      </div>

      <div class="threat_lables">
        <div class="label">
          木马
        </div>

        <div class="label">
          海莲花
        </div>

        <div class="label">
          APT
        </div>

        <div class="label">
          下载者
        </div>
      </div>


      <div class="threat_level">

        <div class="front" style="width: 92px;">
          <span class="front_icon"></span>
          <span>
            威胁等级:
          </span>
        </div>
        <img src="@/assets/redstar.png" alt="">
        <img src="@/assets/redstar.png" alt="">
        <img src="@/assets/redstar.png" alt="">
      </div>

      <div class="threat_detail">
        <div class="front">
          <span class="front_icon"></span>
          <span>
            md5：
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>

        <div class="front">
          <span class="front_icon"></span>
          <span>
            sha1:
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>

        <div class="front">
          <span class="front_icon"></span>
          <span>
            sha256：
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>

        <div class="front">
          <span class="front_icon"></span>
          <span>
            文件大小：
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>

        <div class="front">
          <span class="front_icon"></span>
          <span>
            首发时间：
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>

        <div class="front">
          <span class="front_icon"></span>
          <span>
            更新时间：
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>


        <div class="front">
          <span class="front_icon"></span>
          <span>
            更新时间：
          </span>
          <span>1fc1bc4daf592b8d876</span>
        </div>
      </div>


    </div>

    <div class="mssagemain">
      <Datalist></Datalist>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ElIcon } from 'element-plus'
import { DocumentCopy } from '@element-plus/icons-vue'
import Datalist from './datalist.vue'
</script>
<style scoped lang="scss">
.container {
  .mssagecard {
    background-color: white;
    padding: 15px;
    // margin: 50px 0 20px 0;

    .front {
      width: 50%;
      margin: 5px 0;

      .front_icon {
        display: inline-block;
        background-color: blue;
        width: 5px;
        height: 5px;
        vertical-align: bottom;
        margin-right: 10px;
        margin-bottom: 5px;
      }
    }

    .threat_id {
      font-weight: 600;
    }

    .threat_lables {
      display: flex;
      margin: 5px 0;

      .label {
        padding: 2px 6px;
        margin: 0 3px;
        font-size: 12px;
        color: red;
        border: 1px solid red;
        border-radius: 3px;
      }

    }

    .threat_level {
      display: flex;
      align-items: center;
      height: 23px;
    }

    .threat_detail {
      display: flex;
      flex-wrap: wrap;
      width: 80%;
    }

  }

  .mssagemain {
    background-color: white;
    padding: 15px;
    padding-bottom: 25px;
  }



}
</style>