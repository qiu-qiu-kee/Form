## 传给后台对应表单类型、表单的属性、设置了哪些属性
## 表单对应字段、格式、规则
## 组件属性的设置
##  所有属性


//组件属性
{"list":
[
 {
    "type":"input",   //组件类型
    "fieldname":
    "icon":"icon-input", //图标
    "name":"单行文本",  //名称
    "options":{"width":"100%","defaultValue":"单行文本框默认值",  //设置的选项 --宽度  --默认值
    "required":true,  //是否必须要填写
    "dataType":"string",  //数据类型  --string、number、null、undefined、、、
    "pattern":"",   //验证方式
    "placeholder":"111",
    "disabled":true,
    "remoteFunc":"func_1618389101000_24967"},
    "key":"1618389101000_24967",
    "model":"input_1618389101000_24967",
    "rules":[{"type":"string","message":"input_1618389101000_24967格式不正确"},{"required":true,"message":"input_1618389101000_24967必须填写"}]
},
 {
   "type":"radio",
   "icon":"icon-radio-active",
   "name":"单选框组",
   "options":{"inline":true,"defaultValue":"Option 3","showLabel":false,"options":[{"value":"Option 1","label":"选项 1"},{"value":"Option 2","label":"选项 2"},{"value":"Option 3","label":"选项 3"}],
   "required":true,
   "width":"100%",
   "remote":false,
   "remoteOptions":[],
   "props":{"value":"value","label":"label"},
   "remoteFunc":"func_1618389155000_3573","disabled":false},
   "key":"1618389155000_3573","model":"radio_1618389155000_3573",
   "rules":[{"required":true,"message":"radio_1618389155000_3573必须填写"}]
   }
   ],
   //表单属性
   "config":{"labelWidth":100,"labelPosition":"right","size":"small"}}




 formConf: {
        fields: [
          {
            __config__: {
              label: '单行文本',
              type:

              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: 'el-input',
              tagIcon: 'input',
              required: true,
              layout: 'colFormItem',
              span: 24,
              regList: [
                {
                  pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
                  message: '手机号格式错误'
                }
              ]
            },
            __slot__: {
              prepend: '',
              append: ''
            },
            __vModel__: 'mobile',
            placeholder: '请输入手机号',
            style: {
              width: '100%'
            },
            clearable: true,
            'prefix-icon': 'el-icon-mobile',
            'suffix-icon': '',
             maxlength: 11,
            'show-word-limit': true,
             readonly: false,
             disabled: false
          },
          {
            __config__: {
              label: '日期范围',
              tag: 'el-date-picker',
              tagIcon: 'date-range',
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: 'colFormItem',
              regList: [],
              changeTag: true,
              formId: 101,
              renderKey: 1585980082729
            },
            style: {
              width: '100%'
            },
            type: 'daterange',
            'range-separator': '至',
            'start-placeholder': '开始日期',
            'end-placeholder': '结束日期',
            disabled: false,
            clearable: true,
            format: 'yyyy-MM-dd',
            'value-format': 'yyyy-MM-dd',
            readonly: false,
            __vModel__: 'field101'
          },
          {
            __config__: {
              layout: 'rowFormItem',
              tagIcon: 'row',
              label: '行容器',
              layoutTree: true,
              children: [
                {
                  __config__: {
                    label: '评分',
                    tag: 'el-rate',
                    tagIcon: 'rate',
                    defaultValue: 0,
                    span: 24,
                    showLabel: true,
                    labelWidth: null,
                    layout: 'colFormItem',
                    required: true,
                    regList: [],
                    changeTag: true,
                    formId: 102,
                    renderKey: 1586839671259
                  },
                  style: {},
                  max: 5,
                  'allow-half': false,
                  'show-text': false,
                  'show-score': false,
                  disabled: false,
                  __vModel__: 'field102'
                }
              ],
              formId: 101,
              span: 24,
              renderKey: 1586839668999,
              componentName: 'row101',
              gutter: 15
            },
            type: 'default',
            justify: 'start',
            align: 'top'
          },
          {
            __config__: {
              label: '按钮',
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: 'el-button',
              tagIcon: 'button',
              span: 24,
              layout: 'colFormItem',
              renderKey: 1594288459289
            },
            __slot__: {
              default: '测试按钮1'
            },
            type: 'primary',
            icon: 'el-icon-search',
            round: false,
            size: 'medium',
            plain: false,
            circle: false,
            disabled: false,
            on: {
              click: 'clickTestButton1'
            }
          }
        ],
        formRef: 'elForm',
        formModel: 'formData',
        size: 'small',
        labelPosition: 'right',
        labelWidth: 100,
        formRules: 'rules',
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false
      },