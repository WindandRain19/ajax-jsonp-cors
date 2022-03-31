const express = require("express");

const app = express();

app.get("/server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  res.send("HELLO AJAX GET");
});

app.post("/server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  res.send("HELLO AJAX POST");
});

app.get("/json-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 响应数据
  const data = {
    name: "json-server",
  };
  // 对对象进行字符串转换
  let str = JSON.stringify(data);
  // 设置响应体
  res.send(str);
});

// 延时响应
app.get("/setTimeout", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  setTimeout(() => {
    res.send("延迟响应");
  }, 3000);
  // 设置响应体
});

// jQuery 服务
app.get("/jQuery-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "HELLO JQUERY GET AJAX" };
  res.send(JSON.stringify(data));
});

app.post("/jQuery-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  const data = { name: "HELLO JQUERY POST AJAX" };
  res.send(JSON.stringify(data));
});

app.all("/jQuery-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "HELLO JQUERY GET AJAX" };
  res.send(JSON.stringify(data));
});

// axios 服务
app.get("/axios-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "HELLO JQUERY GET AJAX" };
  res.send(JSON.stringify(data));
});

app.post("/axios-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");

  const data = { name: "HELLO JQUERY POST AJAX" };
  res.send(JSON.stringify(data));
});

app.all("/axios-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "HELLO AXIOS all AJAX" };
  res.send(JSON.stringify(data));
});

// fetch 服务
app.all("/fetch-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "HELLO FETCH all AJAX" };
  res.send(JSON.stringify(data));
});

// jsonp
app.all("/jsonp-server", (req, res) => {
  const data = {
    name: "这是JSONP",
  };
  let str = JSON.stringify(data);
  res.end(`handle(${str})`);
});

// jsonp 检测用户名是否存在
app.all("/check-username", (req, res) => {
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  let str = JSON.stringify(data);
  res.end(`handle(${str})`);
});

// jQuery jsonp
app.all("/jQuery-jsonp-server", (req, res) => {
  const data = {
    name: "jQuery",
    arr: ["你", "好", "阿"],
  };
  // 将数据转换为字符串
  let str = JSON.stringify(data);
  // 接收callback参数
  let cb = req.query.callback;
  // 返回结果
  res.end(`${cb}(${str})`);
});

// cors
app.all("/cors-server", (req, res) => {
  // 设置响应头，设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 发送任意请求头
  res.setHeader("Access-Control-Allow-Headers", "*");
  // 发送任意的请求方法
  res.setHeader("Access-Control-Allow-Method", "*");
  res.send("Hello cors");
});

app.listen(8080, () => {
  console.log("8080端口已经开启");
});
