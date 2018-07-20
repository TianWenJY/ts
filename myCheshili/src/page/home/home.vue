<template>
  <div>
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4"><div class="data_list today_head"><span class="data_num head">当日数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">1</span> 进车数量</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">2</span> 出车数量</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">3</span> 停车时长</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">3</span> 停车收费</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">1</span> 进车数量</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">2</span> 出车数量</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">3</span> 停车时长</div></el-col>
        <el-col :span="4"><div class="data_list"><span class="data_num">3</span> 停车收费</div></el-col>
      </el-row>
    </section>
    <!--<tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>-->
  </div>
</template>

<script>
    export default {
        name: "home",
    }
</script>

<style lang="less">
  .data_section{
    padding: 20px;
    margin-bottom: 40px;
  .section_title{
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list{
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #E5E9F2;
  .data_num{
    color: #333;
    font-size: 26px;

  }
  .head{
    border-radius: 6px;
    font-size: 22px;
    padding: 4px 0;
    color: #fff;
    display: inline-block;
  }
  }
  .today_head{
    background: #FF9800;
  }
  .all_head{
    background: #20A0FF;
  }
  }

</style>
