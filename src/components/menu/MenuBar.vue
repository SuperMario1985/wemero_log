<template>
  <div
    class="menu-bar"
    :class="{
      'mobile-version': deviceName === 'mobile',
      'pad-version': deviceName === 'pad',
    }"
  >
    <div class="menu-box" :style="{ height: winHeight + 'px' }">
      <div v-if="deviceName === 'pc'" class="logo-box">
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
                <i class="el-icon-document"></i>
                <span slot="title">log-beauty</span>
              </el-menu-item>
              <el-menu-item index="14" @click="goBeautySepareateLog">
                <i class="el-icon-document"></i>
                <span slot="title">log-beauty-separete</span>
              </el-menu-item>
              <el-menu-item index="12" @click="goFitnessLog">
                <i class="el-icon-document"></i>
                <span slot="title">log-fitness</span>
              </el-menu-item>
              <el-menu-item index="2" @click="goB2cLog">
                <i class="el-icon-document"></i>
                <span slot="title">log-b2c</span>
              </el-menu-item>
              <el-menu-item index="13" @click="goFirstBLog">
                <i class="el-icon-document"></i>
                <span slot="title">log-firstb</span>
              </el-menu-item>
              <el-menu-item index="3" @click="goTranslateForB2b">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-beauty-b2b</span>
              </el-menu-item>
              <el-menu-item index="5" @click="goTranslateForB2bApp">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-beauty-b2b-app</span>
              </el-menu-item>
              <el-menu-item index="6" @click="goTranslateForB2c">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-b2c</span>
              </el-menu-item>
              <el-menu-item index="10" @click="goTranslateForB2cApp">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-b2c-App</span>
              </el-menu-item>
              <el-menu-item index="11" @click="goTranslateForBeautyAgent">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-beauty-agent</span>
              </el-menu-item>
              <el-menu-item index="7" @click="goTranslateForBeautyAppAgent">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-beauty-agent-app</span>
              </el-menu-item>
              <el-menu-item index="8" @click="goTranslateForFitnessB2b">
                <i class="el-icon-refresh"></i>
                <span slot="title">T-fitness-b2b</span>
              </el-menu-item>
              <el-menu-item index="9" @click="goDuty">
                <i class="el-icon-user"></i>
                <span slot="title">Watch on duty</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </ul>
      <p v-if="deviceName === 'pc'" class="rights">{{ year }} © Wemero</p>
    </div>
  </div>
</template>

<script>
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
      year: "",
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
    } else if (router.name === "TranslateForBeautyApp") {
      this.routerActive = "5";
    } else if (router.name === "TranslateForB2c") {
      this.routerActive = "6";
    } else if (router.name === "TranslateForBeautyAppAgent") {
      this.routerActive = "7";
    } else if (router.name === "TranslateForFitnessB2b") {
      this.routerActive = "8";
    } else if (router.name === "WatchDuty") {
      this.routerActive = "9";
    } else if (router.name === "TranslateForB2cApp") {
      this.routerActive = "10";
    } else if (router.name === "TranslateForBeautyAgent") {
      this.routerActive = "11";
    } else if (router.name === "FitnessLog") {
      this.routerActive = "12";
    } else if (router.name === "FirstBLog") {
      this.routerActive = "13";
    } else if (router.name === "BeautyLogSeparate") {
      this.routerActive = "14";
    }
    this.year = new Date().getFullYear();
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
    goBeautySepareateLog() {
      this.$router.push({ name: "BeautyLogSeparate" });
    },
    goFitnessLog() {
      this.$router.push({ name: "FitnessLog" });
    },
    goB2cLog() {
      this.$router.push({ name: "B2cLog" });
    },
    goFirstBLog() {
      this.$router.push({ name: "FirstBLog" });
    },
    goTranslateForB2b() {
      this.$router.push({ name: "TranslateForBeautyB2b" });
    },
    goTranslateForB2bApp() {
      this.$router.push({ name: "TranslateForBeautyApp" });
    },
    goTranslateForB2c() {
      this.$router.push({ name: "TranslateForB2c" });
    },
    goTranslateForB2cApp() {
      this.$router.push({ name: "TranslateForB2cApp" });
    },
    goTranslateForBeautyAgent() {
      this.$router.push({ name: "TranslateForBeautyAgent" });
    },
    goTranslateForBeautyAppAgent() {
      this.$router.push({ name: "TranslateForBeautyAppAgent" });
    },
    goTranslateForFitnessB2b() {
      this.$router.push({ name: "TranslateForFitnessB2b" });
    },
    goDuty() {
      this.$router.push({ name: "WatchDuty" });
    },
  },
  computed: {},
  mounted: function () {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./MenuBar.scss";
</style>
