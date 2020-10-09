<template>
  <div
    class="duty"
    :class="{'mobile-version':deviceName === 'mobile','pad-version':deviceName === 'pad',}"
  >
    <div id="router-box">
      <div class="router-name">
        · Watch on duty
        <el-popover
          placement="bottom-center"
          width="188"
          :visible-arrow="true"
          :trigger="deviceName ==='pc' ? 'hover': 'click'"
        >
          <div class="router-info-text">Watch on duty</div>
          <i slot="reference" class="icon-info"></i>
        </el-popover>
      </div>
    </div>
    <div class="main-content" v-loading="isLoading">
      <el-tabs type="border-card">
        <el-tab-pane label="10月值班人员">
          <el-tabs class="duty-item" v-model="AugustValue" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item,$index) in AugustDuty"
              :key="$index"
              :label="item.lable"
              :name="item.name"
            >{{item.list}}</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <!-- <el-tab-pane label="9月值班人员">配置管理</el-tab-pane> -->
      </el-tabs>
      <el-tabs type="border-card">
        <el-tab-pane label="10月自测人员">
          <el-tabs class="duty-item" v-model="AugustTestValue" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item,$index) in AugustDutyTest"
              :key="$index"
              :label="item.lable"
              :name="item.name"
            >
              <el-table :data="item.list" style="width: 100%">
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="职务"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <!-- <el-tab-pane label="9月值班人员">配置管理</el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>

<script>
import httpService from "../../api/httpService";
export default {
  name: "WatchDuty",
  data() {
    return {
      // 设备名称
      deviceName: "",
      isLoading: false,
      JulyValue: "the fivth week",
      JulyTestValue: "the fourth week",
      JulyDuty: [
        {
          name: "the first week",
          lable: "第一周（6.29-7.5）",
          list: "吉燕丽 张凌旗  焦鹏 李留齐  吴登登  李垒垒  刘朝甲",
        },
        {
          name: "the second week",
          lable: "第二周（7.6-7.12）",
          list: "王浩 贾玲雪 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "The third week",
          lable: "第三周（7.13-7.19）",
          list: "景冰帅 张凌旗 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "the fourth week",
          lable: "第四周（7.20-7.26）",
          list: "邢国华 贾玲雪 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "the fivth week",
          lable: "第五周（7.27-8.2）",
          list: "吉燕丽 张凌旗  焦鹏 李留齐  吴登登  李垒垒  刘朝甲",
        },
      ],
      AugustValue: "the first week",
      AugustTestValue: "the first week",
      JulyDutyTester: [
        {
          name: "the fourth week",
          lable: "第四周（7.27-7.31）",
          list: [
            {
              date: "2020-07-27",
              name: "刘朝甲",
              address: "后端",
            },
            {
              date: "2020-07-28",
              name: "李垒垒",
              address: "前端",
            },
            {
              date: "2020-07-29",
              name: "张凌旗",
              address: "前端",
            },
            {
              date: "2020-07-30",
              name: "吴登登",
              address: "测试",
            },
            {
              date: "2020-07-31",
              name: "吴登登",
              address: "测试",
            },
          ],
        },
      ],
      AugustDuty: [
        {
          name: "the first week",
          lable: "第一周（10.9-10.11）",
          list: "王浩 贾玲雪 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "the second week",
          lable: "第二周（10.12-10.18）",
          list: "景冰帅 张凌旗 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "The third week",
          lable: "第三周（10.19-10.25）",
          list: "邢国华 贾玲雪 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "the fourth week",
          lable: "第四周（10.26-10.31）",
          list: "吉燕丽 张凌旗  焦鹏 李留齐  吴登登  李垒垒  刘朝甲",
        },
      ],
      AugustDutyTest: [
        {
          name: "the first week",
          lable: "第一周（10.9-10.10）",
          list: [
            {
              date: "2020-10-09",
              name: "王浩",
              address: "后端",
            },
            {
              date: "2020-10-10",
              name: "景冰帅",
              address: "后端",
            },
          ],
        },
        {
          name: "the second week",
          lable: "第二周（10.12-10.16）",
          list: [
            {
              date: "2020-10-12",
              name: "刘朝甲",
              address: "后端",
            },
            {
              date: "2020-10-13",
              name: " 李垒垒",
              address: "前端",
            },
            {
              date: "2020-10-14",
              name: "张凌旗",
              address: "前端",
            },
            {
              date: "2020-10-15",
              name: "邢国华",
              address: "后端",
            },
            {
              date: "2020-10-16",
              name: "吴登登",
              address: " 测试",
            },
          ],
        },
        {
          name: "The third week",
          lable: "第三周（10.19-10.23）",
          list: [
            {
              date: "2020-10-19",
              name: "吉燕丽",
              address: "后端",
            },
            {
              date: "2020-10-20",
              name: "邢国华",
              address: "后端",
            },
            {
              date: "2020-10-21",
              name: "贾玲雪",
              address: "前端",
            },
            {
              date: "2020-10-22",
              name: "王浩",
              address: "后端",
            },
            {
              date: "2020-10-23",
              name: "景冰帅",
              address: "后端",
            },
          ],
        },
        {
          name: "the fourth week",
          lable: "第四周（10.26-10.30）",
          list: [
            {
              date: "2020-10-26",
              name: "刘朝甲",
              address: "后端",
            },
            {
              date: "2020-10-27",
              name: "李垒垒",
              address: "前端",
            },
            {
              date: "2020-10-28",
              name: "张凌旗",
              address: "前端",
            },
            {
              date: "2020-10-29",
              name: "吴登登",
              address: "测试",
            },
            {
              date: "2020-10-30",
              name: "吴登登",
              address: "测试",
            },
          ],
        },
      ],
    };
  },
  created: function () {
    let that = this;
    this.deviceName = this.$store.state.deviceName;
  },
  methods: {
    handleClick() {},
  },
  mounted: function () {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./WatchDuty.scss";
</style>
