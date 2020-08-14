<template>
  <div
    class="home"
    :style="{height:winHeight + 'px'}"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad'}"
  >
    <menu-bar></menu-bar>
    <header-page></header-page>
    <div class="main-content" :style="{height:winHeight-64 + 'px'}">
      <router-view />
    </div>
  </div>
</template>

<script>
import httpService from "../../api/httpService";
import HeaderPage from "@/components/header/HeaderPage";
import MenuBar from "@/components/menu/MenuBar";
export default {
  name: "Home",
  data() {
    return {
      // 设备名称
      deviceName: "",
      routerActive: "",
      // 窗口高度
      winHeight: ""
    };
  },
  created: function() {
    // 浏览器窗口高度
    this.winHeight = window.innerHeight;
    this.deviceName = this.$store.state.deviceName;
    let router = this.$route;
    if (router.name) {
      this.routerActive = router.name;
    }
  },
  methods: {
    goHomePage() {
      this.$router.push({
        name: "Home",
        params: {
          catId: this.$route.params.catId
        }
      });
    }
  },
  computed: {},
  mounted: function() {},
  components: {
    HeaderPage,
    MenuBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./Home.scss";
</style>
