# ys-vue-admin

vue + element-ui


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
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
