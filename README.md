# ys-vue-admin

vue + element-ui


### 启动项目

``` base
npm i
npm start     // vue开发环境 webpack 编译 + 启动本地资源服务器
```

## 样式scoped

```
<!--添加 "scoped" 属性，将会限制当前 css 块只会对该 component 有效-->
<style rel="stylesheet/less" lang="less" scoped>
  * {
    color: red;
  }

  .message {
    background-color: #ecf1f7;
  }
</style>

```
## 协作模式

每个开发人员从 develop 分支 fork 到自己的分支，提交需基于 merge request 合并到主分支
