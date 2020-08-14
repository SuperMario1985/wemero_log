<template>
  <div
    class="header-page"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad',}"
  >
    <!-- <div class="nav-language" v-if="deviceName!=='mobile'">
      <el-select v-if="storeList && storeList.length > 0" v-model="storeName" @change="switchStore">
        <el-option
          v-for="item in storeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="languageName" @change="switchLanguage">
        <el-option
          v-for="item in languageList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click="loginout">loginout</el-button>
    </div> -->
    <!-- <div class="header-nav" v-if="userInfo && deviceName!=='mobile'">
      <i class="header-cashier"></i>
      <i class="header-message"></i>
      <span class="header-name">{{userInfo.name}}</span>
      <el-popover placement="bottom-end" width="188" :visible-arrow="false" trigger="click">
        <div class="my-info">
          <img
            v-if="userInfo.head_photo"
            :src="userInfo.head_photo"
            :onerror="avatarDefaultImg"
            alt
          />
          <img v-if="!userInfo.head_photo" src="../../assets/images/header/avatarDefault.png" alt />
          <strong>{{userInfo.name}}</strong>
          <ul>
            <li>
              <i class="icon-profile"></i>My Profile
            </li>
            <li>
              <i class="icon-website"></i>Business Website
            </li>
            <li>
              <i class="icon-tax"></i>Manage Store Tax
            </li>
            <li>
              <i class="icon-setting"></i>Booking Page Setting
            </li>
          </ul>
          <div class="login-out">
            <el-button @click="loginout" type="primary" size="small">Sign Out</el-button>
          </div>
        </div>
        <img
          v-if="userInfo.head_photo"
          :src="userInfo.head_photo"
          :onerror="avatarDefaultImg"
          alt
          class="header-avatar"
          slot="reference"
        />
        <img
          v-if="!userInfo.head_photo"
          src="../../assets/images/header/avatarDefault.png"
          alt
          class="header-avatar"
          slot="reference"
        />
      </el-popover>
    </div> -->
    <!-- <div class="header-nav-mobile" v-if="userInfo && deviceName==='mobile'">
      <i class="header-menu" @click="toggleMenuList"></i>
      <i class="header-cashier"></i>
      <i class="header-message"></i>
      <i class="header-store" @click="toggleStoreList" :class="{active:isShowStoreList}"></i>
      <img
        class="header-avatar"
        v-if="userInfo.head_photo"
        :src="userInfo.head_photo"
        :onerror="avatarDefaultImg"
        @click="toggleInfo"
        alt
      />
      <img
        class="header-avatar"
        v-if="!userInfo.head_photo"
        src="../../assets/images/header/avatarDefault.png"
        @click="toggleInfo"
        alt
      />
      <div class="my-info" v-if="isShowInfo" :style="{height:winHeight / 50 - 0.96 + 'rem'}">
        <div class="avata-box">
          <img
            v-if="userInfo.head_photo"
            :src="userInfo.head_photo"
            :onerror="avatarDefaultImg"
            alt
          />
          <img v-if="!userInfo.head_photo" src="../../assets/images/header/avatarDefault.png" alt />
          <strong>{{userInfo.name}}</strong>
        </div>
        <ul>
          <li>
            <i class="icon-profile"></i>
            {{$t('My Profile')}}
          </li>
          <li>
            <i class="icon-website"></i>
            {{$t('Business Website')}}
          </li>
          <li>
            <i class="icon-tax"></i>
            {{$t('Manage Store Tax')}}
          </li>
          <li>
            <i class="icon-setting"></i>
            {{$t('Booking Page Setting')}}
          </li>
        </ul>
        <div class="login-out">
          <p @click="loginout">
            <i></i>
            {{$t('Sign Out')}}
          </p>
        </div>
      </div>
      <div
        class="store-list"
        v-if="isShowStoreList"
        :style="{height:winHeight / 50 - 0.96 + 'rem'}"
      >
        <ul v-if="storeList">
          <li
            v-for="(item,index) in storeList"
            :key="index"
            :class="{active:storeName===item.value}"
          >{{item.label}}</li>
        </ul>
      </div>
      <div class="menu-list" :style="{height:winHeight / 50 - 0.96 + 'rem'}">
        <ul class="nav-list">
          <li @click="goSubItem('Dashboard')" :class="{active:routerActive === 'Dashboard'}">
            <i class="icon-home"></i>
            <span>{{$t("Home")}}</span>
          </li>
          <li @click="goSubItem('Calendar')" :class="{active:routerActive === 'Calendar'}">
            <i class="icon-calendar"></i>
            <span>{{$t("Calendar")}}</span>
          </li>
          <li @click="goSubItem('Customer')" :class="{active:routerActive === 'Customer'}">
            <i class="icon-customer"></i>
            <span>{{$t("Customer")}}</span>
          </li>
          <li
            :class="{active:routerActive === 'ServiceList' || routerActive === 'ServiceCategory' || routerActive === 'ServiceReview'}"
          >
            <p>
              <i class="icon-service"></i>
              <span>{{$t("Calendar")}}</span>
              {{$t("Service")}}
              <i class="icon-right-arror"></i>
            </p>
            <ul class="nav-sub-list">
              <li @click="goSubItem('ServiceCategory')">{{$t("Category Management")}}</li>
              <li @click="goSubItem('ServiceList')">{{$t("Service Management")}}</li>
              <li @click="goSubItem('ServiceReview')">{{$t("Services Reviews")}}</li>
            </ul>
          </li>
          <li :class="{active:routerActive === 'Staff' || routerActive === 'StaffTitle'}">
            <p>
              <i class="icon-staff"></i>
              {{$t("Staff")}}
              <i class="icon-right-arror"></i>
            </p>
            <ul class="nav-sub-list">
              <li @click="goSubItem('StaffTitle')">{{$t("Title Management")}}</li>
              <li @click="goSubItem('Staff')">{{$t("Staff Management")}}</li>
            </ul>
          </li>
          <li
            :class="{active:routerActive === 'ProductCategory' || routerActive === 'ProductList' || routerActive === 'ProductSupplier'|| routerActive === 'ProductOrder' || routerActive === 'ProductBooking'}"
          >
            <p>
              <i class="icon-product"></i>
              {{$t("Product")}}
              <i class="icon-right-arror"></i>
            </p>
            <ul class="nav-sub-list">
              <li @click="goSubItem('ProductCategory')">{{$t("Category Management")}}</li>
              <li @click="goSubItem('ProductList')">{{$t("Product Management")}}</li>
              <li @click="goSubItem('ProductSupplier')">{{$t("Supplier Management")}}</li>
              <li @click="goSubItem('ProductOrder')">{{$t("Order Management")}}</li>
              <li @click="goSubItem('ProductBooking')">{{$t("Product Book Now")}}</li>
            </ul>
          </li>
          <li @click="goSubItem('Finance')" :class="{active:routerActive === 'Finance'}">
            <i class="icon-finance"></i>
            <span>{{$t("Finance")}}</span>
          </li>
          <li @click="goSubItem('Stores')" :class="{active:routerActive === 'Stores'}">
            <i class="icon-stores"></i>
            <span>{{$t("Multi Stores")}}</span>
          </li>
          <li
            :class="{active:routerActive === 'MarkedtingEmail' || routerActive === 'MarkedtingCoupon' || routerActive === 'MarkedtingGiftCard' ||routerActive === 'MarkedtingSocial'}"
          >
            <p>
              <i class="icon-markedting"></i>
              {{$t("Marketing Tools")}}
              <i class="icon-right-arror"></i>
            </p>
            <ul class="nav-sub-list">
              <li @click="goSubItem('MarkedtingEmail')">{{$t("Email Reminders")}}</li>
              <li @click="goSubItem('MarkedtingCoupon')">{{$t("Coupon Management")}}</li>
              <li @click="goSubItem('MarkedtingGiftCard')">{{$t("Gift Card Management")}}</li>
              <li @click="goSubItem('MarkedtingSocial')">{{$t("Wemero Book Now")}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import httpService from "../../api/httpService.js";
import { localesMap, setup } from "../../language/index";
export default {
  name: "HeaderPage",
  data() {
    return {
      // 设备名称
      deviceName: "",
      winHeight: "",
      routerActive: "",
      isShowInfo: false,
      isShowStoreList: false,
      isSHowMenuList: false,
      languageList: [
        {
          value: "en",
          label: "English"
        },
        {
          value: "ru",
          label: "Pусский"
        },
        {
          value: "ja",
          label: "日本語"
        },
        {
          value: "hk",
          label: "中文（繁體）"
        }
      ],
      storeList: null,
      languageName: "",
      storeName: "",
      userInfo: null,
      // 默认图片
      avatarDefaultImg:
        'this.src="' +
        require("../../assets/images/header/avatarDefault.png") +
        '"'
    };
  },
  created: function() {
    let that = this;
    this.deviceName = this.$store.state.deviceName;
    // 浏览器窗口高度
    this.winHeight = window.innerHeight;
    let router = this.$route;
    if (router.name) {
      this.routerActive = router.name;
    }
    let wemeroBeautyToken = localStorage.getItem("wemeroBeautyToken");
    if (!wemeroBeautyToken) {
      // this.$router.push({ name: "Login" });
      // 更新用户信息状态
      this.$store.dispatch("updateUserInfo", null);
      localStorage.setItem("wemeroBeautyToken", null);
    } else {
      this.userInfo = this.$store.state.userInfo;
      // 配置语言
      let lang;
      if (this.userInfo) {
        lang = this.userInfo.lang || "tw";
      } else {
        lang = window.localStorage.getItem("wemeroUserLang") || "tw";
      }
      this.switchLanguage(lang);
    }
  },
  methods: {
    // 切换nav
    navClickHandle(navName) {
      if (this.navShowFlag) {
        if (this.navShowFlag == navName) {
          this.navShowFlag = "";
        } else {
          this.navShowFlag = navName;
        }
      } else {
        this.navShowFlag = navName;
      }
    },
    showLoginPop() {
      let wemeroLoginInfoJSON = localStorage.getItem("wemeroLoginInfo");
      let wemeroLoginInfo;
      if (wemeroLoginInfoJSON) {
        wemeroLoginInfo = JSON.parse(wemeroLoginInfoJSON);
        this.loginInfo = wemeroLoginInfo;
      }
      this.dialogLoginVisible = true;
    },
    // 切换语言
    switchLanguage(lang) {
      // 设置字体
      if (lang === "ru") {
        document.body.style.fontFamily =
          "'Times New Roman','poppins', Arial, Microsoft YaHei, sans-serif, Arial, '宋体'";
      } else {
        document.body.style.fontFamily =
          "'poppins', Arial, Microsoft YaHei, sans-serif, Arial, '宋体'";
      }
      if (this.$i18n.locale !== lang) {
        // 设置语言
        setup(lang);
        // 设置字体
        if (lang === "ru") {
          document.body.style.fontFamily =
            "'Times New Roman','poppins', Arial, Microsoft YaHei, sans-serif, Arial, '宋体'";
        } else {
          document.body.style.fontFamily =
            "'poppins', Arial, Microsoft YaHei, sans-serif, Arial, '宋体'";
        }
        this.languageName = localesMap[lang];
        httpService.setLang(lang);
      }
    },
    // 退出
    loginout() {
      let that = this;
      localStorage.setItem("wemeroBeautyToken", "");
      that.$router.push({ name: "Login" });
      // 更新用户信息状态
      that.$store.dispatch("updateUserInfo", null);
      // httpService.loginout(this.registerInfo, function(response) {
      //   if (response.success) {
      //     localStorage.setItem("wemeroBeautyToken", "");
      //     that.$router.push({ name: "Login" });
      //     // 更新用户信息状态
      //     that.$store.dispatch("updateUserInfo", null);
      //   } else {
      //     that.$message({
      //       type: "warning",
      //       message: response.msg
      //     });
      //   }
      // });
    },
    // 注册账号
    register() {
      let that = this;
      // httpService.register(this.registerInfo, function(response) {
      //   if (response.success) {
      //     that.dialogLoginVisible = false;
      //     that.dialogSignVisible = false;
      //     let loginInfo = {
      //       init: true,
      //       login: true,
      //       isNeedLogin: false
      //     };
      //     // 更新登录状态
      //     that.$store.dispatch("updateLoginInfo", loginInfo);
      //     // 更新用户信息状态
      //     that.$store.dispatch("updateUserInfo", response.data);
      //     that.$message({
      //       type: "info",
      //       message: response.msg
      //     });
      //   } else {
      //     that.$message({
      //       type: "warning",
      //       message: response.msg
      //     });
      //   }
      // });
    },
    // 返回登录页
    backToSignin() {
      this.dialogSignVisible = false;
      this.dialogForgotPasswordVisible = false;
    },
    // 忘记密码时，重置密码
    resetPassword() {
      let that = this;
      httpService.sendResetPwdEmail(this.email, function(response) {
        if (response.success) {
          that.$message({
            type: "info",
            message: response.msg
          });
          that.dialogLoginVisible = false;
          that.dialogSignVisible = false;
          that.dialogForgotPasswordVisible = false;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    // 注册时更换国家编码的处理函数
    handelCountryChange(countryCodeInfo) {
      this.registerInfo.countyCode = countryCodeInfo.dialCode;
    },
    mouseover() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop <= 0) {
        this.isHover = true;
      }
    },
    mouseLeave() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop <= 0) {
        this.isHover = false;
      }
    },
    // 处理window滚动事件
    handleWindowScroll() {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop <= 0) {
        this.isHover = false;
      } else {
        if (!this.isHover) {
          this.isHover = true;
        }
      }
    },
    // 关闭弹窗
    handleClose(done) {
      this.dialogLoginVisible = false;
      this.dialogSignVisible = false;
      this.dialogForgotPasswordVisible = false;
    },
    // 切换店铺
    switchStore(id) {
      let that = this;
      let storeInfo = {
        role: this.userInfo.user_type,
        id: this.userInfo.id,
        new_store_id: id
      };
      httpService.switchStore(storeInfo, function(response) {
        if (response.success) {
          that.$store.dispatch("updateUserInfo", response.data.data.user);
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    goSubItem(routeName, scope) {
      this.$router.push({
        name: routeName
      });
      let refs = this.$refs;
    },
    // 移动端，是否展示用户信息
    toggleInfo() {
      this.isShowStoreList = false;
      this.isShowInfo = !this.isShowInfo;
    },
    toggleStoreList() {
      this.isShowInfo = false;
      this.isShowStoreList = !this.isShowStoreList;
    },
    toggleMenuList() {}
  },
  computed: {},
  watch: {
    $route(to, from) {
      if (this.routerActive !== to.name) {
        this.routerActive = to.name;
        console.log(this.routerActive);
      }
    }
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>
@import "./HeaderPage.scss";
</style>
