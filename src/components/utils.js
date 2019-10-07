const componentObj = {
    input: generateInputComponent,
    button: generateButtonComponent,
    buttonGroup: generateButtonGroupComponent,
    reset: generateResetComponent,
    submit: generateSubmitComponent,
    icon: generateIconComponent,
    radio: generateRadioComponent,
    radioGroup: generateRadioGroupComponent,
    checkbox: generateCheckboxComponent,
    checkboxGroup: generateCheckboxGroupComponent,
    switch: generateSwitchComponent,
    select: generateSelectComponent,
    slider: generateSliderComponent,
    date: generateDateComponent,
    time: generateTimeComponent,
    cascader: generateCascaderComponent,
    inputNumber: generateInputNumberComponent,
    rate: generateRateComponent,
    upload: generateUploadComponent,
    colorPicker: generateColorPickerComponent,
    col: generateColComponent,
    formItem: generateFormItemComponent,
}

function generateInputComponent(h, formData = {}, obj, vm) {
    const key = obj.key? obj.key : ''
    let children = []

    if (obj.children) {
        children = obj.children.map(item => {
            let component
            if (item.type == 'span') {
                component = h('span', {
                    slot: item.slot
                }, [item.text])
            } else {
                let func = componentObj[item.type]
                component = func? func.call(vm, h, formData, item, vm) : null
            }
            return component
        })
    }

    return h('el-input', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        },
        slot: obj.slot
    }, children)
}

function generateButtonComponent(h, formData = {}, obj) {
    return h('el-button', {
        props: obj.props,
        slot: obj.slot,
        style: obj.style,
        on: obj.events
    }, [obj.text])
}

function generateButtonGroupComponent(h, formData = {}, obj) {
    const components = obj.children.map(item => {
        return h('el-button', {
            props: item.props? item.props : item,
            slot: item.slot,
            style: item.style,
            on: item.events
        }, [item.text])
    })

    return h('el-button-group', {
        props: obj.props,
        style: obj.style,
        slot: obj.slot,
    }, [components])
}

function generateSubmitComponent(h, formData = {}, obj, vm) {
    const components = []
    const submit = h('el-button', {
        props: obj.props,
        style: obj.style,
        on: {
            click() {
                vm.$refs['form'].validate((valid) => {
                    if (valid) {
                        obj.success.call(vm, formData)
                    } else {
                        obj.fail.call(vm, formData)
                    }
                })
            }
        }
    }, [obj.text])

    components.push(submit)

    if (obj.reset) {
        const reset = h('el-button', {
            props: obj.reset.props,
            style: {
                marginLeft: '10px',
                ...obj.style,
            },
            on: {
                click() {
                    vm.$refs['form'].resetFields()
                }
            }
        }, [obj.reset.text])

        components.push(reset)
    }

    return h('div', components)
}

function generateResetComponent(h, formData = {}, obj, vm) {
    return h('el-button', {
        props: obj.props,
        style: obj.style,
        slot: obj.slot,
        on: {
            click() {
                vm.$refs['form'].resetFields()
            }
        }
    }, [obj.text])
}

function generateIconComponent(h, formData = {}, obj) {
    return h('i', {
        props: obj.props,
        style: obj.style,
        slot: obj.slot,
    })
}

function generateRadioComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-radio', {
        props: {
            value: key? formData[key] : false,
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [obj.text])
}


function generateRadioGroupComponent(h, formData = {}, obj) {
    let components = []
    const key = obj.key? obj.key : ''
    if (obj.children) {
        components = obj.children.map(child => {
            return h('el-radio', {
                props: child.props? child.props : child
            }, [child.text])
        })
    }

    return h('el-radio-group', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [components])
}


function generateCheckboxComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-checkbox', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [obj.text])

}

function generateCheckboxGroupComponent(h, formData = {}, obj, vm) {
    let components = []
    const key = obj.key? obj.key : ''

    if (obj.children) {
        components = obj.children.map(child => {
            return h('el-checkbox', {
                props: child.props? child.props : child
            }, [child.text])
        })
    }

    return h('el-checkbox-group', {
        props: {
            value: key? formData[key] : [],
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    }, [components])
}

function generateSwitchComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    let components = []
    if (obj.children) {
        components = obj.children.map(item => {
            let temp
            if (item.type == 'icon') {
                temp = generateIconComponent(h, formData, item)
            } else if (item.type == 'span') {
                temp = h('span', {
                    slot: item.slot,
                }, [item.text])
            }

            return temp
        })
    }

    return h('el-switch', {
        props: {
            value: key? formData[key] : false,
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        },
    }, components)
}

function generateSelectComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    let components = []

    if (obj.children) {
        components = obj.children.map(item => {
            if (item.type == 'optionGroup') {
                return h('el-option-group', {
                    props: item.props? item.props : item
                }, item.children.map(child => {
                    return h('el-option', {
                        props: child.props? child.props : child
                    })
                }))
            } else {
                return h('el-option', {
                    props: item.props? item.props : item
                })
            }
        })
    }

    return h('el-select', {
        props: {
            value: formData[key],
            ...obj.props
        },
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        },
        slot: obj.slot
    }, components)
}

function generateSliderComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-slider', {
        props: {
            value: formData[key],
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}


function generateDateComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''
    const type = obj.props.type
    return h('el-date-picker', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(date) {
                if (key) {
                    if (type.includes('datetime')) {
                        if (Array.isArray(date)) {
                            formData[key] = date? date.map(item => item? item.toLocaleDateString()
                                                  + ' ' + item.toTimeString().split(' ')[0] : '') : []
                        } else {
                            formData[key] = date? date.toLocaleDateString() + ' ' + date.toTimeString().split(' ')[0] : ''
                        }
                    } else {
                        if (Array.isArray(date)) {
                            formData[key] = date? date.map(item => item? item.toLocaleDateString() : '') : []
                        } else {
                            formData[key] = date? date.toLocaleDateString() : ''
                        }
                    }
                }
            },
        }
    })
}

function generateTimeComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-time-select', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateCascaderComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-cascader', {
        props: {
            value: key? formData[key] : [],
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateInputNumberComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-input-number', {
        props: {
            value: key? formData[key] : null,
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateRateComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-rate', {
        props: {
            value: key? formData[key] : 0,
            ...obj.props
        },
        slot: obj.slot,
        style: obj.style,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateUploadComponent(h, formData = {}, obj, vm) {
    let components = []

    if (obj.children) {
        components = obj.children.map(item => {
            let func = componentObj[item.type]
            return func? func.call(vm, h, formData, item, vm) : null
        })
    }
    return h('el-upload', {
        props: obj.props,
        style: obj.style,
        slot: obj.slot,
    }, components)
}

function generateColorPickerComponent(h, formData = {}, obj) {
    const key = obj.key? obj.key : ''

    return h('el-color-picker', {
        props: {
            value: key? formData[key] : '',
            ...obj.props
        },
        style: obj.style,
        slot: obj.slot,
        on: {
            ...obj.events,
            input(val) {
                if (key) {
                    formData[key] = val
                }
            }
        }
    })
}

function generateColComponent(h, obj, component) {
    return h('el-col', {
        props: {
            span: obj.span,
            push: obj.push,
            pull: obj.pull,
            offset: obj.offset,
            order: obj.order,
            'class-name': obj['class-name'] || obj['className'],
            xs: obj.xs,
            sm: obj.sm,
            md: obj.md,
            lg: obj.lg,
        },
    }, [component])
}

function generateFormItemComponent(h, obj, component) {
    return h('el-form-item', {
        class: obj.className,
        props: {
            label: obj.label,
            rules: obj.rules,
            prop: obj.key? obj.key : '',
            'label-width':obj['label-width'] || obj['labelWidth'],
            'label-for': obj['label-for'] || obj['labelFor'],
            error: obj.error,
            'show-message': obj['show-message'] || obj['showMessage'],
        }
    }, [component])
}

export default componentObj