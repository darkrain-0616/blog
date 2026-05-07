# Node.js API 开发

使用 Node.js 和 Express 构建 RESTful API。

## 安装

```bash
npm install express
```

## 基础服务器

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`服务器运行在端口 ${port}`);
});
```

## 路由

```javascript
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});
```

## 中间件

中间件函数可以访问请求和响应对象。

```javascript
app.use(express.json());
```
