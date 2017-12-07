<template>
  <div>
    <el-container>
      <el-header>
        <common-header :showBackBtn="showBackBtn"></common-header>
      </el-header>
      <el-main>
        <el-row :gutter="20"> 
          <list v-for="item in items" :key="item.title" :id="item.id" :num="item.num" :title="item.title" :img="item.img"></list> 
        </el-row>
      </el-main>
      <el-footer>
        <common-footer></common-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '../components/CommonFooter'
import List from '../components/List'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    CommonFooter,
    List
  },
  data () {
    return {
      items: [],
      showBackBtn: false
    }
  },
  created() {
    this.items = [
      {'id': '1', 'title': '白夜行', 'num': '100%', 'img': 'http://img3m2.ddimg.cn/62/32/25119332-1_b_9.jpg'},
      {'id': '2', 'title': '嫌疑人x的献身', 'num': '100%', 'img': 'http://img3m6.ddimg.cn/25/12/23490646-1_b_0.jpg'},
      {'id': '3', 'title': '恶意', 'num': '99%', 'img': 'http://img3m4.ddimg.cn/49/29/24041704-1_b_6.jpg'},
      {'id': '4', 'title': '秘密', 'num': '90%', 'img': 'http://img3m3.ddimg.cn/41/30/25172573-1_b_2.jpg'},
      {'id': '5', 'title': '变身', 'num': '60%', 'img': 'http://img3m8.ddimg.cn/95/25/24012248-1_b_11.jpg'},
    ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #CCC;
  z-index: 100;
}
.el-main {
  width: 100%;
  height: 100%;
  margin: 60px 0;
}
.el-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #CCC;
  z-index: 100;
}
</style>
