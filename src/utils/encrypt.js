const CryptoJS = require('crypto-js');  //引用AES源码js

let key = CryptoJS.enc.Latin1.parse('1234567887654321'); //为了避免补位，直接用16位的秘钥
let iv = CryptoJS.enc.Latin1.parse('1234567887654321'); //16位初始向量

//解密方法
function Decrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

//加密方法
function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    // return encrypted.ciphertext.toString().toUpperCase();
    let tempWord = encrypted.toString();
    tempWord = tempWord.replace(/\+/g, '=jiajia=');
    return tempWord;
}

export default {
    Decrypt,
    Encrypt
}