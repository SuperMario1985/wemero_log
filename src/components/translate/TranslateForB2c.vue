<template>
  <div
    class="translate-for-b2c"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad',}"
  >
    <div id="router-box">
      <div class="router-name">
        · Translate For B2b Management
        <el-popover
          placement="bottom-center"
          width="188"
          :visible-arrow="true"
          :trigger="deviceName ==='pc' ? 'hover': 'click'"
        >
          <div class="router-info-text">Management All Translate</div>
          <i slot="reference" class="icon-info"></i>
        </el-popover>
      </div>
      <!-- <div class="active-content">
        <el-select class="select-box" v-model="searchInfo.source" @change="switchSource">
          <el-option
            v-for="item in searchInfo.sourceList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>-->
    </div>
    <div class="main-content" v-loading="isLoading">
      <el-tabs type="border-card">
        <el-tab-pane label="Query word translation">
          <div class="tanslate-new-words">
            <el-input v-model="checkInfo.words" placeholder="Please input the query word"></el-input>
            <el-button @click="checkWords" type="primary">Query</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Collect new words">
          <div class="tanslate-new-words">
            <el-input v-model="addInfo.words" placeholder="Please input to add words"></el-input>
            <el-button @click="addWords" type="primary">Add</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Download language pack">
          <div class="download-package">
            <el-select
              v-model="packageVal"
              placeholder="Please select the language pack to download"
            >
              <el-option
                v-for="item in packageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button @click="downloadPackage" type="primary">Download pack</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
      <table class="table" v-if="translateInfo && translateInfo.total > 0">
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
          <tr v-for="(item,index) in translateInfo.list" :key="index">
            <td class="hover">
              <p class="line-two">{{item.name}}</p>
            </td>
            <td class>{{item.type}}</td>
            <td>{{item.date}}</td>
            <td>
              <i v-if="item.referral_source !== 1" class="el-icon-view"></i>
              <i class="el-icon-download"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="pagination" v-if="translateInfo && translateInfo.list.length > 0">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="translateInfo.page_count"
          :current-page.sync="searchInfo.page"
          @current-change="handleCurrentPageChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import httpService from "../../api/httpService";
export default {
  name: "TranslateForB2c",
  data() {
    return {
      // 设备名称
      deviceName: "",
      isLoading: false,
      checkWordsVal: "",
      translateInfo: null,
      packageOptions: [
        {
          value: "en",
          label: "english"
        },
        {
          value: "hk",
          label: "chinese"
        },
        {
          value: "ja",
          label: "Japanese"
        },
        {
          value: "ru",
          label: "Russian"
        }
      ],
      packageVal: "hk",
      checkInfo: {
        type: "b2c",
        code: "en",
        words: ""
      },
      addInfo: {
        type: "b2c",
        code: "hk",
        words: ""
      }
    };
  },
  created: function() {
    let that = this;
    this.deviceName = this.$store.state.deviceName;
  },
  methods: {
    // 日志，获取列表
    getTranslateByWords() {
      let that = this;
      this.isLoading = true;
      httpService.getB2CLogList(this.searchInfo, function(response) {
        that.isLoading = false;
        if (response.success) {
          that.translateInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    // 查询翻译词语
    checkWords() {
      let that = this;
      this.isLoading = true;
      httpService.getTranslateByWords(this.checkInfo, function(response) {
        that.isLoading = false;
        if (response.success) {
          that.translateInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    addWords() {
      let that = this;
      this.isLoading = true;
      httpService.addTranslateByWords(this.addInfo, function(response) {
        that.isLoading = false;
        if (response.success) {
          // that.translateInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    },
    downloadPackage() {
      let that = this;
      this.isLoading = true;
      httpService.addTranslateByWords(this.addInfo, function(response) {
        that.isLoading = false;
        if (response.success) {
          // that.translateInfo = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    }
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./TranslateForB2c.scss";
</style>
