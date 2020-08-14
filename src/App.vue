<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='scss'>
@charset "UTF-8";
/* css reset*/
html {
  color: #333;
  background: #fff;
  font-family: Arial, Microsoft YaHei, sans-serif, Arial, "宋体";
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td,
strong {
  padding: 0;
  margin: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
a {
  text-decoration: none;
  outline: none;
  color: inherit;
}
caption,
em,
strong,
i {
  font-style: inherit;
  font-weight: inherit;
}
li {
  list-style: none;
}
caption,
th {
  font-weight: normal;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
q:before,
q:after {
  content: "";
}
input,
button,
textarea,
select,
option {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
}
.clear {
  clear: both;
  height: 0px;
  overflow: hidden;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
input,
button,
textarea {
  border: none;
  outline: none;
  border-radius: 0;
}
.clearfix {
  *zoom: 1;
}
a,
div,
span,
p,
li {
  -webkit-tap-highlight-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.2);
}
/* common */
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-size: 14px;
  background-color: #fff;
}
img {
  vertical-align: top;
}
::-webkit-scrollbar {
  width: 5px;
  background-color: #fff;
}
.clearfix::after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}

.fl {
  float: left;
}
.fr {
  float: right;
}

// element-ui 覆盖样式
.el-drawer__header > :first-child {
  font-size: 16px;
  font-weight: 400;
  color: rgba(42, 45, 60, 1);
  line-height: 25px;
}
.table {
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 254, 1);
  th {
    height: 48px;
    background: rgba(251, 251, 253, 1);
  }
  tbody {
    tr {
      padding: 0 20px;
      height: 52px;
      border-radius: 4px;
      border: 1px solid rgba(246, 246, 250, 1);
      .hover {
        cursor: pointer;
        color: rgba(81, 105, 217, 1);
      }
      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
      .el-icon-view {
        font-size: 20px;
      }
      .el-icon-download {
        font-size: 20px;
      }
      .icon-edit {
        background: url("./assets/images/base/icon-edit.png") center center
          no-repeat;
        background-size: 24px 24px;
        margin: 0 10px;
      }
      .icon-delete {
        background: url("./assets/images/base/icon-delete.png") center center
          no-repeat;
        background-size: 24px 24px;
      }
      .line-two {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

.my-info {
  img {
    display: block;
    margin: 0 auto;
    width: 64px;
    height: 64px;
  }
  strong {
    display: block;
    text-align: center;
    margin: 0 auto;
    padding: 12px 0;
    font-size: 14px;
    font-weight: 500;
    color: rgba(89, 93, 110, 1);
    line-height: 21px;
  }
  ul {
    li {
      cursor: pointer;
      font-size: 12px;
      color: rgba(89, 93, 110, 1);
      line-height: 18px;
      margin: 7px 0;
      .icon-profile {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url("./assets/images/header/icon-profile.png") center center
          no-repeat;
        background-size: 16px 16px;
        margin: 0 12px 0 0px;
      }
      .icon-website {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url("./assets/images/header/icon-website.png") center center
          no-repeat;
        background-size: 16px 16px;
        margin: 0 12px 0 0px;
      }
      .icon-tax {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url("./assets/images/header/icon-tax.png") center center
          no-repeat;
        background-size: 16px 16px;
        margin: 0 12px 0 0px;
      }
      .icon-setting {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url("./assets/images/header/icon-setting.png") center center
          no-repeat;
        background-size: 16px 16px;
        margin: 0 12px 0 0px;
      }
    }
  }
  .login-out {
    text-align: center;
  }
}
.menu-sub-list {
  li {
    font-size: 12px;
    color: rgba(89, 93, 110, 1);
    line-height: 40px;
    padding-left: 12px;
    &:hover {
      cursor: pointer;
      background: rgba(245, 247, 250, 1);
    }
  }
}
#router-box {
  height: 38px;
  line-height: 38px;
  margin-bottom: 20px;
  .router-name {
    float: left;
    .icon-info {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url("./assets/images/base/icon-info.png") center center
        no-repeat;
      background-size: 16px 16px;
      vertical-align: middle;
      margin-left: 14px;
    }
  }
  .active-content {
    float: right;
    .add-item {
      display: inline-block;
      width: 28px;
      height: 28px;
      background: url("./assets/images/base/icon-add.png") center center
        no-repeat;
      background-size: 28px 28px;
      vertical-align: middle;
      margin-right: 16px;
      margin-left: 16px;
      cursor: pointer;
    }
    .go-back {
      display: inline-block;
      width: 28px;
      height: 28px;
      background: url("./assets/images/base/icon-back.png") center center
        no-repeat;
      background-size: 28px 28px;
      vertical-align: middle;
      margin-right: 16px;
      margin-left: 16px;
      cursor: pointer;
    }
    .select-box {
      margin-right: 20px;
    }
    .el-input {
      width: auto;
    }
  }
}
// 分页样式
#pagination {
  padding: 20px 0;
  text-align: center;
  background: #fff;
}
.main-content {
  background: rgba(255, 255, 254, 1);
  box-shadow: 0px 2px 5px 0px rgba(233, 233, 247, 1);
  border-radius: 8px;
  overflow: hidden;
}

//新增项目
#add-item,
#edit-item {
  padding: 0 24px 0 16px;
  .two-input-box {
    display: flex;
    .left-item {
      flex: 1;
      padding-right: 8px;
    }
    .right-item {
      flex: 1;
      padding-left: 8px;
    }
  }
  .one-select-box {
    .el-select {
      width: 100%;
    }
  }
  .input-box {
    padding-bottom: 20px;
    h5 {
      font-size: 12px;
      padding-bottom: 8px;
      font-weight: 400;
      color: rgba(89, 93, 110, 1);
      line-height: 18px;
    }
  }
  .action-box {
    text-align: center;
    .el-button + .el-button {
      margin-left: 40px;
    }
  }
  .tips {
    padding: 4px 0;
    font-size: 10px;
    color: rgba(255, 58, 47, 1);
    line-height: 16px;
  }
  .el-input.error-style {
    input {
      color: rgba(255, 58, 47, 1);
      border-color: #ff3a2f;
    }
  }
}
</style>
