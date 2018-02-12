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
import * as utils from '../utils/utils.js'
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
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          abstracts: [
            { required: true, message: '请输入摘要', trigger: 'blur' },
            { min: 10, max: 100, message: '长度在 10 到 100 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    components: { VueEditor },
    methods: {
      submitForm(formName) {
        console.log(formName)
        let this_ =this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const newData = Date.parse(new Date());
            const userName = utils.getStore('userInfo').userName
            const params = {
              "title" : this_.ruleForm.title,
              "abstracts" : this_.ruleForm.abstracts,
              "content" : this_.ruleForm.content,
              "publishDate" : newData,
              "author" : userName
            }
            this_.$http({
              method: 'get',
              url: 'api/artices/addArtices',
              params: params,
            }).then((res) => {
              if (res.data.status === 1) {
                this.$message({
                  message: '发布成功',
                  type: 'success',
                  onClose:function(){
                    this_.$router.push({path:'../articlelist'});
                  }
                });
              }else{
                this.$message('发布失败');
              }
            })
          } else {
            this.$message('请输入正确的格式！');
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
