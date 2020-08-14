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
        <el-tab-pane label="8月值班人员">
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
        <el-tab-pane label="8月自测人员">
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
          lable: "第一周（8.3-8.9）",
          list: "王浩 贾玲雪 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "the second week",
          lable: "第二周（8.10-8.16）",
          list: "景冰帅 张凌旗 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "The third week",
          lable: "第三周（8.17-8.23）",
          list: "邢国华 贾玲雪 焦鹏 李留齐 吴登登 李垒垒 刘朝甲",
        },
        {
          name: "the fourth week",
          lable: "第四周（8.24-8.30）",
          list: "吉燕丽 张凌旗  焦鹏 李留齐  吴登登  李垒垒  刘朝甲",
        },
      ],
      AugustDutyTest: [
        {
          name: "the first week",
          lable: "第一周（8.3-8.9）",
          list: [
            {
              date: "2020-08-03",
              name: "吉燕丽",
              address: "后端",
            },
            {
              date: "2020-08-04",
              name: "邢国华",
              address: "后端",
            },
            {
              date: "2020-08-05",
              name: "贾玲雪",
              address: "前端",
            },
            {
              date: "2020-08-06",
              name: "王浩",
              address: "后端",
            },
            {
              date: "2020-08-07",
              name: "景冰帅",
              address: "后端",
            },
          ],
        },
        {
          name: "the second week",
          lable: "第二周（8.10-8.16）",
          list: [
            {
              date: "2020-08-10",
              name: "刘朝甲",
              address: "后端",
            },
            {
              date: "2020-08-11",
              name: " 李垒垒",
              address: "前端",
            },
            {
              date: "2020-08-12",
              name: "张凌旗",
              address: "前端",
            },
            {
              date: "2020-08-13",
              name: "吴登登",
              address: "测试",
            },
            {
              date: "2020-08-14",
              name: "王小虎",
              address: " 测试",
            },
          ],
        },
        {
          name: "The third week",
          lable: "第三周（8.17-8.23）",
          list: [
            {
              date: "2020-08-17",
              name: "吉燕丽",
              address: "后端",
            },
            {
              date: "2020-08-18",
              name: "邢国华",
              address: "后端",
            },
            {
              date: "2020-08-19",
              name: "贾玲雪",
              address: "前端",
            },
            {
              date: "2020-08-20",
              name: "王浩",
              address: "后端",
            },
            {
              date: "2020-08-21",
              name: "景冰帅",
              address: "后端",
            },
          ],
        },
        {
          name: "the fourth week",
          lable: "第四周（8.24-8.30）",
          list: [
            {
              date: "2020-08-24",
              name: "刘朝甲",
              address: "后端",
            },
            {
              date: "2020-08-25",
              name: "李垒垒",
              address: "前端",
            },
            {
              date: "2020-08-26",
              name: "张凌旗",
              address: "前端",
            },
            {
              date: "2020-08-27",
              name: "吴登登",
              address: "测试",
            },
            {
              date: "2020-08-28",
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
