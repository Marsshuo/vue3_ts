<template>
  <div class="manage">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <h5 class="mb-2">{{ testData }}</h5>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header
          >Header
          <button @click="loginOut()">退出</button>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const testData = 'hello world'
    const router = useRouter()  
    return {
      testData,
      router,
    }
  },
  methods: {
    handleOpen (key: string, keyPath: string[]) {
      console.log(key, keyPath)
    },
    handleClose (key: string, keyPath: string[]) {
      console.log(key, keyPath)
    },
    loginOut () {
      (this as any).router.push('/login')
    }
  },
  mounted() {
    axios.get('api/v2/movie/in_theaters')
  }
}
</script>

<style lang="scss">
.manage {
  height: 100vh;
  .el-container {
    height: 100%;
  }
  .el-header {
    height: 10%;
    background-color: rgb(143, 243, 243);
  }
  .el-aside {
    width: 15%;
    background-color: gainsboro;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 100%;
      min-height: 400px;
    }
  }
  .el-footer {
    background-color: aqua;
  }
}
</style>
