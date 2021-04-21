<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="单行文本" prop="field101">
        <el-input v-model="formData.field101" placeholder="请输入单行文本" :maxlength="20" clearable
          prefix-icon="el-icon-s-tools" :style="{width: '100%'}">
          <template slot="prepend">文本</template>
          <template slot="append">（文本格式）</template>
        </el-input>
      </el-form-item>
      <el-form-item label="多行文本" prop="field120">
        <el-input v-model="formData.field120" type="textarea" placeholder="请输入多行文本"
          :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="下拉选择" prop="field115">
        <el-select v-model="formData.field115" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
          <el-option v-for="(item, index) in field115Options" :key="index" :label="item.label"
            :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单选框组" prop="field121">
        <el-radio-group v-model="formData.field121" size="medium">
          <el-radio v-for="(item, index) in field121Options" :key="index" :label="item.value"
            :disabled="item.disabled">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="时间选择" prop="field122">
        <el-time-picker v-model="formData.field122" format="HH:mm:ss" value-format="HH:mm:ss"
          :picker-options='{"selectableRange":"00:00:00-23:59:59"}' :style="{width: '100%'}"
          placeholder="请选择时间选择" clearable></el-time-picker>
      </el-form-item>
      <el-form-item label="多选框组" prop="field118">
        <el-checkbox-group v-model="formData.field118" size="medium">
          <el-checkbox v-for="(item, index) in field118Options" :key="index" :label="item.value"
            :disabled="item.disabled">{{item.label}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field101: "自定义设计默认值",
        field120: "多多多",
        field115: 2,
        field121: 1,
        field122: "11:53:08",
        field118: [1],
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
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
