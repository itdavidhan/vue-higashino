<template>
  <el-col :span="12">
    <router-link :to="{ path: 'detail', query: { 'book_id': id }}" class="book-list-link">
      <div class="book-list-pic">
        <img :src="img" alt="">
      </div>
      <div class="book-list-desc">
          <p class="book-list-name" @click="getName(title)">{{ title }}</p>
          <router-link to="/chart"  class="chart">
            <p class="book-list-num">推荐指数：{{ num }}</p>
          </router-link>
      </div>
    </router-link> 
  </el-col>
</template>

<script>

import Bus from '../bus'
export default {
  name: 'list',
  props: ['num', 'title', 'img', 'id'],
  methods: {
    getName(text) {
      Bus.$emit('getBookName', text);
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-col {
  margin-bottom: 20px;
}
.book-list-pic
  text-align: center;
  img
    width: 80%;
.book-list-desc
  text-align: center;
  .book-list-name,
  .book-list-num
    font-size: 12px;
</style>