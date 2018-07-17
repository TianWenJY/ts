<template>
   <div>
   <div>
     <el-button @click="createMenu">提交</el-button>
   </div>
   <el-form ref="menuList" :model="menuList" label-width="120px">
     <el-form  label-width="80px">
       <el-button @click="addCurrent">提交</el-button>
       <el-form-item label="选择类型">
         <el-select v-model='selectType'  style="width: 30%;" clearable placeholder="请选择"
                    @change="suppor(selectType)">
           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="名称">
         <el-input style="width: 30%;" v-model="subName"></el-input>
       </el-form-item>
       <el-form-item label="url" v-if="isKeyShow">
         <el-input style="width: 30%;" v-model="url" v-if=""></el-input>
       </el-form-item>
       <el-form-item label="key" v-if="isKeyShow">
         <el-input style="width: 30%;" v-model="key"></el-input>
       </el-form-item>
     </el-form>
   <div >
     <el-form-item v-for="(data,index) in menuList.button" :key="index" label="第一级菜单">
       <el-input v-model="data.name" style="width: 30%;"></el-input>
       <el-button @click="addSubButton(index)">添加子菜单</el-button>
       <el-button @click="uppdateSubButton(index,data.sub_button)">修改子菜单</el-button>
       <el-button @click="addSubButton">删除菜单</el-button>
       <div v-if="index == 0"  class="demo-input-size">
         <el-form-item  label="选择类型" >
            <el-select v-model='addSub_button_0.type'  style="width: 30%;" clearable placeholder="请选择">
           <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
         </el-form-item>
         <el-form-item  label="名称" >
           <el-input style="width: 30%;" v-model="addSub_button_0.name"></el-input>
         </el-form-item>
         <el-form-item  label="添加第二级菜单" >
           <el-input v-if="" style="width: 30%;"  v-model="addSub_button_0.url"></el-input>
         </el-form-item>

       </div>
       <div v-if="index == 1"  class="demo-input-size">
         <el-form-item  label="选择类型" >
           <el-select v-model='addSub_button_1'  style="width: 30%;" clearable placeholder="请选择">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
         </el-form-item>
         <el-form-item  label="名称" >
           <el-input style="width: 30%;"></el-input>
         </el-form-item>
         <el-form-item  label="添加第二级菜单" >
           <el-input style="width: 30%;"></el-input>
         </el-form-item>

       </div>



       <div v-if="index == 2"  class="demo-input-size">
         <el-form-item  label="选择类型" >
           <el-select v-model='addSub_button_children'  style="width: 30%;" clearable placeholder="请选择">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
         </el-form-item>
         <el-form-item  label="名称" >
           <el-input style="width: 30%;"></el-input>
         </el-form-item>
         <el-form-item  label="添加第二级菜单" >
           <el-input style="width: 30%;"></el-input>
         </el-form-item>

       </div>
         <el-form-item v-show='data.sub_button.length > 0 && isShowUpate == index' v-for="subData in data.sub_button" label="第二级菜单" :key="subData.name">
           <el-input style="width: 30%;" v-model="subData.name"></el-input>
         </el-form-item>
     </el-form-item>
   </div>
   </el-form>




 </div>
</template>

<script>
    export default {
        name: 'setting',
      data() {
         return {
            menuList:{},
           activeNames: ['1'],
           isShowUpate : false,
           isShowAdd: false,
           input6: '',
           input7: '',
           input8: '',
           currentAdd: '',
           addSub_button_children:'',
           selectType:'',
           addSub_button_1:{},
           addSub_button_2:{},
           addSub_button_0:{},
           isDeff:'',
           url: "",
           key: '',
           isKeyShow:false,
           isUrlShow: false,
           subName: '',
           options: [
             {
               value: '',
               label: '请选择类型'
             },{
             value: '1',
             label: 'click'
           }, {
             value: '2',
             label: 'view'
           }],
           value4: ''
        }
      },
      mounted() {
        var _this = this;
        _this.getMenu();
//      _this.createMenu()
      },
        methods: {
            getMenu() {
                this.$http.post(
                  'http://api.cheshili.com.cn/WCOA/Setting/SettingWechat'
                 ,{
                    Url:'https://api.weixin.qq.com/cgi-bin/menu/get?access_token={ACCESS_TOKEN}',
                    Type: 0
                  },{emulateJSON:true}
                ).then(function(result){
                  this.menuList = result.body.Data.menu;
                }, function(result){
                  alert("fack");
                });
            },
          createMenu() {
            this.menuList =   JSON.stringify(this.menuList)
            this.$http.post(
              'http://api.cheshili.com.cn/WCOA/Setting/SettingWechat'
              ,{
                Url:'https://api.weixin.qq.com/cgi-bin/menu/create?access_token={ACCESS_TOKEN}',
                Json:this.menuList,
                Type: 1
              },{emulateJSON:true}
            ).then(function(result){
              console.log(result)
            }, function(result){
              alert("fack");
            });
          },
          handleChange(val) {
            console.log(val);
          },
          addSubButton(index) {
            var _this = this;
            _this.currentAdd = index;
          },
          uppdateSubButton(index,count) {
            var _this = this;
            if(count.length > 0) {
              if(_this.isShowUpate != index) {
                _this.isShowUpate = index;
              }else if(_this.isShowUpate == index){
                _this.isShowUpate = !index;
              }
            }else {
                return ;
            }

          },
          suppor(type) {
            var _this = this;
            if(type == 1) {
               _this.url = true;
               _this.key = false;
            }else if(type == 0) {
              _this.isUrlShow = false;
              _this.isKeyShow = true;
            }
          },
          addCurrent(data) {
            var _this = this;
            console.log(_this.subName)
            if(_this.subName.length <7 && _this.subName != ''){
               if(_this.selectType == 0) {
                   if(_this.key.length > 0) {
                   _this.isDeff = _this.menuList.button[_this.currentAdd].sub_button.length;
                   _this.menuList.button[_this.currentAdd].sub_button.push({
                     type: _this.selectType,
                     name: _this.subName,
                     key:_this.key
                   })
                     if(_this.isDeff <_this.menuList.button[_this.currentAdd].sub_button.length) {
                       alert("添加成功!!")
                     }else {
                       alert("添加失败")
                     }
                 }else if(_this.key.length == 0) {
                     alert("对不起，key不能为空")
                   }
            }else if(_this.selectType == 1) {
                 if(_this.key.length > 0){
                   _this.isDeff = _this.menuList.button[_this.currentAdd].sub_button.length;
                   _this.menuList.button[_this.currentAdd].sub_button.push({
                     type: _this.selectType,
                     name: _this.subName,
                     key:_this.url
                   })
                   if(_this.isDeff <_this.menuList.button[_this.currentAdd].sub_button.length) {
                     alert("添加成功!!")
                   }else {
                     alert("添加失败")
                   }
                 }else if(_this.url == 0) {
                   alert("对不起，url不能为空")
                 }

            }
            }else if(_this.subName == '' || _this.subName.length >7) {
                alert("对不起，菜单长度只能是1-7位")
            }else {
                alert("位置错误")
            }

          }
        }
    }
</script>

<style>
</style>
