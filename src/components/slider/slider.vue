<template lang="pug">
.slider 
    .section
        h3 登录
        ul
            li
                router-link(to="/login") 登录
    .section(v-for="section of data") 
        h3 {{section.title}}
        ul
            li(v-for="item of section.list")
                router-link(:to="item.to") {{item.name}}   
</template>
<script>
export default {
    name: 'app-slider',
    data() {
        return {
            data: [{
                title: '作业管理',
                list: [
                    {
                        name: '节点机分布概览',
                        to: '/task/overview',
                    },
                    {
                        name: '运行的分析作业',
                        to: '/task/analysis/running',
                    },
                    {
                        name: '完成的分析作业',
                        to: '/task/analysis/end',
                    },
                ]
            },
            {
                title: '用户管理',
                list: [
                    {
                        name: '用户列表',
                        to: '/user',
                    },
                ]
            }, {
                title: '测试代码',
                list: [
                    {
                        name: 'provide ',
                        to: '/provide ',
                    },
                    {
                        name: 'routerhook ',
                        to: '/routerhook ',
                    },
                    {
                        name: 'queueevent',
                        to: '/queueevent',
                    },
                ]
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.slider {
  border: 1px solid #000;
  .section {
    ul {
      padding-left: 16px;
    }
  }
}
</style>


