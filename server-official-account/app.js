/**
 * Created by web-01 on 2018/2/23.
 */
const express = require('express');
const WECHAT = require('wechat');

let config = {
    token:'weixin',
    appid:'wxd3d6a23cff264f7c',
    encodingAESKey:'7bi3vl4kUqdGmlbjTinvTSBbxCcE1HeMoMrqNjqz1n0',
};

let app=new express();
app.use(express.query());

app.get('/',WECHAT(config,(req,res,next)=>{
    let message = req.weixin;
    console.log(message);
}));

app.listen(3000)