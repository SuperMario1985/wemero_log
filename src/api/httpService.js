import axios from "axios";
import Encrypt from "../utils/encrypt"
let language = window.localStorage.getItem("wemeroUserLang") || 'en';
let wemeroBeautyToken = window.localStorage.getItem("wemeroBeautyToken") || '';
let httpServe = axios.create({
    headers: {
        'api-lang': language,
        'api-token': wemeroBeautyToken
    }
})

let b2bOnlineHost = 'https://api-beauty.wemero.com'
let b2bUatHost = 'http://api-beauty.alios.idengyun.com';
let b2cOnlineHost = 'https://api.wemero.com';
let b2cUatHost = 'http://api.alios.idengyun.com';
// let translateHost = 'http://firstadmin.weme.com';
let translateHost = 'http://firstadmin.alios.idengyun.com';
translateHost = 'http://39.105.94.5:8007';

// 设置语言
function setLang(lang) {
    language = lang;
    httpServe = axios.create({
        headers: { 'api-lang': language, 'api-token': wemeroBeautyToken },
    })
    console.log('api-lang', '被修改');
}
// 设置语言token
function setToken(token) {
    wemeroBeautyToken = token;
    window.localStorage.setItem("wemeroBeautyToken", token);
    httpServe = axios.create({
        headers: { 'api-lang': language, 'api-token': wemeroBeautyToken },
    })
    console.log('api-token', '被修改');
}


// 日志，beauty,获取列表
function getLogList(logInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let host;
    if (logInfo.isOnline) {
        host = b2bOnlineHost;
    } else {
        host = b2bUatHost;
    }
    httpServe({
        method: "get",
        url: host + "/api/beauty/apiLogs/index",
        params: {
            page: logInfo.page,
            page_size: logInfo.pageSize,
            type: logInfo.source
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 日志，beauty,获取详情
function getLogDetail(logInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let host;
    if (logInfo.isOnline) {
        host = b2bOnlineHost;
    } else {
        host = b2bUatHost;
    }
    httpServe({
        method: "get",
        url: host + "/api/beauty/apiLogs/oneLog",
        params: {
            log_type: logInfo.logItem.type,
            log_date: logInfo.logItem.date,
            page: logInfo.page,
            page_size: logInfo.page_size,
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 日志，beauty,下载
function downloadLog(logInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let host;
    if (logInfo.isOnline) {
        host = b2bOnlineHost;
    } else {
        host = b2bUatHost;
    }
    httpServe({
        method: "get",
        url: host + "/api/beauty/apiLogs/downLogFile",
        params: {
            log_date: logInfo.log_date,
            log_type: logInfo.log_type
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 日志，b2c,获取列表
function getB2CLogList(logInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let host;
    if (logInfo.isOnline) {
        host = b2cOnlineHost;
    } else {
        host = b2cUatHost;
    }
    httpServe({
        method: "get",
        url: host + "/api/v1/apiLogs/index",
        params: {
            page: logInfo.page,
            page_size: logInfo.pageSize,
            type: logInfo.source
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 日志，b2c,获取详情
function getB2CLogDetail(logInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let host;
    if (logInfo.isOnline) {
        host = b2cOnlineHost;
    } else {
        host = b2cUatHost;
    }
    httpServe({
        method: "get",
        url: host + "/api/v1/apiLogs/oneLog",
        params: {
            log_type: logInfo.logItem.type,
            log_date: logInfo.logItem.date,
            page: logInfo.page,
            page_size: logInfo.page_size,
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 日志，b2c,下载
function downB2CloadLog(logInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let host;
    if (logInfo.isOnline) {
        host = b2cOnlineHost;
    } else {
        host = b2cUatHost;
    }
    httpServe({
        method: "get",
        url: host + "/api/v1/apiLogs/downLogFile",
        params: {
            log_date: logInfo.log_date,
            log_type: logInfo.log_type
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 翻译，语言包详情
function translateDetail(translateInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: translateHost + "/api/trans/detail",
        params: {
            type: translateInfo.type,
            code: translateInfo.code
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 翻译，查看单词翻译
function getTranslateByJSON(translateInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "post",
        url: translateHost + "/api/translation/getWords",
        data: {
            cat_id:translateInfo.cat_id,
            type_group:translateInfo.type_group,
            type: translateInfo.type,
            words: translateInfo.words
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 翻译，添加生词,以JSON的形式
function addTranslateByJSON(translateInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "POST",
        url: translateHost + "/api/translation/collectWords",
        data: {
            cat_id:translateInfo.cat_id,
            type_group:translateInfo.type_group,
            type: translateInfo.type,
            words: translateInfo.words
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 翻译，下载语言包
function downloadLanguagePack(translateInfo, successFun, errorFun) {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    httpServe({
        method: "get",
        url: translateHost + "/api/trans/langZip",
        params: {
            type: translateInfo.type,
            code: translateInfo.code
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
        if (successFun) {
            successFun(resultInfo);
        }
    });
}
// 测试加密
function testEncrypt() {
    let resultInfo = {
        success: false,
        data: null,
        msg: ''
    }
    let testStr = Encrypt.Encrypt('test');
    console.log('加密后：', testStr);
    httpServe({
        method: "get",
        url: translateHost + "/api/trans/decryFace",
        params: {
            sign: testStr,
        }
    }).then(function (response) {
        if (response.status === 200 &&
            response.data &&
            response.data.code === 10000) {
            resultInfo.success = true;
            resultInfo.data = response.data.data;
            resultInfo.msg = response.data.msg;
        } else {
            resultInfo.msg = response.data.msg;
        }
    });
}


// 字符串trim;
function trim(str) {
    let reg = /\s/g;
    let tempStr = '';
    tempStr = str.replace(reg, '');
    return tempStr;
}
export default {
    setLang,
    setToken,
    getLogList,
    getLogDetail,
    downloadLog,
    getB2CLogList,
    getB2CLogDetail,
    downB2CloadLog,
    translateDetail,
    getTranslateByJSON,
    addTranslateByJSON,
    testEncrypt,
    downloadLanguagePack
}