<template>
  <div class="login">
    <el-dialog
      width="400px"
      :visible="dialogLoginVisible"
      :before-close="handleClose"
      :append-to-body="true"
      :close-on-click-modal="false"
      class="dialog logining"
    >
      <div class="dialog-content login-box" v-if="dialogLoginVisible">
        <h4>SIGN IN</h4>
        <p>
          <el-input
            v-model="loginInfo.email"
            @keyup.enter.native="loginIn"
            placeholder="Account Name"
            v-focus
          ></el-input>
        </p>
        <p>
          <el-input
            v-model="loginInfo.password"
            placeholder="Password"
            show-password
            @keyup.enter.native="loginIn"
          ></el-input>
        </p>
        <p>
          <!-- <el-button @click="dialogSignVisible = true">REGISTER</el-button> -->
          <el-button type="primary" @click="loginIn">SIGN IN</el-button>
        </p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import httpService from "../../api/httpService";
export default {
  name: "Login",
  data() {
    return {
      dialogLoginVisible: true,
      // 登录信息
      loginInfo: {
        email: "798524817@qq.com",
        password: "12345678",
        isKeepLogged: true
      }
    };
  },
  methods: {
    // 关闭弹窗
    handleClose(done) {
      this.dialogLoginVisible = false;
    },
    // 登录
    loginIn() {
      let that = this;
      httpService.login(this.loginInfo, function(response) {
        if (response.success) {
          // 更新用户信息状态
          that.$store.dispatch("updateUserInfo", response.data);
          that.$message({
            type: "success",
            message: response.msg
          });
          that.$router.push({ name: "Dashboard" });
        } else {
          that.$message({
            type: "warning",
            message: response.msg
          });
        }
      });
    }
  }
  // ,
  // computed: {},
  // created: {},
  // mounted: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
}
</style>
