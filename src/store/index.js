import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//要设置的全局访问的state对象
const state = {
    showFooter: true,
    changableNum: 0,
    loginInfo: {
        init: false,
        login: false,
        isNeedLogin: false
    },
    userInfo: null,
    deviceName: ''
};

// 初始化设备信息
let winWidth = window.innerWidth;
if (winWidth > 1025) {
    state.deviceName = "pc";
} else if (winWidth > 991) {
    state.deviceName = "pad";
} else {
    state.deviceName = "mobile";
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 750) {
        deviceWidth = 750;
    } else if (deviceWidth < 320) {
        deviceWidth = 320;
    }
    document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
}
window.onresize = function () {
    let winWidth = window.innerWidth;
    if (winWidth > 1199) {
        state.deviceName = "pc";
    } else if (winWidth > 991) {
        state.deviceName = "pad";
    } else {
        state.deviceName = "mobile";
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
            deviceWidth = 750;
        } else if (deviceWidth < 320) {
            deviceWidth = 320;
        }
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
    }
};

// 初始化用户信息（用于优化登录后刷新页面）
let wemeroBeautyInfo = window.sessionStorage.getItem("wemeroBeautyInfo");
if (wemeroBeautyInfo) {
    state.userInfo = JSON.parse(wemeroBeautyInfo);
}

//实时监听state值的变化(最新状态)
const getters = {
    loginInfo(state) {
        return state.loginInfo
    },
    getUserInfo() {
        return state.userInfo
    },
    getDeviceName() {
        return state.deviceName
    }
};

//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
const mutations = {
    userInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
    loginInfo(state, loginInfo) {
        state.loginInfo = loginInfo;
    }
};

//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
const actions = {
    updateUserInfo(context, userInfo) {
        context.commit('userInfo', userInfo)
    },
    updateLoginInfo(context, loginInfo) {
        context.commit('loginInfo', loginInfo)
    }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;