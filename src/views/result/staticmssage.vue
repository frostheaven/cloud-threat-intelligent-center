<template>
  <div>
    <div class="base">
      <span></span>
      <p style="color: blue; font-size: 20px;">基本信息</p>


      <div class="base_main">
        <div class="base_main_item">
          <div class="name">格式</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>

        <div class="base_main_item">
          <div class="name">md5</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>

        <div class="base_main_item">
          <div class="name">sha1</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>

        <div class="base_main_item">
          <div class="name">sha256</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>


        <div class="base_main_item">
          <div class="name">大小</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>

        <div class="base_main_item">
          <div class="name">判定</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>

        <div class="base_main_item">
          <div class="name">标签</div>
          <div class="container">BinExecute/Microsoft.EXE[:X86]</div>
        </div>

        <div class="base_main_item">
          <div class="name">GUID</div>
          <div class="container">35138b9a-5d96-4fbd-8e2d-a2440225f93a<br>
            e2011457-1546-43c5-a5fe-008deee3d3f0</div>
        </div>
      </div>

    </div>


    <div class="PE">
      <span></span>
      <p style="color: blue; font-size: 20px;">PE信息</p>

      <div class="PE_main">
        <div class="PE_main_item">
          <div class="name">API算出的hash</div>
          <div class="container">725cb350e332b47cbaf42d1ab8934935</div>
        </div>

        <div class="PE_main_item">
          <div class="name">AVLSDK提取特征值</div>
          <div class="container">FB29624B9C53501D</div>
        </div>


        <div class="PE_main_item">
          <div class="name">PE结构信息</div>
          <div class="container" id="tree">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
          </div>
        </div>



      </div>


    </div>
  </div>
</template>
<script lang='ts' setup>
import { ElTree } from 'element-plus'
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}

</script>
<style scoped lang="scss">
.base {
  .base_main {
    .base_main_item {
      display: flex;
      margin: 10px 0;

      .name {
        width: 20%;
      }

    }
  }
}

.PE {
  .PE_main {
    .PE_main_item {
      display: flex;
      margin: 10px 0;

      .name {
        width: 20%;
      }

    }
  }
}
</style>