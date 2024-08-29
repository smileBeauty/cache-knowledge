const express = require("express");

const app = express();

app.get("/strong-cache", (req, res) => {
  // res.set("Pragma", "no-cache"); // 只有这一个属性
  // res.set("Expires", new Date().toUTCString()); // 过期时间 当前时间
  // res.set("Cache-Control", "no-store"); // 不缓存
  // res.set("Last-Modified", new Date().toUTCString()); // 上次修改时间为当前时间
  // res.set("ETag", new Date().getTime); // etag 每次都不同
  // res.json({
  //   success: true,
  //   msg: "不使用缓存",
  // });

  // res.set("Pragma", "no-cache");
  res.set("Expires", new Date("2099-12-31").toUTCString()); // 过期时间 设置很长
  res.set("Cache-Control", "max-age=31536000"); // 有效期一年 也可以更长
  res.set("Last-Modified", new Date("1900-01-01").toUTCString()); // 上次修改时间 为过去时间
  res.set("ETag", "1111"); // etag 永远都不变
  res.json({
    success: true,
    msg: "使用缓存",
  });
});

app.listen("8080", () => {
  console.info("server on 8080 port");
});
