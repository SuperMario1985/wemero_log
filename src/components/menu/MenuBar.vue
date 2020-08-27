<template>
  <div
    class="menu-bar"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad',}"
  >
    <div class="menu-box" :style="{height:winHeight + 'px'}">
      <div v-if="deviceName ==='pc'" class="logo-box">
        <img src="../../assets/images/menu_list/icon-logo.png" alt />
      </div>
      <ul class="nav-list">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              :default-active="routerActive"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1" @click="goBeautyLog">
                <i class="el-icon-info"></i>
                <span slot="title">beauty-log</span>
              </el-menu-item>
              <el-menu-item index="2" @click="goB2cLog">
                <i class="el-icon-document"></i>
                <span slot="title">b2c-log</span>
              </el-menu-item>
              <el-menu-item index="3" @click="goTranslateForB2b">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-beauty-b2b</span>
              </el-menu-item>
              <el-menu-item index="4" @click="goTranslateForB2c">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-b2c</span>
              </el-menu-item>
              <el-menu-item index="5" @click="goTranslateForBeautyAppAgent">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-beauty-app-agent</span>
              </el-menu-item>
              <el-menu-item index="6" @click="goTranslateForFitnessB2b">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-fitness-b2b</span>
              </el-menu-item>
              <el-menu-item index="7" @click="goDuty">
                <i class="el-icon-user"></i>
                <span slot="title">Watch on duty</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </ul>
      <p v-if="deviceName ==='pc'" class="rights">2020 © Wemero</p>
    </div>
  </div>
</template>

<script>
import httpService from "../../api/httpService";
import HeaderPage from "@/components/header/HeaderPage";
export default {
  name: "MenuBar",
  data() {
    return {
      // 设备名称
      deviceName: "",
      routerActive: "",
      // 窗口高度
      winHeight: "",
      // 默认路由
      routerIndex: "1",
    };
  },
  created: function () {
    // 浏览器窗口高度
    this.winHeight = window.innerHeight;
    this.deviceName = this.$store.state.deviceName;
    let router = this.$route;
    if (router.name === "BeautyLog") {
      this.routerActive = "1";
    } else if (router.name === "B2cLog") {
      this.routerActive = "2";
    } else if (router.name === "TranslateForBeautyB2b") {
      this.routerActive = "3";
    } else if (router.name === "TranslateForB2c") {
      this.routerActive = "4";
    } else if (router.name === "TranslateForBeautyAppAgent") {
      this.routerActive = "5";
    } else if (router.name === "TranslateForFitnessB2b") {
      this.routerActive = "6";
    } else if (router.name === "WatchDuty") {
      this.routerActive = "7";
    }
  },
  methods: {
    goHomePage() {
      this.$router.push({
        name: "Home",
        params: {
          catId: this.$route.params.catId,
        },
      });
    },
    goSubItem(routeName, scope) {
      this.$router.push({
        name: routeName,
      });
      let refs = this.$refs;
      // debugger;
      // this.$refs[`popover-${scope.$index}`].doClose();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goBeautyLog() {
      this.$router.push({ name: "BeautyLog" });
    },
    goB2cLog() {
      this.$router.push({ name: "B2cLog" });
    },
    goTranslateForB2b() {
      this.$router.push({ name: "TranslateForBeautyB2b" });
    },
    goTranslateForB2c() {
      this.$router.push({ name: "TranslateForB2c" });
    },
    goTranslateForBeautyAppAgent() {
      this.$router.push({ name: "TranslateForBeautyAppAgent" });
    },
    goTranslateForFitnessB2b(){
      this.$router.push({ name: "TranslateForFitnessB2b" });
    },
    goDuty() {
      this.$router.push({ name: "WatchDuty" });
    },
  },
  computed: {},
  mounted: function () {},
  components: {
    HeaderPage,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./MenuBar.scss";
</style>
