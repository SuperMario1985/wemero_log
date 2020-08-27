<template>
  <div
    class="customer"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad',}"
  >
    <div id="router-box">
      <div class="router-name">
        · B2cLog Management
        <el-popover
          placement="bottom-center"
          width="188"
          :visible-arrow="true"
          :trigger="deviceName ==='pc' ? 'hover': 'click'"
        >
          <div class="router-info-text">Management All Log</div>
          <i slot="reference" class="icon-info"></i>
        </el-popover>
      </div>
      <div class="active-content">
        <el-switch
          @change="handleEnvironmentChange"
          v-model="searchInfo.isOnline"
          active-text="生产环境"
          inactive-text="测试环境"
        ></el-switch>
        <el-select class="select-box" v-model="searchInfo.source" @change="switchSource">
          <el-option
            v-for="item in searchInfo.sourceList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="main-content" v-loading="isLoading">
      <table class="table" v-if="logInfo && logInfo.total > 0">
        <colgroup>
          <col style="width:23.6%" />
          <col style="width:19.3%" />
          <col style="width:16.6%" />
          <col style="width:17.4%" />
          <col style="width:12.3%" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th class="tlf">log name</th>
            <th class="tlf">type</th>
            <th>date</th>
            <th>{{$t("Actions")}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in logInfo.list" :key="index">
            <td class="hover" @click="showDetail(item)">
              <p class="line-two">{{item.name}}</p>
            </td>
            <td class>{{item.type}}</td>
            <td>{{item.date}}</td>
            <td>
              <i v-if="item.referral_source !== 1" @click="showDetail(item)" class="el-icon-view"></i>
              <i @click="downloadLog(item)" class="el-icon-download"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="pagination" v-if="logInfo && logInfo.list.length > 0">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="logInfo.page_count"
          :current-page.sync="searchInfo.page"
          @current-change="handleCurrentPageChange"
        ></el-pagination>
      </div>
    </div>
    <!-- 编辑现有的 -->
    <el-drawer
      :size="deviceName === 'mobile'?'100%' :'80%'"
      :before-close="handleEditItemClose"
      :visible.sync="isEditItem"
      :append-to-body="false"
      :close-on-press-escape="false"
      :wrapperClosable="false"
      direction="rtl"
    >
      <p slot="title" class="drawer-title">log detail</p>
      <div id="edit-item" v-if="logDetailInfo">
        <ul>
          <li v-for="(item,index) in logDetailInfo.list" :key="index">{{item}}</li>
        </ul>
        <div id="pagination" v-if="logDetailInfo.list && logInfo.list.length > 0">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-count="logDetailInfo.page_count"
            :current-page.sync="logDetail.page"
            @current-change="handleDetailCurrentPageChange"
          ></el-pagination>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import httpService from "../../api/httpService";
export default {
  name: "Customers",
  data() {
    return {
      // 设备名称
      deviceName: "",
      isLoading: false,
      isAddNewItem: false,
      isEditItem: false,
      searchInfo: {
        isOnline: true,
        searchValue: "",
        page: 1,
        pageSize: 5,
        isSearching: false,
        timer: null,
        source: "all",
        sourceList: [
          {
            value: "all",
            label: "all type"
          },
          {
            value: "laravel",
            label: "laravel"
          },
          {
            value: "sql",
            label: "sql"
          },
          {
            value: "nginx",
            label: "nginx"
          }
        ]
      },
      logDetail: {
        logItem: null,
        page: 1,
        page_size: 10,
        isOnline:true
      },
      logDetailInfo: null,
      logInfo: null,
      newItemInfo: null,
      editItemInfo: null,
      input1: "",
      dialogVisible: false
    };
  },
  created: function() {
    let that = this;
    this.deviceName = this.$store.state.deviceName;
    this.getList();
  },
  methods: {
    handleEnvironmentChange() {
      this.searchInfo.page = 1;
      this.getList();
    },
    goHomePage() {
      this.$router.push({
        name: "Home",
        params: {
          catId: this.$route.params.catId
        }
      });
    },

    switchSource(source) {
      this.searchInfo.source = source;
      this.searchInfo.page = 1;
      this.getList();
    },
    handleSlideOutClose(event) {
      // event.close = false;
      console.log("关闭了");
    },
    handleData() {
      alert("123");
    },
    handleAddItemClose() {
      this.isAddNewItem = false;
    },
    handleEditItemClose() {
      this.isEditItem = false;
    },
    editItemFirstNameChangeHandle() {
      this.editItemInfo.isFirstNameError = false;
    },
    editItemFirstEmailChangeHandle() {
      this.editItemInfo.isEmailError = false;
    },
    // 日志，获取列表
    getList() {
      let that = this;
      this.isLoading = true;
      httpService.getB2CLogList(this.searchInfo, function(response) {
        that.isLoading = false;
        if (response.success) {
          that.logInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    // 日志，查看详情
    showDetail(item) {
      let that = this;
      this.logDetail.logItem = item;
      this.logDetail.page = 1;
      this.logDetailInfo = null;
      this.isLoading = true;
      this.logDetail.isOnline = this.searchInfo.isOnline;
      httpService.getB2CLogDetail(this.logDetail, function(response) {
        that.isLoading = false;
        if (response.success) {
          that.isEditItem = true;
          that.logDetailInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    // 日志，下载
    downloadLog(item) {
      let that = this;
      let host;
      if (this.searchInfo.isOnline) {
        host = "https://api.wemero.com";
      } else {
        host = "http://api.alios.idengyun.com";
      }
      let url =
        host +
        "/api/v1/apiLogs/downLogFile?" +
        "log_type=" +
        item.type +
        "&log_date=" +
        item.date;
      window.location.href = url;
    },
    cancelEditItem() {
      this.isEditItem = false;
    },
    confirmEditItem() {
      if (!this.editItemInfo.first_name) {
        this.editItemInfo.isFirstNameError = true;
        return;
      }
      if (!this.editItemInfo.email) {
        this.editItemInfo.isEmailError = true;
        return;
      }
      let that = this;
      httpService.editCustomer(this.editItemInfo, function(response) {
        if (response.success) {
          that.$message({
            type: "success",
            message: response.msg
          });
          that.isEditItem = false;
          that.getList();
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },

    // 处理当前页码变动
    handleCurrentPageChange(pageNum) {
      this.getList();
    },
    // 处理当前页码变动
    handleDetailCurrentPageChange(pageNum) {
      let that = this;
      this.isLoading = true;
      httpService.getB2CLogDetail(this.logDetail, function(response) {
        that.isLoading = false;
        if (response.success) {
          that.isEditItem = true;
          that.logDetailInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    // 搜索框，处理input框值发生改变的
    handleSearchValueChange(value) {
      let that = this;
      if (this.searchInfo.timer) {
        clearTimeout(this.searchInfo.timer);
        this.searchInfo.timer = setTimeout(() => {
          that.searchInfo.timer = null;
          clearTimeout(that.searchInfo.timer);
          that.searchInfo.page = 1;
          that.getList();
        }, 800);
      } else {
        this.searchInfo.timer = setTimeout(() => {
          that.searchInfo.timer = null;
          clearTimeout(that.searchInfo.timer);
          that.searchInfo.page = 1;
          that.getList();
        }, 800);
      }
    },
    // 编辑时更换国家编码的处理函数
    handelEditItemCountryChange(countryCodeInfo) {
      this.editItemInfo.phone_prefix = countryCodeInfo.dialCode;
    },
    // 注册时更换国家编码的处理函数
    handelNewItemCountryChange(countryCodeInfo) {
      this.newItemInfo.phone_prefix = countryCodeInfo.dialCode;
    },
    // 顾客，详情
    goDetail(logInfo) {
      this.$router.push({
        name: "CustomersDetail",
        params: { id: logInfo.customer_id }
      });
    }
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./B2cLog.scss";
</style>
