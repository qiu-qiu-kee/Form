## 传给后台对应表单类型、表单的属性、设置了哪些属性
## 表单对应字段、格式、规则
## 组件属性的设置
##  所有属性


//组件属性
{"list":
[
 {
    "type":"input",   //组件类型
    "fieldname":"mobile", //字段类型
    "icon":"icon-input",  //图标
    "title":"单行文本",   //标题
    "name":"单行文本",  //名称
    "placeholder":"111", //站位符
    "options":{
      "width":"100%",--组件宽度
      "formwidth":"100%",//表单宽度
      "labelwidth":"100",   //标签宽度
      "defaultValue":"单行文本框默认值",    --默认值
      "required":true,  //是否必须要填写
      "dataType":"string",  //数据类型  --string、number、null、undefined、、、
      "pattern":"",   //验证方式
      "disabled":true,
      "remoteFunc":"func_1618389101000_24967"
      },
    "key":"1618389101000_24967",
    "model":"input_1618389101000_24967",
    "rules":[
      {"type":"string","message":"input_1618389101000_24967格式不正确"},{"required":true,"message":"input_1618389101000_24967必须填写"}
      ]
},
 {
   "type":"radio",
   "icon":"icon-radio-active",
   "name":"单选框组",
   "options":{
    "inline":true,
    "defaultValue":"Option 3",
    "showLabel":false,
    "options":[{"value":"Option 1","label":"选项 1"},{"value":"Option 2","label":"选项 2"},{"value":"Option 3","label":"选项 3"}],
    "required":true,
    "width":"100%",
    "remote":false,
    "remoteOptions":[],
    "props":{"value":"value","label":"label"},
    "remoteFunc":"func_1618389155000_3573","disabled":false
    },
   "key":"1618389155000_3573","model":"radio_1618389155000_3573",
   "rules":[{"required":true,"message":"radio_1618389155000_3573必须填写"}]
   }
   ],
   //表单属性
   "config":{"labelWidth":100,"labelPosition":"right","size":"small"}}




 formConf:{
  "fields": [
    {
    "__config__": {
      "label": "单行文本", //标签文本
      "labelWidth": null,
      "showLabel": true,
      "changeTag": true,
      "tag": "el-input",
      "tagIcon": "input",
      "required": true,
      "layout": "colFormItem",
      "span": 24,
      "regList": [],
      "formId": 101,
      "renderKey": "1011618908185560"
    },
    "__slot__": {
      "prepend": "",
      "append": ""
    },
    "placeholder": "请输入单行文本",
    "style": {
      "width": "100%"
    },
    "clearable": true,
    "prefix-icon": "",
    "suffix-icon": "",
    "maxlength": null,
    "show-word-limit": false,
    "readonly": false,
    "disabled": false,
    "__vModel__": "field101"
  }, {
    "__config__": {
      "label": "单选框组",
      "labelWidth": null,
      "showLabel": true,
      "tag": "el-radio-group",
      "tagIcon": "radio",
      "changeTag": true,
      "layout": "colFormItem",
      "span": 24,
      "optionType": "default",
      "regList": [],
      "required": true,
      "border": false,
      "formId": 104,
      "renderKey": "1041618982964535"
    },
    "__slot__": {
      "options": [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }]
    },
    "style": {},
    "size": "medium",
    "disabled": false,
    "__vModel__": "field104"
  }],
  "formRef": "elForm",
  "formModel": "formData",
  "size": "medium",
  "labelPosition": "right",
  "labelWidth": 97,
  "formRules": "rules",
  "gutter": 15,
  "disabled": true,
  "span": 24,
  "formBtns": true
}
