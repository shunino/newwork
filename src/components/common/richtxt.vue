<template>
  <div style="width:100%;height: 266px;">
  <quill-editor
    style="width:100%;height: 200px"
    class="quill"
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
    @change="onEditorChange($event)">
  </quill-editor>
<!--    <div class="ql-container ql-snow">-->
<!--      <div class="ql-editor" id="contt" >-->
<!--      </div>-->
<!--    </div>-->
<!--    <el-button @click="save()">保存</el-button>-->
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillRedefine } from 'vue-quill-editor-upload'
export default {
  components: {
    quillEditor,
    quillRedefine
  },
  data() {
    return {
      content: `<h1></h1>`,
      editorOption: {}
    }
  },
  created () {
    // this.editorOption = quillRedefine(
    // {
    //   // 图片上传的设置
    //   uploadConfig: {
    //     action: '',  // 必填参数 图片上传地址
    //     // 必选参数  res是一个函数，函数接收的response为上传成功时服务器返回的数据
    //     // 你必须把返回的数据中所包含的图片地址 return 回去
    //     res: (respnse) => {
    //       return respnse.info
    //     },
    //     name: 'img'  // 图片上传参数名
    //   }
    // }
    // )
    // console.log(this.editorOption)
  },
  methods: {
    onEditorReady(editor) { // 准备编辑器
    },
    save(){
      $('#contt').html(this.content);
        console.log(this.content);
    },
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){}, // 内容改变事件
  },
}
</script>
