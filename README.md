## 珠峰爬虫
### 初始化项目
```
npm init -y
touch .gitignore
```

### 安装依赖的模块
```
npm install request iconv-lite cheerio async cron debug mongoose express ejs -S
```

### 实现思路
1. 创建项目并编写读取方法
2. 把得到的电影数组保存到数据库中
3. 编写main方法实现爬虫
4. 创建服务并显示保存的电影

## 布署 ECS服务器
### 1.购买ECS服务器
### 2.连接服务器
1. 通过git-bash
```
ssh root@47.92.140.227
yes
密码
```

### 3.更新操作系统
```
apt-get update
```

### 4.安装npm
```
apt-get install npm
```

### 5.通过npm装 n
n是一个linux下面node版本管理器
```
npm install n -g
```

### 6.安装node
安装稳定版

```
n stable
```

n latest 安装最新版
n 7.5 安装7.5版本
