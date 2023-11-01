<template>
  <div class="loader">
    <div class="select">
      <div class="isActive"><span>文件上传</span></div>
      <div><span>URL上传</span></div>
    </div>
    <div class="upload">
      <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          拖拽文件或者 <em>手动上传</em>
        </div>

      </el-upload>
      <button>确定提交</button>
    </div>
    <div class="url_load">

    </div>

  </div>
</template>
<script lang='ts' setup>
import { ElUpload, ElIcon } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
</script>
<style scoped lang="scss">
.loader {
  color: black;
  background-color: #fff;
  width: 30%;
  height: 64%;
  border-radius: 15px;
  overflow: hidden;

  .select {
    display: flex;
    text-align: center;
    height: 15%;
    border-bottom: 1px solid;

    div {
      flex: 1;
      display: flex;
      align-items: center;

      span {
        width: 100%;
      }
    }

    .isActive {
      background-color: #1890ff;
    }
  }



  .upload {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 50px 0 0 0;
    justify-content: center;
    align-items: center;

    .upload-demo {
      width: 100%;
    }

    button {
      width: 30%;
      height: 48px;
      border-radius: 24px;
      font-size: 16px;
      margin-top: 25px;
    }
  }
}
</style>