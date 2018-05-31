<template>
    <div>
        <div>{{ message }}</div>
        <br/>
        <el-button @click="count += 1">更新 {{count}}</el-button>
        <el-button @click="handleDestroy">销毁</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message : "请打开控制台查看",
            count : 1
        }
    },
    beforeCreate: function () {
        console.group('beforeCreate 创建前状态===============》');
        console.log("%c%s", "color:red" , "el     : " + this.$el);  //undefined
        console.log("%c%s", "color:red","data   : " + this.$data);  //undefined
        console.log("%c%s", "color:red","message: " + this.message);//undefined
    },
    created: function () {
        console.group('created 创建完毕状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);  //undefined
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data)); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log("%c%s", "color:red","el     : " + (this.$el)); //我的版本是undefined、在 vue 2.0.3 的版本下有值
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data)); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    mounted: function () {
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log("$el已被初始化，值如下：");
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data)); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log("$el已被初始化，值如下：");
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
        console.log("%c%s", "color:red","message: " + this.message);
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log("$el已被初始化，值如下：");
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
        console.log("%c%s", "color:red","message: " + this.message);
    },
    beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log("$el已被初始化，值如下：");
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
        console.log("%c%s", "color:red","message: " + this.message);
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log("$el已被初始化，值如下：");
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
        console.log("%c%s", "color:red","message: " + this.message);
    },
    methods: {
        handleDestroy () {
            this.$destroy()
        }
    }
}
</script>
