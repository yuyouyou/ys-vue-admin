<template>
<div>
    <VueFormMaker :options="options"/>
</div>
</template>
<script>
import VueFormMaker from '../components/VueFormMaker'
export default {
  data() {
    return {
        options: {
            // 表单属性 非必需
            formProps:{
                labelWidth: '60'
            },
            // 表单数据 必需
            formData: {
                accout: '',
                pwd: '',
                mail: '',
                gender: '',
                msg: '',
                phone: '',
                color: 'red',
                city:'tianjin'
            },
            // 表单项组件数据 必需
            formItem: [
                {
                type: 'input',
                key: 'accout',
                label: '账号',
                span: 8,
                props: {
                    placeholder: '请输入账号...'
                },
                rules: {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                }
                },
                {
                type: 'select',
                key: 'city',
                    label: '城市',
                    span: 8,
                children: [
                    {
                    label: '天津',
                    value: 'tianjin'
                    },
                    {
                    value: 'shenzhen',
                        label: '深圳'
                    },
                    {
                    label: '韶关',
                    value: 'shaoguan'
                    },
                ]
                },
                {
                    type: 'input',
                key: 'pwd',
                label: '密码',
                span: 8,
                props: {
                    placeholder: '请输入密码...',
                        type: 'password'
                },
                rules: {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }
                },
                {
                    type: 'input',
                key: 'mail',
                label: '邮箱',
                span: 8,
                props: {
                    placeholder: '请输入邮箱...',
                },
                rules: {
                    required: true,
                    message: '请输入邮箱',
                    trigger: 'blur'
                }
                },
                {
                    type: 'input',
                key: 'phone',
                label: '手机',
                span: 8,
                props: {
                    placeholder: '请输入手机号...',
                },
                rules: {
                    required: true,
                    trigger: 'blur',
                    validator(rule, value, callback) {
                        if (value === '') {
                            callback(new Error('请输入手机号'))
                        } else if (value.length != 11) {
                            callback(new Error('请输入正确的手机号'))
                        } else {
                            callback()
                        }
                    }
                    }
                },
                {
                        type: 'input',
                        label: '留言',
                        span: 8,
                        key: 'msg',
                        props: {
                    placeholder: '留言...',
                    type: 'textarea'
                },
                        rules: {
                    required: true,
                    trigger: 'blur',
                    message: '请留下您宝贵的意见'
                }
                        },
            ],
            // 提交按钮 必需
            submit:{
                className: 'btn-container',
                labelWidth: '0',
                text: '提交',
                props: {
                type: 'primary'
                },
                success(formData) {
                alert(JSON.stringify(formData))
                },
                fail(formData) {
                alert('验证失败')
                }
            }
        }
    }
  },
  components: {
    VueFormMaker
  }
}
</script>