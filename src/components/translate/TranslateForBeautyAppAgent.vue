<template>
  <div
    class="translate-for-b2b"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad',}"
  >
    <div id="router-box">
      <div class="router-name">
        · Translate For App Agent Management
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
    </div>
    <div class="main-content" v-loading="isLoading">
      <h5>注意：这是APP版本的Beauty_Agent的翻译</h5>
      <el-tabs type="border-card">
        <el-tab-pane label="Query word translation">
          <div class="tanslate-new-words">
            <el-input
              type="textarea"
              placeholder="请以JSON的形式输入要查询的内容"
              v-model="checkInfo.words"
              :rows="10"
              maxlength="5000"
              show-word-limit
            ></el-input>
            <el-button @click="checkWords" type="primary">确认查询</el-button>
            <div class="tanslate-result" v-if="checkResult">
              <table class="table">
                <colgroup>
                  <col style="width:25%" />
                  <col style="width:25%" />
                  <col style="width:25%" />
                  <col style="width:25%" />
                  <col style="width:25%" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>english</th>
                    <th>chinese</th>
                    <th>Japanese</th>
                    <th>Russian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <!-- <el-input type="textarea" v-model="checkResult.en" :rows="10"></el-input> -->
                      <json-viewer :value="checkResult.en" :expand-depth="1" copyable boxed sort></json-viewer>
                    </td>
                    <td>
                      <!-- <el-input type="textarea" v-model="checkResult.hk" :rows="10"></el-input> -->
                      <json-viewer :value="checkResult.hk" :expand-depth="1" copyable boxed sort></json-viewer>
                    </td>
                    <td>
                      <!-- <el-input type="textarea" v-model="checkResult.jp" :rows="10"></el-input> -->
                      <json-viewer :value="checkResult.jp" :expand-depth="1" copyable boxed sort></json-viewer>
                    </td>
                    <td>
                      <!-- <el-input type="textarea" v-model="checkResult.ru" :rows="10"></el-input> -->
                      <json-viewer :value="checkResult.ru" :expand-depth="1" copyable boxed sort></json-viewer>
                    </td>
                  </tr>
                  <!-- <tr>
                    <td>
                      <el-button
                        @click="doCopy(checkResult.en)"
                        v-if="checkResult.en"
                        type="primary"
                        round
                      >Copy Words</el-button>
                    </td>
                    <td>
                      <el-button
                        @click="doCopy(checkResult.hk)"
                        v-if="checkResult.hk"
                        type="primary"
                        round
                      >Copy Words</el-button>
                    </td>
                    <td>
                      <el-button
                        @click="doCopy(checkResult.jp)"
                        v-if="checkResult.jp"
                        type="primary"
                        round
                      >Copy Words</el-button>
                    </td>
                    <td>
                      <el-button
                        @click="doCopy(checkResult.jp)"
                        v-if="checkResult.jp"
                        type="primary"
                        round
                      >Copy Words</el-button>
                    </td>
                  </tr>-->
                </tbody>
              </table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Collect new words">
          <div class="tanslate-new-words">
            <el-input
              type="textarea"
              placeholder="请以JSON的形式输入要翻译的内容"
              v-model="addInfo.words"
              :rows="10"
              maxlength="5000"
              show-word-limit
            ></el-input>
            <el-button @click="addWords" type="primary">添加生成</el-button>
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
      <div
        id="pagination"
        v-if="translateInfo && translateInfo.list && translateInfo.list.length > 0"
      >
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
  name: "TranslateForBeautyAppAgent",
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
          label: "english",
        },
        {
          value: "hk",
          label: "chinese",
        },
        {
          value: "ja",
          label: "Japanese",
        },
        {
          value: "ru",
          label: "Russian",
        },
      ],
      packageVal: "hk",
      checkInfo: {
        type: "agent_app",
        words: "",
      },
      addInfo: {
        type: "agent_app",
        code: "hk",
        words: "",
      },
      checkResult: null,
    };
  },
  created: function () {
    let that = this;
    this.deviceName = this.$store.state.deviceName;
  },
  methods: {
    // 查询翻译词语
    checkWords() {
      let that = this;
      this.isLoading = true;
      httpService.getTranslateByJSON(this.checkInfo, function (response) {
        that.isLoading = false;
        if (response.success) {
          that.checkResult = response.data;
        } else {
          that.$message({
            type: "warning",
            message: response.msg,
          });
        }
      });
    },
    addWords() {
      let that = this;
      this.isLoading = true;
      let addInfo = JSON.parse(JSON.stringify(this.addInfo));
      httpService.addTranslateByJSON(addInfo, function (response) {
        that.isLoading = false;
        if (response.success) {
          that.$message({
            type: "success",
            message: response.msg,
          });
        } else {
          that.$message({
            type: "warning",
            message: response.msg,
          });
        }
      });
    },
    downloadPackage() {
      let that = this;
      let packInfo = {
        type: "agent_app",
        code: this.packageVal,
      };
      this.isLoading = true;
      httpService.downloadLanguagePack(packInfo, function (response) {
        that.isLoading = false;
        if (response.success) {
          var url = response.data;
          window.location.href = url;
        } else {
          that.$message({
            type: "warning",
            message: response.msg,
          });
        }
      });
    },
    doCopy: function (words) {
      let that = this;
      this.$copyText(words).then(
        function (e) {
          that.$message({
            type: "success",
            message: "Copy successful",
          });
        },
        function (e) {
          that.$message({
            type: "warning",
            message: "Can not copy",
          });
        }
      );
    },
  },
  mounted: function () {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./TranslateForB2b.scss";
</style>
