## 表单对应字段、格式、规则
 formData: {
        mobile: "",
        field101: "付费",
        field102: 2,
        field104: "12:02:24",
        field105: 2,
        field106: [] 
      },
      rules: {
        field101: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
        field120: [{
          required: true,
          message: '请输入多行文本',
          trigger: 'blur'
        }],
        field115: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
        field121: [{
          required: true,
          message: '单选框组不能为空',
          trigger: 'change'
        }],
        field122: [{
          required: true,
          message: '请选择时间选择',
          trigger: 'change'
        }],
        field118: [{
          required: true,
          type: 'array',
          message: '请至少选择一个多选框组',
          trigger: 'change'
        }],
      },
      field115Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field121Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field118Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],