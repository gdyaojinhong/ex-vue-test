<template>
  <div class="article">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="75px" class="demo-ruleForm">
      <el-form-item label="标题：" prop="title">
        <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item  label="摘要：" prop="abstracts">
          <el-input type="textarea" class="article-textarea" placeholder="请输入摘要" v-model="ruleForm.abstracts">
          </el-input>
      </el-form-item>
      <el-form-item label="内容：" prop="content">
        <vue-editor v-model="ruleForm.content" class="articleContent"></vue-editor> 
      </el-form-item>
      <el-form-item size="large" style="text-align: center;">
        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item> 
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'  
  export default {
    data() {
      return {
        ruleForm: {
          title: '',
          abstracts: '',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 10, max: 30, message: '长度在 10 到 30 个字符', trigger: 'blur' }
          ],
          abstracts: [
            { required: true, message: '请输入摘要', trigger: 'blur' },
            { min: 10, max: 100, message: '长度在 10 到 100 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入摘要', trigger: 'blur' },
            { min: 10, max: 1000, message: '长度在 10 到 1000 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    components: { VueEditor },
    methods: {
      submitForm(formName) {
        console.log(formName)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
.article{
  padding: 15px 0 0 0;
}
.articleContent{

}
</style>
